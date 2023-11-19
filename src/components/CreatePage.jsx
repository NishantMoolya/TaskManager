import { Box, Grid} from '@mui/material'
import React from 'react'
import Input from './Input'

const CreatePage = ({ taskInput,trigger,active,dispatch,dateVal,handleDate,}) => {
    return (
        <Box>
            <Grid container justifyContent={{xs:"center",sm:"flex-start",md:"flex-start"}}>
                <Grid item xs={{xs:12,sm:8,md:8}} sx={{width:{xs:"100%",sm:"auto",md:"auto"}}}>
                <Input taskInput={taskInput} trigger={trigger} active={active} dispatch={dispatch} dateVal={dateVal} handleDate={handleDate} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default CreatePage