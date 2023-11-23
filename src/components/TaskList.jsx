import { Delete, Edit, MoreVert } from '@mui/icons-material'
import { Box, Checkbox, Grid, IconButton, ListItemText, Menu, MenuItem, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const TaskList = ({ reducedList, dispatch }) => {
    const [anchor, setAnchor] = useState(null);
    const handleClick = (e) => setAnchor(e.currentTarget);
    const open = Boolean(anchor);
    const handleClose = () => setAnchor(null);
    return (
        <Box>
            <Stack justifyContent={'center'} marginBottom={2} spacing={1}>
                {
                    reducedList.map((task) => {
                        const { date } = task;
                        return <Grid container direction={'column'} justifyContent={'center'} key={task._id} component={motion.div}>
                            <Grid item xs={12}>
                                <Grid container direction={'row'} alignItems={'center'}>
                                    <Grid item xs={1} marginRight={1}>
                                        <Checkbox size='small' checked={task.checked} name='checked' onChange={(e) => dispatch({ type: "check", payload: task._id })} />
                                    </Grid>
                                    <Grid item flex={1}>
                                        <Typography variant='body1' flexGrow={1} marginLeft={"2px"} sx={{ wordWrap: "break-word" }} className={task.checked ? "line" : null} >{task.task}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container alignItems={'center'} justifyContent={'space-evenly'} display={{ xs: "none", sm: "flex" }}>
                                            <Grid item xs={1}>
                                                <NavLink to='/create'>
                                                    <IconButton color='success' onClick={(e) => dispatch({ type: "edit", payload: task._id })}>
                                                        <Edit />
                                                    </IconButton>
                                                </NavLink>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <IconButton color='error' onClick={(e) => dispatch({ type: "delete", payload: task._id })}>
                                                    <Delete />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems={'center'} justifyContent={'space-evenly'} display={{ xs: "flex", sm: "none" }}>
                                            <Grid item xs={1}>
                                                <IconButton onClick={handleClick}>
                                                    <MoreVert />
                                                </IconButton>
                                                <Menu open={open} onClose={handleClose}
                                                      anchorEl={anchor}
                                                 anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left'}}

                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left'}}>
                                                    <MenuItem onClick={handleClose} dense>
                                                        <NavLink to='/create'>
                                                            <IconButton color='success' onClick={(e) => dispatch({ type: "edit", payload: task._id })}>
                                                                <Edit />
                                                            </IconButton>
                                                        </NavLink>
                                                         <ListItemText>Edit</ListItemText>
                                                   </MenuItem>
                                                    <MenuItem onClick={handleClose}>
                                                        <IconButton color='error' onClick={(e) => dispatch({ type: "delete", payload: task._id })}>
                                                            <Delete />
                                                        </IconButton>
                                                        <ListItemText>Delete</ListItemText>
                                                    </MenuItem>
                                                </Menu>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1} alignSelf={'flex-end'}>
                                <Grid container marginRight={3}>
                                    <Grid item>
                                        <Typography variant='overline'>{`${date}`}</Typography>
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