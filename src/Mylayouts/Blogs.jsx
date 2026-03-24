import { faFileEdit, faNewspaper, faRightFromBracket, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import logo from '../images/logo.png'

const navItems = [
  { to: '/admin/create', label: 'Create Post', icon: faNewspaper },
  { to: '/admin/edit', label: 'Edit Posts', icon: faFileEdit },
  { to: '/admin/delete', label: 'Delete Posts', icon: faTrash },
]

const Blogs = () => {
  const navigate = useNavigate()
  const { adminAuth, setAdminAuth } = useContext(AuthContext)

  const logout = () => {
    setAdminAuth({ isAdmin: false })
    navigate('/admin/login')
  }

  return (
    <div className='min-h-screen bg-slate-100'>
      <header className='bg-slate-950 text-white px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img src={logo} alt='Blog logo' className='w-10 h-10 rounded-full' />
          <div>
            <p className='text-xs uppercase tracking-wider text-violet-300'>Admin dashboard</p>
            <h1 className='font-semibold'>Welcome, {adminAuth?.email || 'Admin'}</h1>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Link to='/' className='text-sm text-slate-300 hover:text-white'>
            View public site
          </Link>
          <button onClick={logout} className='inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg'>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </button>
        </div>
      </header>

      <div className='grid lg:grid-cols-[260px,1fr] min-h-[calc(100vh-72px)]'>
        <aside className='bg-white border-r p-5'>
          <p className='text-xs text-slate-500 uppercase tracking-wide mb-3'>Content tools</p>
          <nav className='space-y-2'>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition ${isActive ? 'bg-violet-100 text-violet-700' : 'text-slate-700 hover:bg-slate-100'}`
                }
              >
                <FontAwesomeIcon icon={item.icon} />
                <span className='font-medium'>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className='p-6 lg:p-10'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Blogs
