<template>
  <!--导航-->
  <div>
    <!--导航栏-->
    <div class="nav  navbar navigation navbar-default title1 ">
      <div class="container">
        <router-link to="/">
          <a href="####" class="col-md-2 nav navbar-header logo"><img src="../../assets/images/logoweight.png" alt=""></a>
        </router-link>
        <ul class="col-md-4 nav navbar-nav">

          <li><a href="####">首页</a></li>

          <li><a href="####">攻略</a>
          <li><a href="####">游记</a></li>
        </ul>
        <ul class="nav navbar navbar-right usericno ">
          <!--<li><a class="nopadding user" href="####" ><img class="img-circle icno col-md-6"  alt="" height="44px" width="44px"><span class="right  username nomargin">棕色试剂瓶</span></a></li>-->
          <li><a class="nopadding user" href="####"><img class="img-circle icno col-md-6" :src="user.usericno" alt=""
                                                         height="44px" width="44px"><span
            class="right  username nomargin">棕色试剂瓶</span></a></li>
        </ul>
        <!--<ul class="col-md-2 nav navbar-nav navbar-right">-->
        <!--<li><a href="####">登录</a></li>-->
        <!--<li><a href="####">注册</a></li>-->
        <!--</ul>-->
      </div>
    </div>
    <!--图片-->
    <div class="image"></div>
    <!--副导航栏-->
    <div class="container-fluid title2">
      <div class="col-md-4"></div>
      <div class="col-md-8 choose-top">
        <ul class="nav navbar col-md-11 choose-top">
          <li class="col-md-4 nav navbar navbar-nav" @click="hide">
            <router-link to="/usercenter/mymessage">我的信息</router-link>
          </li>
          <li class="col-md-4 nav navbar navbar-nav">
            <router-link to="/usercenter/mytraveltop">我的旅程</router-link>
          </li>
          <!--<li class="col-md-3 nav navbar navbar-nav">-->
            <!--<router-link to="/usercenter/mycomment">我的评论</router-link>-->
          <!--</li>-->
          <li class="col-md-4 nav navbar navbar-nav">
            <router-link to="/usercenter/myletter">私信</router-link>
            </li>
        </ul>
      </div>
    </div>
    <!--中间部分-->
    <div class="middle1 container-fluid">
      <div class="col-md-1"></div>
      <!--中间左半边-->
      <div class="middle-left col-md-3">
        <div class="mymessage container-fluid col-md-12">
          <div class="icon col-md-6"><img class="img-circle" :src="user.usericno" height="100" width="100"/></div>
          <div class="navbar col-md-6">
            <div class="col-md-12"><span class="username" v-text="user.username"></span></div>
            <div class="col-md-3"></div>
            <div class="col-md-9"><img src="../../assets/images/男.png" alt=""></div>
          </div>
          <div class="col-md-12" style="height: 55px; color: white; margin-top:10px;">
            <span v-text="user['content']">这里是简介，没错，你没有看错。</span>
          </div>
          <div class="myspan col-md-12 bottom">
            <div class="col-md-4">足迹 <span class="col-md-12" v-text="some['focus']">12</span></div>
            <div class="col-md-4">足迹 <span class="col-md-12" v-text="some['focus']">12</span></div>
            <div class="col-md-4" style="border-right: thin solid darkgrey; border-left: thin solid darkgrey" >粉丝 <span class="col-md-12" v-text="some['fans']"></span></div>
            <div class="col-md-4">积分 <span class="col-md-12">12</span></div>
            <!--<div class="  "><a href="####">关注</a><span class="badge" v-text="some.focus"></span></div>-->
            <!--<div class="  "><a href="####">粉丝</a><span class="badge"v-text="some.fans"></span></div>-->
            <!--<div class=" "><a href="####">积分</a><span class="badge" v-text="user.mark"></span></div>-->
          </div>
        </div>

        <ul class="rlist">
          <!--<li><a style="display: none" href="####">我的收藏</a></li>-->
          <li @click="hide"><router-link to="/usercenter/mycollect"><div class="rbtn"><span>我的关注</span><span class="badge badgepart" v-text="some['focus']"></span></div></router-link></li>
          <li @click="hide1"><router-link to="/usercenter/myfocus"><div class="rbtn"><span>我的收藏</span><span class="badge badgepart">22</span></div></router-link></li>
          <li @click="hide"><router-link to="/usercenter/myachieve"><div class="rbtn"><span>我的成就</span></div></router-link></li>
          <li @click="hide"><router-link to="/usercenter/mytravelnotes"><div class="rbtn"><span>我的游记</span><span class="badge badgepart" v-text="travelnote"></span></div></router-link></li>
          <li @click="hide"><router-link to="/usercenter/mystrategys"><div class="rbtn"><span>我的攻略</span><span class="badge badgepart" v-text="strategy"></span></div></router-link></li>


          <!--<li><a href="####">北京</a></li>-->
        </ul>
      </div>
      <!--中间右半边-->
      <div class="middle-right col-md-7 ">

        <!--写游记 写攻略-->

        <!--<router-link to="/write"><div class="col-md-6 btn button1 button navbar-brand">写游记</div></router-link>-->

        <!--&lt;!&ndash;在个人中心跳转到写攻略&ndash;&gt;-->
        <!--<router-link to="/edit">-->
          <!--<div class="col-md-6 btn button2 button right navbar-brand">写攻略</div>-->
        <!--</router-link>-->




        <!--信息显示-->
        <div class="content">
          <div class="default" v-if="showcontent == 'index'">
            <img src="../../assets/travelnote/day2.png" alt="" style="width: 740px;height: 550px">
          </div>
          <router-view/>
        </div>
      </div>
    </div>
    <!--删除模态框-->
    <div class="modal fade mymodal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">

      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">确定要删除吗？</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
            <button type="button" class="btn btn-danger ">删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--复制模板-->

