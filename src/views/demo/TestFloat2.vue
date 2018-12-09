<template>
<div>
    <v-float1 :list='list'>
        <template slot-scope="slotProps">{{slotProps.item.name}}</template>    
    </v-float1>
</div>

</template>

<script>
import vFloat1 from '@/components/Float1'
export default {
    name: 'test-float',
    data() {
        return  {
            list:[{
                id: 0,
                name: 'zhangsan'
            },{
                id: 1,
                name: 'lisi'
            }]
        }
    },
    components: {
        vFloat1
    }
}
</script>

<style>

</style>
