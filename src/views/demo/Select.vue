<template>
    <div>
        <!-- <v-select :list='list' :label='label' :value='value'></v-select> -->
        报警分类
        <el-select v-model='value' placeholder='请选择'>
            <el-option v-for='item in options' :key='item.value' :label='item.label' :value='item.value'></el-option>
        </el-select>
        <el-popover placement='top-start' width='200' trigger='hover' content='这是一段内容,这是一段内容,这是一段内容,这是一段内容。'>
            <el-input></el-input><el-button type='text'>保存</el-button>
            <el-button slot='reference' type='text'>添加新分类</el-button>
        </el-popover>
        
    </div>
</template>

<script>
import vSelect from '@/components/sagacloudSelect'
export default {
    name: 'select',
    data() {
        return {
            list: [
                {
                    text: '111',
                    value: 'aaa'
                }
            ],
            label: '123',
            value: 'aaa',
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: ''
        }
    },
    components: {
        vSelect
    }
}
</script>

<style>
</style>
