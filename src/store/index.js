import Vue from 'vue'
import Vuex from 'vuex'
import post from "./posts"
import profiles from "./profiles"
import user from "./user"

Vue.use(Vuex)
export default function () {
    const Store = new Vuex.Store({
        modules: {
            user,
            profiles,
            post
        },
        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    })
    return Store
}