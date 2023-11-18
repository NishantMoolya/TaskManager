import { Box, Grid } from '@mui/material'
import React, { useEffect, useReducer, useState } from 'react'
import Input from './Input'
import Navbar from './Navbar'
import Footer from './Footer'
import TaskFramer from './TaskFramer'
import MyAccordion from './MyAccordion'
import Sectionbar from './Sectionbar'
import Menubar from './Menubar'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import TaskPage from './TaskPage'
import CreatePage from './CreatePage'

const App = () => {

  //state declarations
  const [trigger, setTrigger] = useState(true);
  const [index, setIndex] = useState(null);
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(false);
  let initialTask = {
    task: "",
    status: "",
    date: [],
    checked: false,
    id: Date.now()
  };
  const [taskInput, setTaskInput] = useState(initialTask);
  const [taskList, setTaskList] = useState([]);
  //handle input 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setTaskInput({ ...taskInput, [name]: value });
  }
  //adding task 
  const addTask = (mode) => {
    if (taskInput.task) {
      if (mode) {
        setTaskList([...taskList, taskInput]);
      }
      else {
        taskList.splice(index, 1, taskInput);
        setTrigger(true);
      }
      //setActive((preVal) => preVal + 1);
      setActive(0);
      setTaskInput({ ...initialTask, id: Date.now() });
    }
  }
  //deleting task
  const deleteTask = (trig) => {
    const edited = taskList.filter((task) => task.id === trig)
    if (edited[0].checked) {
      const deleted = taskList.filter((task) => task.id !== trig);
      setTaskList(deleted);
      setTaskInput({ ...initialTask, id: Date.now() });
      setTrigger(true);
    }
  }
  //editing task
  const editTask = (trig) => {
    const edited = taskList.filter((task) => task.id === trig)
    const ind = taskList.findIndex((task, ind) => task.id === trig);
    console.log(taskList.findIndex((task, ind) => task.id === trig));
    setTrigger(false);
    setActive(0);
    setTaskInput(edited[0]);
    setIndex(ind);
  }
  //form forward movement
  const handleStep = () => {
    setActive((preVal) => preVal + 1);
  }
  //reset form to start
  const handleReset = () => {
    setActive(0);
  }
  //check the list
  const handleChecked = (trig) => {
    const checked = taskList.map((task) => {
      if (task.id === trig) {
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
      case 'forward': return handleStep();
      case 'reset': return handleReset();
      case 'change': return handleInput(action.payload);
      case 'check': return handleChecked(action.payload);
      case 'toggle' : return handleToggle();
      default: return;
    }
  }
  const [triallist, dispatch] = useReducer(taskManager, []);
  const [layouttrig, setLayouttrig] = useState(true);
  const handleCreateTask = () => setLayouttrig((preVal) => !preVal);
  const [dateVal, setDateVal] = useState("");
  const handleDate = (value) => {
    setTaskInput({ ...taskInput, date: value });
  }                
  //return jsx
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box minHeight={{ xs: "none", sm: "none", md: "90vh" }}>
        <Navbar dispatch={dispatch} />
        <Grid container height={"90vh"}>
          <Grid item flex={0.5} bgcolor={'primary.light'} justifyContent={"flex-start"} p={2} display={{ xs: "none", sm: "flex", md: "flex" }}>
            <Menubar toggle={toggle} dispatch={dispatch} />
          </Grid>
          <Grid item flex={4} bgcolor={'warn.light'} p={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Sectionbar handleCreateTask={handleCreateTask} />
              </Grid>
              <Grid item xs={12}>
              {/* {layouttrig ? <>
                <Grid item xs={6}><MyAccordion element={<TaskFramer taskList={taskList} status={'reminder'} dispatch={dispatch} />} title={'Reminder'} /></Grid>
                <Grid item xs={6}><MyAccordion element={<TaskFramer taskList={taskList} status={'todo'} dispatch={dispatch} />} title={'Todo'} /></Grid>
              </> : <><Grid item xs={4}>
                <Input taskInput={taskInput} trigger={trigger} active={active} dispatch={dispatch} dateVal={dateVal} handleDate={handleDate} />
              </Grid>
                <Grid item xs={8}>
                  <MyAccordion element={<><MyAccordion element={<TaskFramer taskList={taskList} status={'reminder'} dispatch={dispatch} />} title={'REMINDER'} />
                    <MyAccordion element={<TaskFramer taskList={taskList} status={'todo'} dispatch={dispatch} />} title={'TODO'} /></>} title={'Your task collections'} />
                </Grid></>} */}
              <Routes>
                <Route path='/create' element={<CreatePage taskInput={taskInput} trigger={trigger} active={active} dispatch={dispatch} dateVal={dateVal} handleDate={handleDate} />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/tasks' element={<TaskPage taskList={taskList} status={['reminder', 'todo']} dispatch={dispatch} />} />
                <Route />
              </Routes>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      <Footer />
      </Box>
    </LocalizationProvider>
  )
}

export default App