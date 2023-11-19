import { AddTask } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <Box>
      <Grid container flexDirection={'column'} spacing={4} alignItems={'center'}>
        <Grid item xs={12}>
        <Typography display={{xs:"none", sm:"none",md:"block"}} variant='h3' color="primary.main">Taskie : The Task Manager</Typography>
        </Grid>
        <Grid item xs={12}>
          <NavLink to='/create'><Button variant='contained' startIcon={<AddTask />}>Create Task</Button></NavLink>
          <Typography variant='body1'></Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4} justifyContent={'center'}> 
            <Grid item>
              <Card sx={{maxWidth:"330px"}}>
                <CardHeader title="Reminders" subheader="Streamline your day with personalized reminders">
                </CardHeader>
                <CardContent>
                  <Typography variant='body2'>A reminder is a notification designed to help you remember something important, such as an event, task, or appointment. It serves as a clue to bring your attention back to a specific activity or commitment at a predetermined time</Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button>Read More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{maxWidth:"330px"}}>
                <CardHeader title="Todo" subheader="Effortlessly manage tasks and complete it"></CardHeader>
                <CardContent>
                  <Typography variant='body2'>A list or collection of tasks or activities that you need or want to accomplish.To-dos can range from simple everyday activities like grocery shopping or responding to emails to more complex tasks such as completing a project at work or studying for an exam.</Typography>
                </CardContent>
                <CardActions>
                  <Button>Read More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage