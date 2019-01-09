// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import echarts from 'echarts';
<<<<<<< HEAD
import 'element-ui/lib/theme-chalk/index.css';
import elementUI from "element-ui";


Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

Vue.use(elementUI);

=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);
>>>>>>> 6493e95d3a18f7614e48e76da9dd4bc01b8e36f2

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
