import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography to='/' variant='h6' component={Link} sx={{ flexGrow: 1 }} color='inherit'>
            Coding Blog
          </Typography>
          <Button to='/' component={Link} color='inherit'>
            Home
          </Button>
          <Button to='/' component={Link} color='inherit'>
            Posts
          </Button>
          <Button to='/signin' component={Link} color='inherit'>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
