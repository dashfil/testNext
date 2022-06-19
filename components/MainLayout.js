import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Login from './Login';


export default function MainLayout({children}) {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Тестовое задание
          </Typography>
          <Login></Login>
        </Toolbar>
      </AppBar>
    </Box>
    <main>
    {children}
    </main>
    </>
  );
}
