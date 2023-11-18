import { Box } from '@mui/material'
import React from 'react'
import TaskFramer from './TaskFramer'
import MyAccordion from './MyAccordion'

const TaskPage = ({ taskList, status, dispatch }) => {
  return (
    <Box>
      <MyAccordion title={'REMINDER'} element={<TaskFramer taskList={taskList} status={status[0]} dispatch={dispatch} />} />
      <MyAccordion title={'TODO'} element={<TaskFramer taskList={taskList} status={status[1]} dispatch={dispatch} />} />
    </Box>
  )
}

export default TaskPage