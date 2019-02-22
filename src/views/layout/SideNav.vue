<template>
    <div v-if='isSideMenu' class='side-nav'>
        <el-menu            
            default-active='1-4-1'
            class='el-menu-vertical-demo'
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @open='handleOpen'
            @close='handleClose'
            :collapse='isCollapse'
        >
            <el-submenu index='1'>
                <template slot='title'>
                    <i class='el-icon-location'></i>
                    <span slot='title'>导航一</span>
                </template>                
                    <el-menu-item index='1-1'>选项1</el-menu-item>
                    <el-menu-item index='1-2'>选项2</el-menu-item>               
                    <el-menu-item index='1-3'>选项3</el-menu-item>               
                    <el-menu-item index='1-4-1'>选项1</el-menu-item>               
            </el-submenu>
            <el-menu-item index='2'>
                <i class='el-icon-menu'></i>
                <span slot='title'>导航二</span>
            </el-menu-item>
            <el-menu-item index='3'>
                <i class='el-icon-document'></i>
                <span slot='title'>导航三</span>
            </el-menu-item>
            <el-menu-item index='4'>
                <i class='el-icon-setting'></i>
                <span slot='title'>导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'main-side-nav',
    data(){
        return {
            // isCollapse: false
        }        
    },
     computed: {
        ...mapGetters(['isCollapse', 'isSideMenu'])
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
<style lang="less">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100%;
  }
</style>
