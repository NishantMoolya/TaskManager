import { Delete, Edit } from '@mui/icons-material'
import { Box, Checkbox, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./style.css"

    const TaskList = ({ reducedList,dispatch }) => {
    return (
        <Box>
            <Stack justifyContent={'center'} marginBottom={2} spacing={1}>
                {
                    reducedList.map((task) => {
                        const { date } = task;
                        // return <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} key={task.id}>
                        //     <Checkbox checked={task.checked} name='checked' onChange={(e) => dispatch({ type:"check",payload:task.id })} />
                        //     <Typography variant='body1' flexGrow={1} sx={{ wordWrap:"break-word"}} className={task.checked?"line":null} >{ task.task }</Typography>
                        //     <Typography variant='overline'>{`${date.$D}/${date.$M+1}/${date.$y}`}</Typography>
                        //     <IconButton color='success' onClick={(e) => dispatch({ type:"edit",payload:task.id })}>
                        //         <Edit />
                        //     </IconButton>
                        //     <IconButton color='error' onClick={(e) => dispatch({ type:"delete",payload:task.id })}>
                        //         <Delete />
                        //     </IconButton>
                        // </Stack>
                        return <Grid container direction={'column'} justifyContent={'center'}>
                            <Grid item xs={12}>
                            <Grid container direction={'row'} alignItems={'center'}>
                            <Grid item xs={1} marginRight={1}>
                            <Checkbox checked={task.checked} name='checked' onChange={(e) => dispatch({ type:"check",payload:task.id })} />
                            </Grid>
                            <Grid item flex={1}>
                            <Typography variant='body1' flexGrow={1} sx={{ wordWrap:"break-word"}} className={task.checked?"line":null} >{ task.task }</Typography>
                            </Grid>
                            <Grid item xs={1}>
                            <IconButton color='success' onClick={(e) => dispatch({ type:"edit",payload:task.id })}>
                                <Edit />
                            </IconButton>
                            </Grid>
                            <Grid item xs={1}>
                            <IconButton color='error' onClick={(e) => dispatch({ type:"delete",payload:task.id })}>
                                 <Delete />
                            </IconButton>
                            </Grid>
                            </Grid>
                            </Grid>
                            <Grid item xs={1} alignSelf={'flex-end'}>
                               <Grid container marginRight={3}>
                               <Grid item>
                               <Typography variant='overline'>{`${date.$D}/${date.$M+1}/${date.$y}`}</Typography>
                               </Grid>
                               </Grid>
                            </Grid>
                        </Grid>
                    })}
            </Stack>
        </Box>
    )
}

export default TaskList