<template>
<div>
    <div class='box'>
        <el-button @click="change">change</el-button>
        <sg-menu :menus='menus' :collapse='collapse'></sg-menu>
    </div>
</div>    
</template>

<script>
import sgMenu from './index'
import data from '@/data/menus'
export default {
    name: 'test-menu',
    data() {
        return {
            menus: data.menus,
            collapse: false
        }
    },
    components: {
        sgMenu
    },
    methods : {
        change() {
            this.collapse = !this.collapse
        }
    }
}
</script>

<style lang='less' scoped>
.box {
    height: 100%;
}
</style>
