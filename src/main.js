// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueBus from './bus'

import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import elementUI from 'element-ui'

import './style/base.css'
import './style/awesome.less'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(VueBus)
Vue.use(elementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

/**
 * 原理：利用同源页面-storage的监听事件
 * 《h5移动web开发指南》当同源页面的某个页面修改了localStorage,其余的同源页面只要注册了storage事件，就会触发
 */
  ;(function () {
    //当前页面没有sessionStorage【当开启了一个新的tab页是触发】
    if (!sessionStorage.length) {
      localStorage.setItem('getSessionStorage', Date.now());
    };
    //监听storage事件
    window.addEventListener('storage', function (event) {
      /*
        1、目的：触发原页面在localStorage存一下sessionStorage，向其它的tab的页面发送一个信号，触发下面那个key='sessionStorage'的分支
        2、解释：在原来的页面就会触发事件，将sessionStorage存入localStorage，为了触发storage监听，然后清除localStorage，不留痕迹，也就一瞬间的事情
      */
      if (event.key == 'getSessionStorage') {
        // Some tab asked for the sessionStorage -> send it
        console.log(sessionStorage)
        localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
        localStorage.removeItem('sessionStorage');

      } else
      /*
        1、目的：在tabs页面中通过上面的触发，接受sessionStorage的参数
        2、解释：storage监听到key = sessionStorage的取出存入的sessionStorage，循环存入新的标签
      */
      if (event.key == 'sessionStorage' && !sessionStorage.length) {
        // sessionStorage is empty -> fill it

        var data = JSON.parse(event.newValue),
          value;
        console.log('data',data)
        for (let key in data) {
          sessionStorage.setItem(key, data[key]);
        }
      }
    });
  })();
