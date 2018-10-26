<template>
  <div>
    <!-----导航栏-->
    <div class="container-fluid" style="padding: 0px; margin: 0px ;height: 58px">
      <router-link to="/"><div class="col-md-3" id="logo-img"></div></router-link>
      <ul class="col-md-3" id="nav-list">
        <router-link to="/"> <li>首页</li> </router-link>
        <li>游记攻略</li>
        <router-link to="/travel"><li>游记详情</li></router-link>
      </ul>
      <div class="col-md-4 hidden-xs form-group search " style="margin-top: 11px">
        <input type="search" id="search-bar-input" placeholder="搜索目的地">
      </div>
      <div class="col-md-2" id="user-img">
        <img src="http://n2-q.mafengwo.net/s12/M00/35/2C/wKgED1uqImOAAxCCAAAeJTVWYJU680.png?imageMogr2%2Fthumbnail%2F%2132x32r%2Fgravity%2FCenter%2Fcrop%2F%2132x32%2Fquality%2F90"
             height="32" width="32" alt="">
      </div>
    </div>

    <div class="set_index">
      <!--中间添加图片部分---------------------------------->
      <div class="set_page">
        <a role="button" class="set_add" @click="changecoverimg"></a>
        <h2>设置游记头图</h2>
        <p>图片建议选择尺寸大于1680px的高清大图，如相机原图</p>
      </div>
      <!--输入-->
      <div class="set_title" ref="content" >
        <input type="text" placeholder="填写游记标题" maxlength="48" ref="title" v-model="title">
      </div>
    </div>

    <!----------------------写游记---------------------------------->
    <div class="container">
      <div class="col-md-9" id="write-notes" >
        <!--内容区域——————————————————————————————————————-->
        <div contenteditable="true" id="write-notes-day" ref="content" v-html="content" >
          游记从这里开始.....
        </div>
        <!--内容区域——————————————————————————————————————-->
      </div>
      <div class="col-md-3" id="web-side">
        <div class="click-list">
          <div id="first">
            <a role="button" class="add-btn"><i class="icon-photo"></i>插入图片</a>
          </div>
          <div id="second">
            <a role="button" class="add-btn" @click="addtext"><i class="icon-title"></i>插入段落标题</a>
          </div>
          <div><a class="btn-save" role="button" @click="savenote"><i></i>保存草稿</a></div>
          <div><a class="btn-save" role="button" @click="justshow"><i></i>预览</a></div>
          <!--模态框弹出提示，填写地址-->
          <!--发布成功，弹窗提示，积分增加-->
          <div><a class="btn-save" role="button" @click="push"><i></i>发表游记</a></div>
        </div>
        <div class="btn-save">游记目录</div>
      </div>
    </div>
    <!--新建标题-->
    <motaikuangbox :pattern="pattern" @htitle="htitle"></motaikuangbox>
    <!--选择城市-->
    <mpush :getcity="cityshow" @htitlepush = "htitlepush"></mpush>
    <!--操作提示-->
    <mwarning :warning="warning"></mwarning>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "WriteNotes",
    data() {
      return {
        // 模态框状态
        pattern:false,
        cityshow:false,
        warning:false,
        condition:1,
        id:sessionStorage.getItem("id"),
        travel:{
          "title":'',
          "time":'',
          "cover_url":"",
          "content":"",
          "condition_id":"",
          "good":"0",
          "view":"0",
          "userid":this.id,
          "cover_id":37,
          "user_id":this.id,
        },
        title:'',
        contentx:'',
        state:'北京',
        // 存放内容HTML
        content:'先简单介绍一下你的游记吧......',
        // 内容id
        contentid:'',
      }
    },
    created(){
    },

    methods:{
      // 显示成功提示框
      justshow:function(){
        var vm = this
        vm.warning = !vm.warning
      },
      // 控制发表游记模态框
      push:function () {
        var vm = this
        vm.cityshow = !vm.cityshow
      },
      // 控制添加段落标题模态框
      addtext:function(){
        var vm = this
        vm.pattern = !vm.pattern
      },
      htitle2:function(title){
        vm.pattern = "motaikuang1"
      },

      // 被动调用，保存预览标题
      htitle:function(title){
        var vm = this
        // 内容合并
        vm.contentx = title
        vm.content = vm.$refs.content.innerHTML
        // 标题样式模板
        vm.content = vm.content + "<h1 style='font-size: 25px; font-weight: bold; height: 35px; line-height: 35px; '>"+title+"</h1><br><img src=\"https://n3-q.mafengwo.net/s12/M00/2D/DE/wKgED1vQmGSAIXMPAAa7vBs-6aI31.jpeg?imageMogr2%2Finterlace%2F1\" alt=\"\" height='400px' width='400px'>"
        // 内容显示
        vm.$refs.content.innerHTML = vm.content
        // 1. 判断标题和内容是否为空
        vm.savenote()
        if (vm.title && vm.content){
          // 初步存储信息
          let date = new Date()
          var params = new URLSearchParams();
          params.append('title', vm.title)
          params.append('state', city["area"])
          params.append('content', vm.contentx.split("<h1>")[0])
          params.append('time', date)
          params.append('cover_id', 3)
          params.append('condition_id', 2)
          params.append('content_id', vm.contentid)
          params.append('good', 0)
          params.append('view', 0)
          params.append('userid_id', vm.id)
          axios.post('http://127.0.0.1:8000/travelnote/savetravelnote/', params)
            .then(function (response) {
              console.log(response.data)
            })
            .catch(
            )
        }else{

        }

      },
      // 获取地点信息
      // 执行存储方法
      htitlepush:function(city){
        var vm = this
        vm.savenote()
        let date = new Date()
        //系统当前时间
        let year = date.getFullYear();
        let month = date.getMonth()+1;//js中是从0开始所以要加1
        let day = date.getDate();
        let utime = year+'-'+month+'-'+day
        var params = new URLSearchParams();
        params.append('title', vm.title)
        params.append('state', city["area"])
        params.append('content', vm.contentx.split("<h1>")[0])
        params.append('time', utime)
        params.append('cover_id', 3)
        params.append('condition_id', vm.condition)
        params.append('content_id', vm.contentid)
        params.append('good', 0)
        params.append('view', 0)
        params.append('userid_id', vm.id)
        axios.post('http://127.0.0.1:8000/travelnote/savetravelnote/', params)
          .then(function (response) {
            console.log(response.data)
            alert(response.data)
            if (response.data == "chenggong"){
              alert(response.data)
              vm.warning = !vm.warnimg
            }
          })
          .catch(
          )

      },
      // 保存
      hsave:function(){
        var vm  = this
        vm.travel['title'] = vm.title
        vm.travel['']
      },

      // 添加标题
      changecoverimg:function () {
      },
      // 保存内容，返回内容id
      savenote:function () {
        var vm = this
        // 存储内容
        var params = new URLSearchParams();
        params.append('content', vm.content)
        axios.post('http://127.0.0.1:8000/travelnote/savecontent/', params)
          .then(function (response) {
            vm.contentid = response.data
          })
          .catch(
          )
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

  .container-fluid {
    height: 58px;
    border-bottom: solid 1px #afafaf;
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
    margin-top: 7px;
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
    /*background-image: url("../assets/4.svg");*/
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
    /*background: url("../assets/5.svg");*/
    background-position: 95%;
    background-repeat: no-repeat;
    margin-left: 10px;
    margin-top: 6px;
  }

  #user-img img {
    border: 0;
    vertical-align: middle;
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 10px;
  }

  /*-----------------------------------*/
  /*设置 图片*/
  .set_index {
    float: left;
    height: 480px;
    background-size: cover;
    position: relative;
    width: 1400px;
    background-repeat: no-repeat;
    overflow: hidden;
    background: rgba(140, 140, 140, 0.29);
  }

  .set_page {
    padding: 200px 0 0 275px;
    margin: auto;
    width: 705px;
    height: 67px;
    position: relative;
  }

  /*设置头图大小*/
  .set_page h2, .set_page h2 a {
    font-size: 20px;
    color: #333;
    position: relative;
    margin-top: 12px;
  }

  /*添加图片*/
  .set_page a.set_add {
    width: 67px;
    height: 67px;
    float: left;
    background: url("../../assets/travelnote/添加图片.png");
    background-repeat: no-repeat;
    margin-left: -30px;
    position: relative;
  }

  /*imput输入*/
  .set_title input {
    width: 850px;
    height: 20px;
    color: #666;
    position: relative;
    line-height: 5px;
    font-size: 18px;
    border: 0;
    display: inline-block;
    text-align: start;
  }

  .set_title {
    width: 938px;
    padding: 20px 20px;
    height: 60px;
    background: #fff;
    border: 1px solid #fff;
    line-height: 20px;
    position: absolute;
    bottom: 25px;
    z-index: 1;
    left: 50%;
    margin-left: -489px;
    box-shadow: 0 2px 2px rgba(110, 98, 85, 0.24);
  }

  *:focus {
    outline: none;
  }

  /*-----------------------------------------------------------------------*/

  /*写游记*/
  .container {
    height: 800px;
    margin: auto;
  }

  #write-notes {
    height: 550px;
    padding-bottom: 100px;
    float: left;
    width: 680px;
    font-size: 15px;
    padding-top: 15px;
    margin-top: 25px;
    margin-left: 85px;
  }

  #web-side {
    height: 400px;
    padding-top: 5px;
    margin-left: 25px;
    margin-top: 25px;
  }

  #write-notes-day {
    width: 550px;
    height: 700px;
    margin: auto;
  }

  /*------------------------------------------*/
  /*webside*/
  #first {
    width: 260px;
    height: 30px;
  }

  #second {
    width: 260px;
    height: 30px;
    margin-top: 25px;
  }

  .add-btn {
    display: block;
    font-size: 18px;
    color: #333;
  }

  .icon-photo {
    float: left;
    margin-right: 10px;
    width: 28px;
    height: 28px;
    background: url("../../assets/travelnote/addphoto.png");
  }

  .icon-title {
    float: left;
    margin-right: 10px;
    width: 28px;
    height: 28px;
    background: url(../../assets/travelnote/68-段落说明.png);
  }

  /*-----------保存*/

  div .btn-save {
    display: block;
    width: 138px;
    height: 32px;
    border: 1px solid #e6e6e6;
    text-align: center;
    font-size: 14px;
    border-radius: 16px;
    line-height: 32px;
    transition: all .1s linear;
    margin-top: 25px;
  }

  div .btn-save:hover {
    text-decoration: none;
    background-color: #ff9d00;
    color: #fff;
    border-color: #e6e6e6;
  }


</style>
