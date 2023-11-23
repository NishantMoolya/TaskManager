import { Box, Button, Grid } from '@mui/material'
import React, { useEffect, useReducer, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Menubar from './Menubar'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Route, Routes, useLocation, useParams, useSearchParams } from 'react-router-dom'
import HomePage from './HomePage'
import TaskPage from './TaskPage'
import CreatePage from './CreatePage'
import { postTask,delTask,fetchEdit } from '../routes/fetchers'
import { AnimatePresence, motion } from 'framer-motion'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Login from './Login'
import Signup from './Signup'

const App = () => {

  //state declarations
  const [trigger, setTrigger] = useState(true);
  const [index, setIndex] = useState(null);
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(false);
  let initialTask = {
    task: "",
    status: "",
    //date: {},
    checked: false,
    _id: Date.now()
  };
  const [taskInput, setTaskInput] = useState(initialTask);
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/user/task");
        const data = await response.json();
        setTaskList(data);
      } catch (err) {
        console.log(`An error occurred in fetching data:${err}`);
      }
     }
     fetchData();
  },[]);
  //handle input 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setTaskInput({ ...taskInput, [name]: value });
  }
  //adding task 
  const addTask = (mode) => {
    if (taskInput.task) {
      if (mode) {
        postTask(taskInput);
        setTaskList([...taskList, taskInput]);
        toast.success('Saved to tasks tab', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      else {
        taskList.splice(index, 1, taskInput);
        setTrigger(true);
        fetchEdit(taskList);
        toast.success('Task edited successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      //setActive((preVal) => preVal + 1);
      setActive(0);
      setTaskInput({ ...initialTask, _id: Date.now() });
    }
  }
  //deleting task
  const deleteTask = (trig) => {
    const edited = taskList.filter((task) => task._id === trig)
    if (edited[0].checked) {
      delTask(edited[0]._id);
      const deleted = taskList.filter((task) => task._id !== trig);
      setTaskList(deleted);
      setTaskInput({ ...initialTask, id: Date.now() });
      setTrigger(true);
      toast('Task deleted successfully', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else{
    toast.warn('Click checkbox before deleting', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });}
  }
  //editing task
  const editTask = (trig) => {
    const edited = taskList.filter((task) => task._id === trig)
    const ind = taskList.findIndex((task) => task._id === trig);
    console.log(taskList.findIndex((task) => task._id === trig));
    setTrigger(false);
    setActive(0);
    setTaskInput(edited[0]);
    setIndex(ind);
  }
  //form forward movement
  const handleStep = (step) => {
    step === "forward" ? setActive((preVal) => preVal + 1) : setActive((preVal) => preVal - 1)
  }
  //reset form to start
  const handleReset = () => {
    setActive(0);
  }
  //check the list
  const handleChecked = (trig) => {
    const checked = taskList.map((task) => {
      if (task._id === trig) {
        return { ...task, checked: !task.checked }
      }
      return task;
    });
    setTaskList(checked);
  }
  //handle toggle
  const handleToggle =() => {
    setToggle((preVal) => !preVal);
  }
  //task manager
  const taskManager = (triallist, action) => {
    switch (action.type) {
      case 'add': return addTask(action.payload);
      case 'edit': return editTask(action.payload);
      case 'delete': return deleteTask(action.payload);
      case 'direct': return handleStep(action.payload);
      case 'reset': return handleReset();
      case 'change': return handleInput(action.payload);
      case 'check': return handleChecked(action.payload);
      case 'toggle' : return handleToggle();
      default: return;
    }
  }
  const [triallist, dispatch] = useReducer(taskManager, []);
  const [dateVal, setDateVal] = useState("");
  const handleDate = (value) => {
    console.log(value);
    setTaskInput({ ...taskInput, date: value });
  }         
  //location of route
  const location = useLocation();

  //return jsx
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box minHeight={{ xs: "none", sm: "none", md: "90vh" }}>
        <Navbar dispatch={dispatch} />
        <Grid container height={"90vh"} overflow={'scroll'}>
          <Grid item flex={0.5} bgcolor={'primary.light'} justifyContent={"flex-start"} p={2} display={{ xs: "none", sm: "flex", md: "flex" }} component={motion.div} initial={{x:"-100vw",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1}}>
            <Menubar toggle={toggle} dispatch={dispatch} />
          </Grid>
          <Grid item flex={4} bgcolor={'warn.light'} p={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <AnimatePresence mode='wait'>
              <Routes location={location} key={location.key}>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/create' element={<CreatePage taskInput={taskInput} trigger={trigger} active={active} dispatch={dispatch} dateVal={dateVal} handleDate={handleDate} />} />
                <Route path='/tasks' element={<TaskPage taskList={taskList} status={['reminder', 'todo']} dispatch={dispatch} />} />
                <Route />
              </Routes>
              </AnimatePresence>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      <Footer />
      </Box>
      <ToastContainer />
    </LocalizationProvider>
  )
}

export default App