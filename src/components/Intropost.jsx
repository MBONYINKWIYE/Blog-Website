import React, { useEffect, useState } from 'react'
import axiosClient from '../Services/GlobalApi';
import { useForm } from "react-hook-form"

const Intropost = () => {
   
  const {register, handleSubmit} = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', data.image[0]);
    try{
      const response = await axiosClient.post('/blogs', formData);
      console.log(response);
      alert('blog was created successfully!');
      window.location.reload();
    } catch(err){
      console.log(err)
    }
  }

  return (
    <>
    <section className='mb-6'>
    <div className='bg-gray-100 p-7 gap-x-4 mr-12 ml-12 rounded w-90 '>
      <h1 className='justify-center text-center font-bold text-2xl text-indigo-600'>Create new post</h1>
      <div className='justify-center items-center w-[80%]'>
         <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col text-justify items-right justify-center px-6 py-8 mt-[50px] mb-[50px] mx-auto md:h-screen lg:py-0">
      <label className='font-medium underline'>Blog Title:</label><br />
      <input type="text" 
      placeholder="What's you Blog Title?" 
       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  p-2.5 "
       {...register('title')} /> <br />
      <label>Picture</label>
       <input type="file"
       {...register('image')}/>

      <label className='font-medium underline'>Blog Content</label><br />
      <textarea
      className=' outline-none h-12 rounded bg-gray-200 p-2 border-none'
      {...register('description')}></textarea>
     <button className='bg-purple-500 text-white mt-2 font-bold w-[100px] rounded-full m-[40%]'>Post</button>
     </form>
      </div>
    </div>
   
    </section>
    
    </>
  )
}

export default Intropost
 


  //  {/* <div className='bg-gray-100 w-[90vh] grid-cols-1 grid justify-between'>
    //    {post.map((b,id)=>
    //    <div className='flex flex-col bg-red-100  m-2 p-2 rounded'>
    //      <p>React NAtive news</p>
    //      <img src={profile3} alt=''/>
    //      <p></p>
    //   </div>
    //    <div className='flex flex-col bg-red-100 
    //     m-2 p-2 rounded'>
    //      <p>React NAtive news</p>
    //      <img src={profile3} alt=''/>
    //      <p></p>
    //   </div>
    //    <div className='flex flex-col bg-red-100 m-2 p-2 rounded'>
    //      <p>React NAtive news</p>
    //      <img src={profile3} alt=''/>
    //      <p></p>
    //   </div>
    //    <div className='flex flex-col bg-red-100 
    //     m-2 p-2 rounded'>
    //      <p>React NAtive news</p>
    //      <img src={profile3} alt=''/>
    //      <p></p>
    //   </div>
    //    )}
      
    // </div>  */