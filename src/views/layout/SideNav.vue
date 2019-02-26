<template>
    <div v-if="isTopSideMenu" class='side-nav' :style='isMobile?"width:100%;":isCollapse?"":"width:200px;"'>
        <el-menu                       
            default-active='1-4-1'
            :class='isMobile ? "": "el-menu-vertical-demo"'
            background-color="#364150"
            text-color="#fff"
            active-text-color="#ffd04b"
            @open='handleOpen'
            @close='handleClose'
            :collapse='isCollapse'
            router
            unique-opened 
        >
            <template v-for='menu in menus' >
                <el-menu-item v-if='menu.isLeaf' :index='menu.path' :key='menu.path'>
                    <i v-if='menu.icon' :class='menu.icon'></i>
                    <span slot='title'>{{menu.name}}</span>
                </el-menu-item>
                <el-submenu v-else :index='menu.path' :key='menu.path'>
                    <template slot='title'>
                        <i v-if='menu.icon' :class='menu.icon'></i>
                        <span>{{menu.name}}</span>
                    </template>
                    <template v-for='submenu in menu.children'>
                        <el-menu-item v-if='submenu.isLeaf' :index='submenu.path' :key='submenu.path'>
                            <i v-if='submenu.icon' :class='submenu.icon'></i>
                            <span slot='title'>{{submenu.name}}</span>
                        </el-menu-item>
                        <layout-sidebar-submenu v-else :menu='submenu' :key='submenu'></layout-sidebar-submenu>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'main-side-nav',
    data(){
        return {

        }        
    },
     computed: {
        ...mapGetters(['isCollapse','menus','isMobile', 'isTopSideMenu'])
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
