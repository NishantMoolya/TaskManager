import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <AppBar position='sticky'sx={{ bottom:0,left:0}}>
        <Toolbar>
            <Grid container>
                <Grid item>
                    <Typography variant='subtitle1'>
                        This is footer
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Footer