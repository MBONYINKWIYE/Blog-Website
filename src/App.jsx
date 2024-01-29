import React from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import { createBrowserRouter, NavLink, Routes, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
//layouts
import Blogs from './Mylayouts/Blogs'
import { RouterLayout } from './Mylayouts/RouterLayout'
import Editblog from './components/Editblog'
import Deleteblog from './components/Deleteblog'
import Intropost from './components/Intropost'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path='Login' element={<Login />} />
        <Route path='Signup' element={<Signup />} />
        <Route path='Blogs' element={<Blogs />}>
          <Route path="Intropost" element={<Intropost />}/>
          <Route path="Editblog" element={<Editblog />}/>
          <Route path="Deleteblog" element={<Deleteblog />}/>
        </Route>
        </Route>
        
  )
)


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App