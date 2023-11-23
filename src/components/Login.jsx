import React, { useState } from 'react'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
const Login = () => {
  const [pass, setPass] = useState(false)
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <Paper sx={{p:2,maxWidth:"300px"}}>
        <Stack spacing={2}>
           <Typography variant='h6' textAlign={'center'}>Login</Typography>
           <TextField variant='outlined' placeholder='Email' autoComplete="true" />
           <OutlinedInput variant='outlined' type={pass?'password':'text'} autoComplete="true"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setPass(!pass)}
                  edge="end"
                >
                  {pass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            } placeholder='Password' />
           <Button variant='contained'>Login</Button>
           <Typography variant='body2' textAlign={'center'}>Don't have an account?<NavLink to='/signup'>Signup</NavLink></Typography>
         </Stack>
         </Paper>
    </Box>
  )
}

export default Login