import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <AppBar position='static' color='error'>
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