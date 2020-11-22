import Vue from 'vue'
import Vuex from 'vuex'
import post from "./posts"
import browse from "./browse"
import user from "./user"

Vue.use(Vuex)
export default function () {
    const Store = new Vuex.Store({
        modules: {
            user,
            browse,
            post
        },
        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    })
    return Store
}