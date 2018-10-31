<template>
  <div class="container-fluid" style="height: 600px">
    <div class="nav-bar">
      <div class="col-md-1">
        <router-link to="/">
          <img src="../../assets/travelnote/logo--.png" alt="" id="logo-img">
        </router-link>
      </div>
      <div class="col-md-4">
        <input type="search" placeholder="搜索目的地/攻略/游记" id="search-bar"v-model="indextxt" @keyup.enter="search"/>
      </div>
      <div class="col-md-1">
        <button type="submit" id="search-btn"><img src="../../assets/travelnote/search.png" alt="" @click="search" ></button>
      </div>

      <!--头像下达列表-->

      <!--空格-->
      <div class="col-md-2"></div>

      <div class="col-md-3">
        <!--<div id="user"-->
        <!--<a href="" v-show="!login">登录/  注册></a>-->
        <ul class="col-md-4 nav navbar navbar-right usericno">
          <li>
            <router-link to="/usercenter">
              <a href="####">
                <img class="img-circle icno col-md-2"
                     src="http://n2-q.mafengwo.net/s10/M00/6C/09/wKgBZ1nm_RuAcRY4AABeA1K-J9Y49.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90"
                     alt="">
                <span class="left" style="color: whitesmoke">棕色试剂瓶</span>
              </a>
            </router-link>
          </li>
        </ul>

        <ul class="col-md-2 nav navbar navbar-right droplist ">
          <li class="switch"></li>
          <li>
            <router-link to="/usercenter/mycollect"><a href="####">我的关注</a></router-link>
          </li>
          <li>
            <router-link to="/usercenter/myfocus"><a href="####">我的收藏</a></router-link>
          </li>
          <li>
            <router-link to="/usercenter/mytravelnotes"><a href="####">我的游记</a></router-link>
          </li>
          <li>
            <router-link to="/usercenter/mystrategys"><a href="####">我的攻略</a></router-link>
          </li>
          <li>
            <router-link to="/write"><a href="####">写游记</a></router-link>
          </li>
          <li>
            <router-link to="/edit"><a href="####">写攻略</a></router-link>
          </li>
          <li @click="loginout()">
            <router-link to="/"><a href="javascript:;" class="exit">退出</a></router-link>
          </li>
        </ul>

        <!--</div>-->
      </div>

      <!--<div class="col-md-4"></div>-->
      <!--<div class="col-md-2">-->
        <!--<div id="user">-->
          <!--<a href="" v-show="!login">登录/注册></a>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <div class="nav-list">
      <ul class="ul-list">
        <li id="all" @click="searchtype($event)"><a href="javascript:;" style="color: limegreen" ref="all">全部</a></li>
        <li id="travelnote" @click="searchtype($event)" ref="travelnote"> 游记</li>
        <li id="strategy" @click="searchtype($event)"><a href="javascript:;" ref="strategy">攻略</a></li>
        <li id="users" @click="searchtype($event)"><a href="javascript:;" ref="user">找人</a></li>
      </ul>
    </div>
    <div class="container" style="position: relative ; left: 8%">
      <!--景点介绍-->
      <!--游记-->
      <div class="col-md-9">
        <searchtravelnote :index="this.index" v-if="choose=='all' || choose=='travelnote'"></searchtravelnote>
        <searchstrategy :index="this.index" v-if="choose=='all' || choose=='strategy'"></searchstrategy>
        <searchuser :index="this.index" v-if="choose=='all'|| choose=='users'"></searchuser>
      </div>
      <!--侧边栏-->
      <div class="col-md-2" style="margin-top: 230px">
        <div class="right">
          <h2><span>热门推荐景点</span></h2>
          <div class="col-md-4 web-side-img"><img src="../../assets/travelnote/webside10.png" alt=""></div>
          <div class="col-md-4 web-side-img"><img src="../../assets/travelnote/webside12.png" alt=""></div>
          <div class="col-md-4 web-side-img"><img src="../../assets/travelnote/webside13.png" alt=""></div>
          <br>
          <div class="col-md-4 web-side-img"><img src="../../assets/travelnote/webside14.png" alt=""></div>
          <div class="col-md-4 web-side-img"><img src="../../assets/travelnote/webside15.png" alt=""></div>
          <div class="col-md-4 web-side-img"><img src="../../assets/travelnote/webside16.png" alt=""></div>
          <br>
          <div class="col-md-4 web-side-img"><img src="../../assets/travelnote/webside17.png" alt=""></div>
          <div class="col-md-4 web-side-img"><img src="../../assets/travelnote/webside18.png" alt=""></div>
          <div class="col-md-4 web-side-img"><img src="../../assets/travelnote/webside11.png" alt=""></div>
        </div>

      </div>
    </div>
  </div>





</template>

