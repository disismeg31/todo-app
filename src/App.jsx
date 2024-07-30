import ToDoInp from './components/ToDoInp';
import './App.css'
import { TodoProvider } from './components/ToDoContext/ToDoContext';

function App() {

  return (
    <> 
    <TodoProvider>
       <div className="bg-[#a9b6bb2c] rounded-lg md:w-[800px] max-w-[800px] p-4 m-4">
        <h1 className='font-bold text-3xl '>Todo</h1>
        <ToDoInp/>
       </div>
    </TodoProvider>
    </>
  )
}

export default App
