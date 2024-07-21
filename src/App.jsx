import { useState } from 'react';
import ToDoInp from './components/ToDoInp';
 
import './App.css'

function App() {

  return (
    <>
       <div className="bg-[#a9b6bb2c] rounded-lg w-[800px] p-4">
        <h1 className='font-bold text-3xl '>Todo</h1>
        <ToDoInp/>
       </div>
    </>
  )
}

export default App