<script>
  import axios from 'axios'
  export default {
    name: "SearchMain",
    data(){
      return{
        index:"",
        indextxt:'',
        sort:"all",
        login:false,
        id:0,
        strategys:'',
        travelnotes:'',
        users:'',
        changecolor:'',
        // 用来空值分类筛选
        choose:"all",

      }
    },
    created(){
      if(this.$route.query.cityindex){
        this.indextxt = this.$route.query.cityindex
      }
      if(this.$route.params.index){
        this.indextxt = this.$route.params.index
      }

      console.log("searchpage"+this.index)
        this.id = sessionStorage.getItem("id")
      // 执行默认的搜索操作
      // 判断登录状态
      if (this.id !=0){
        this.login = true
      }
      console.log(this.login)
      this.search()
    },
    methods:{
      // 搜索方法(默认进行全局搜索)
      search:function () {
        var vm = this
        vm.index = vm.indextxt
      },
      //点击分类筛选
      searchtype:function (event) {
        var vm = this
        vm.$refs.all.style.color = "#222222"
        vm.$refs.travelnote.style.color = "#222222"
        vm.$refs.strategy.style.color = "#222222"
        vm.$refs.user.style.color = "#222222"

        event.target.style.color = "limegreen"
        vm.choose = event.currentTarget.id
      }
    }

  }
</script>

<style scoped>

  .ul-list li a {
    text-decoration: none;
    color: #222222;
  }

  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container-fluid .nav-bar {
    float: left;
    width: 100%;
    height: 60px;
    background: #4b4b4b;
  }

  /*logo*/
  #logo-img {
    width: 120px;
    height: 55px;
    margin-left: 45px;
    margin-top: 8px;
  }

  /*搜索*/

  #search-bar {
    width: 480px;
    height: 36px;
    border: 0 none;
    line-height: 36px;
    font-size: 14px;
    color: rgba(109, 109, 109, 0.59);
    padding-left: 15px;
    margin-top: 15px;
  }

  #search-btn {
    width: 40px;
    float: left;
    height: 36px;
    background-color: #659052;
    border-radius: 4px;
    margin-top: 15px;
    margin-right: 12px;
    outline: none;
  }

  #user a {
    color: #3f9f5f;
    text-decoration: none;

  }

  .container-fluid .nav-list {
    float: left;
    width: 100%;
    height: 50px;
    background: #fafafa;
  }

  .container-fluid .nav-list .ul-list {
    width: 1200px;
    height: 50px;
    margin: auto;
  }

  .container-fluid .nav-list .ul-list li {
    float: left;
    height: 40px;
    font-size: 15px;
    margin-top: 15px;
    color: #666;
    padding: 0 20px;
    margin-left: 15px;
  }

  .container {
    height: 1000px;
    margin-top: 30px;
    float: left;
  }

  p {
    display: block;
    float: right;
    font-size: 13px;
    margin-top: 10px;
  }

  .right {
    width: 420px;
    height: 450px;
    border: 1px solid #f4f4f4;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.13);
    overflow: hidden;
    border-radius: 2px;
    margin-top: -150px;
    margin-left: -150px;
  }

  h2 {
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    color: #333 !important;
    margin-top: 5px;
    margin-left: 22px;
  }


  /*侧边栏 图片大小*/
  .web-side-img img {
    /*background-image: url("../../assets/travelnote/backgroud.png");*/
    width: 105px;
    height: 105px;
    border: 0;
    vertical-align: middle;
    margin-left: 15px;
    margin-top: 20px;
  }

  /*2018.2.24*/

  /*梁雨甜修改下达列表2018.10.30*/
  .title2-left li:active {
    background-color: rgba(76, 174, 76, 0.75) !important;
    transition: background-color 0.3s;
    color: whitesmoke;
  }

  .usericno .icno {
    height: 48px !important;
    width: 48px !important;
    padding: 0;
    margin-top: 8px;
    background-image: url("http://n2-q.mafengwo.net/s10/M00/6C/09/wKgBZ1nm_RuAcRY4AABeA1K-J9Y49.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90");
    object-fit: cover;
    vertical-align: center;
  }

  .usericno li a:hover {
    background-color: rgba(250, 0, 255, 0) !important;
  }

  .usericno li {
    height: 54px;
  }

  .usericno li a {
    height: 53px;
    padding: 0 !important;
    vertical-align: center;
  }

  .usericno li a span {
    height: 53px;
    color: #fff;
    line-height: 60px;
    font-size: small;
    padding-left: 10px;
    padding-right: 0;
    float: left;
    width: 100px;
  }

  .usericno {
    margin: 0;
    height: 54px;
    width: 190px;
    right: 75px;
  }

  .usericno:hover + .droplist {
    display: block !important;
  }

  /*修改了下达列表 位置*/
  .droplist {
    display: none;
    /*display: block;*/
    padding: 0;
    color: #fcfcfc !important;
    border-radius: 5px;
    /*width: 150px!important;*/
    width: 200px !important;
    position: absolute;
    left: 69px;
    top: 58px;
    z-index: 55;
    background-color: rgba(0, 0, 0, 0.45);
  }

  .droplist li a {
    color: #fff !important;
    font-size: 16px;
  }

  .droplist li:hover + .droplist li a {
    color: #3c3c3c !important;

  }

  .droplist .switch {
    height: 5px;
    opacity: 0;
  }

  .switch a {
    text-decoration: none !important;
    width: 100%;
    height: 100%;
    background: red;
  }

  .droplist:hover {
    display: block;
    color: black !important;
    z-index: 10 !important;
  }


</style>
