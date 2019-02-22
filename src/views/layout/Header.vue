<template>
    <div class='header'>
        <div class='web-box'>
            <h1 v-if='!isMobile'>
                <img v-if='!isCollapse' class='logo' src='@/assets/logo.png' alt='加载失败'>
                <i class='el-icon-menu switch' @click='switchHandle'></i>
            </h1>
            <h1 v-if='isMobile'>
                <i class='el-icon-menu switch' @click='switchMenuHandle'></i>
            </h1>
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
        }
    },
    computed: {
        ...mapGetters(['isCollapse', 'isMobile'])
    },
    methods: {
        handleSelect() {},
        switchHandle() {
            this.$store.commit('SET_COLLAPSE')
        },
        switchMenuHandle() {
            this.$store.commit('SET_SIDE_MENU')
        }
    }
}
</script>
