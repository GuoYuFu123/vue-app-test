<template>
<transition name="slide-right">
<div class="container" v-show="closed">
    <header>
        <slot name="header"></slot>        
        <i class="el-icon-close icon-close" @click="close"></i>
    </header>
    <main>
        <slot></slot>
    </main> 
    <slot name="footer"></slot>    
</div>
</transition>
</template>

<script>
export default {
    name: 'float',
    data() {
        return  {
            closed: false
        }
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        open() {
            this.closed = true
        },
        close() {
            this.closed = false
            this.$emit('close')
        }
    },
    watch:{
        visible() {
            this.closed = true;
        }
    }
}
</script>
<style lang='less' scoped>
.container {
    height: 100%;
    width: 50%;
    background: #fff;
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column ;
    color: #5e6d82;
    border-left: 1px solid #ccc;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    overflow: hidden;  
    header {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        position: relative;
        .icon-close {
            position: absolute;
            top: 16px;
            right: 10px;
            cursor: pointer;
        }
    }
    main {
        flex: 1;
        overflow: auto;
    }
    // footer {
    //     height: 50px;
    //     line-height: 50px;
    //     text-align: center;
    // }
}
.slide-right-enter-active {     
    transition: all 1s ease;
}
.slide-right-leave-active {    
    transition: all 1s ease;
}
.slide-right-enter, .slide-right-leave-to{    
    transform: translateX(100%);
}
</style>
