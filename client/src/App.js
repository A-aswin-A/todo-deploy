import { Routes, Route } from "react-router";
import Todo,{ EditTask } from './Todo.js';
import './index.scss';

export const App = () => {

    return (
        <div id="App">
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/edit/:id" element={<EditTask submitTxt='Update Task' id='edit'/>} />     
                <Route path="/addTask" element={<EditTask submitTxt='Add Task' id='add' />} />     
            </Routes>
        </div>
    )
}
