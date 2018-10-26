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

      <div class="set_title" ref="content">
        <input type="text" placeholder="填写游记标题" maxlength="48" >
      </div>
    </div>

    <!----------------------写游记---------------------------------->
    <div class="container">
      <div class="col-md-9" id="write-notes" ref="content">
        <div contenteditable="true" id="write-notes-day">游记从这里开始.....</div>
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
          <div><a class="btn-save" role="button"><i></i>预览</a></div>
          <!--模态框弹出提示，填写地址-->
          <!--发布成功，弹窗提示，积分增加-->
          <div><a class="btn-save" role="button" @click="push"><i></i>发表游记</a></div>
        </div>

        <div class="btn-save">游记目录</div>
      </div>
    </div>
    <motaikuangbox :pattern="this.pattern" @htitle="htitle"></motaikuangbox>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "WriteNotes",
    data() {
      return {
        pattern:"motaikuang1",
        id:sessionStorage.getItem("id"),
        travel:{
          "title":'',
          "cover_url":"",
          "content":"",
          "condition":"",
          "good":"0",
          "view":"0",
          "userid":this.id,
        },
        title:'',
      }
    },
    methods:{
      push:function () {
        var vm = this
        vm.pattern = "motaikuang1"
        vm.pattern = "motaikuang"
      },
      addtext:function(){
        var vm = this
        vm.pattern = "motaikuang"
        vm.$refs.content.innerHTML+=`
        <h1>Hello World</h1>
        `
      },
      disappear:function(){
        var vm = this
        vm.pattern = "motaikuag1"
      },
      htitle:function(title){
        var vm = this
        vm.title = title

      },

      changecoverimg:function () {

      },
      savenote:function () {
        
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
