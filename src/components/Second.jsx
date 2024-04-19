import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const Forth = () => {
    var[input,setInput]=useState([]);
    var[name,setName]=useState([])
        const changeinput=(e)=>{
            setInput({...input,[e.target.name]:e.target.value})
            console.log(input)
        }
        const inputHandler=()=>{
            console.log("Clicked")
            setName((name)=>[...name,input]);
            console.log(name)
        }
  return (
    <div style={{margin:"5%"}}>
      <TextField variant='outlined' label='Name' name='sname'onChange={changeinput}></TextField>&nbsp;&nbsp;
      <TextField variant='outlined' label='Age' name='sage' onChange={changeinput}></TextField><br/><br/>
      <TextField variant='outlined' label='Place' name='splace' onChange={changeinput}></TextField>&nbsp;&nbsp;
      <TextField variant='outlined' label='Phone' name='sphone' onChange={changeinput}></TextField><br/><br/>
      <Button variant='contained' color='primary' onClick={inputHandler}>Submit</Button>
      <br/><br/>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
            <TableCell style={{color:"blue",fontStyle:"oblique"}}>Name</TableCell>
            <TableCell style={{color:"blue",fontStyle:"oblique"}}>Age</TableCell>
            <TableCell style={{color:"blue",fontStyle:"oblique"}}>Place</TableCell>
            <TableCell style={{color:"blue",fontStyle:"oblique"}}>Phone</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {name.map((val,i)=>{
                    return<TableRow key={i}>
                    <TableCell>{val.sname}</TableCell>
                    <TableCell>{val.sage}</TableCell>
                    <TableCell>{val.splace}</TableCell>
                    <TableCell>{val.sphone}</TableCell>
                </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Forth