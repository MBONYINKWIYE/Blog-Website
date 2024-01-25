import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Blogs from './components/Blogs'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App