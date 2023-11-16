import { Box } from '@mui/system'
import React from 'react'
import TaskList from './TaskList'

const TaskFramer = ({taskList,status,dispatch}) => {
  const reducedList = taskList.filter((task) => {
    return task.status === status ? task : null
  });

  return (
    <Box>
        <TaskList reducedList={reducedList} dispatch={dispatch}/>
    </Box>
  )
}

export default TaskFramer