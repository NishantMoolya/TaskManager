import { CheckBox, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import TaskFramer from './TaskFramer'

const Layout = () => {
  return (
    <Box>
        <Grid container>
        <Grid item flex={1} bgcolor={'success.light'} justifyContent={'center'} p={2}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Reminders</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TaskFramer taskList={taskList} status={"reminder"} />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item flex={1} justifyContent={'center'} bgcolor={'warn.light'} p={2}>
          <Input taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask} editTaskOriginal={editTaskOriginal} trigger={trigger}/>
        </Grid>
        <Grid item flex={1} bgcolor={'info.light'} justifyContent={'center'} p={2}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Todo</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TaskFramer taskList={taskList} status={"todo"} />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Layout