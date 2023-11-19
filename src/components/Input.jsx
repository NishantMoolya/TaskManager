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
            <Stack justifyContent={"center"} alignItems={"flex-start"} spacing={2} marginBlock={2}>
              <TextField variant='filled' name='task' value={taskInput.task} label="Task" onChange={(e) => dispatch({ type:"change",payload:e})} fullWidth />
              {trigger? <Button onClick={() => dispatch({ type:"direct",payload:"forward"})} variant='outlined' startIcon={<Add />}>Add</Button>:<Button onClick={() => dispatch({ type:"direct",payload:"forward"})} variant='outlined' startIcon={<Edit />}>Edit</Button>}
            </Stack>
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
            <Button sx={{ marginBlock:1 }} onClick={() => dispatch({ type:"direct",payload:"forward"})} variant='outlined'>Next</Button>
            <Button onClick={() => dispatch({ type:"direct",payload:"back"})}>Back</Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            Pick a date
          </StepLabel>
          <StepContent>
            <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'} width={{md:"300px"}}>
            <DateTimePicker disablePast value={taskInput.date} onChange={handleDate} sx={{width:{md:"250px"}}}/>
            <Stack direction={'row'}>
            <Button variant='contained' onClick={() => dispatch({type:'add',payload:trigger})}>Finish</Button>
            <Button onClick={() => dispatch({ type:"direct",payload:"back"})}>Back</Button>
            </Stack>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
      {/* <Button variant='contained' sx={{ marginBlock:3 }} onClick={() => dispatch({ type:"reset" })}>Add more task</Button> */}
    </Box>

  )
}

export default Input