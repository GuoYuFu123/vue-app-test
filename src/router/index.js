import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import store from '@/store'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes
})

//后置守卫
router.afterEach((to, from) => {
    if (store.getters.isMobile) {
        if (store.getters.isTopSideMenu) {
            store.commit('SET_TOP_SIDE_MENU')
        }
    }
})
export default router
