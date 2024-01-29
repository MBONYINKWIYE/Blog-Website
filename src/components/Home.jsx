import React, { useState, useEffect } from 'react'
import Search from './Search'
import Intropost from './Intropost'
import Blogs from '../Mylayouts/Blogs'
import GlobalApi from '../Services/GlobalApi'
import AllPost from './AllPost'

function Home() {

//   useEffect(()=>{
//     getPost();
// },[])

// const getPost =()=>{
//   GlobalApi.getPost.then(resp => {
//     resp.map((item)=>{


//     })
//   })
// }

  return (
    <>
     
        <Search />
        <AllPost />
        
    </>
  )
}

export default Home