<script>
  import axios from 'axios'
  export default {
    name: 'PersonalIndex',
    data() {
      return {
        props: ["user", "token"],
        // 控制组件显示
        showcontent: "index",
        some: {},
        token: '',
        travels:'',
        user: {
          'id': '1',
          "username": "棕色试剂瓶",
          "usericno": "http://n3-q.mafengwo.net/s10/M00/0F/9B/wKgBZ1iUpFWAbScxAAC2Vfg46fo14.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
          "sex": "男",
          "mark": "15",
          "birthday": "1997-6-2",
          "state": "大庆",
          "content": "起始",
        },
        msg: 'Welcome to Your Vue.js App'
      }
    },

    //默认个人中心背景图隐藏
    created() {

      if(this.$route.path != "/usercenter"){
        this.hide()
      }
      // 判断token是否登录
      if (sessionStorage.getItem("token") == "congqianyouzuoshan") {
        this.getsomemessage()
        this.getstrategy()
        this.gettravelnote()
      } else {
        this.$router.push({path: '/'})
      }
    },
    methods: {
      // 查询用户id对应的信息
      usermessage: function () {
        var vm = this
        axios.get('http://127.0.0.1:8000/user/getusermessage/1/' + vm.user.id + '/')
          .then(function (response) {
            vm.user = response.data
            // 获取所有数据
            // vm.alldata = response.data
          })
          .catch(function (error) {
            return error
          })
      },

      // 获取关注，粉丝，积分信息
      getsomemessage: function () {
        var vm = this
        axios.get(' http://127.0.0.1:8000/user/myfocusnum/' + vm.user.id + '/')
          .then(function (response) {
            vm.some = response.data
            console.log(vm.some)
            // 获取所有数据
            // vm.alldata = response.data
          })
          .catch(function (error) {
            return error
          })
      },
      // 获取攻略数量
      getstrategy:function () {
        var vm = this
        console.log(vm.id);
        axios.get('http://127.0.0.1:8000/strategy/searchcount/' + vm.user.id + '/')
          .then(function (response) {
            vm.strategy = response.data
            // console.log(vm.strategy)
          })
          .catch(function (error) {
            return error
          })
      },
      // 获取游记数量
      gettravelnote:function () {
        var vm = this
        console.log(vm.id);
        axios.get('http://127.0.0.1:8000/travelnote/searchcount/' + vm.user.id + '/')
          .then(function (response) {
            vm.travelnote = response.data
            // console.log(vm.travelnote)
          })
          .catch(function (error) {
            return error
          })
      },
      //获取收藏数量
      getcount:function () {
        var vm = this
        console.log(vm.id);
        axios.get('http://127.0.0.1:8000/user/focus/' + vm.user.id + '/')
          .then(function (response) {
            vm.count = response.data
            console.log(vm.count.length)
          })
          .catch(function (error) {
            return error
          })
      },
      // 隐藏默认显示
      hide: function () {
        // 可以加动画*********************************************************
        this.showcontent = "noindex"
      },
      // 隐藏默认显示+显示游记收藏
      hide1:function () {
        //游记
        var vm = this
        vm.showcontent = "noindex"

        },
      }
  }
