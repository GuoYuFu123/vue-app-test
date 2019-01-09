<template>
<<<<<<< HEAD
    <div class='hello'>
        <h1>{{ msg }}</h1>
        <router-link to='/testechart'>echarts</router-link>
        <router-link to='/testforce'>force</router-link>
        <router-link to='/testVconsole' replace>testVconsole</router-link>
        <button @click='pushRouter'>跳转push</button>
        <el-button type='primary' @click='replaceRouter'>跳转replace</el-button>
        <router-link to='/demotable'>合并单元格</router-link>
        <el-button type='primary' @click='windowReplace'>windowReplace</el-button>
        <router-link to='/tree'>table tree</router-link>
    </div>
=======
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/testechart">echarts</router-link>
    <router-link to="/testforce">force</router-link>
    <router-link to="/testVconsole">testVconsole</router-link>  
    <router-link to="/testFloat">testFloat</router-link>  
  </div>
>>>>>>> 6493e95d3a18f7614e48e76da9dd4bc01b8e36f2
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome'
        }
    },
    methods: {
        pushRouter() {
            //   this.$router.push({
            //     name:"demo-table",
            //     params: {
            //         id: "234234"
            //     }
            //   })
            this.$router.push({
                name: 'demo-table',
                query: {
                    id: '234234'
                },
                params: {
                    id: '234234'
                }
            })
        },
        replaceRouter() {
            this.$router.replace({
                path: '/demotable',
                query: {
                    id: '234234'
                },
                params: {
                    id: '234234'
                }
            })
        },
        windowReplace() {
            //1、通过window.location.href跳转，会添加一条历史记录
            //    window.location.href = "http://localhost:9999/testechart?guoguo=123"
            //2、通过window.open打开，会重新打开一个窗口
            //   window.open("http://localhost:9999/testechart?guoguo=123");
            //3、替换当前的路由，不会添加历史记录
            //   window.location.replace("http://localhost:9999/testechart?guoguo=123")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
