const express = require('express');
const router = express.Router();
const connectDB = require('../config/db');
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    const db = await connectDB();
    const tasks = await db.collection(process.env.COLLECTIONNAME).find().toArray();
    res.json(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).send('Server error');
  }
});

router.get('/edit/:id', async (req, res) => {
  const taskId = req?.params?.id

  try{
    const db = await connectDB();
    const taskItem = await db.collection(process.env.COLLECTIONNAME).findOne({_id: taskId})
    res.json(taskItem);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).send('Server error');
  }

});

router.post('/edit/:id', async (req, res) => {
  const taskId = req?.params?.id;
  const newTaskName = req?.body?.newTaskName;

  try {
    const db = await connectDB();

    const result = await db.collection(process.env.COLLECTIONNAME).updateOne(
      { _id: taskId },
      { $set: { task: newTaskName } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (result.modifiedCount === 0) {
      return res.status(200).json({ message: "No changes made (same task name)" });
    }

    res.status(200).json({ message: "Task updated successfully" });

  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).send('Server error');
  }
});

router.delete('/delete/:id', async (req, res) => {
  const taskId = req?.params?.id;
  const newTaskName = req?.body?.newTaskName;

  try {
    const db = await connectDB();

    const result = await db.collection(process.env.COLLECTIONNAME).deleteOne({ _id: taskId })
    console.log("result", result)

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (result.modifiedCount === 0) {
      return res.status(200).json({ message: "No changes made (same task name)" });
    }

    res.status(200).json({ message: "Task updated successfully" });

  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).send('Server error');
  }
});

router.post('/addTask', async (req, res) => {
  const newTaskName = req?.body?.addTask;

  try {
    const db = await connectDB();
    const accessCollection = await db.collection(process.env.COLLECTIONNAME);
    const count = await accessCollection.countDocuments();

    const result = await accessCollection.insertOne({_id: `task_${count + 1}`, task: newTaskName})

    if (result.acknowledged) {
      return res.status(200).json({ message: "Task add sucessfully" });
    }

  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;