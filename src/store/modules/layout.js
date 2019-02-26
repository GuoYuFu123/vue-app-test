/**
 *@author: fugy
 *@date: 2019.2.22
 *@info: layout
 */
var author = {
    state: {
        isCollapse: false,
        isMobile: false,
        isTopSideMenu: false,
        menus: [
            {
                icon: "el-icon-tickets",
                isLeaf: false,
                name: "系统管理",
                path: "/system",
                children: [
                    {
                        icon: "el-icon-tickets",
                        isLeaf: true,
                        name: "demo1",
                        path: "/demo1"
                    },
                    {
                        icon: "el-icon-tickets",
                        isLeaf: true,
                        name: "demo2",
                        path: "/demo2"
                    }
                ]
            }
        ]
    },
    getters: {
        isCollapse: state => state.isCollapse,
        isMobile: state => state.isMobile,
        isTopSideMenu: state => state.isTopSideMenu,
        menus: state => state.menus
    },
    mutations: {
        //侧导航是否展开
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
        },
        //切换手机模式  [true|是 or false|否]
        SET_MOBILE(state,flag) {
            state.isMobile = flag
            if (flag) { //手机+没有折叠
                state.isCollapse =  false
                state.isTopSideMenu = false;
            } 
            if (!flag) { // web
                state.isCollapse = false
                state.isTopSideMenu = true;
            }
        },
        //是否显示顶部导航
        SET_TOP_SIDE_MENU(state) {
            state.isTopSideMenu = !state.isTopSideMenu
        }
    }
}
export default author