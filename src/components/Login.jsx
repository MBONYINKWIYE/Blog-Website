import { useEffect,useRef, useState, useContext } from 'react'
import AuthContext from "../context/AuthProvider"
import axiosClient from '../Services/GlobalApi'
import React from 'react'
import logo from '../images/logo.png'
import { Link,useNavigate } from 'react-router-dom'


const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();



    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errMsg,setErrMsg] = useState("");
    const [success,setSuccess] = useState(false);
  
    const LOGIN_URL = '/users/login';
    const navigate = useNavigate()

    useEffect(()=>{
        userRef.current,focus();
    },[])

    useEffect(()=>{
        setErrMsg('');
    },[email, password])
  
   const handleSubmit = async(e) =>{
    e.preventDefault();
    try{  
        const response= await axiosClient.post(LOGIN_URL,{email,password})

        const accessToken = response?.data?.token;

       setAuth({email,password,accessToken});

         console.log(response);
         navigate('/Blogs');
    }catch(err){
        if(err.status === 401){
            setErrMsg("Invalid entry");
        }else {
         alert(" Invalid Entry")
            navigate('/Signup');
        }

    }
   
    setEmail("");
       setPassword("");
       setSuccess(true);
   } 

  return (
  <>
<section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mt-[50px] mb-[50px] mx-auto md:h-screen lg:py-0">
      
          <img  src={logo} alt="logo" className="flex  w-40 items-center mb-6 text-2xl font-semibold text-gray-900 rounded-full " />    
      
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign in to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" autoComplete="current-password"  className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                  </div>

                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" autoComplete="current-password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required value={password} onChange={(e)=> setPassword(e.target.value)} />
                  </div>

                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input  aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700" required />
                          </div>

                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>

                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>

                  <button type="submit" className="w-full text-black bg-primary-600 hover:bg-purple-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Dont have an account yet? <Link  to={`${'/Signup'}`} className="font-medium text-primary-600 hover:underline ">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
   </>
  )
}

export default Login