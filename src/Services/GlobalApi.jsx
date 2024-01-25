import axios from "axios"

export const geData =()=>{
    
}

const axiosClient = axios.create({
    baseURL: 'https://blogapi-se2j.onrender.com/api/v1'
})
export default axiosClient;

// "http://localhost:5173/Blogs"
// newsFeedApi= e99d8b8813cb4632a4c3d0e2990b930b