import React from "react";
import ToDos from "./ToDos.jsx";
import { useToDoContext } from "./ToDoContext/ToDoContext.jsx";

function ToDoInp() {
  const {newTask,handleInputChange,update,addTask} = useToDoContext()
 
  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <input
          className="h-14  w-full md:w-[470px] text-slate-800 placeholder:text-slate-800 p-5 border-0 rounded-lg mx-2 my-2"
          type="text"
          name="title"
          placeholder="to do here..."
          value={newTask.title}
          onChange={handleInputChange}
        />
        <select
          className="mx-2 my-2 h-14 p-4 w-full md:w-32 border-0 rounded-lg text-slate-800"
          name="priority"
          id="priority"
          value={newTask.priority} // set value to newTask.priority
          onChange={handleInputChange}
        >
          <option disabled hidden value="">
            Select Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {update ? (
          <button
            className="h-14 w-full md:w-24 p-4 mx-2 my-2 text-white bg-slate-500 hover:bg-slate-600 active:bg-slate-700 rounded-lg "
            onClick={addTask}
          >
            Add
          </button>
        ) : (
          <button
            className="h-14 w-full md:w-24 p-4 mx-2 my-2 text-white bg-slate-500 hover:bg-slate-600 active:bg-slate-700 rounded-lg "
            onClick={addTask}
          >
            Update
          </button>
        )}
      </div>
      <ToDos
         
      />
    </>
  );
}

export default ToDoInp;
