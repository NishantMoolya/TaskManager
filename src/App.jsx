import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import Input from './Input'
import TaskList from './TaskList'

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [trigger, setTrigger] = useState(true);
  const [index,setIndex] = useState(null);
  const addTask = () => {
    if(taskInput){
      setTaskList([...taskList,taskInput]);
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
  taskList.splice(index,1,taskInput);
  setTaskInput("");
  setTrigger(true);
}
  return (
    <Box>
      <Container sx={{ width:{xs:"100%",sm:600,md:900}}}>
      <Input taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask} editTaskOriginal={editTaskOriginal} trigger={trigger} />
      <TaskList taskList={taskList} deleteTask={deleteTask} editTask={editTask} />
      </Container>
    </Box>
  )
}

export default App