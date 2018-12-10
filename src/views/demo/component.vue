<template>
 <div>
     <el-button @click="tab">切换</el-button>
     <component ref="com" :is="componentId" @click.native="click"></component>
 </div>
</template>

<script>
import A from './components/A'
import B from './components/B'
export default {
    data() {
        return {
            componentId: 'B',
        }
    },
    components: {
        A, B
    },
    methods: {
        tab() {
            console.log(this.$refs)
            this.componentId = this.componentId == 'A' ? 'B' : 'A'
        },
        click(val) {
            console.log(val)
        }
    }
}
</script>

<style>

</style>
