import { Box, Button, Typography } from '@mui/material'
import React, { useReducer } from 'react'
const reducer = (num,action) => {
    switch(action.type){
        case "add": return add(num)
        case 'sub': return sub(num)
    }
}
function add(a){
    return a+1
}
function sub(a){
    return a-1
}
const Counter = () => {
    
    const [num, dispatch] = useReducer(reducer, 0);
  return (
    <Box>
        <Typography>{ num }</Typography>
        <Button onClick={(e) => dispatch({ type:"add"})}>add</Button>
        <Button onClick={(e) => dispatch({type:"sub"})}>sub</Button>
    </Box>
  )
}

export default Counter