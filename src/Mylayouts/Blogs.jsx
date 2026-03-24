import logo from '../images/logo.png'
import { faArrowAltCircleRight, faFileEdit, faNewspaper, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Blogs = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 p-5 pt-8 h-screen bg-purple-600 relative`}>
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className={`absolute cursor-pointer -right-3 top-9 w-5 bg-white rounded-full ${open ? 'rotate-180' : ''}`}
          onClick={() => setOpen(!open)}
        />
        <div className='gap-x-4 items-center'>
          <img src={logo} alt='Logo icon' className={`w-7 rounded delay-500 cursor-pointer ${open ? 'rotate-[180deg]' : ''}`} />
          <h1 className={`text-xl text-white origin-left font-medium text-center ${!open ? 'scale-0' : ''}`}>DashBoard</h1>
        </div>
        <ul className='mt-8'>
          <li>
            <Link to='Intropost'>
              <FontAwesomeIcon icon={faNewspaper} className='text-2xl text-white' />
              <span className={`text-lg text-black hover:text-white block font-medium text-center ${!open ? 'scale-0' : ''}`}>Add Blog</span>
            </Link>
          </li>
          <li>
            <Link to='Editblog'>
              <FontAwesomeIcon icon={faFileEdit} className='text-2xl text-white pt-4 ' />
              <span className={`text-lg text-black hover:text-white font-medium text-center ${!open ? 'scale-0' : ''}`}>Edit Blog</span>
            </Link>
          </li>
          <li>
            <Link to='Deleteblog'>
              <FontAwesomeIcon icon={faTrash} className='text-2xl text-white pt-4 ' />
              <span className={`text-lg text-black font-medium hover:text-white text-center ${!open ? 'scale-0' : ''}`}>Delete Blog</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='p-7 flex-1 h-screen bg-gray-100 '>
        <Outlet />
      </div>
    </div>
  )
}

export default Blogs
