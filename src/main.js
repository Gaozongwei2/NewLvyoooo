// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
// 模态框
import Mpush from './components/Mpush'
import motaikuang from './components/personalcenter/moaikuang'
import MoTaiKuang from './components/MoTaiKuang'
import moaikuang from './components/strategy/edit/moaikuang'
import Mwarning from './components/MWarning'


// 测试组件
import TestX from './components/TestX'
import TestRadioButton from './components/TestRadioButton'
// 导入组件
import MyMessage from './components/personalcenter/MyMessage'
import Lunbotu from './components/lunbotu'
import ContentLeft from './components/ContentLeft'
import ContentRight from './components/ContentRight'
import test from './components/personalcenter/test'
import Footer1 from './components/Footer'
// import Newest from './components/Newest'
// import HotTravelnote from './components/HotTravelnote'

// 登录，注册
import Login from './components/login/Login'
import Regist from './components/login/Regist'

// 游记部分(梁)
import LoginMain from './components/travelnote/LoginMain'
import RegistMian from './components/travelnote/RegistMain'
import SearchPages from './components/travelnote/SearchPages'
import WriteNotes from './components/travelnote/WriteNotes'
import TravelNotes from './components/travelnote/TravelNotes'
import TravelMian from './components/travelnote/TravelMain'
// 攻略部分(姜)
import NavTop from './components/strategy/check/NavTop'
import NavBottom from './components/strategy/check/NavBottom'
import NavBread from './components/strategy/check/NavBread'
import RouteView from './components/strategy/check/RouteView'
//具体路线
import SpecificRoute from './components/strategy/check/SpecificRoute'
//轮播图
import SowingMap from './components/strategy/check/SowingMap'
//路线讨论
import RouteDiscuss from './components/strategy/check/RouteDiscuss'
//分页
import PageIndex from './components/strategy/check/PageIndex'
import HelloWorld from './components/strategy/check/HelloWorld'

//模态框
// 游记详情
import Mtravelnote from './components/travelnote/Mtravelnote'
//讨论文本
import Discuss from './components/strategy/check/Discuss'
// 搜索结果
import SearchTravelnote from './components/travelnote/SearchTravelnote'
import SearchStrategy from './components/travelnote/SearchStrategy'
import SearchUser from './components/travelnote/SearchUser'
// 评论
import DiscussTravel from './components/DiscussTravel'

//模态框
Vue.component('motaikuang',motaikuang);
Vue.component('motaikuangbox',MoTaiKuang)
Vue.component('modelk',moaikuang)
Vue.component('mpush',Mpush)
Vue.component('mwarning',Mwarning)

// 测试组件
Vue.component("testx",TestX)
Vue.component('testradiobutton',TestRadioButton)
// 注册全局组件
Vue.component("mymessage",MyMessage);
Vue.component("lunbotu",Lunbotu);
Vue.component("contentleft",ContentLeft);
Vue.component("contentright",ContentRight);
Vue.component('test1',test);
Vue.component('footer1',Footer1)
// Vue.component('newest',Newest);
// Vue.component('hottravelnote',HotTravelnote);
// 登录注册
Vue.component('login',Login);
Vue.component('regist',Regist);
// 搜索结果
Vue.component('searchtravelnote',SearchTravelnote)
Vue.component('searchstrategy',SearchStrategy)
Vue.component('searchuser',SearchUser)
// 游记部分(梁雨田)
Vue.component('login-main',LoginMain)
Vue.component('regist-main',RegistMian)
Vue.component('search-pages',SearchPages)
Vue.component('travel-notes',TravelNotes)
Vue.component('write-notes',WriteNotes)
Vue.component('travel-main',TravelMian)
// 游记模态框
Vue.component('mtravelnote',Mtravelnote)
//攻略部分(姜)
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
Vue.component('page-index',PageIndex)
//讨论文本
Vue.component('discuss',Discuss)
Vue.component('hello',HelloWorld)
//模态框
//评论
Vue.component('discusstravel',DiscussTravel)

// Vue.component("footer",Footer);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
