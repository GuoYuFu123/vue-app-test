<template>
    <div>
        <h1>****以下子组件触发事件*********</h1>
        <p>{{num}}</p>
        <el-button @click="add">add</el-button>
    </div>
</template>

<script>
export default {
    name: 'test1',
    data() {
        return {
            num: 0,
        }
    },
    methods: {
        add() {
            ++this.num;
            this.$bus.emit('add', this.num)
        }
    },
    created() {
        console.log(this.$bus)
    },
}
</script>

<style>

</style>
