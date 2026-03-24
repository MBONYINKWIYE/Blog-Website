import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link, Outlet } from 'react-router-dom'
import logo from '../images/logo.png'

export const RouterLayout = () => {
  return (
    <>
      <div className='hover:bg-gray-100 text-purple-900 flex bg-gray-200 justify-between item-center pt-4'>
        <img src={logo} alt='Blog logo' className='h-16 ml-2 rounded-full animate-spin delay-150' />
        <ul className='flex gap-4 md:gap-14'>
          <li>
            <Link to='/' className='hover:font-bold cursor-pointer'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/Login' className='hover:font-bold cursor-pointer'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/Signup' className='hover:font-bold cursor-pointer'>
              Signup
            </Link>
          </li>
        </ul>
        <button className='bg-red-500 rounded-full text-white font-bold flex mr-6 items-center p-1 min-w-max max-h-8'>
          Subscribe
          <span>
            <FontAwesomeIcon icon={faYoutube} className='ml-3' />
          </span>
        </button>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}
