import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test-echarts',
      component: resolve => require(['../components/test-echarts'], resolve),
    }
  ]
})
