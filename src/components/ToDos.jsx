/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
function ToDos({ tasks, setTasks, setNewTask, setUpdate, setEdit }) {
  function deleteTask(id) {
    const isConfirm = window.confirm("areyou sure you want to remove it")
    if(isConfirm){
      const upatedTasks = tasks.filter((item) => id !== item.id);
      setTasks(upatedTasks);
    }  
  }

  function editTask(id) {
    const findItem = tasks.find((task) => {
      return id === task.id;
    });
    setNewTask(findItem);
    setUpdate(false);
    setEdit(id);
    console.log(findItem);
  }

  function handleRemoveAll(){
    setTasks([])
  }

  function handleComplete(id){
    setTasks(tasks.map((compItem)=>{
      if(compItem.id == id){
        return {...compItem, complete:!compItem.complete}
      }
      return compItem;
    }))
  }

  return (
    <div className="todos">
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center rounded-lg border-b-1 px-5 py-1 m-2 h-16  ${
                task.priority === "High"
                  ? "bg-[#fa828c]"
                  : task.priority === "Medium"
                  ? "bg-[#fff281]"
                  : "bg-[#bae777]"
              }`}
            >
              <div className="flex gap-3 items-center">
                <span className="flex items-center">
                  <input className="h-4 w-4" type="checkbox" onClick={()=>handleComplete(task.id)}/>
                </span>
                <span className={`${task.complete?'line-through':""} `}>{task.title}</span>
              </div>
              <div className="flex gap-3">
                <span
                  className="cursor-pointer"
                  onClick={() => editTask(task.id)}
                >
                  <AiOutlineEdit size={25} />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => deleteTask(task.id)}
                >
                  <TiDeleteOutline size={25} />
                </span>
              </div>
            </li>
          ))}
      </ul>
      {
      tasks.length>0 &&
      <button className="h-14 p-4 mx-2 my-2 text-white bg-slate-500 hover:bg-slate-600 active:bg-slate-700 rounded-lg "
      onClick={handleRemoveAll}>
       Remove All
     </button>
     }
      
    </div>
  );
}

export default ToDos;

// low :bg-[#bae777], high :bg-[#fa828c] , medium : bg-[#fff281] - priority
// edit and delete
