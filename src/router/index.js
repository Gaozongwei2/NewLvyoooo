import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PersonalIndex from '../components/personalcenter/PersonalIndex'
import TestX  from '../components/TestX'
import TestRadioButton from '../components/TestRadioButton'
import MoTaiKuang from '../components/MoTaiKuang'



Vue.use(Router)
// 导入二级路由
import MyMessage from '../components/personalcenter/MyMessage'
import MyComment from '../components/personalcenter/MyComment'
import MyLetter from '../components/personalcenter/MyLetter'
import MyAchieve from '../components/personalcenter/MyAchieve'
//我的顶部旅程
import MyTravelTop from '../components/personalcenter/MyTravelTop'



import MyCollect from '../components/personalcenter/MyCollect'
import MyFocus from '../components/personalcenter/MyFocus'
import MyTravelnotes from '../components/personalcenter/MyTravelnotes'
import MyStrategys from '../components/personalcenter/MyStrategys'
import Login from '../components/login/Login'
import Regist from '../components/login/Regist'

import HotTravelnote from '../components/HotTravelnote'
import Newest from '../components/Newest'
import NewStrategy from '../components/NewStrategy'

// 旅游部分（梁）
import LoginMain from '../components/travelnote/LoginMain'
import RegistMain from '../components/travelnote/RegistMain'
import SearchPages from '../components/travelnote/SearchPages'
import  TravelNotes from '../components/travelnote/TravelNotes'
import WriteNotes from '../components/travelnote/WriteNotes'

// 攻略部分（姜）
import all from '../components/strategy/check/all'
import E_Top from '../components/strategy/edit/E_Top'
// import motaikuang from '../components/personalcenter/moaikuang'
export default new Router({
  routes: [
    // 测试方法
    {
      path:'/test',
      name:'test',
      component:TestX
    },
    {
      path:'/testradio',
      name:'testradio',
      component:TestRadioButton
    },
    // 攻略部分
    //查看攻略
    {
      path: '/strategy',
      name: 'all',
      component: all
    },
    //编辑攻略
    {
      path: '/edit',
      name: 'edit',
      component: E_Top
    },
    // 登录注册部分
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },

    // 游记部分
    {
      path:'/search',
      name:'search',
      component:SearchPages
    },
    {
      path:'/travel',
      name:'travelnotes',
      component:TravelNotes
    },
    {
      path:'/write',
      name:'writenotes',
      component:WriteNotes,
      children:[{
        path:'/write/motaikuangbox',
        name:'motaikuangbox',
        component:MoTaiKuang
      },


      ]
    },
    // 首页用户部分
    {
      path: '/',
      name: 'helloword',
      redirect:'/hottravelnote',
      component: HelloWorld,
      children: [
        { path:"/hottravelnote",
          name:"hottravelnote",
          component:HotTravelnote
        },
        { path:"/newest",
          name:"newest",
          component:Newest
        },
        { path:"/newstrategy",
          name:"newstrategy",
          component:NewStrategy
        },

      ]
    },

    //个人中心
    {
      path:'/usercenter',
      name:"personalindex",
      component: PersonalIndex,
      children: [
        { path:"/usercenter/mymessage",
          name:"mymessage",
          component:MyMessage
        },
        {path:"/usercenter/mytraveltop",
          name:"mytraveltop",
          component:MyTravelTop
        },
        {path:"/usercenter/mycomment",
          name:"mycomment",
          component:MyComment
        },
        {path:"/usercenter/myletter",
          name:"myletter",
          component:MyLetter
        },
        {
          path:"/usercenter/mycollect",
          name:"mycollect",
          component:MyCollect
        },
        {
          path:"/usercenter/myfocus",
          name:"myfocus",
          component:MyFocus
        },
        {
          path:"/usercenter/myachieve",
          name:"myachieve",
          component:MyAchieve
        },
        {
          path:"/usercenter/mytravelnotes",
          name:"mytravelnotes",
          component:MyTravelnotes,
          // children: [
          //   { path:"/usercenter/mytravelnotes/motaikuang",
          //     name:"motaikuang",
          //     component:motaikuang
          //   },
          //   ]
        },
        {
          path:"/usercenter/mystrategys",
          name:"mystrategys",
          component:MyStrategys
        },

      ]
    },
  ]
})
