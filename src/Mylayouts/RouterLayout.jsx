import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from '../images/logo.png'

export const RouterLayout = () => {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <header className='sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200'>
        <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-3'>
            <img src={logo} alt='Blog logo' className='h-10 w-10 rounded-full' />
            <div>
              <p className='font-bold text-lg'>DevBlog Pro</p>
              <p className='text-xs text-slate-500'>Ideas. Tutorials. Growth.</p>
            </div>
          </Link>

          <nav className='hidden md:flex items-center gap-6'>
            <NavLink to='/' className='hover:text-violet-700'>
              Home
            </NavLink>
            <NavLink to='/login' className='hover:text-violet-700'>
              User Login
            </NavLink>
            <NavLink to='/signup' className='hover:text-violet-700'>
              Sign Up
            </NavLink>
            <NavLink to='/admin/login' className='hover:text-violet-700'>
              Admin
            </NavLink>
          </nav>

          <Link to='/signup' className='inline-flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-500'>
            Start Reading
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </header>

      <main className='max-w-6xl mx-auto px-4 py-8'>
        <Outlet />
      </main>

      <footer className='border-t border-slate-200 bg-white'>
        <div className='max-w-6xl mx-auto px-4 py-5 text-sm text-slate-500 flex items-center justify-between'>
          <span>© {new Date().getFullYear()} DevBlog Pro</span>
          <span className='inline-flex items-center gap-2'>
            <FontAwesomeIcon icon={faPenNib} />
            Built for modern creators
          </span>
        </div>
      </footer>
    </div>
  )
}
