import { Add, Edit } from '@mui/icons-material'
import { Box, Button, Fab, IconButton, Stack, Step, StepContent, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Input = ({ taskInput, setTaskInput, addTask, editTaskOriginal, trigger,handleDate }) => {
  const [active, setActive] = useState(0);
  const handleStep = () => {
    setActive((preVal) => preVal + 1);
  }
  const handleReset = () => {
    setActive(0);
  }
  return (
    <Box>
      <Stepper orientation='vertical' activeStep={active}>
        <Step>
          <StepLabel>
            Enter Task
          </StepLabel>
          <StepContent>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} marginBlock={2}>
              <TextField variant='filled' label="Task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} fullWidth />
              {trigger ? <Fab color='primary' onClick={addTask} size='small'>
                <Add />
              </Fab> :
                <IconButton color='secondary' onClick={editTaskOriginal}>
                  <Edit />
                </IconButton>}

            </Stack>
            <Button onClick={handleStep}>Finish</Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            Pick a date
          </StepLabel>
          <StepContent>
            <input type='date' onChange={(e) => handleDate(e)} />
            <Button onClick={handleStep}>Finish</Button>
          </StepContent>
        </Step>
      </Stepper>
      <Button onClick={handleReset}>Add more task</Button>
    </Box>

  )
}

export default Input