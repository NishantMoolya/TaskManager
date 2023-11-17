import { Logout } from '@mui/icons-material'
import { AppBar, Avatar, Box, Chip, Grid, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Grid container alignItems={'center'}>
                    <Grid item flex={1}>
                        <Typography variant='h6'>
                            Taskzz
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item>
                                <Typography variant='body1'></Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1'></Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1'></Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1'></Typography>
                            </Grid>
                            <Grid item>
                                <Chip
                                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                                    label="Logout"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar