import { FormControl } from '@mui/base';
import { Add, Edit } from '@mui/icons-material'
import { Box, Button, Fab, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Stack, Step, StepContent, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { DateTimePicker } from '@mui/x-date-pickers'


const Input = ({ taskInput, trigger,active,dispatch,dateVal,handleDate }) => {
  return (
    <Box marginLeft={{xs:"0",sm:5,md:8}}>
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
            Enter status
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
            <Button sx={{ marginBlock:1 }} onClick={() => dispatch({ type:"forward"})}>Finish</Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            Pick a date
          </StepLabel>
          <StepContent>
            <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'} width={{md:"300px"}}>
            <DateTimePicker disablePast value={taskInput.date} onChange={handleDate} sx={{width:{md:"250px"}}}/>
            <Button variant='contained' onClick={() => dispatch({type:'add',payload:trigger})} sx={{width:"200px"}}>Finish</Button>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
      {/* <Button variant='contained' sx={{ marginBlock:3 }} onClick={() => dispatch({ type:"reset" })}>Add more task</Button> */}
    </Box>

  )
}

export default Input