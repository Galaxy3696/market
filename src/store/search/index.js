import { reqGetSearchInfo } from "@/apis"
const state={
    searchlist:{},
}
const mutations={
    GETSEARCHLIST(state,searchlist){
        state.searchlist=searchlist
    }
}
const actions={
    async getSearchInfo({commit},params={}){
        let result = await reqGetSearchInfo(params)
        if (result.code == 200){
             commit("GETSEARCHLIST",result.data)
         }
     },
}

//getters:仓库的计算属性
//项目中:vuex的getters,为了简化数据而生。
let getters = {
    //计算新的属性:state,当前小仓库的数据
    goodsList(state) {
         return state.searchList.goodsList;
    },
    //品牌的数据
    trademarkList(state) {
         return state.searchList.trademarkList;
    },
    //商品属性
    attrsList(state) {
         return state.searchList.attrsList;
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}