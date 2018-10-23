<template>
  <div>
    <motaikuang @hidden="hiddenshow" v-if="motaikuang" v-model="travelnoteid" :travelnoteid="travelnoteid"></motaikuang>
    <div class="outbox">
      <div class="boxleft" v-for="i in pagelist">
        <!--用来存id的隐藏div-->
        <router-link :to="{name:'travelnotes',params:{travel:travels[i-1]}}">
          <div :id="travels[i-1]['id']" @click='showthat($event)'>

            <div class="leftcover" v-bind:style="{background:'url('+travels[i-1]['scover__url']+')' ,backgroundSize:'cover'}"
                 :id="travels[i-1]['id']">
              <div class="lefttxt">
                <div class="lefttitle" v-text="travels[i-1]['title']" @click="showthat" style="background-size: cover;">
                  第一次来到苏州，感觉还不错
                </div>
                <div class="txt">
                  <div class="usericno left">
                    <img class="usericno" :src="travels[i-1]['userid__icno__imageurl']" alt="" height="20px" width="20px">
                  </div>
                  <div class="username left" :id="i" style="color: green" @click="showpage($event)"><a href="javascrip:;" v-text="travels[i-1]['userid__username']" ></a>
                  </div>
                  <div class="leftstate left" v-text="travels[i-1]['state']">地址</div>
                  <div class="leftgood left" v-text="travels[i-1]['good']">点赞</div>
                  <div class="leftview left" v-text="travels[i-1]['view']">浏览</div>
                </div>
              </div>
            </div>

          </div>
        </router-link>
      </div>
    </div>
    <div class="page">
      <button class="btn before-page">上一页</button>
      <div class="lin_page_index btn " v-for="i in pagecount">
        <a class="btn btn-default padding" href="javascript:;" v-text="i" :id="i" @click="showpage($event)" ></a>
      </div>
      <button class="btn next-page">下一页</button>
      <div class="btn ">共<span style="color: #549c55" v-text="pagecount"></span>页</div>
    </div>
  </div>
</template>
<!--复制模板-->
<script>
  import axios from 'axios'
  export default {
    name: 'HotTravelnote',
    data() {
      return {
        travel: [],
        // id: 1,
        aa: 1,
        bb: 0,

        // 分页相关
        pagecount:0,
        pagesize:4,
        page:1,
        pagelist:[1,2,3,4],


        travelnoteid: '1',
        motaikuang: false,
        props: ["user", "token"],
        travels: [{
          "id": "1",
          "username": "莎莎爱旅行",
          "title": "徽州，一座文化古城。。。。大江东去浪淘尽，千古风流人物，故垒西边，人道是，三国周郎赤壁，乱石穿空，惊涛拍岸，卷起千堆雪，",
          "imageurls": "https://b1-q.mafengwo.net/s12/M00/39/F7/wKgED1ujYTGAUH0zAAhVpG44zZE10.jpeg?imageMogr2%2Finterlace%2F1",
          "content": "这里是简介",
          "good": "231",
          "view": "300",
          "state": "苏州",
          "cover_url": "https://p4-q.mafengwo.net/s12/M00/71/49/wKgED1vF6liAG23NAASqHYuzB4U99.jpeg?imageMogr2%2Finterlace%2F1",
          "usericno": "https://b1-q.mafengwo.net/s12/M00/39/F7/wKgED1ujYTGAUH0zAAhVpG44zZE10.jpeg?imageMogr2%2Finterlace%2F1",
        },
        ],
        travel1: [{
          "id": "1",
          "title": "开封，一座文化古城。。。。",
          "imageurls": "https://b1-q.mafengwo.net/s12/M00/39/F7/wKgED1ujYTGAUH0zAAhVpG44zZE10.jpeg?imageMogr2%2Finterlace%2F1",
          "content": "这里是简介",
          "good": "231",
          "view": "300",
          "state": "苏州",
          "cover_url": "https://b1-q.mafengwo.net/s12/M00/39/F7/wKgED1ujYTGAUH0zAAhVpG44zZE10.jpeg?imageMogr2%2Finterlace%2F1",
          "usericno": "https://b1-q.mafengwo.net/s12/M00/39/F7/wKgED1ujYTGAUH0zAAhVpG44zZE10.jpeg?imageMogr2%2Finterlace%2F1",
        },
        ],
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

      }
    },
    created() {
      console.log(this.travels)
      this.getalltravelnotes()
    },
    methods: {
      // 点击最新发布
      newest: function () {
        var vm = this
        vm.$set(vm.travels, vm.travel1, 1)
      },
      // 点击显示模态框
      showthat(event) {
        console.log(event.currentTarget); // event.currentTarget获取当前点击元素DOM
        this.travelnoteid = event.currentTarget.id
        console.log(event.currentTarget.id); // event.currentTarget获取当前点击元素DOM
        this.motaikuang = true
      },
      // 被动执行隐藏模态框
      hiddenshow() {
        let that = this;
        // 将其值修改为false
        that.motaikuang = !that.motaikuang
      },
      // 获取所有的游记基础信息
      getalltravelnotes: function () {
        var vm = this
        axios.get('http://127.0.0.1:8000/strategy/showall/')
          .then(function (response) {
            vm.travels = response.data
            console.log(vm.travels)
            vm.getpages()
          })
          .catch(function (error) {
            return error
          })
      },
      // 获取游记条数进而确定页数
      getpages: function () {
        var vm = this
        vm.pagecount = Math.ceil(vm.travels.length/vm.pagesize)
        console.log(vm.pagecount)

      },
      showpage:function (event) {
        var vm = this
        var newlist=[]
        vm.page = event.currentTarget.id
        if (vm.page*vm.pagesize<=vm.travels.length){
          vm.pagesize = 4
          for(let i =1; i<=4; i++){
            newlist.push((vm.page-1)*4+i)
          }
        }else{
          vm.pagesize = vm.travels.length-((vm.page-1)*vm.pagesize)
          for(let i =1; i<=vm.pagesize; i++){
            newlist.push((vm.page-1)*4+i)
          }
        }
        vm.pagelist = newlist
      }
    }
  }
