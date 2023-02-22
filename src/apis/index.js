import requests from "./request";

export const reqCategoryList=()=>{
    return requests({url:"/product/getBaseCategoryList",method:"get"})
}

export const reqBannerList=()=>{
    return requests({url:"/banner",method:"get"})
}
