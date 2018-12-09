<template>
<div class="container">
    <ul>
        <li v-for='(item,index) in list' :key='index'>               
           <slot v-bind:item="item">
                {{item.name}}
                    <!--{{item.name}}-->
           </slot>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'float',
    data() {
        return  {
            
        }
    },
    props: ["list"]
}
</script>

<style>

</style>
