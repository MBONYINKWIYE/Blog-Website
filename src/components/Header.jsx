import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className="hover:bg-gray-100  text-purple-900 flex bg-gray-200 justify-between item-center pt-4">
        <img src={logo} alt='logo Photo' className='h-16 ml-2 rounded-full animate-spin delay-150'/>
        <ul className="flex gap-4 md:gap-14">
           <Link to={`${'/'}`}><li className='hover:font-bold cursor-pointer'>Home</li></Link>
           <Link to={`${'/Blogs'}`}><li className='hover:font-bold cursor-pointer'>My Dashboard</li></Link> 
            <Link to={`${'/Login'}`}><li className='hover:font-bold cursor-pointer'>Login</li></Link>
           <Link to={`${'/Signup'}`}><li className='hover:font-bold cursor-pointer'>Signup</li></Link> 
        </ul>
        <button className='bg-red-500 rounded-full text-white font-bold flex mr-6 items items-center p-1 min-w-max max-h-8'>Subscribe
        <span><FontAwesomeIcon icon={faYoutube} className='ml-3'/></span>
        </button>
    </div>
  )
}

export default Header