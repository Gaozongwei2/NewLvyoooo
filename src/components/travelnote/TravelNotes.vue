<template>
  <div>
    <div class="container-fluid" style="padding: 0px; margin: 0px ;height: 58px">
      <div class="col-md-3" id="logo-img"></div>
      <ul class="col-md-3" id="nav-list">
        <router-link to="/"><li @click="shouye">首页</li></router-link>
        <router-link to="/strategy"> <li>游记攻略</li></router-link>
        <router-link to="/write"><li>写游记</li></router-link>
      </ul>
      <div class="col-md-4 hidden-xs form-group search " style="margin-top: 11px">
        <input type="search" id="search-bar-input" placeholder="搜索目的地">
      </div>
      <div class="col-md-2" id="user-img">
        <img
          :src="travel['tcover__url']"
          height="32" width="32" alt="">
      </div>
    </div>

    <div id="set-bg-big">
      <!--名字-->
      <h1 style="white-space: nowrap; overflow-wrap: normal;" v-text="travel['title']">
        无问南北西东，只愿你像风一样自由
      </h1>
    </div>

    <div class="container-fluid" style="height: 80px">
      <div class="col-md-3" id="user-head">
        <img width="120" height="120"
             :src="travel['userid__icno__imageurl']"
             alt="">
      </div>


      <div class="col-md-5" id="user-person">
        <strong>
          <a href="/u/87710821.html" target="_blank" class="per_name" title="采蘑菇的juju佩奇" v-text="travel['title']">采蘑菇的juju佩奇</a>
          <a href="/u/87710821.html" target="_blank" class="per_grade" title="LV.11">LV.11</a>
          <img src="http://images.mafengwo.net/images/home/tweet/btn_sfollow.gif" width="38" height="13" border="0"
               title="关注TA">
          <span class="now_time" v-text="travel['time']">2018-09-01 14:01</span>
          <span v-text="travel['view']"><i class="ico_view"></i>5754/44</span>
        </strong>
      </div>

      <!--收藏-->
      <div class="col-md-1" id="collect">
        <a @click="collecttravelnote" href="" rel="nofollow" title="收藏" class="collect_num"
           data-ctime="2018-09-01 14:01:56">
          <i></i><br>
          <span v-text="travel['view']">136</span>收藏
        </a>
      </div>


      <!--点赞-->

      <div class="col-md-1">
        <a href="">
          <div @cilck="praisenum" class=" praise">
            <i></i> <br>
            <span v-text="travel['good']">25</span>点赞
          </div>
        </a>
      </div>
    </div>
    <!--界面名字：TravelMian-->
    <travel-main></travel-main>
  </div>


</template>

<script>
  export default {
    name: "TravelNotes",
    data() {
      return {
        collect: 12,
        praise: 25,
        travel:'',
      }

    },
    created(){
      this.travel = this.$route.params.travel
      console.log(this.travel)
    },
    methods: {
      shouye: function () {
      },
      collecttravelnote: function () {
        var vm = this
        vm.collect++
      }
    },
    dianzan: function () {
    },
    praisenum: function () {
      alert('ok')
    }
  }
</script>

<style scoped>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /*导航*/
  .container-fluid {
    height: 58px;
    border-bottom: solid 1px #9e9e9e;
  }

  #logo-img {
    background-image: url("../../assets/travelnote/logoweight.png");
    height: 40px;
    width: 150px;
    background-repeat: no-repeat;
    margin-left: 100px;
    margin-top: 5px;
  }

  #nav-list {
    float: left;
    width: 420px;
    height: 58px;
  }

  #nav-list li {
    float: left;
    display: inline-block;
    padding: 15px 30px;
    color: #333;
    vertical-align: top;
    overflow: hidden;
    font-size: 15px;
    margin-top: 6px;
  }

  #search-bar-input {
    /*圆角*/
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #fafafa;
    border: none;
    width: 130px;
    height: 28px;
    transition: width .5s ease 0s;
    background-repeat: no-repeat;
    margin-left: 10px;
    margin-top: 6px;
  }

  #search-bar-input:focus {
    outline-style: none;
    transition: width .5s ease 0s;
    width: 375px;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
    border: 1px solid #ff9d00;
    background-position: 95%;
    background-repeat: no-repeat;
    margin-left: 10px;
    margin-top: 6px;
  }

  h1 {
    width: 710px;
    height: 80px;
    font-size: 26px;
    line-height: 80px;
    overflow: hidden;
    margin-left: 25%;
    font-weight: bold;
    color: #fff;
    position: absolute;
    margin-top: 28%;
  }

  #user-img img {
    border: 0;
    vertical-align: middle;
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 10px;
  }

  /*背景图片*/
  #set-bg-big {
    background-image: url("../../assets/travelnote/set-bg-.png");
    width: 1400px;
    height: 470px;
    background-repeat: no-repeat;
  }

  /*头像*/
  #user-head img {
    border-radius: 50%;
    position: absolute;
    top: -60px;
    left: 45%;
    z-index: 88;
  }

  #user-person {
    width: 450px;
    height: 78px;
    border-right: 1px solid #d7d7d7;
    padding: 20px 0 0 150px;
    float: left;
  }

  /*个人信息*/
  a {
    background-color: transparent;
    text-decoration: none;
    color: #ff9d00;
    cursor: pointer;
  }

  a.per_name {
    color: #ff7200;
    font-size: 14px;
    font-weight: normal;
    margin-left: -45%;
  }

  a.per_grade {
    color: #ea3c1a;
    font-family: Verdana, Arial, Helvetica, STHeiti;
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
  }

  span.now_time {
    font-family: Verdana, Arial, Helvetica, STHeiti;
    margin-right: 10px;
    color: #acacac;
    display: inline;
    margin-left: 10px;
  }

  span i {
    width: 18px;
    height: 14px;
    display: inline-block;
    background: url(../../assets/travelnote/浏览.png);
    background-repeat: no-repeat;
    margin-right: 4px;
    vertical-align: -2px;
  }
  span{
    color: #acacac;
    font-size: 12px;
  }

  /*收藏*/
  a.collect_num i {
    width: 30px;
    height: 30px;
    display: inline-block;
    background: url("../../assets/travelnote/collect.png");
    margin-top: 15px;
    margin-left: 35px;
  }

  a.collect_num span {
    margin-left: 30px;
  }

  #collect {
    height: 80px;
    border-right: 1px solid #acacac
  }

  /*点赞*/
  .praise {
    height: 80px;
    border-right: 1px solid #acacac
  }

  .praise i {
    width: 30px;
    height: 30px;
    display: inline-block;
    background: url("../../assets/travelnote/zan.png");
    margin-top: 15px;
    margin-left: 35px;
  }

  .praise span {
    margin-left: 30px;
  }

</style>
