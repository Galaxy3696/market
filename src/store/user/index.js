import { reqGetCode,reqRegister} from "@/apis"
let state = {
    code: ""
}
let mutations = {
    CHANGECODE(state, code) {
        state.code = code
    }
}
let actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit("CHANGECODE", result.data)
        }
    },

    async userRegister({ commit }, user) {
        let result = await reqRegister(user)
        if(result.status=='200'){
            return 'ok'
        }
        else return Promise.reject(new Error('fail'))

    },

}
let getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}