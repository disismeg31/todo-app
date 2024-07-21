import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ToDos from "./ToDos.jsx";

function ToDoInp() {
  // While not strictly necessary, including ids in your initial state is a good practice for consistency, future-proofing, and efficient list rendering in React.
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: "Eat breakfast", priority: "High" },
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    priority: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewTask((n) => ({ ...n, [name]: value}));
  }

  function addTask() {
      // console.log('newTask before adding:', newTask);
    if(newTask.title.trim() !== "" && newTask.priority.trim() !== ""){
      const taskWithId = {...newTask,id: uuidv4()}
    setTasks((t) =>{ 
      console.log('Adding task',taskWithId);
      return [...t, taskWithId] 
    } );
    setNewTask({title: "", priority: ""});
    }
    else{
      alert("todo and priority fields are required !!!");
    }
  }
  // console.log(tasks);

  // function deleteTask(index) {
  //   const upatedTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(upatedTasks);
  // }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <input
          className="h-14 w-[470px] text-slate-800 placeholder:text-slate-800 p-5 border-0 rounded-lg mx-2 my-2"
          type="text"
          name="title"
          placeholder="to do here..."
          value={newTask.title}
          onChange={handleInputChange}
        />
        <select
          className="mx-2 my-2 h-14 p-4 border-0 rounded-lg text-slate-800"
          name="priority"
          id="priority"
          onChange={handleInputChange}
        >  
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          
        </select>
        <button
          className="h-14 w-24 p-4 mx-2 my-2 text-white bg-slate-500 hover:bg-slate-600 active:bg-slate-700 rounded-lg "
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ToDos tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default ToDoInp;
