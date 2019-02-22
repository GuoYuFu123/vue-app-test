/**
 *@author: fugy
 *@date: 2019.2.22
 *@info: layout
 */
var author = {
    state: {
        isCollapse: false,
        isMobile: false,
        isSideMenu: true 
    },
    getters: {
        isCollapse: state => state.isCollapse,
        isMobile: state => state.isMobile,
        isSideMenu: state => state.isSideMenu
    },
    mutations: {
        //侧导航是否展开
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
        },
        //切换手机模式
        SET_MOBILE(state,flag) {
            state.isMobile = flag
            if (flag && !state.isCollapse) { //手机+没有折叠
                state.isCollapse =  true
                state.isSideMenu = false;
            } 
            if (!flag) { // web
                state.isCollapse = false
                state.isSideMenu = true;
            }
        },
        //是否显示侧导航
        SET_SIDE_MENU(state) {
            state.isSideMenu = !state.isSideMenu
        }
    }
}
export default author