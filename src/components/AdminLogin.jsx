import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import logo from '../images/logo.png'

const AdminLogin = () => {
  const navigate = useNavigate()
  const { setAdminAuth } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@blog.com'
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'Admin@123'

  const onSubmit = (e) => {
    e.preventDefault()

    if (email === adminEmail && password === adminPassword) {
      setAdminAuth({ isAdmin: true, email })
      navigate('/admin')
      return
    }

    setError('Invalid admin credentials.')
  }

  return (
    <section className='min-h-screen bg-slate-950 text-white flex items-center justify-center p-6'>
      <div className='w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl'>
        <img src={logo} alt='Blog logo' className='w-16 h-16 rounded-full mx-auto mb-4' />
        <h1 className='text-2xl font-bold text-center'>Admin Portal</h1>
        <p className='text-slate-300 text-sm text-center mt-2'>Restricted area for content management.</p>

        {error && <p className='mt-4 text-red-400 text-sm'>{error}</p>}

        <form onSubmit={onSubmit} className='mt-6 space-y-4'>
          <div>
            <label className='block mb-2 text-sm text-slate-300'>Admin email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:ring-2 focus:ring-violet-500'
              placeholder='admin@blog.com'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-sm text-slate-300'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:ring-2 focus:ring-violet-500'
              placeholder='••••••••'
              required
            />
          </div>
          <button type='submit' className='w-full rounded-lg bg-violet-600 hover:bg-violet-500 transition p-3 font-semibold'>
            Sign in as admin
          </button>
        </form>

        <p className='text-sm text-slate-400 mt-6 text-center'>
          Back to public blog?{' '}
          <Link to='/' className='text-violet-400 hover:underline'>
            Go home
          </Link>
        </p>
      </div>
    </section>
  )
}

export default AdminLogin
