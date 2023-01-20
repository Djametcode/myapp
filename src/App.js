import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import "./App.css"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const itemContext = createContext(null)

const headerstyle = {
  backgroundColor: 'slateGrey',
  fontFamily: 'Patrick Hand',
  padding: '10px',
  textAlign: 'center'
}

const TaskChild = ({data: {id, message}}) => {

  const {task, setTask} = useContext (itemContext)
  const handleDelet = () => {
    const updatedtask = task.filter((item) => item.id !== id);
    setTask(updatedtask)
  }


  return (
    <div id="todo-list">
      <li id="list">
        <div id="todo-item">
          <p>{message}</p>
          <button id="btn-style" onClick={handleDelet}>Delete</button> 
        </div>
      </li>
    </div>
  )
}

const TaskList = () => {
  const {task} = useContext(itemContext);

  const todo = task.map((item) => <TaskChild key={item} data = {item} />)
  return (
    <div id="todo">{todo}</div>
  )
}

const TaskAdder = () =>  {
  const {task, setTask, Inputref} = useContext(itemContext)


  const handleClick = () => {
    const newTask = {
      id: task.length + 1,
      message: Inputref.current.value
    }
    setTask([...task, newTask]);
    Inputref.current.value = '';
  }

  return (
    <div id="flex-input">
      <input 
        type="text" 
        placeholder="Masukan task"
        ref={Inputref}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  )
}

const Infobar = () => {
  const {task} = useContext(itemContext)
  return (
    <div id="infoBar">
       <p>Ada {task.length} task yang harus dikerjakan</p>
    </div>
  )
}

const Header = () => {
  const {header} = useContext(itemContext)
  return (
    <div style={headerstyle}>
      <h1>{header}</h1>
    </div>
  )
}

const TodoApps = () => {
  const [header, setHeader] = useState('Todo Apps Full javascript');
  const [task, setTask] = useState([])
  const [edit, setEdit] = useState(false);
  const Inputref = useRef()
  return (
   <itemContext.Provider value={{header, setHeader, task, setTask, edit, setEdit, Inputref}}>
    <div id="body">
      <Header />
      <Infobar />
      <TaskAdder />
      <TaskList />
    </div>
   </itemContext.Provider>
  )
}

const App = () => {
  return (
    <TodoApps />
  )
}

export default App;