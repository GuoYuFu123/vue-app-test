<template>
  <div>
    2313
    <div id="myChart" style="width: 500px;height: 500px;"></div>
  </div>
</template>

<script>
export default {
  name: "echart",
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        /*标题*/
        title: {
          text: 'test 测试',
          padding: 5,
          backgroundColor: "cyan",
        },
        /*图例组件*/
        legend: {
          type: "plain",
          borderColor: "red"
        },
        /*直角坐标系中绘制网格*/
        grid:{
          // left: "",
          // backgroundColor: "#000",
          tooltip: {
            show: true,

          }
        },
        /*全局提示*/
        tooltip: {},
        /*直角坐标系 grid 中的 x 轴*/
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          position: "bottom"
        },
        /*直角坐标系 grid 中的 x 轴*/
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  },
  mounted () {
    this.drawLine();
  }
}
</script>

<style scoped>

</style>
