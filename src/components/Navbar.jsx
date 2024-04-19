import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" style={{textAlign:'left'}}component="div" sx={{ flexGrow: 1 }}>
            NEWS
          </Typography>
          <Button color='inherit'><Link to={'/'}>HOME</Link></Button>
          <Button color='inherit'><Link to={'/s'}>STATE</Link></Button>
          <Button color='inherit'><Link to={'/u'}>ARRAY</Link></Button>
          </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
