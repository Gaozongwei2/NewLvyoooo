<template>
  <div class="container-fluid" style="height: 600px">
    <div class="nav-bar">
      <div class="col-md-1">
        <img src="../../assets/login/logo--.png" alt="" id="logo-img">
      </div>
      <div class="col-md-4">
        <input type="search" placeholder="搜索目的地/攻略/游记" id="search-bar">
      </div>


      <div class="col-md-1">
        <button type="submit" id="search-btn"><img src="../../assets/login/search.png" alt=""></button>
      </div>

      <!--头像下达列表-->

      <!--空格-->
      <div class="col-md-2" ></div>

      <div class="col-md-3">
        <!--<div id="user"-->
        <!--<a href="" v-show="!login">登录/  注册></a>-->
        <ul class="col-md-4 nav navbar navbar-right usericno">
          <li>
            <router-link to="/usercenter">
              <a href="####">
                <img class="img-circle icno col-md-2" src="http://n2-q.mafengwo.net/s10/M00/6C/09/wKgBZ1nm_RuAcRY4AABeA1K-J9Y49.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" alt="">
                <span class="left" style="color: whitesmoke">棕色试剂瓶</span>
              </a>
            </router-link>
          </li>
        </ul>

        <!--<ul class="col-md-2 nav navbar navbar-right droplist" style="background-color: red">-->
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
          <li><router-link to="/usercenter/mystrategys"><a href="####">我的攻略</a></router-link></li>
          <li><router-link to="/write"><a href="####">写游记</a></router-link></li>
          <li><router-link to="/edit"><a href="####">写攻略</a></router-link></li>
          <li @click="loginout()"><router-link to="/"><a href="javascript:;" class="exit">退出</a></router-link></li>
        </ul>

        <!--</div>-->
      </div>

      <!--<div class="col-md-4"></div>-->
      <!--<div class="col-md-2">-->
        <!--<div id="user">-->
          <!--<a href="">登录/注册></a>-->
        <!--</div>-->
      <!--</div>-->
    </div>


    <div class="nav-list">
      <ul class="ul-list">
        <li>全部</li>
        <li>目的地</li>
        <li>旅游攻略</li>
        <li>游记</li>
      </ul>
    </div>


    <div class="container" style="position: relative ; left: 8%">
      <!--景点介绍-->
      <div class="col-md-10" style="max-width: 55%">
        <h2 class="left">马拉西亚Malaylsa</h2>

        <div class="jieshao">
          <img src="../../assets/login/malaixiya.png" alt="" calss="jingdian-img">

          <p>马来西亚是东南亚的国家之一，1957年8月31日独立。<br>
            马来西亚是一个由十三州和三个联邦直辖区组成的联邦体制国家，<br>
            首都为吉隆坡，政治中心位于布城，是东南亚国家联盟的创始国之一。<br>
            与此同时，马来西亚也是一个自...</p>
        </div>
      </div>


      <!--侧边栏-->
      <div class="col-md-2">
        <div id="right">
          <h2><span>马来西亚热门推荐景点</span></h2>
          <div class="col-md-4 web-side-img"></div>
          <div class="col-md-4 web-side-img"></div>
          <div class="col-md-4 web-side-img"></div>
          <br>
          <div class="col-md-4 web-side-img"></div>
          <div class="col-md-4 web-side-img"></div>
          <div class="col-md-4 web-side-img"></div>
          <br>
          <div class="col-md-4 web-side-img"></div>
          <div class="col-md-4 web-side-img"></div>
          <div class="col-md-4 web-side-img"></div>
        </div>
      </div>
      <!--旅游攻略-->
      <div class="col-md-10">
        <h2 class="left">马拉西亚旅游攻略</h2>

        <div class="jieshao">
          <img src="../assets/malaixi2.png" alt="" class="jingdian-img">

          <p>马来西亚是东南亚的国家之一，1957年8月31日独立。<br>
            马来西亚是一个由十三州和三个联邦直辖区组成的联邦体制国家，<br>
            首都为吉隆坡，政治中心位于布城，是东南亚国家联盟的创始国之一。<br>
            与此同时，马来西亚也是一个自...</p>
        </div>
      </div>

      <div class="col-md-10">
        <h2 class="left">马拉西亚旅游攻略</h2>
        <div class="jieshao">
          <img src="../assets/malaixi2.png" alt="" class="jingdian-img">
          <p>马来西亚是东南亚的国家之一，1957年8月31日独立。<br>
            马来西亚是一个由十三州和三个联邦直辖区组成的联邦体制国家，<br>
            首都为吉隆坡，政治中心位于布城，是东南亚国家联盟的创始国之一。<br>
            与此同时，马来西亚也是一个自...</p>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
  export default {
    name: "SearchPage",
    data:function () {
      return{

      }
    }


  }
</script>

<style scoped>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container-fluid .nav-bar {
    float: left;
    width: 100%;
    height: 66px;
    background: #4b4b4b;
  }

  #logo-img {
    width: 40px;
    height: 60px;
    margin-left: 35px;
  }

  #search-bar {
    width: 480px;
    height: 36px;
    border: 0 none;
    line-height: 36px;
    font-size: 14px;
    color: rgba(109, 109, 109, 0.59);
    /*border-radius: 4%;*/
    padding-left: 15px;
    margin-top: 15px;
  }

  #search-btn {
    width: 40px;
    float: left;
    height: 36px;
    background-color: #3f9f5f;
    border-radius: 4px;
    margin-top: 15px;
    margin-right: 15px;
  }

  #user {
    font-size: 16px;
    margin-top: 18px;
    color: #fff;
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
  .container-fluid .nav-list .ul-list li:hover{
    color: limegreen;
  }
  .container {
    height: 1000px;
    margin-top: 30px;
    float: left;
  }

  .left {
    width: 600px;
    height: 30px;
    float: left;
    font-size: 18px;
    font-weight: bold;
    color: #333 !important;
    border-bottom: 1px solid #d0d0d0;
    margin-bottom: 10px;
    margin-top: 15px;
  }

  .jieshao {
    float: left;
    width: 600px;
    height: 110px;
  }

  .jingdian-img {
    margin-top: 10px;
    margin-left: 10px;
  }

  p {
    display: block;
    float: right;
    font-size: 13px;
    margin-top: 10px;
  }

  #right {
    width: 380px;
    height: 400px;
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
    margin-left: 5px;
  }

  .web-side-img {
    background-image: url("../../assets/login/webside-img.png");
    width: 90px;
    height: 90px;
    border: 0;
    vertical-align: middle;
    margin-left: 25px;
    margin-top: 20px;
  }

  .footer {
    width: 100%;
    height: 150px;
    background: #3c3c3c;
    float: left;
  }
  .ul-list li:hover{
    color: limegreen;
  }
  /*梁雨甜修改下达列表2018.10.30*/
  .title2-left li:active {
    background-color: rgba(76, 174, 76, 0.75) !important;
    transition: background-color 0.3s;
    color: whitesmoke;
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

  .usericno li  a:hover {
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
    float:left;
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
    left: 65px;
    top: 53px;
    z-index: 55;
    background-color: rgba(0, 0, 0, 0.45);
  }

  .droplist li a {
    color: #fefefe !important;
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
  }

  .droplist:hover {
    display: block;
    color: black !important;
    z-index: 10 !important;
  }

</style>

