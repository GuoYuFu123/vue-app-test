<template>
<div id="layout">
    <v-header></v-header>
    <div class="main-con">
        <v-side-nav></v-side-nav>
        <div class="con">
            <v-tag></v-tag>
            <div class="content">
                content
            </div>
        </div>
    </div>
</div>    
</template>

<script>
import ResizeMixin from './mixin/ResizeHandler'

import vHeader from './Header'
import vSideNav from './SideNav'
import vTag from './Tag'
import '@/style/layout.less'

export default {
    name: 'layout',
    components : {
        vHeader,
        vSideNav,
        vTag
    },
    mixins: [ResizeMixin],

}
</script>