import { AddTask } from '@mui/icons-material'
import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import React from 'react'

const Sectionbar = ({handleCreateTask}) => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
        <Container sx={{display:"flex", justifyContent:"center",flexDirection:"column",alignItems:"center",gap:2,m:1}}>
            <Typography display={{xs:"none", sm:"none",md:"block"}} variant='h3' color="primary.main">Taskzz : The Task Manager</Typography>
        </Container>
    </Box>
  )
}

export default Sectionbar