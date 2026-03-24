import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosClient from '../Services/GlobalApi'

const Signup = () => {
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const SIGN_UP_URL = '/users'
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    try {
      await axiosClient.post(SIGN_UP_URL, { username, email, password, phone })
      navigate('/login')
    } catch (err) {
      if (!err?.response) {
        setMessage('No server response')
      } else if (err.response.status === 409) {
        setMessage('Username is already taken')
      } else {
        setMessage('Registration failed, please try again')
      }
    }
  }

  return (
    <section className='max-w-md mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8'>
      <h1 className='text-2xl font-bold'>Create your account</h1>
      <p className='text-slate-500 text-sm mt-1'>Join the community and save your preferences.</p>
      {message && <p className='text-red-600 text-sm mt-4'>{message}</p>}

      <form className='space-y-4 mt-6' onSubmit={handleSubmit}>
        <div>
          <label className='block mb-2 text-sm font-medium text-slate-700'>User name</label>
          <input
            type='text'
            className='w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-violet-500'
            placeholder='Username'
            required
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-slate-700'>Email</label>
          <input
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
            placeholder='••••••••'
            className='w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-violet-500'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-slate-700'>Phone number</label>
          <input
            type='tel'
            placeholder='+1 ...'
            className='w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-violet-500'
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type='submit' className='w-full bg-violet-600 text-white hover:bg-violet-500 rounded-lg p-3 font-semibold'>
          Create account
        </button>
        <p className='text-sm text-slate-500'>
          Already have an account?{' '}
          <Link to='/login' className='text-violet-600 hover:underline'>
            Login
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Signup
