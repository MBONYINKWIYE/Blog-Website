import { useEffect, useState } from 'react'
import React from 'react'
import axiosClient from '../Services/GlobalApi'


const AllPost = () => {
   const [response,setPost] = useState([]);
   
   const BLOG_URL = '/blogs';

   useEffect(()=>{
      getPost();
   },[])


   const getPost = async() =>{
 const response = await axiosClient.get(BLOG_URL)
      
      console.log(response.data.blogs)
      setPost(response.data.blogs)
   }
     
  return (
    <section className='p-[20px] grid gap-[40px] mb-64 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-3'>
      {response.map((item)=>{
        const {_id,title,description,image} = item
        return(
          <article key={_id} className='shadow-lg m-6'>
             <div className='grid'>
              <h2 className='font-bold italic text-lg p-2'>{title}</h2>
              <img src={image} className='h-[300px] w-[100%]'/>
              <div>
                <p className='font-medium font-inherit'>{description}</p>
              </div>
             </div>
          </article>
        )
      })}
    </section>
  )
}

export default AllPost