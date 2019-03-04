<template>
<div>
    <div>test2</div> 
    <div>{{number}}</div>

    <test></test>
</div>
  
</template>

<script>
import Test from './test1'
export default {
    name: 'test2',
    data() {
        return {
            number: null
        }
    },
    components: {
        Test
    },
    methods: {
        handleAdd(num) {
            this.number = num;
            console.log(num)
        }
    },
    created() {
        this.$bus.on('add', this.handleAdd)
    },
    beforeDestroy() {
        this.$bus.off('add', this.handleAdd)
    }
}
</script>

<style>

</style>