</script>

<style scoped>
  .li span {
    height: 50px;
    line-height: 50px;
  }

  .list li a {
    width: 288px !important;
    height: 42px !important;
  }

  .list li a:active {
    width: 250px !important;
    height: 42px !important;
  }

  .badgelist {
    float: right;
    background-color: white;
    color: limegreen;
  }

  router-link {
    background-color: rgba(50, 205, 50, 0);
    width: 100% !important;
    height: 100% !important;
  }

  router-link:hover {
    border: none;
    box-shadow: none !important;
    color: white !important;

  }

  body {
    background-color: rgba(102, 102, 102, 0.16) !important;
    min-width: 800px !important;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  input {
    border-radius: 4px;
    height: 30px;
    color: #222222 !important;
  }

  textarea {
    border-radius: 4px;
    color: #222222 !important;
  }

  .li {
    margin: 20px 10px;
    color: whitesmoke;
    font-size: large;
    line-height: 43px;
    vertical-align: center;
  }

  .modal-dialog {
    color: #333333;
    width: 400px !important;
    height: 300px !important;
  }

  .modal-footer {
    text-align: center !important;
  }

  /*模态框*/
  /*.mymodal {*/
  /*position: fixed;*/
  /*width: 100% !important;*/
  /*height: 100% !important;*/
  /*top: 0px!important;*/
  /*left: 0px!important;*/
  /*background: rgb(0, 0, 0) none repeat scroll 0% 0% !important;*/
  /*!*opacity: 0.7!important;*!*/
  /*!*z-index: 500!important;*!*/
  /*display: none;*/
  /*}*/

  /*导航栏*************************************************************************/
  .title1 {
    height: 54px;
    background-color: #333333 !important;
    background-image: none !important;
    border: none !important;
    margin-bottom: 0 !important;
    color: whitesmoke !important;
    border-radius: 0px !important;
    /*display: none;*/
  }

  .sowingmap #searchbox {
    width: 300px !important;
    height: 60px !important;
    background-color: rgb(14, 0, 6) !important;
    /*filter: alpha(opacity=50);*/
    position: absolute !important;
    top: 500px !important;
    left: 500px !important;
    /*font-size: 14px;*/
    /*color: whitesmoke;*/
    z-index: 10 !important;
    /*transition: height 0.1s;*/
    border-radius: 4px;
  }

  .search {
    height: 60px;
    width: 100%;
    border: whitesmoke 1px solid;
    border-radius: 5px;
  }

  .title1 a {
    color: whitesmoke !important;
    font-size: 15px !important;
  }

  .title1 a:hover {
    color: lawngreen !important;

    transition: color 0.2s;
  }

  .usericno {
    margin: 0;
    height: 54px;
    width: 200px;
  }

  .usericno li span {
    color: white;
  }

  .usericno .icno {
    height: 45px !important;
    width: 45px !important;
    padding: 0;
    margin-top: 5px;
    background-image: url("http://n2-q.mafengwo.net/s10/M00/6C/09/wKgBZ1nm_RuAcRY4AABeA1K-J9Y49.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90");
    object-fit: cover;
    vertical-align: center;
  }

  .username {
    font-size: small !important;
    line-height: 54px;
    vertical-align: center;
  }

  .usermessage {
    display: none;
    border-radius: 4px;
    min-height: 500px;
    width: 100%;
    background-color: yellowgreen;
  }

  .notes-del-confirm {
    width: 480px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 501;
    margin: -130px 0px 0px -240px;
  }

  .notes-del-confirm {
    width: 480px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 501;
    margin: -130px 0px 0px -240px;
  }

  /*中间图片********************************************/
  .image {
    /*background-image: url("https://b1-q.mafengwo.net/s12/M00/39/F7/wKgED1ujYTGAUH0zAAhVpG44zZE10.jpeg?imageMogr2%2Finterlace%2F1");*/
    background-image: url("http://css.mafengwo.net/images/home_new2015/banner_note.gif");
    height: 200px;
    background-size: cover;
  }

  .title2 {

    border: none;
    height: 46px;
    line-height: 1.5;
    font-size: 16px;
    box-shadow: rgba(153, 153, 153, 0.51) 0px 1px 4px 3px;
    background-color: white;
    /*background-color: #999999;*/
  }

  .title2 a {
    color: #333333;
  }

  .title2 a:hover {
    color: forestgreen;
  }

  .title2 .choose-top {
    text-align: center;
    height: 46px !important;
  }

  .middle1 {
    margin: 0;
    padding: 0;

  }

  .middle-left {
    height: 100%;
    box-shadow: rgba(153, 153, 153, 0.3) 1px 1px 20px;
    box-sizing: border-box;
    height: auto;
    overflow: hidden;
  }

  .mymessage {
    padding-top: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
    border-radius: 4px;
    height: 250px;
    box-shadow: rgba(46, 46, 51, 0.24) 0px 1px 6px;
    background-color: #53a1c7;
  }

  .icon {
    display: block;
    height: 100px;
    width: 100px;
    padding: 0px !important;
    background-image: url("../../assets/images/用户.png");
    justify-content: space-between;
    border-radius: 50%;
  }

  .username {
    margin-top: 15px;
    font-size: large;
    font-family: "Microsoft YaHei UI";
    color: #e1e1e1;
  }

  .middle-left ul li a {
    border-radius: 4px;
    color: #d8d8d8 !important;
    box-shadow: rgba(46, 46, 51, 0.24) 1px 1px 3px;
    background-color: rgba(70, 220, 70, 0.9);
    font-size: 15px;
    font-weight: bold;
    font-family: "Microsoft YaHei UI";
    margin: 15px;

  }

  .middle-left ul li a:hover {

    width: 250px !important;
    color: #f5f5f5 !important;
    box-shadow: rgba(46, 46, 51, 0.24) 1px 1px 3px;
    background-color: #1F64A3 !important;
    margin: 15px;

  }

  .middle-left ul li a:visited {
    color: #444444 !important;
  }

  /*.middle-left ul li a:visited{*/
  /*!*border-radius: 10px;*!*/
  /*width: 250px !important;*/
  /*!*color: #d8d8d8;*!*/
  /*color: #f5f5f5!important;*/
  /*box-shadow: rgba(46, 46, 51, 0.24) 1px 1px 3px;*/
  /*background-color: #1F64A3 !important;*/
  /*margin: 15px;*/
  /*margin-left: 50px;*/
  /*transition: width 0.5s;*/

  /*!*transition: width 0.2s;*!*/
  /*}*/
  /*.choose-left a{*/
  /*width: 268.25px!important;*/

  /*}*/
  /*.choose-left li a:hover{*/
  /*background-color: #999999;*/
  /*width: 250px !important;*/
  /*}*/
  /*.choose-left li:hover{*/
  /*background-color: #999999;*/
  /*width: 260px !important;*/
  /*}*/
  .myspan {
    display: flex;
    height: 40px;
    padding: 0;
    border-radius: 4px;
    /*background-color: #8fa6cc;*/
  }

  .myspan div {
    color: #dfdfdf;
    font-size: 15px;
    font-weight: bold;
    /*line-height: 30px;*/
    height: 40px;
    padding: 0px 15px 25px 15px;
    text-align: center;

  }

  .myspan div span {
    height: 20px;
    width: 91.91px;
    text-align: center;
    line-height: 20px;
    color: rgba(38, 255, 35, 0.6);
    margin-left: -15px;
  }

  .ch1 {
    width: 29%;
    height: 100%;
    border-radius: 3px;
    text-align: center;
    /*font-size: 13px;*/
    color: #333333 !important;
    box-shadow: rgba(51, 51, 51, 0.31) 1px 1px 10px 0px;
    margin: 0 5px;
    vertical-align: center;
    background-color: white;
  }

  .ch1 a {
    font-size: 15px;
  }

  .middle-right {
    height: 100%;
    padding-bottom: 20px;
    overflow: hidden;

    /*background-color: #4cae4c;*/
  }

  .button1 {
    background-color: #53a1c7;
    border-radius: 4px 0 0 4px !important;
  }

  .button2 {
    background-color: #53a1c7 !important;
    border-radius: 0 4px 4px 0 !important;
  }

  .button {
    height: 80px !important;
    width: 49%;
    color: white !important;
    line-height: 48px !important;
    margin: 15px 0 !important;
    box-shadow: rgba(51, 51, 51, 0.31) 1px 1px 2px;

  }

  .button:hover {
    opacity: 0.8;
    /*background-color: rgba(213, 209, 213, 0.21);*/
    box-shadow: rgba(51, 51, 51, 0.31) 0px 1px 10px 1px;

  }

  .content {
    /*margin: 15px 0;*/
    float: left;
    width: 100%;
    /*margin-top: 80px;*/
    border-radius: 4px;
    min-height: 500px;
    margin-bottom: 20px;
    /*overflow: hidden;*/
    /*background-color: rgba(255, 251, 253, 0.92);*/
    /*background-color: rgba(126, 255, 85, 0.92);*/
  }

  .myfocus {
    display: none;
  }

  .myfans {
    display: none;
  }

  .myscore {
    display: none;
  }

  .mycollect {
    padding: 0;
    display: none;
  }

  .mycollect li {
    border-radius: 4px;
  }

  .mystrategy {
    display: none;
  }

  .myfocus {
    width: 100%;
    height: 100%;
    align-items: center;
  }

  /*我的收藏*/
  .img {
    background-image: url("http://b4-q.mafengwo.net/s10/M00/F7/C6/wKgBZ1oczTiANqu7AAGZuKcP0ro03.jpeg?imageMogr2%2Fthumbnail%2F%21300x180r%2Fgravity%2FCenter%2Fcrop%2F%21300x180%2Fquality%2F90");
    background-position: center;
    border-radius: 4px 4px 0 0;
    height: 160px;
    background-color: yellow;
  }

  .img-text {
    line-height: 40px;
    border-radius: 0px 0px 4px 4px;
    background-color: white;
  }

  .fluid {
    border-radius: 4px !important;
    padding: 0 !important;
    margin: 0 12px;
    margin-top: 10px;
  }

  .ri {
    float: right;
  }

  .titles {
    height: 195px !important;
    background-color: #333333;
  }

  /*我的关注*************************************************************************/
  .nopadding {
    padding: 0 !important;
  }

  .margin {
    margin-top: 15px;
    margin-bottom: 5px;
    /*margin: 10px 0;*/
    font-weight: bold;
    border-bottom: #999999 1px solid;
  }

  .nomargin {
    margin: 0 !important;
  }

  .center {
    text-align: center !important;
    margin: auto !important;
  }

  .num {
    height: 15px !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .myfocus li {
    width: 30%;
    border-radius: 4px;
    margin: 15px 0 0 19px;
    height: 250px;
    overflow: hidden;
    background-color: white;
  }

  .focus-icon {
    margin: auto;
    height: 90px !important;
    width: 100px;
    border-radius: 50%;
    align-items: center;
    background: url("../../assets/images/用户.png") center center no-repeat;;
    background-color: rgb(235, 235, 235);
  }

  .focus-icon img {
    border-radius: 50%;
    object-position: center;
  }

  .name {
    font-size: large;
    margin-right: 20px;
    margin-top: 30px;
    float: right;
  }

  .hei {
    height: 40px;
    width: 100%;
  }

  .myfocus li .nav {
    font-size: small;

  }

  /*我的游记*******************************************************************/
  .mytravelnotes ul {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .mytravelnotes ul li {
    list-style: none;
    border-radius: 4px !important;
    background-color: white !important;
  }

  .mytravelnotes ul li > div {
    margin-bottom: 10px;
    border-radius: 4px !important;
    background-color: white !important;
  }

  .identification {
    height: 15px !important;
    margin: 0;
    line-height: 45px;
    vertical-align: center;
    color: #999999;
  }

  .fix {
    font-size: 18px !important;
    height: 25px;
    margin-left: 15px;
  }

  .checkbox {
    display: block;
    border-radius: 2px;
    height: 15px;
    width: 15px;
    border: 1px #949494 solid;
    /*background-color: yellow;*/
    /*background-image: none !important;*/
    /*background-image: url("../../images/check_box.png") !important;*/
    object-fit: cover;
  }

  .checkall {
    margin: 15px 0 !important;
  }

  .checkbox-div {
    height: auto;
    width: 42px !important;
    vertical-align: center;
  }

  .tr-footer {
    line-height: 45px;
    vertical-align: center;
    margin-bottom: 10px;
    height: 45px;
    display: block;
    background-color: white !important;
    border-radius: 4px !important;
  }

  .tr-footer div {
    height: 45px;
  }

  .tr-footer span {
    color: #222222;
    padding-left: 10px;
  }

  .del {
    height: 35px !important;
    margin: 5px 0;
    margin-right: 20px;
  }

  /*------------------------------------------------------------------------*/
  /*用户信息*/
  .sex {
    padding: 15px 0;
    line-height: 43px;
    vertical-align: center;
  }

  .sex span {
    height: 30px;
  }

  /*底栏*/
  .footer {
    display: block;
    height: 300px;
    background-color: #333333;
  }

  .foot-content {
    color: #999999;
    margin-top: 40px;
    font-size: large;
    vertical-align: center;
  }

  .foot-content dd {
    font-size: medium;
  }

  .last {
    text-align: center;
    font-weight: bold;
    font-size: large;
    font-family: "Microsoft YaHei UI Light";
  }

  .rbtn {
    height: 100%;
    border-radius: 5px;
    line-height: 45px;
    height: 45px;
    padding: 0 15px;
    background-color: #f5f5f5;
  }

  .rbtn:hover {
    background-color: rgba(158, 158, 158, 0.67);
    color: white;
  }

  .rbtn:visited {
    width: 80%;
    background-color: cornflowerblue;
    color: white;
  }

  .rlist {
    list-style: none;
    width: 100%;
    float: left;
    padding: 0 15px;
    border-radius: 5px;
  }

  .rlist li {
    height: 45px;
    width: 100%;
    margin-top: 15px;
    background-color: darkgrey;
    border-radius: 5px;
  }

  a {
    margin: 0 !important;
    text-decoration: none;
  }

  .badgepart {
    float: right !important;
    background-color: white !important;
    color: black !important;
    font-size: 14px;
    font-weight: lighter;
    vertical-align: center;
    margin: 11.289px 0;
  }
</style>
