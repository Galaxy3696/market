import { reqCategoryList,reqBannerList } from "@/apis"
import requests from "@/apis/request"
const state={
    categoryList:[],
    bannerList:[]
}
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList=bannerList
    }
}
const actions={
    async categoryList({commit}){
       let result = await reqCategoryList()
       if (result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    },

    async bannerList({commit}){
        let result = await reqBannerList()
        if (result.code == 200){
             commit("BANNERLIST",result.data)
         }
     }
}
const getters={}
export default{
    state,
    mutations,
    actions,
    getters
}