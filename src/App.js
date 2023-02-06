import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Color from './pages/Color';
import Count from './pages/Count';
import Home from './pages/Home';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='head-container'>
          <Header />
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/count' element={<Count />} />
          <Route path='/color' element={<Color />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
