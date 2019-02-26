<template>
    <div class='header'>
        <div class='web-box'>
            <h1 v-if='!isMobile'>
                <img v-if='!isCollapse' class='logo' src='@/assets/logo.png' alt='加载失败'>
                <i class='el-icon-menu switch' @click='switchHandle'></i>
            </h1>
            <h1 v-if='isMobile'>
                <img class='logo' src='@/assets/logo.png' alt='加载失败'>                
            </h1>
            <ul class='setting'>
                <li>
                    <el-badge :value='2' class='item'>
                        <i class='icon el-icon-setting'></i>
                    </el-badge>
                    <!-- <v-float-win></v-float-win> -->
                </li>
                <li>
                    <el-badge :value='12' class='item'>
                        <i class='icon el-icon-rank'></i>
                    </el-badge>
                     <!-- <v-float-win></v-float-win> -->
                </li>
                <li>
                    <el-badge :value='6' class='item'>
                        <i class='icon el-icon-bell'></i>
                    </el-badge>
                     <!-- <v-float-win></v-float-win> -->
                </li>
                <i v-if='isMobile' class='el-icon-menu switch' @click="topSideSwitchHandle"></i>  
            </ul>
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vFloatWin from '@/components/FloatWin'
export default {
    name: 'main-header',
    data() {
        return {
            activeIndex: '1',
            settingArr: [
                {

                }
            ]
        }
    },
    computed: {
        ...mapGetters(['isCollapse', 'isMobile'])
    },
    components: {
        vFloatWin
    },
    methods: {
        handleSelect() {},
        switchHandle() {
            this.$store.commit('SET_COLLAPSE')
        },
        topSideSwitchHandle() {
            this.$store.commit('SET_TOP_SIDE_MENU')
        }
    }
}
</script>
