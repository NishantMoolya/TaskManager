import { Box } from '@mui/material'
import React from 'react'
import TaskFramer from './TaskFramer'
import MyAccordion from './MyAccordion'
import { motion } from 'framer-motion'

const TaskPage = ({ taskList, status, dispatch }) => {
  const accordAnime = {
    initial:{
      y:"-100vh"
    },
    animate1:{
      y:0,
      transition:{
        duration:1,
        ease:'easeIn',
        type:"spring"
      }
    },
    animate2:{
      y:0,
      transition:{
        delay:0.5,
        duration:1,
        ease:'easeIn',
        type:"spring"
      }
    },
    exit:{
      x:"100vw",
      transition:{
        duration:0.5,
        ease:"easeOut"
      }
    }
  }
  return (
    <Box>
      <Box component={motion.div} variants={accordAnime} initial="initial" animate="animate1" exit="exit">
      <MyAccordion title={'REMINDER'} element={<TaskFramer taskList={taskList} status={status[0]} dispatch={dispatch} />}/>
      </Box>
      <Box component={motion.div} variants={accordAnime} initial="initial" animate="animate2" exit="exit">
      <MyAccordion title={'TODO'} element={<TaskFramer taskList={taskList} status={status[1]} dispatch={dispatch} />} />
      </Box>
    </Box>
  )
}

export default TaskPage