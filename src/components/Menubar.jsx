import { AccountCircle, AddBoxRounded, DarkMode, FormatListBulleted, Home } from '@mui/icons-material'
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Menubar = ({ toggle, dispatch }) => {
    const drawer = (
        <List>
            <ListItem divider>
                <NavLink to='/home' className='route'>
                    <ListItemButton>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                </NavLink>
            </ListItem>
            <ListItem divider>
            <NavLink to='/profile' className='route'>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                </ListItemButton>
            </NavLink>
            </ListItem>
            <ListItem divider>
                <NavLink to='/create' className='route'>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddBoxRounded />
                        </ListItemIcon>
                        <ListItemText>Create</ListItemText>
                    </ListItemButton>
                </NavLink>
            </ListItem>
            <ListItem divider>
                <NavLink to='/tasks' className='route'>
                    <ListItemButton>
                        <ListItemIcon>
                            <FormatListBulleted />
                        </ListItemIcon>
                        <ListItemText>Tasks</ListItemText>
                    </ListItemButton>
                </NavLink>
            </ListItem>
            <ListItem divider>
                <ListItemButton>
                    <ListItemIcon>
                        <DarkMode />
                    </ListItemIcon>
                    <Switch />
                </ListItemButton>
            </ListItem>
        </List>
    )
    return (
        <>
            <Drawer open={toggle} onClose={() => dispatch({ type: "toggle" })} anchor='left'>
                <Box onClick={() => dispatch({ type: "toggle" })}>
                    {drawer}
                </Box>
            </Drawer>
            <Box>
                {drawer}
            </Box>
        </>
    )
}

export default Menubar