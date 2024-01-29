import { useState,useEffect } from "react";
import React from 'react'
import axiosClient from "../Services/GlobalApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Deleteblog = () => {
  const [response,setPost] = useState([])
   
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
    <tbody>
    {response.map((item)=>{
      const {_id,title,description,image} = item
      return(
        <tr key={_id} className='shadow-lg m-6 p-6'>
           
           
            <td>{title}</td>
            <td>{description}</td>
           <span>
            <FontAwesomeIcon icon={faTrash} onClick={async() =>{
              try {
                const postList = await axiosClient.delete(`/blogs/${_id}`)
                setPost(postList);

                console.log("is deleting....")
                window.location.reload();
            
              } catch (error) {

                console.log(error)
              }
               
            }
           } className=""/>
           </span>
        </tr>
      )
    })}
  </tbody>
  )
}

export default Deleteblog