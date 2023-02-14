import axios from "axios";

import nProgress from "nprogress"; 
import "nprogress/nprogress.css"
const requests = axios.create({
    baseURL: "\api",
    timeout: 5000,

})
requests.interceptors.request.use((config)=>{
    nProgress.start()
    return config
})

requests.interceptors.response.use((success)=>{
    nProgress.done()
    return success.data
},(error)=>{
    return new Promise.reject(error)
})
export default requests