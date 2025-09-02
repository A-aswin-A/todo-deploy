require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');  // <-- import cors to access it from port: 3000

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000', // your React dev server
  credentials: true
}));

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});