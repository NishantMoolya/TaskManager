import { AccountCircle, DarkMode, FormatListBulleted, Home } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Menubar = () => {
const drawer = (
    <List>
        <ListItem>
        <NavLink to='/home'>
            <ListItemButton>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
            <ListItemText>Home</ListItemText>
            </ListItemButton>
        </NavLink>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircle />
                </ListItemIcon>
            <ListItemText>Profile</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
        <NavLink to='/tasks'>
            <ListItemButton>
                <ListItemIcon>
                    <FormatListBulleted />
                </ListItemIcon>
            <ListItemText>Tasks</ListItemText>
            </ListItemButton>
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to='/create'>
            <ListItemButton>
                <ListItemIcon>
                    <FormatListBulleted />
                </ListItemIcon>
            <ListItemText>Create</ListItemText>
            </ListItemButton>
            </NavLink>
        </ListItem>
        <ListItem>
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
    <Box>
        {drawer}
    </Box>
  )
}

export default Menubar