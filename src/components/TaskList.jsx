import { Delete, Edit } from '@mui/icons-material'
import { Box, Checkbox, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

const TaskList = ({ taskList,deleteTask,editTask }) => {
    return (
        <Box>
            <Stack justifyContent={'center'} marginBottom={2} spacing={1}>
                {
                    taskList.map((task, ind) => {
                        return <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} key={ind}>
                            <Checkbox />
                            <Typography variant='body1' flexGrow={1} sx={{ wordWrap:"break-word"}}>{ task }</Typography>
                            <IconButton color='success' onClick={(e) => editTask(ind)}>
                                <Edit />
                            </IconButton>
                            <IconButton color='error' onClick={(e) => deleteTask(ind)}>
                                <Delete />
                            </IconButton>
                        </Stack>
                    })}
            </Stack>
        </Box>
    )
}

export default TaskList