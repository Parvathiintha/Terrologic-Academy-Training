import axios from 'axios'

const axiosClient =axios.create({
    baseURL:"http://jsonplaceholder.typicode.com",
    headers:{
        "content-Type":"application/json"
    },
})
export default axiosClient;