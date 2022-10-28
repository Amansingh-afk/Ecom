import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import './assets/css/main.css';
import './assets/css/util.css';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Header />} />
      <Route path='/' element={<Home />}/>
      <Route element={<Footer />} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
