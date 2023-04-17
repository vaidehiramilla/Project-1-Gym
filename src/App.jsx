import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Classes } from './pages/Classes/Classes';
import { Blogs } from './pages/Blogs/Blogs';
import { Navbar } from './navbar';
import { Login } from './Components/Login/login';
import { Register } from './Components/register/Register';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='classes' element={<Classes />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='login' element={<Login />} /> 
        {/* <Route path='register' element={<Register />} />  */}
      </Routes>
    </div>
  )
}

export default App
