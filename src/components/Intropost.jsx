import React, { useEffect, useState } from 'react'
import profile3 from '../images/profile3.jpeg'
import Blogs from './Blogs';

const Intropost = () => {
   const[title,setTitle] = useState("");
   const[description,setArea] = useState("");
   const[image,setImage] = useState("");

    const handleSubmit = e =>{
      e.preventDefault();
    
      setTitle("");
      setArea("");
      setImage("");
      
    }


  return (
    <>
    <section className='bg-gray-'>
     <form onSubmit={handleSubmit} className="flex  flex-col text-justify items-right justify-center px-6 py-8 mt-[50px] mb-[50px] mx-auto md:h-screen lg:py-0">
      <h1>Create new Blog</h1>
      <label className='font-medium underline'>Blog Title:</label><br />
      <input type="text" 
      placeholder="What's you Blog Title?" 
      value={title} 
      onChange={(e)=> setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 " /> <br />
      <label>Picture</label>
       <input type="file" value={image} 
       onChange={(e) => setImage(e.target.value)}
       />

      <label className='font-medium underline'>Blog Content</label><br />
      <textarea
      required
      value={description}
      onChange={(e)=> setArea(e.target.value)}
      className='w-[60%] outline-none h-12 rounded bg-gray-200 p-2 border-none'
      ></textarea>
     <button className='bg-purple-500 text-white mt-2 font-bold w-[100px] rounded-full '>Post</button>
     </form>
     {/* <div className='bg-gray-100 w-[90vh] grid-cols-1 grid justify-between'>
       {post.map((b,id)=>
       <div className='flex flex-col bg-red-100  m-2 p-2 rounded'>
         <p>React NAtive news</p>
         <img src={profile3} alt=''/>
         <p></p>
      </div>
       <div className='flex flex-col bg-red-100 
        m-2 p-2 rounded'>
         <p>React NAtive news</p>
         <img src={profile3} alt=''/>
         <p></p>
      </div>
       <div className='flex flex-col bg-red-100 m-2 p-2 rounded'>
         <p>React NAtive news</p>
         <img src={profile3} alt=''/>
         <p></p>
      </div>
       <div className='flex flex-col bg-red-100 
        m-2 p-2 rounded'>
         <p>React NAtive news</p>
         <img src={profile3} alt=''/>
         <p></p>
      </div>
       )}
      
    </div>  */}
    </section>
    
    </>
  )
}

export default Intropost