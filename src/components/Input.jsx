import { FormControl } from '@mui/base';
import { Add, Edit } from '@mui/icons-material'
import { Box, Button, Fab, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Stack, Step, StepContent, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'

const Input = ({ taskInput, trigger,active,dispatch }) => {
  return (
    <Box>
      <Stepper orientation='vertical' activeStep={active}>
        <Step>
          <StepLabel>
            Enter Task
          </StepLabel>
          <StepContent>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} marginBlock={2}>
              <TextField variant='filled' name='task' value={taskInput.task} label="Task" onChange={(e) => dispatch({ type:"change",payload:e})} fullWidth />
              {/* {trigger ? <IconButton color='primary' size='small' onClick={addTask} >
                <Add />
              </IconButton> :
                <IconButton color='secondary' onClick={editTaskOriginal}>
                  <Edit />
                </IconButton>} */}
            </Stack>
            {trigger? <Button onClick={() => dispatch({ type:"forward"})} startIcon={<Add />}>Add</Button>:<Button onClick={() => dispatch({ type:"forward"})} startIcon={<Edit />}>Edit</Button>}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            Status
          </StepLabel>
          <StepContent>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Enter Status</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="status"
                value={taskInput.status}
                onChange={(e) => dispatch({ type:"change",payload:e})}
              >
                <FormControlLabel value="reminder" control={<Radio />} label="Reminder" />
                <FormControlLabel value="todo" control={<Radio />} label="Todo" />
              </RadioGroup>
            </FormControl>
            <Button onClick={() => dispatch({ type:"forward"})}>Finish</Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            Pick a date
          </StepLabel>
          <StepContent>
            <input type='date' name='date' value={taskInput.date} onChange={(e) => dispatch({ type:"change",payload:e})} />
            <Button onClick={() => dispatch({type:'add',payload:trigger})}>Finish</Button>
          </StepContent>
        </Step>
      </Stepper>
      <Button onClick={() => dispatch({ type:"reset" })}>Add more task</Button>
    </Box>

  )
}

export default Input