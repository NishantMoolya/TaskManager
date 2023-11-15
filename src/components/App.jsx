import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Input from './Input'
import TaskList from './TaskList'
import Navbar from './Navbar'
import { ExpandMore } from '@mui/icons-material'
import Footer from './Footer'
import Counter from './Counter'

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [trigger, setTrigger] = useState(true);
  const [index, setIndex] = useState(null);
  const [newDate,setNewDate] = useState(null);
  let prstDate = new Date().getDate();
  const [diff,setDiff] = useState(null);
  const addTask = () => {
    if (taskInput) {
      setTaskList([...taskList, taskInput]);
      setTaskInput("");
      console.log(taskList);
    }
  }
  const deleteTask = (ind) => {
    const deleted = taskList.filter((task) => task !== taskList[ind]);
    setTaskList(deleted);
  }
  const editTask = (ind) => {
    setTaskInput(taskList[ind]);
    setIndex(ind);
    setTrigger(false);
  }
  const editTaskOriginal = () => {
    if (taskInput) {
      taskList.splice(index, 1, taskInput);
      setTaskInput("");
      setTrigger(true);
    }
  }
  const handleDate = (e) => {
     setNewDate(new Date(e.target.value).getDate());
  }
  return (
    <Box minHeight={'100vh'}>
      <Navbar />
      <Grid container>
        <Grid item flex={1} bgcolor={'success.light'} justifyContent={'center'} p={2}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Completed</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TaskList taskList={taskList} deleteTask={deleteTask} editTask={editTask} date={newDate-prstDate} />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item flex={1} justifyContent={'center'} bgcolor={'warn.light'} p={2}>
          <Input taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask} editTaskOriginal={editTaskOriginal} trigger={trigger} handleDate={handleDate} />
        </Grid>
        <Grid item flex={1} bgcolor={'info.light'} justifyContent={'center'} p={2}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>In Progress</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TaskList taskList={taskList} deleteTask={deleteTask} editTask={editTask} date={newDate-prstDate} />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App