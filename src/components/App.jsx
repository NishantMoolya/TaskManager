import { Box, Grid } from '@mui/material'
import React, { useEffect, useReducer, useState } from 'react'
import Input from './Input'
import Navbar from './Navbar'
import Footer from './Footer'
import TaskFramer from './TaskFramer'
import MyAccordion from './MyAccordion'
import Sectionbar from './Sectionbar'
import Menubar from './Menubar'

const App = () => {

  //state declarations
  const [trigger, setTrigger] = useState(true);
  const [index, setIndex] = useState(null);
  const [active, setActive] = useState(0);
  let initialTask = {
    task: "",
    status: "",
    date: "",
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
        setActive((preVal) => preVal + 1);
        setTaskList([...taskList, taskInput]);
      }
      else {
        taskList.splice(index, 1, taskInput);
        setTrigger(true);
      }
      setTaskInput({ ...initialTask, id: Date.now() });
    }
  }
  //deleting task
  const deleteTask = (trig) => {
    const deleted = taskList.filter((task) => task.id !== trig);
    setTaskList(deleted);
    setTaskInput({ ...initialTask, id: Date.now() });
    setTrigger(true);
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
      default: return;
    }
  }
  const [triallist, dispatch] = useReducer(taskManager, []);

  //return jsx
  return (
    <Box minHeight={'100vh'}>
      <Navbar />
      <Grid container height={'100vmin'}>
        <Grid item flex={1} bgcolor={'success.light'} justifyContent={'center'} p={2}>
        <Menubar />
        </Grid>
        <Grid item flex={4} justifyContent={'center'} bgcolor={'warn.light'} p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Sectionbar />
            </Grid>
            <Grid item xs={6}>
              <Input taskInput={taskInput} trigger={trigger} active={active} dispatch={dispatch} />
            </Grid>
            <Grid item xs={6}>
              <MyAccordion element={<><MyAccordion element={<TaskFramer taskList={taskList} status={'reminder'} dispatch={dispatch} />} title={'Reminder'} />
              <MyAccordion element={<TaskFramer taskList={taskList} status={'todo'} dispatch={dispatch} />} title={'Todo'} /></>} title={'Collections'} />
            </Grid>
            {/* <Grid item xs={6}>
              <Input taskInput={taskInput} trigger={trigger} active={active} dispatch={dispatch} />
            </Grid>
            <Grid item xs={6} bgcolor="primary.light">
            <MyAccordion element={<><MyAccordion element={<TaskFramer taskList={taskList} status={'reminder'} dispatch={dispatch} />} title={'Reminder'} />
              <MyAccordion element={<TaskFramer taskList={taskList} status={'todo'} dispatch={dispatch} />} title={'Todo'} /></>} title={'Collections'} />
            </Grid> */}
          </Grid>
        </Grid>
        {/* <Grid item flex={1.5} bgcolor={'info.light'} justifyContent={'center'} p={2}>
          <MyAccordion element={<><MyAccordion element={<TaskFramer taskList={taskList} status={'reminder'} dispatch={dispatch} />} title={'Reminder'}/>
          <MyAccordion element={<TaskFramer taskList={taskList} status={'todo'} dispatch={dispatch} />} title={'Todo'} /></>} title={'Collections'} />
        </Grid> */}
      </Grid>
      <Footer />
    </Box>
  )
}

export default App