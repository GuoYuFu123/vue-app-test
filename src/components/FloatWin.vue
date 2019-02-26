<template>
    <transition name='slide-right'>
        <div class='container' v-show='closed'>
          12313
            <main>
                <slot></slot>
            </main>
            <slot name='footer'></slot>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'float-win',
    data() {
        return {
            closed: true
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    position: absolute;
    min-width: 160px;
    max-width: 275px;
    height: 300px;
    width: 275px;
    z-index: 9999;
    background: #6e6e6e;
    top: 45px;
    right: 0px;
    border: 1px solid #eee;
    box-shadow: 5px 5px rgba(102,102,102,.1);
} 
</style>