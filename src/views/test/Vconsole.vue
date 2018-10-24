<template>
<div>
    <input type="text" v-model="input1">
    <button @click="consoleInput">输出</button>
</div>
</template>

<script>
  export default {
    name: "vconsole",
    data () {
      return {
          input1: "",
      }
    },
    methods: {
        consoleInput() {
            console.log(this.input1);
        }
    }
  }
</script>

<style scoped>

</style>
