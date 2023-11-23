import { Logout, MenuOutlined } from '@mui/icons-material'
import { AppBar, Avatar, Box, Chip, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ dispatch }) => {
    return (
        <AppBar position='sticky' component={motion.div} initial={{y:"-100vh"}} animate={{y:0}} transition={{duration:0.5,type:'spring'}}>
            <Toolbar>
                <Grid container alignItems={'center'}>
                    <Grid item flex={1}>
                        <Grid container alignItems={'center'}>
                            <Grid item display={{ xs: "flex", sm: "none" }}>
                                <IconButton onClick={() => dispatch({ type: "toggle" })}><MenuOutlined /></IconButton>
                            </Grid>
                            <Grid item>
                                <Typography variant='h6'>
                                    Taskie
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item>
                                <Grid container>
                                    <Grid item display={{xs:"none",sm:"flex"}}>
                                        <Chip
                                            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                                            label="Logout"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item display={{xs:"flex",sm:"none"}}>
                                        <Avatar>N</Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar