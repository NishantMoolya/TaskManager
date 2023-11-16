import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'

const MyAccordion = ({ element,title }) => {
    return (
        <Box m={1}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>
                        { title }
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    { element }
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default MyAccordion