import axios from "axios";

import nProgress, { configure } from "nprogress"; 
import "nprogress/nprogress.css"

import store  from "@/store";
const requests = axios.create({

    baseURL: "\api",
    timeout: 5000,

})
requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_tokens)
    {
        config.headers.UserTmpId = store.state.detail.uuid_tokens
    }
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