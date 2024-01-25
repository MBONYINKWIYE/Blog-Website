import logo from '../images/logo.png'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useState} from 'react'




const Blogs = () => {
  const [open,setOpen] = useState(false)

  

  return (
    <div className='flex'>
     <div className={`${open ?'w-72':'w-20'} duration-300 p-5 pt-8 h-screen bg-purple-600 relative`}>
      <FontAwesomeIcon icon={faArrowAltCircleRight} className={`absolute cursor-pointer -right-3 top-9 w-5 bg-white rounded-full ${open && 'rotate-180'} `} onClick={()=> setOpen(!open)} />
      <div className=' gap-x-4 items-center'>
        <img src={logo} alt="LogoIcon" className={`w-7 rounded delay-500 cursor-pointer ${open && 'rotate-[180deg]'}`}/>
        <h1 className={`text-xl text-white origin-left  font-medium text-center ${!open && "scale-0"} `}>DashBoard</h1>
        
      </div>
      <ul>
          <li> Add Blog</li>
        </ul>
     </div>
     <div className='p-7 text-2xl font-semibold flex-1 h-screen bg-gray-100 '>
      <h1>Dashboard</h1>
     </div>
    </div>
  )
}

export default Blogs