import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'https://blogapi-se2j.onrender.com/api/v1'
})
export default axiosClient;