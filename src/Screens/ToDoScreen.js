// import { Component } from "react";

import { useState } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";

// class ToDoScreen extends Component{

//     state={
//         taskCounter : 0,
//     };
//     render(){
//         return(

//             <div className="screen">
//                 <h1 className="ui heading center">ToDo List</h1>
//                 <div>
//                     <button className="ui secondary button" onClick={(e)=>{
//                         this.setState({...this.state,taskCounter:this.state.taskCounter+1})
//                     }}>Add Task</button>
//                     <p>The number of tasks are:{this.state.taskCounter}</p>
//                 </div>
//             </div>
//         )
//     }
// }

const ToDoScreen = () => {
    const [taskList, setTaskList] = useState([]);

    let addNewTask = (e)=>{
        setTaskList([...taskList, {
            
            createDate: new Date()
        }])
    }
    return (
        <>
        <div className="screen">
            <h1 className="ui heading center">ToDo List</h1>
            <div>
                <button className="ui secondary button" onClick={(e) => {
                    setTaskList([...taskList, {
                        title: "Go to gym",
                        description: "Do 30 minutes of cardio",
                        createDate: new Date()
                    }])
                }}>Add Task</button>
                <section>
                    <div className="ui cards">
                        {taskList.map((task, index) =>
                            <Task task={task} key={index} />)}
                    </div>
                </section>

            </div>
            <AddTask />
        </div>
        
        </>
    )
}

export default ToDoScreen;