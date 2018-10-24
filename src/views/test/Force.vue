<template>
	<div>
			<ul>
					<li v-for='(item, index) in arr' :key="index">{{item}}</li>
			</ul>
			<button @click="froceHandle">强制刷新dom</button>
	</div>
</template>
<script>
export default {
	name: 'force',
	data: function () {
		return {
			arr: [1, 2, 3]
		}
	},
	methods: {
		froceHandle () {
		  /*arr = [1,2,3]  dom循环arr=[1,2,3]*/
			this.arr.push(4); //动态赋值（arr更新，但是dom没有更新）
      /*arr = [1,2,3,4] dom未进行更新 还是arr=[1,2,3]*/
      let dom = document.getElementsByTagName('li');
			/*数组中已经push进值，但是这个时候dom还没有刷新，在这个时候，我要对dom进行操作，所以会报错*/
			// console.log(dom[3]); //dom没有更新，拿不到dom[3],报错
			// dom[3].style.color = "red";


			/*在vue中有Vue.$nextTick进行组件的强制刷新*/
      /*在数组中已经push进值，强制dom刷新，从而拿到刷新之后的值dom[3]
      (刷新之前，dom中的循环数组arr=[1,2,3]，强制刷新之后的dom循环数组为arr=[1,2,3,4])*/
      this.$nextTick(() => {
        alert('v-for渲染已经完成');
        console.log(dom[3]); //dom强制更新，就拿到了dom[3],可以进行操作
        dom[3].style.color = 'red';
      })
		}
	}
}
</script>
<style>

</style>
