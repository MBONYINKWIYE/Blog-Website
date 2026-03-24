import { useEffect, useRef, useState, useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import axiosClient from '../Services/GlobalApi'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const LOGIN_URL = '/users/login'
  const navigate = useNavigate()

  useEffect(() => {
    userRef.current?.focus()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrMsg('')

    try {
      const response = await axiosClient.post(LOGIN_URL, { email, password })
      const accessToken = response?.data?.token
      setAuth({ email, accessToken })
      navigate('/')
    } catch (err) {
      if (err?.response?.status === 401) {
        setErrMsg('Invalid email or password')
      } else {
        setErrMsg('Unable to login right now. Please try again.')
      }
    }
  }

  return (
    <section className='max-w-md mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8'>
      <h1 className='text-2xl font-bold'>Welcome back</h1>
      <p className='text-slate-500 text-sm mt-1'>Sign in to continue reading and interacting.</p>
      {errMsg && <p className='text-red-600 text-sm mt-4'>{errMsg}</p>}

      <form onSubmit={handleSubmit} className='space-y-4 mt-6'>
        <div>
          <label className='block mb-2 text-sm font-medium text-slate-700'>Email</label>
          <input
            ref={userRef}
            type='email'
            className='w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-violet-500'
            placeholder='name@company.com'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-slate-700'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='••••••••'
            className='w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-violet-500'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type='submit' className='w-full bg-violet-600 text-white hover:bg-violet-500 rounded-lg p-3 font-semibold'>
          User Sign in
        </button>

        <p className='text-sm text-slate-500'>
          Don&apos;t have an account?{' '}
          <Link to='/signup' className='text-violet-600 hover:underline'>
            Sign up
          </Link>
        </p>
        <p className='text-sm text-slate-500'>
          Are you an admin?{' '}
          <Link to='/admin/login' className='text-violet-600 hover:underline'>
            Go to admin login
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Login
