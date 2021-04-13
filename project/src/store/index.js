import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import footerActive from './footerActive'

Vue.use(Vuex)
//这里是主模块
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{footerActive,}
})
export default store 