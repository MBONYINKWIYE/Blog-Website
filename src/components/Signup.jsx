import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import axiosClient from '../Services/GlobalApi'

const Signup = () => {
  const [username,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [setErrMsg] = useState("")

  const SIGN_UP_URL = '/users';
  const navigate = useNavigate()

 const handleSubmit = async(e) =>{
  e.preventDefault();
   setEmail("")
     setName("")
     setPhone("")
     setPassword("")
   try{
      const response = await axiosClient.post(SIGN_UP_URL, {username,email,password,phone});
      console.log(response)
     navigate('/Login')
    
   }catch(err){
    if(!err?.response){
      setErrMsg('No server response');
    }else if(err.response.status === 409){
      setErrMsg('User name taken')
    }else if (err.response.status === "failed"){
      alert(err.response.message)
    }
   }
 } 

  return (
    <section className="bg-gray-100 ">
  <div className="flex mt-[50px] mb-[50px] flex-col items-center justify-center px-6 py-8 mx-auto md:h-4/5 lg:py-0">
          <img className="flex rounded-full  w-40 items-center mb-6 text-2xl font-semibold text-gray-900" src={logo} alt="logo" />
           
      
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                      <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Username" required value={username} onChange={(e)=> setName(e.target.value)} />
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required value={password} onChange={(e)=> setPassword(e.target.value)} />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                      <input type="phone" name="phone" placeholder="+03232......" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required value={phone} onChange={(e)=> setPhone(e.target.value)} />
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-light text-gray-500 ">I accept the <a className="font-medium text-primary-600 hover:underline" href='#'>Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button  
            type="submit" className="w-full text-black bg-primary-600 hover:bg-purple-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">Create an account</button>
                  <p className="text-sm font-light text-gray-500">
                      Already have an account? <Link to={`${'/Login'}`} href="#" className="font-medium text-primary-600 hover:underline ">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Signup