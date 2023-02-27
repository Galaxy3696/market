import requests from "./request";
import mockRequests from './mockRequests';
export const reqCategoryList=()=>{
    return requests({url:"/product/getBaseCategoryList",method:"get"})
}

export const reqBannerList=()=>{
    return mockRequests({url:"/banner",method:"get"})
}
