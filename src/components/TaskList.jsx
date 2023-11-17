import { Delete, Edit } from '@mui/icons-material'
import { Box, Checkbox, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./style.css"

    const TaskList = ({ reducedList,dispatch }) => {
    return (
        <Box>
            <Stack justifyContent={'center'} marginBottom={2} spacing={1}>
                {
                    reducedList.map((task) => {
                        return <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} key={task.id}>
                            <Checkbox checked={task.checked} name='checked' onChange={(e) => dispatch({ type:"check",payload:task.id })} />
                            <Typography variant='body1' flexGrow={1} sx={{ wordWrap:"break-word"}} className={task.checked?"line":null} >{ task.task }</Typography>
                            <Typography variant='overline'>{ task.date }</Typography>
                            <IconButton color='success' onClick={(e) => dispatch({ type:"edit",payload:task.id })}>
                                <Edit />
                            </IconButton>
                            <IconButton color='error' onClick={(e) => dispatch({ type:"delete",payload:task.id })}>
                                <Delete />
                            </IconButton>
                        </Stack>
                    })}
            </Stack>
        </Box>
    )
}

export default TaskList