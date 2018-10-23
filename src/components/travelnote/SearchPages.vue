<template>
  <div class="container-fluid" style="height: 600px">
    <div class="nav-bar">
      <div class="col-md-1">
        <router-link to="/">
          <img src="../../assets/travelnote/logo--.png" alt="" id="logo-img">
        </router-link>
      </div>
      <div class="col-md-4">
        <input type="search" placeholder="搜索目的地/攻略/游记" id="search-bar" v-model="index">
      </div>
      <div class="col-md-1">
        <button type="submit" id="search-btn"><img src="../../assets/travelnote/search.png" alt="" @click="search"></button>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-2">
        <div id="user">
          <a href="" v-show="!login">登录/注册></a>
          <ul class="col-md-2 nav navbar navbar-right usericno " v-show="login">
            <li ><router-link to="/usercenter"><a href="####"><img class="img-circle icno col-md-6"
                                                                   src="http://n2-q.mafengwo.net/s10/M00/6C/09/wKgBZ1nm_RuAcRY4AABeA1K-J9Y49.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90"
                                                                   alt=""><span class="left col-md-6">棕色试剂瓶</span></a></router-link></li>
          </ul>
          <ul class="col-md-2 nav navbar navbar-right droplist" v-show="login">
            <li class="switch"></li>
            <li><a href="####">我的关注</a></li>
            <li><a href="####">我的收藏</a></li>
            <li><a href="####">我的游记</a></li>
            <li><a href="####">我的攻略</a></li>
            <li><a href="####">写游记</a></li>
            <li><a href="####">写攻略</a></li>
            <li><a href="javascript:;" class="exit">退出</a></li>
          </ul>
        </div>
      </div>
    </div>


    <div class="nav-list">
      <ul class="ul-list">
        <li>全部</li>
        <li>目的地</li>
        <li>旅游攻略</li>
        <li>游记</li>
        <li>找人</li>
      </ul>
    </div>


    <div class="container" style="position: relative ; left: 8%">
      <!--景点介绍-->
      <div class="col-md-10" style="max-width: 55%">
        <h2 class="left">马拉西亚Malaylsa</h2>

        <div class="jieshao">
          <img src="../../assets/travelnote/malaixiya.png" alt="" calss="jingdian-img">

          <p>马来西亚是东南亚的国家之一，1957年8月31日独立。<br>
            马来西亚是一个由十三州和三个联邦直辖区组成的联邦体制国家，<br>
            首都为吉隆坡，政治中心位于布城，是东南亚国家联盟的创始国之一。<br>
            与此同时，马来西亚也是一个自...</p>
        </div>
      </div>

      <div class="col-md-10">
        <h2 class="left">马拉西亚Malaylsa</h2>

        <div class="jieshao">
          <img src="../../assets/travelnote/malaixiya.png" alt="" calss="jingdian-img">

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
          <img src="../../assets/travelnote/malaixi2.png" alt="" class="jingdian-img">

          <p>马来西亚是东南亚的国家之一，1957年8月31日独立。<br>
            马来西亚是一个由十三州和三个联邦直辖区组成的联邦体制国家，<br>
            首都为吉隆坡，政治中心位于布城，是东南亚国家联盟的创始国之一。<br>
            与此同时，马来西亚也是一个自...</p>
        </div>
      </div>

      <div class="col-md-10">
        <h2 class="left">马拉西亚旅游攻略</h2>
        <div class="jieshao">
          <img src="../../assets/travelnote/malaixi2.png" alt="" class="jingdian-img">
          <p>马来西亚是东南亚的国家之一，1957年8月31日独立。<br>
            马来西亚是一个由十三州和三个联邦直辖区组成的联邦体制国家，<br>
            首都为吉隆坡，政治中心位于布城，是东南亚国家联盟的创始国之一。<br>
            与此同时，马来西亚也是一个自...</p>
        </div>
      </div>
    </div>


    <div class="footer">addfaff</div>
  </div>





</template>

<script>
  import axios from 'axios'
  export default {
    name: "SearchMain",
    data(){
      return{
        index:"苏",
        sort:"all",
        login:false,
        id:0,

        strategys:'',
        travelnotes:'',
        users:'',
      }
    },
    created(){
        this.index = this.$route.params.index
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
        var vm  = this
        let newindex = vm.index+"index"
        axios.get('http://127.0.0.1:8000/strategy/searchbysome/'+ vm.sort +'/'+newindex+'/')
          .then(function (response) {
            // 得到一个数组
            // 1.地点  2.游记 3.攻略
            for(let i=0; i< response.data.length; i++){
               if(response.data[i]){
                 this.strategys = response.data[i]
               }
            }
            // vm.travelnotes = response.data[1]
            // vm.
            // console.log("searchdatta"+response.data[0])
          })
          .catch(function (error) {
            return error
          })
      }
    }

  }
</script>

<style scoped>
  /*是否登录*/
  .usericno {
    margin: 0;
    height: 54px;
    width: 200px;
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
  .notes-del-confirm{
    width: 480px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 501;
    margin: -130px 0px 0px -240px;
  }
  /*title2*/

  .title2{
    box-shadow: rgba(0, 0, 0, 0.25) 1px 1px 5px 3px;
    /*display: none;*/
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

  .usericno {
    margin: 0;
    height: 54px;
    width: 190px;
  }
  .nologin{
    display: none;
  }

  .usericno:hover + .droplist {
    display: block !important;
  }

  .droplist {
    display: none;
    padding: 0;
    color: #222222 !important;
    border-radius: 5px;
    width: 150px!important;
    position: absolute;
    left: 1052px;
    top: 53px;
    z-index: 3;
    background-color: rgba(250, 251, 255, 0.82);
  }
  .droplist li a{
    color:black!important;
  }
  .droplist .switch {
    height: 5px;
    opacity: 0;
  }

  .droplist:hover {
    display: block;
    z-index: 10!important;
  }





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
    background-image: url("../../assets/travelnote/webside-img.png");
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
</style>
