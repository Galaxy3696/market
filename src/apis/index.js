import requests from "./request";
import mockRequests from './mockRequests';
export const reqCategoryList=()=>{
    return requests({url:"/product/getBaseCategoryList",method:"get"})
}

export const reqBannerList=()=>{
    return mockRequests({url:"/banner",method:"get"})
}

export const reqFloorList=()=>{
    return mockRequests({url:"/floor",method:"get"})
}

export const reqGetSearchInfo=(params)=>{
    return requests({url:"/list",method:"post",data:params})
}

export const reqDetailList=(skuId)=>{
    return requests({url:`/item/${skuId}`,method:"get"})
}

export const reqAddOrUpdateCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

export const reqCartList = ()=> requests({url:'/cart/cartList',method:"get"})

//获取验证码接口
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});

//注册的接口
export const reqRegister = (data)=>requests({url:`/user/passport/register`,method:'post',data});

//登录的接口:请求体携带参数 phone&&password
export const reqUserLogin = (data)=>requests({url:`/user/passport/login`,method:'post',data});