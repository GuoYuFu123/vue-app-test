/**
 *@author: fugy
 *@date: 2019.2.22
 *@info: layout
 */
var author = {
    state: {
        isCollapse: false,
        isMobile: false,
    },
    getters: {
        isCollapse: state => state.isCollapse,
        isMobile: state => state.isMobile

    },
    mutations: {
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
        },
        SET_MOBILE(state,flag) {
            state.isMobile = flag
            if (flag && !state.isCollapse) {
                state.isCollapse =  true
            } 
            if (!flag) {
                state.isCollapse = false
            }
        }
    }
}
export default author