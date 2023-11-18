import { AddTask } from '@mui/icons-material'
import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
        <NavLink to='/create'><Button variant='contained' startIcon={<AddTask />}>Create Task</Button></NavLink>
    </Box>
  )
}

export default HomePage