</script>
<style scoped>
  a,button,input{-webkit-tap-highlight-color:rgba(255,0,0,0);}
  .outbox{
    width: 100%;
    min-height: 530px;
    /*background-color: lime;*/
  }
  .page{
    width: 100%;
    display: block;
    margin-top: 20px;
  }
  body {
    position: fixed;
  }

  a {
    text-decoration: none;
  }

  .nopadding {
    padding: 0;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  /*右框架*/
  .righttext {
    width: 167px;
    height: 100%;
    justify-content: space-between;
    position: relative;
    left: 70%;
    background-color: rgba(245, 245, 245, 0.42);
    border-radius: 0px 10px 10px 0;

  }

  .rightcover {
    height: 240px !important;
    justify-content: space-between;
    /*width: 388px;*/
    background-size: cover;
    background-color: limegreen;
    border-radius: 10px;

  }

  .rightcover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    display: flex;
  }

  /*左框架*/
  .txt div {
    margin-left: 5px;
    margin-top: 5px;
  }

  .lefttxt {
    position: relative;
    height: 100px;
    width: 400px;
    top: 145px;
    overflow: hidden;
    background-color: rgba(255, 251, 249, 0.56);
    border-radius: 0 0 10px 10px;
    padding: 5px 10px 10px 10px;
  }

  .leftcover {
    width: 400px;
    height: 240px;
    background-size: cover !important;
    object-fit: cover;

    /*background-color: orange;*/
    border-radius: 10px;
    /*justify-content: space-between;*/
  }

  .leftcover .cover {
    width: 400px;
    height: 240px;
    object-fit: cover;
    border-radius: 10px;
  }

  .leftcover .usericno {
    width: 20px;
    height: 20px;
    border-radius: 50%;

  }

  .lefttitle {
    font-size: 18px;
    height: 50px;
    width: 80%;
    /*background-color: limegreen;*/
    overflow: hidden;

  }

  /*基础框架*/
  /*.content{*/
  /*position: fixed;*/
  /*}*/
  .father {
    display: flex;
  }

  .boxleft {
    width: 400px;
    height: 240px;
    background-color: rgba(185, 190, 195, 0.11);
    border-radius: 10px;
    margin-top: 15px;
    float: left;
    margin-left: 20px;
  }

  .boxright {
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
