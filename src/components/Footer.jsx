import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <AppBar position='static' sx={{ color:"graytext",bgcolor:"black",zIndex:"5"}}>
        <Toolbar>
            <Grid container>
                <Grid item>
                    <Typography variant='subtitle1'>
                        Created by Nishant Moolya
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Footer