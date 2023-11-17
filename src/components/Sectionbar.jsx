import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const Sectionbar = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
        <Container sx={{display:"flex", justifyContent:"center",flexDirection:"column",alignItems:"center",gap:2,m:1}}>
            <Typography variant='h3' color="primary.main">Taskzz : The Task Manager</Typography>
            <Button variant='contained'>Create Task</Button>
        </Container>
    </Box>
  )
}

export default Sectionbar