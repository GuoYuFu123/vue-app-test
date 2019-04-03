<template>
    <div>
        <el-input v-model="input"></el-input>
        <el-button type='primary' @click='setSession'>设置session</el-button>
        <el-button type='primary' @click='setSession1'>设置session</el-button>
        <el-button type='primary' @click='setSession2'>设置session</el-button>
        <el-button type='primary' @click='setSession3'>设置session</el-button>
        <el-button type='primary' @click='setSession4'>设置session</el-button>
        <el-button type='primary' @click='setSession5'>设置session</el-button>
    </div>    
</template>

<script>
export default {
    name: 'session',
    data() {
        return {
            input:''
        }
    },
    methods: {
        setSession() {
            sessionStorage.setItem('key0', this.input+'');
        },
        setSession1() {
            sessionStorage.setItem('key1', this.input+'');
        },
        setSession2() {
            sessionStorage.setItem('key2', this.input+'');
        },
        setSession3() {
            sessionStorage.setItem('key3', this.input+'');
        },
        setSession4() {
            sessionStorage.setItem('key4', this.input+'');
        },
        setSession5() {
            sessionStorage.setItem('key5', this.input+'');
        },
    }
}
</script>

<style>

</style>
