import { Home } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const Menubar = () => {
const drawer = (
    <List>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
            </ListItemButton>
            <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
            </ListItemButton>
            <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
            </ListItemButton>
            <ListItemText>Home</ListItemText>
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