import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Weixin from '@/components/Weixin'
import '@/assets/css/customized.less'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/weixin',
      name: 'Weixin',
      component: Weixin
    }
  ]
})
