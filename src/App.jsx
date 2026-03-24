import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Blogs from './Mylayouts/Blogs'
import { RouterLayout } from './Mylayouts/RouterLayout'
import Editblog from './components/Editblog'
import Deleteblog from './components/Deleteblog'
import Intropost from './components/Intropost'
import AdminRoute from './components/AdminRoute'
import AdminLogin from './components/AdminLogin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>

      <Route path='admin/login' element={<AdminLogin />} />
      <Route element={<AdminRoute />}>
        <Route path='admin' element={<Blogs />}>
          <Route index element={<Intropost />} />
          <Route path='create' element={<Intropost />} />
          <Route path='edit' element={<Editblog />} />
          <Route path='delete' element={<Deleteblog />} />
        </Route>
      </Route>
    </>,
  ),
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
