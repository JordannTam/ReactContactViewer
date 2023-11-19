import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import { Typography } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />}></Route>
          <Route path="*" element={
            <Typography variant="h3" component="h3">
              <h3> 404 Page not found</h3>
            </Typography>
          } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
