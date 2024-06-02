
import React, { useEffect, useState } from "react";
import Cards from "../components/cards";
import Navbar from "../components/navbar";
import axios from "axios"
import Footer from "../components/footer";

// https://api.restful-api.dev/objects
const Todo = () => {
    const initialTasks = [
        { date: '123', task: [{ name: 'Fix the css of the buttons', status: 'pending' }, { name: 'Add icons to show pending/done/not done tasks', status: 'pending' }] },
        { date: '456', task: [{ name: 'Task 3', status: 'pending' }, { name: 'Task 4', status: 'pending' }] },
        { date: '789', task: [{ name: 'Task 5', status: 'pending' }, { name: 'Task 6', status: 'pending' }] }
        
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState("");
    const [selectedDate, setSelectedDate] = useState(initialTasks[0]?.date || "");
    const [data, setData] = useState(null);

    const inputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const addItem = () => {
        if (newTask.trim() && selectedDate) {
            const updatedTasks = tasks.map(taskObj => {
                if (taskObj.date === selectedDate) {
                    return {
                        ...taskObj,
                        task: [...taskObj.task, { name: newTask.trim(), status: 'pending' }]
                    };
                }
                return taskObj;
            });
            setTasks(updatedTasks);
            setNewTask("");
        }
    };

    const deleteTask = (taskIndex, index) => {
        let temp = tasks;
        temp[index].task.splice(taskIndex, 1);
        setTasks([...temp]);
    };

    const completeTask = (taskIndex, index) => {
        let temp = tasks;
        temp[index].task[taskIndex].status = 'done';
        setTasks([...temp]);
    };

    useEffect(() => {
        getData();
    }, []);


    const getData =  async () => {


        const response = await  axios.get('https://api.restful-api.dev/objects');

        console.log(response)
        
        console.log("I got data");
    }

        return (

        <>
            <Navbar />
            <div className="d-flex justify-content-center pt-4">
                <div style={{ width: "90%" }}>
                    <div className="d-flex justify-content-between">
                        {
                            tasks.map((obj, index) => {
                                return (
                                  obj.task && obj.task.length ?  <Cards
                                    tasks={obj}
                                    deleteTask={(taskIndex) => deleteTask(taskIndex , index)}
                                    completeTask={(taskIndex) => completeTask(taskIndex , index)}
                                /> : ""
                               )
                            })
                       }
                    </div>
                </div>
                </div>
                <Footer />
        </>

        // <div className="container mt-4">
        //     <h1 className="text-center">Daily tasks</h1>
        //     <div className="add-task-container">
        //         <div className="input-group">
        //             <input
                        
        //                 type="text"
        //                 className="form-control"
        //                 value={newTask}
        //                 onChange={inputChange}
        //                 placeholder="Add new task"
        //             />
        //             {/* <select onChange={handleDateChange} value={selectedDate} className="form-control ml-2">
        //                 {tasks.map((taskObj, index) => (
        //                     <option key={index} value={taskObj.date}>
        //                         {taskObj.date}
        //                     </option>
        //                 ))}
        //             </select> */}
        //             <button className="btn btn-primary ml-2" onClick={addItem}>
        //                 +
        //             </button>
        //         </div>
        //     </div>

        //     <div className="row mt-4">
        //         {tasks.map((obj, index) => (
        //             <div key={index} className="col-md-4">
        //                 <Cards
        //                     tasks={obj}
        //                     deleteTask={(taskIndex) => deleteTask(obj.date, taskIndex)}
        //                     completeTask={(taskIndex) => completeTask(obj.date, taskIndex)}
        //                 />
        //             </div>
        //         ))}
        //     </div>
        // // </div>
    );
}

export default Todo;
