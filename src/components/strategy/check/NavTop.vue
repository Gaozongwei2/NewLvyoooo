<!--导航组件-->
<template>

  <!--导航-->
  <div class="nav navbar navigation navbar-default title1">
    <div class="container" style="margin-left: 120px">
      <a href="####" class="col-md-2 nav navbar-header logo"><img src="../../../assets/images/logo.png" alt=""></a>
      <ul class="col-md-4 nav navbar-nav">
        <li><router-link to="/"><a href="####">首页</a></router-link></li>
        <li>
          <router-link to="/strategy">更多攻略</router-link>
        </li>
        <li>
          <router-link to="/travel">更多游记</router-link>
        </li>
      </ul>
      <!--点击退出登录注册-->
      <!--<ul class="col-md-2 nav navbar-nav navbar-right" v-if="!bianmei">-->
      <!--<li>-->
      <!--<router-link to="/login"><a href="####">登录</a></router-link>-->
      <!--</li>-->
      <!--<li>-->
      <!--<router-link to="/regist"><a href="####">注册</a></router-link>-->
      <!--</li>-->
      <!--</ul>-->

      <ul class="col-md-3 nav navbar navbar-right usericno" style="margin-right: 40px" >
        <li>
          <router-link to="/usercenter">
            <a href="####">
              <img class="img-circle icno col-md-6"src="http://n2-q.mafengwo.net/s10/M00/6C/09/wKgBZ1nm_RuAcRY4AABeA1K-J9Y49.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" alt="">
              <span class="left col-md-6" style="color: whitesmoke">棕色试剂瓶</span>
            </a>
          </router-link>
        </li>
      </ul>


      <ul class="col-md-2 nav navbar navbar-right droplist">
        <li class="switch"></li>
        <li ><router-link to="/usercenter/mycollect"><a href="####" >我的关注</a></router-link></li>
        <li><router-link to="/usercenter/myfocus"><a href="####">我的收藏</a></router-link></li>
        <li><router-link to="/usercenter/mytravelnotes"><a href="####">我的游记</a></router-link></li>
        <li><router-link to="/usercenter/mystrategys"><a href="####">我的攻略</a></router-link></li>
        <li><router-link to="/write"><a href="####">写游记</a></router-link></li>
        <li><router-link to="/edit"><a href="####">写攻略</a></router-link></li>
        <li @click="loginout()"><router-link to="/"><a href="javascript:;" class="exit" >退出</a></router-link></li>
      </ul>

    </div>
  </div>


  <!--</div>-->
</template>

<!--复制模板-->

<script>
  export default {
    name: 'NavTop',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        bianmei:false
      }

    },
    methods:{
      //点击退出(点击退出 变登录注册 没写出来 嘻嘻)
      loginout:function(){
        var vm = this
        sessionStorage.setItem('token','0')
        this.bianmei = false
      },
      // 退出方法
      exit:function () {
        sessionStorage.setItem("token","0")
        this.bianmei=false
      }
    }
  }

</script>

<style scoped>

  /*路线超链接下划线*/
  .a-none-line a {
    text-decoration: none !important;
  }

  .hover-ul li:hover {
    background-color: #ff9d00;
  }


  /*废弃的搜索框框 */
  .input-form-control {
    /*圆角*/
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    background-color: #EFEFEF;
    border: none;
    width: 60%;
    height: 30px;
    transition: width 0.5s;
    background-image: url("../../../assets/strategy/search2.svg");
    background-repeat: no-repeat;
    background-position: 95%;
    margin-top: 5px;
  }

  .input-form-control:focus {
    outline-style: none;
    transition: width 1s;
    width: 100%;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
    border: 1px solid #ff9d00;
    background: url("../../../assets/strategy/search3.png");
    background-position: 95%;
    background-repeat: no-repeat;
  }


  /*导航end*/

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


  .title1 a {
    color: whitesmoke !important;
    font-size: 17px !important;
    text-decoration: none!important;
  }

  .title1 a:hover {
    color: #448700 !important;
    transition: color 0.2s;
  }

  .usericno {
    margin: 0;
    height: 54px;
    width: 200px;
  }


  .title2-left li:active{
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
    color: #222222;
    line-height: 54px;
    font-size: small;
    padding-left: 10px;
    padding-right: 0;
  }


  /*头像*/
  .usericno {
    margin: 0;
    height: 54px;
    width: 190px;
  }

  .usericno:hover + .droplist {
    display: block !important;
  }

  /*下达列表*/
  .droplist {
    display: none;
    padding: 0;
    color: #fcfcfc !important;
    border-radius: 5px;
    /*width: 150px!important;*/
    width: 200px !important;
    position: absolute;
    left: 1045px;
    top: 53px;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.45);
  }

  .droplist li a {
    color: #fefefe !important;
  }

  .droplist li:hover + .droplist li a{
    color: #3c3c3c!important;
  }

  .droplist .switch {
    height: 5px;
    opacity: 0;
  }

  .switch a{
    text-decoration: none!important;
    width: 100%;
    height: 100%;
  }
  .droplist:hover {
    display: block;
    color: black!important;
    z-index: 10 !important;
  }
</style>
