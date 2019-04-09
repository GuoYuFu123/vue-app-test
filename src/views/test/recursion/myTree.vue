<template>
    <ul>
        <li v-for='(item,index) in list' :key='index'>
            <p>{{item.tit}}</p>
            <tree-menu :list='item.list'></tree-menu>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'treeMenu',
    data() {
        return {
            scopesDefault: [],
            scopes: []
        }
    },
    props: {
        list: {}
    }
       
}
</script>


 <style scoped>
ul {
    margin-top: 50px;
    padding-left: 50px !important;
}
</style>
