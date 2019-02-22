<template>
    <div class='header'>
        <div class='web-box'>
            <h1 v-if='!isMobile'>
                <img v-if='!isCollapse' class='logo' src='@/assets/logo.png' alt='加载失败'>
                <i class='el-icon-menu switch' @click='switchHandle'></i>
            </h1>
            <div v-if='!isMobile' class='main-nav'>
                <el-menu
                    :default-active='activeIndex'
                    class='el-menu-demo'
                    background-color='#545c64'
                    text-color='#fff'
                    active-text-color='#ffd04b'
                    mode='horizontal'
                    @select='handleSelect'
                >
                    <el-menu-item v-for="(item,index) in menuArr" :key='index' :index='item.index'>{{item.name}}</el-menu-item>
                </el-menu>
            </div>
            <el-dropdown v-if='isMobile'>
                <span class='el-dropdown-link'>
                    <i class='el-icon-menu switch'></i>
                </span>
                <el-dropdown-menu slot='dropdown'>
                    <el-dropdown-item v-for='(item,index) in menuArr' :key='index'>{{item.name}}</el-dropdown-item>
                  
                </el-dropdown-menu>
            </el-dropdown>
            <div class='setting'>
                <i class='el-icon-setting'></i>
                <i class='el-icon-rank'></i>
                <i class='el-icon-bell'></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'main-header',
    data() {
        return {
            activeIndex: '1',
            menuArr: [
                {
                    index: '1',
                    name: '处理中心'
                },{
                    index: '2',
                    name: '报警中心'
                },{
                    index: '3',
                    name: '消息中心'
                },{
                    index: '4',
                    name: '订单管理'
                },{
                    index: '5',
                    name: '设置管理'
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['isCollapse', 'isMobile'])
    },
    methods: {
        handleSelect() {},
        switchHandle() {
            this.$store.commit('SET_COLLAPSE')
        }
    }
}
</script>
