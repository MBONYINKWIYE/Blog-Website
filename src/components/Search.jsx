
import React, { useState } from 'react'
import profile2 from '../images/profile2.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Intropost from './Intropost'
const Search = () => {
  const [activeIndex,SetActiveIndex] = useState(0)
  const tags =[
    {
      id : Math.random(),
      name:"All"
    },
    {
      id : Math.random(),
      name:"React",
    },
    {
      id : Math.random(),
      name:"React Native"
    },
    {
      id : Math.random(),
      name:"MongoDb",
    },
    {
      id : Math.random(),
      name:"IU/UX",
    }
  ];
 
  return (
    <div className='flex justify-center flex-col px-[70] mt-8  md:px-[150px]'>
      <h1 className='bg-purple-100 mt-[-18px] mb-3'><marquee behavior="relative" direction="left" className='h-8 text-[20px]  font-semibold bg-blue'>This is Web Blog for developers and other peaple who are interested with coding development trends!! </marquee>
        <img src={profile2} alt="Photo" className=' w-[100%] '/></h1>
        <div className='bg-white shadow-1g p-3 rounded-lg mt-[-20px] mx-[25%]'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[20px] text-gray-400' />
            <input type="text" placeholder='Search...' className='outline-none' />
        </div>
        <div className='flex gap-10 justify-center mt-5'>
          {tags.map((item,index) =>(
            <ul  onClick={()=>SetActiveIndex(index)} key={item.id} className={`${index==activeIndex? 'bg-purple-500 text-white':null} p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-indigo-900`}>
              <li className='font-bold'>{item.name}</li>
            </ul>
          ))}
        </div>
        <button>Add Blog</button>
    </div>
  )
}

export default Search