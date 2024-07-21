/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
function ToDos({tasks,setTasks}) {

  function deleteTask(index) {
    const upatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(upatedTasks);
  }




  return (
    <div className='todos'>
      <ul> 
        {
          tasks && tasks.map((task)=>(
            <li key={task.id} className={`flex justify-between items-center rounded-lg border-b-1 px-5 py-1 m-2 h-16   ${task.priority === 'High'? 'bg-[#fa828c]' :task.priority === 'Medium'? 'bg-[#fff281]':'bg-[#bae777]'}`}>
            <div className='flex gap-3 items-center'>
              <span className='flex items-center'>
                <input className='h-4 w-4' type="checkbox" />
              </span>
              <span>{task.title}</span>
            </div>
            <div className='flex gap-3'>
              <span className='cursor-pointer'>
                <AiOutlineEdit size={25} />
              </span>
              <span className='cursor-pointer' onClick={()=>deleteTask(task.id)}>
                <TiDeleteOutline size={25} />
              </span>
            </div>
          </li>
          ))
        }
        
        {/* <li className='flex justify-between items-center rounded-lg border-b-1 px-5 py-1 m-2 h-16 bg-[#fff281]'>
          <div className='flex gap-3 items-center'>
            <span className='flex items-center'>
              <input className='h-4 w-4' type="checkbox" />
            </span>
            <span>Task 2</span>
          </div>
          <div className='flex gap-3'>
            <span className='cursor-pointer'>
              <AiOutlineEdit size={25} />
            </span>
            <span className='cursor-pointer'>
              <TiDeleteOutline size={25} />
            </span>
          </div>
        </li> */}
        {/* <li className='flex justify-between items-center rounded-lg border-b-1 px-5 py-1 m-2 h-16 bg-[#fa828c]'>
          <div className='flex gap-3 items-center'>
            <span className='flex items-center'>
              <input className='h-4 w-4' type="checkbox" />
            </span>
            <span>Task 2</span>
          </div>
          <div className='flex gap-3'>
            <span className='cursor-pointer'>
              <AiOutlineEdit size={25} />
            </span>
            <span className='cursor-pointer'>
              <TiDeleteOutline size={25} />
            </span>
          </div>
        </li> */}
      </ul>
    </div>
  )
}

export default ToDos;

// low :bg-[#bae777], high :bg-[#fa828c] , medium : bg-[#fff281] - priority
// edit and delete  