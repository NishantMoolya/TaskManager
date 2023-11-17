import { AccountCircle, DarkMode, FormatListBulleted, Home } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Menubar = () => {
const drawer = (
    <List>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
            <ListItemText>Home</ListItemText>
            </ListItemButton>
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
            <ListItemButton>
                <ListItemIcon>
                    <FormatListBulleted />
                </ListItemIcon>
            <ListItemText>Tasks</ListItemText>
            </ListItemButton>
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