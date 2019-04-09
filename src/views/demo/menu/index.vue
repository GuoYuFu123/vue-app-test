<template>
    <div :class='"menu-box " + (collapseFlag ? "menu-box-fold" : "")'>
        <ul class='sg-menu-box'>
            <li class='sg-menu' v-for='(item,index) in menus' :key='index'>
                <p :class='"sg-menu-case " + ( scopes[index] ? "sg-menu-case-unfold": "")'>
                    <i :class='"el-icon-fa " + item.icon' @click='toUnfold'></i>
                    <i @click='changeStatus(index, scopes[index])'>
                        <el-badge is-dot class='sg-menu-badge'>
                            <span>{{item.name}}</span>
                        </el-badge>
                        <i class='sg-menu-num'>99</i>
                        <i :class='"sg-icon-arrow el-icon-arrow-right " + (scopes[index] ? "transform-arrow":"") '></i>
                    </i>
                </p>
                <sub-menu v-if='scopes[index]' :list='item.children'></sub-menu>
            </li>
        </ul>
    </div>
</template>

<script>
//tools
import './menus.less'
//components
import subMenu from './submenu'
export default {
    name: 'menus',
    data() {
        return {
            collapseFlag: false, 
            //缓存数组
            scopes: []
        }
    },
    props: {
        menus: {
            type: Array
        },
        collapse: {
            type: Boolean,
            default: false
        }
    },
    components: {
        subMenu
    },
    methods: {
        changeStatus(index, status) {
            this.initScopes()
            this.$set(this.scopes, index, !status)
        },
        initScopes() {
            this.scopes.forEach((ele, index) => {
                this.$set(this.scopes, index, false)
            })
        },
        toCollapse() {
            this.collapseFlag = true
        },
        toUnfold() {
            this.collapseFlag = false
        },
        init() {
            this.menus.forEach(ele => {
                this.scopes.push(false)
            })
        }
    },
    watch: {
        menus() {
            this.init()
        },
        collapse() {
            this.toCollapse()
        }
    }
}
</script>

<style>
</style>
