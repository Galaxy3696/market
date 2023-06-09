import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)
import home from './home'
import search from './search'
import detail from './detail'
import user from "./user";
import shopcart from "./shopcart";
export default new Vuex.Store({
   modules:{
    home,
    search,
    detail,
    user,
    shopcart,
   }
})