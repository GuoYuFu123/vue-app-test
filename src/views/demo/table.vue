<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border fixed @header-dragend='handle'>
      <el-table-column resizable prop="date" label="日期" width="180"></el-table-column>
      <el-table-column resizable  prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column resizable prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "table-border",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
      handle(newW, old ,col, event) {
          console.log(newW,old, col, event)
          return false
      }
  },
  mounted() {
      let dom = document.querySelectorAll('thead tr th')
      console.log(dom)
  }
};
</script>

<style>
</style>
