<template>
<div>
    <el-button type="primary" @click="open">打开浮层</el-button>
    <v-float :visible="floatVisible">
        <template slot="header">浮层</template>
        这是content</br></br></br></br></br></br></br>
        这是content</br>
        这是content</br></br></br></br></br></br></br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        这是content</br>
        <footer slot="footer" style="text-align: center">
            <el-button type="primary">save </el-button>
        </footer>
    </v-float>
</div>

</template>

<script>
import vFloat from '@/components/Float'
export default {
    name: 'test-float',
    data() {
        return  {
            floatVisible: false,
        }
    },
    components: {
        vFloat
    },
    methods: {
        open() {
            this.floatVisible = !this.floatVisible;
        }
    }
}
</script>

<style>

</style>
