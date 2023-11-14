import { Add, Edit } from '@mui/icons-material'
import { Fab, IconButton, Stack, TextField } from '@mui/material'
import React from 'react'

const Input = ({ taskInput,setTaskInput,addTask,editTaskOriginal,trigger }) => {
  return (
    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} marginBlock={2}>
        <TextField variant='filled' label="Task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        {trigger?<Fab color='primary' onClick={addTask} size='small'>
          <Add />
        </Fab>:
        <IconButton color='secondary' onClick={editTaskOriginal}>
            <Edit />
        </IconButton>}
        
    </Stack>
  )
}
    
export default Input