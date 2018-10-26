// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import qs from 'qs'
import axios from "axios";
// import Global from '../static/config/global'
import Vue from 'vue'
import App from './App'
import router from './router'
import NavTop from './components/check/NavTop'
import NavBottom from './components/check/NavBottom'
import NavBread from './components/check/NavBread'
import RouteView from './components/check/RouteView'
//具体路线
import SpecificRoute from './components/check/SpecificRoute'
//轮播图
import SowingMap from './components/check/SowingMap'
//路线讨论
import RouteDiscuss from './components/check/RouteDiscuss'
//分页
import PageIndex from './components/check/PageIndex'
import HelloWorld from './components/check/HelloWorld'

//模态框
import moaikuang from './components/edit/moaikuang'

//讨论文本
import Discuss from './components/check/Discuss'

import $ from 'jquery'



// 导入组件


// 注册全局组件
Vue.component('nav-top',NavTop)
Vue.component('nav-bottom',NavBottom)
//面包屑导航
Vue.component('nav-bread',NavBread)
//路线概览
Vue.component('route-view',RouteView)
//具体路线
Vue.component('specific-route',SpecificRoute)
//轮播图
Vue.component('sowing-map',SowingMap)
//路线讨论区
Vue.component('route-discuss',RouteDiscuss)
//分页
// Vue.component('page-index',PageIndex)
//讨论文本
Vue.component('discuss',Discuss)
Vue.component('hello',HelloWorld)

//模态框
Vue.component('modelk',moaikuang)



axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$fetch = fetch
Vue.prototype.$qs = qs


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
