/* eslint-disable react/prop-types */
import React,{createContext,useContext,useEffect,useState} from 'react';
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext()

const useToDoContext = () => useContext(ToDoContext)

const getLocalItem =()=>{
    const storeItems = localStorage.getItem("todoslist")
    return storeItems? JSON.parse(localStorage.getItem("todoslist")):[]
}

const TodoProvider =({children}) =>{
  
const [tasks, setTasks] = useState(getLocalItem());
  const [newTask, setNewTask] = useState({
    title: "",
    priority: "",
  });

  const [update, setUpdate] = useState(true);
  const [edit, setEdit] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todoslist",JSON.stringify(tasks))
  },[tasks])

  function addTask() {
    if (!update) {
      setTasks(
        tasks.map((editEle) => {
          if (editEle.id === edit) {
            return {
              ...editEle,
              title: newTask.title,
              priority: newTask.priority,
            };
          }
          return editEle;
        })
      );
      setUpdate(true); //because Add button is displayed when update is true
      setNewTask({
        title: "",
        priority: "",
      });
      setEdit(null); //to reset edit id so that it doesnt spread to next item
    } else {
      if (newTask.title.trim() !== "" && newTask.priority.trim() !== "") {
        const taskWithId = { ...newTask, id: uuidv4() , complete:false };
        setTasks((t) => {
          return [...t, taskWithId];
        });
        setNewTask({ title: "", priority: "" });
      } else {
        alert("todo and priority fields are required !!!");
      }
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewTask((n) => ({ ...n, [name]: value }));
  }

  function deleteTask(id) {
    const isConfirm = window.confirm("Are you sure you want to remove it")
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

  const allValue = {tasks, setTasks, newTask, setNewTask,update, setUpdate,edit, setEdit,addTask,handleInputChange,deleteTask,editTask,handleRemoveAll,handleComplete}

    return(
        <ToDoContext.Provider value={allValue}>
            {children}
        </ToDoContext.Provider>
    )
}





 
export   {ToDoContext,TodoProvider,useToDoContext}