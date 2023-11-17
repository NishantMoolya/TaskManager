import { Checkbox } from '@mui/material'
import React from 'react'

const Checktrial = ({ check,trialCheck }) => {
  return (
    <div>
        {[0,1,1,1,0].map((ele,ind) => {
        return <Checkbox key={ind} checked={ele} onClick={(e) => trialCheck(e)} />
})}
    </div>
  )
}

export default Checktrial