import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const First = () => {
    var [data,setData] = useState()
    var [name,setName] = useState()
    const changename = (e)=>{
        setName(e.target.value)
    }
    const btnclicked=()=>{
        setName(data)
    }
  return (
    <div style={{margin:'10%'}}>
        <br/>
        <Typography variant='h3'>{name}</Typography>
        <br/>
        <TextField variant='outlined' label='name' onChange={changename}></TextField>
        <br/>
        <br/>
        <Button variant='contained' onClick={btnclicked}>CLICK</Button>
        <br/>

    </div>
  )
}

export default First
