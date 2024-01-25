import React, { useState, useEffect } from 'react'
import Search from './Search'
import Intropost from './Intropost'
import Blogs from './Blogs'
import GlobalApi from '../Services/GlobalApi'

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
        <Intropost/>
        
    </>
  )
}

export default Home