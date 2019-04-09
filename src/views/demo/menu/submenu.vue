<template>
    <ul class="sg-submenu-box">
        <li class='sg-submenu-case' v-for='(item,index) in list' :key='index'>
            <router-link tag='p' :to='item.path'>
                <!-- <i :class='"el-icon-fa " + item.icon'></i> -->
                <span>{{item.name}}</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'subMenu',
    data() {
        return {}
    },
    props: {
        list: {
            type: Array
        }
    }
}
</script>

<style>
</style>
