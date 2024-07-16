import { useState } from "react";

const AddTask = () => {
    const [task,setTask] = useState({
        title:"",
        description:""
    });
    let handleInput = (e)=>{
        setTask({...task,[e.target.name]:e.target.value});
    }
    let onFormSubmit = (e)=>{
        e.preventdefault();
        console.log(task);
    }

    return (
        <>
        <h3 className="ui heading center">Add new Task</h3>
        <div className="ui form">
            <form onSubmit={onFormSubmit}>
                <div className="field">
                    <label>User Input</label>
                    <input type="text" spellCheck="false" name="title" onChange={handleInput}/>
                </div>


                

                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" name="description" onChange={handleInput}></textarea>
                    </div>
                
                <br></br>
                <button className="ui primary button" type="submit">
                    Save
                </button>
            </form>
        </div>
        </>
    );
}

export default AddTask;