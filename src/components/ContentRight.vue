<template id="content-right">
  <div class="col-md-8 post-window">
    <ul class="nav nav-tabs card">
      <li  @click='choose($event)' ref="hotravelnotes"><router-link to="/hottravelnote" ><a href="javascrapy:;">热门游记</a></router-link></li>
      <li  @click='choose($event)' ref="newstrategys"><router-link to="/newstrategy"><a href="javascrapy:;">新鲜攻略</a></router-link></li>
    </ul>
    <!--热门游记-->
    <!--邮寄详情模态框-->
    <motaikuang @hidden="hiddenshow" v-if="motaikuang" v-model="travelnoteid" :travelnoteid="travelnoteid"></motaikuang>
    <div class="father">
      <router-view/>
    </div>
  </div>
</template>

<!--复制模板-->

<script>
  import axios from 'axios'
  export default {
    name: 'ContentRight',
    data() {
      return {
        termtext:'hottravelnotes',
        radiochange:false,
        travel: [],
        id: 1,
        aa: 1,
        bb: 0,
        motaikuang:false,
        props: ["user", "token"],
      }
    },
    created() {
      var vm = this
    },
    methods:{
      // 点击显示模态框
      choose(event){
        var vm = this
        vm.$refs.hottravelnotes.style.backgroundColor = 'write ! importent'
        vm.$refs.newstrategys.style.backgroundColor = 'write ! importent'
        if (vm.radiochange){
          event.currentTarge.style.backgroundColor = "green ! importent"
          vm.radiochange = !vm.radiochange
        }else{
          event.currentTarge.style.backgroundColor = "white ! importent"
          vm.termtext = event.c
        }
          event.currentTarge.style.backgroundColor = "green ! importent"
      },
      showthat(event){
        console.log(event.currentTarget); // event.currentTarget获取当前点击元素DOM
        this.travelnoteid = event.currentTarget.id
        console.log(event.currentTarget.id); // event.currentTarget获取当前点击元素DOM
        this.motaikuang = true
      },
      // 被动执行隐藏模态框
      hiddenshow(){
        let that = this;
        // 将其值修改为false
        that.motaikuang = ! that.motaikuang
      },



    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
    color:#333333;
  }
  .active{
    border: rgba(34, 34, 34, 0.54) 1px solid;
    border-bottom: none;
  }
  body{
    position: fixed;
  }
  .nopadding{
    padding: 0;
  }
  .left{
    float:left;
  }
  .right {
    float: right;
  }
  /*右框架*/
  .rightcover{
    height: 240px!important;
    width: 340px!important;
    background-color: limegreen;
    border-radius: 10px 0 0 10px;

  }
  .rightcover img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    display: flex;
  }
  /*左框架*/
  .leftcover{
    height: 150px;
    width: 100%;
    background-color: orange;
    border-radius: 10px 10px 0 0 ;
    justify-content: space-between;
  }
  .leftcover img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0 ;
  }
  /*基础框架*/
  .father{
    display: flex;
    min-height: 550px;
  }
  .boxleft{
    justify-content: space-between;
    width: 400px;
    height: 240px;
    background-color: cornflowerblue;
    border-radius: 10px;
    margin-top: 15px;
  }
  .boxright{
    justify-content: space-between;
    width: 557px;
    height: 240px;
    background-color: #ed7a7f;
    margin-left: 20px;
    border-radius: 10px;
    margin-top: 15px;

  }
  .post-window {
    height: auto;
    min-height: 600px;
    display: block;
    padding-top: 10px;
    margin-bottom: 20px;
  }
  /*******************/







  .post-window .nav-tabs > li > a {
    border-radius: 5px 5px 0 0;
  }

  .post-window ul li a:hover {
    color: white;
    background-color: #7eeda8;
  }

  .list-post {
    width: 100%;
    height: auto;
    padding: 0;
    padding-bottom: 15px;
  }

  .list-post > a {
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 10px;
    height: 150px;
    background-color: white;
  }

  .list-post .item:hover {
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
  }

  .hot-travel {
    min-height: 450px;
  }

  .new-post {
    min-height: 450px;
    display: none;
  }

  .new-strategys {
    min-height: 450px;
    display: none;
  }

  .content {
    width: 100%;

  }

  .box {
    max-width: 400px;
    max-height: 300px;
    min-width: 400px;
    min-height: 300px;
    padding: 0;
    margin-top: 13px;
    margin-right: 13px;
    border-radius: 4px !important;
  }

  .img:hover + .cover {
    display: block;
    height: 100%;
    transition: height 0.2s;
  }

  .user {
    border-radius: 4px 0 0 0;
    width: 75%;
    height: 20%;
    background-color: rgba(14, 13, 13, 0.31);
    padding: 5px 10px;
    filter: alpha(opacity=50);
    position: absolute;
    left: 0;
    z-index: 2;
  }

  .user img {
    float: left;
  }

  .user div {
    color: white;
    font-size: 13px;
    float: left;
    line-height: 20px;
    margin-left: 10px;
    overflow: hidden;
  }

  .title {
    border-radius: 0 0 0 4px;
    width: 75%;
    height: 30%;
    padding: 0 10px;
    background-color: rgba(14, 13, 13, 0.31);
    filter: alpha(opacity=50);
    position: absolute;
    top: 105px;
    left: 0;
    z-index: 2;
    overflow: hidden;
  }

  .title span {
    opacity: 1 !important;
    color: white;
    font-size: 15px;
    overflow: hidden;
  }

  .title2 {
    box-shadow: rgba(0, 0, 0, 0.25) 1px 1px 5px 3px;
  }

  .title2-left li:active {
    background-color: rgba(76, 174, 76, 0.75) !important;
    transition: background-color 0.3s;
    color: whitesmoke;
  }

  /*透明覆盖**********************************/
  .cover {
    width: 75%;
    height: 0;
    background-color: rgba(14, 13, 13, 0.76);
    filter: alpha(opacity=50);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    color: whitesmoke;
    overflow: hidden;
    z-index: 3;
    transition: height 0.1s;
    border-radius: 4px;
  }

  .cover:hover {
    display: block;
    height: 100%;
    transition: height 0.2s;
  }

  .cover p {
    margin: 15px;
  }

  .cover:active {

  }

  .item {
    padding: 0;
  }
  .stay {
    position: fixed;
    z-index: 4;
    left: 1203px;
    top: 400px;
  }

  .w-strategy {
    padding: 5px;
  }

  .text {
    border-radius: 0 4px 4px 0;
    background-color: white;
    height: 150px;
  }

  .text .num {
    text-align: center;
    color: #333333;
  }

  .good {
    height: 20px;
    width: 20px;
    margin: 5px 0;
    margin-left: 12.5px;
    background-size: cover;
    opacity: 1;
    background-image: url(../assets/images/zan.png);
  }

  .good:visited {
    background-size: cover;
    background-image: url("../assets/images/zan.png");
  }

  .look {
    height: 20px;
    width: 20px;
    /*margin: 5px;*/
    margin: 5px 0;
    margin-left: 12.5px;
    background-size: cover;
    background-image: url("../assets/images/浏览.png");
  }
  .city {
    height: 20px;
    width: 20px;
    margin: 5px 0;
    margin-left: 12.5px;
    background-size: cover;
    background-image: url("../assets/images/定位.png");
  }
</style>
