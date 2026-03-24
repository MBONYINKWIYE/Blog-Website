import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Blogs from './Mylayouts/Blogs'
import { RouterLayout } from './Mylayouts/RouterLayout'
import Editblog from './components/Editblog'
import Deleteblog from './components/Deleteblog'
import Intropost from './components/Intropost'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouterLayout />}>
      <Route index element={<Home />} />
      <Route path='Login' element={<Login />} />
      <Route path='Signup' element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route path='Blogs' element={<Blogs />}>
          <Route path='Intropost' element={<Intropost />} />
          <Route path='Editblog' element={<Editblog />} />
          <Route path='Deleteblog' element={<Deleteblog />} />
        </Route>
      </Route>
    </Route>,
  ),
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
