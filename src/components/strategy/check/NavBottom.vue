<!--某地几日游标题，点赞，收藏，编辑-->
<template>
  <div>
    <div class="bg-color-fa" style="padding: 0">

      <div class="container-fluid">
        <div class="container-fluid div-all bg-color-fa">
          <div class="row div1">

            <!--面包屑导航-->
            <div class="col-lg-10 col-lg-offset-1 ">
              <nav-bread></nav-bread>
            </div>
            <div class="col-lg-1 "></div>
          </div>

          <!--洛阳四日玩法-->
          <div class="row div2">
            <div class="col-lg-4 col-md-5 col-sm-6 col-lg-offset-1 ">
              <span class="font-h1 " v-text="strage"></span>
              <!--<div ></div>-->
              <span class="col-line hidden-sm hidden-xs"></span>
            </div>
            <div class="col-lg-3 col-md-3 hidden-sm hidden-xs">
              <!--<img src="../images/sun.svg" alt="">-->
              <!--<span>最佳季节：</span>-->
              <!--<span>春、秋</span>-->
            </div>

            <!--点赞收藏编辑-->
            <div class="col-lg-3 col-md-3 col-sm-6 hidden-xs " id="a-none">




              <!---------------------点赞---------增加点赞数---------------->

              <a href="javascript:;" class="size good text-center float a-none-line" @click="newsgoods" id="good" ref="goods">
                <div style="margin-top: 35px!important;" ref="sgoohere">点赞</div>
                <div style="margin-top: -5px" v-text="this.strategy['good']"></div>
                <!--点赞数量-->
              </a>
              <a href="javascript:;" class="size text-center star float a-none-line" id="star">
                <div style="margin-top: 35px!important;">收藏</div>
                <div style="margin-top: -5px">112</div>
              </a>

              <!--传递要编辑的帖子id-->
              <!--<a href=”http://www.baidu.com” target=”_blank”> 编辑 </a>-->
              <router-link :to="{name:'edit'}" tag="a" target="_blank" class="size text-center edit float a-none-line"
                           id="edit">编辑
              </router-link>
              <!--<a href="javascript:;"  class="size text-center edit float a-none-line" id="edit">编辑</a>-->
            </div>
            <div class="col-lg-1 col-md-1"></div>
          </div>

          <!--三个列表按钮-->
          <div class="row div-button bg bg-color-fa div-li">

            <a href="#one" class="col-lg-1 col-md-2 col-sm-2 col-xs-3 col-lg-offset-1 "
               style="text-decoration: none;margin-top: 17px"> 玩法概况</a>

            <a href="#two" class="col-lg-1 col-md-2 col-sm-2 col-xs-3 a-line"
               style="text-decoration: none;margin-top: 17px">玩法详情</a>

            <a href="#three" class="col-lg-1 col-md-2 col-sm-2 col-xs-3 a-line"
               style="text-decoration: none;margin-top: 17px">讨论区</a>

            <div class="col-lg-6 col-md-4 col-sm-2 col-xs-2"></div>

            <div class="col-lg-1 col-md-3 col-sm-2 hidden-xs ">
              <a href="#three" type="button" class="btn  btn-css a-none-line"
                 style="height: 30px;margin-top: 14px;margin-left: -200px"> 点 评 </a>
            </div>
            <div class="col-lg-1"></div>
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
    name: 'NavMiddle',
    //攻略标题和攻略id
    props: ['strageid', 'strage'],
    data() {
      return {

        straged: '',
        strategy: {
          "id": 1,
          "view": 0,
          "good": 0,
          "collect": 0,
        },
      }
    },


    created() {
      var vm = this
      vm.scurrentfgoods()
      vm.getgoods()
      console.log('id在这里'+vm.strageid)
    },
      methods: {
        //  查询当前攻略的点赞数
        scurrentfgoods: function () {
          console.log('here')
          var vm = this
          console.log(vm.strategy['id'])
          axios.get('http://127.0.0.1:8000/user/hasgood/' + vm.strageid + '/' + 1 + '/')
            .then(function (response) {

              vm.strategy['good'] = response.data["goodcount"]
            })
            .catch(function (error) {
              return error
            })
        },
        //查询用户对当前游记的点赞状态
        getgoods: function () {
          var vm = this
          //游记id  用户id
          axios.get('http://127.0.0.1:8000/user/hasgood/' + vm.strageid + '/' + 1 + '/')
            .then(function (response) {
              // console.log('查询用户当前游记的点赞状态'+response.data)
              vm.goodnum = response.data["isgood"]
              if(vm.goodnum!=0){
              //  点赞的文本变成已点赞
                vm.$refs.sgoohere.innerHTML='已点赞'
              }
            })
            .catch(function (error) {
              return error
            })
        },


        //  添加用户点赞过这个游记并更新攻略表里点赞的数量
        newsgoods: function () {

          var vm = this
          if(vm.$refs.sgoohere.innerHTML=='点赞'){
              vm.goodnum++
              var params = new URLSearchParams();
              params.append('good', vm.goodnum)
              axios.post('http://127.0.0.1:8000/user/updategood/' + vm.strageid + '/' + 1 + '/',params)
                .then(function(response) {
                  vm.res = response.data
                  console.log('返回结果是'+vm.res)
                })
                .catch(function (error) {
                  return error
                })
          }

          }
      }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*浮动*/
  .float {
    float: left;
  }

  /*字体大小*/
  .font-h1 {
    font-size: 30px;
  }

  /*目的地/xx/xx*/
  .div1 {
    background-color: #fafafa;
  }

  /*洛阳四日玩法*/
  .div2 {
    height: 95px;
    background-color: #fafafa;
  }

  /*字体大小*/
  .font-h1 {
    font-size: 30px;
  }

  /*背景颜色fafafa*/
  .bg-color-fa {
    background-color: #fafafa;;
  }

  /*点赞收藏大小*/
  .size {
    display: block;
    width: 55px;
    height: 55px;
  }

  /*点赞*/
  .good {
    background: url("../../../assets/strategy/smile.svg");
    background-repeat: no-repeat;
    background-position: top;
    line-height: 20px;
  }

  .good div {
    margin-top: 35px;
  }

  /*收藏*/
  .star {
    background: url("../../../assets/strategy/star.svg");
    background-repeat: no-repeat;
    background-position: top;
    line-height: 20px;
  }

  /*编辑*/
  .edit {
    background: url("../../../assets/strategy/icon_editor.svg");
    background-repeat: no-repeat;
    background-position: top;
    line-height: 100px;
  }

  .img-circle:hover + dropdown-menu {
    box-sizing: content-box;
    border: #ff9d00 solid 2px;
    cursor: pointer;
  }

  .img-circle:hover + dropdown-menu {
    box-sizing: content-box;
    border: #ff9d00 solid 2px;
    cursor: pointer;
  }

  /*取消超链接下划线*/
  .a-none-line {
    text-decoration: none !important;
  }

  /*按钮样式*/
  .btn-css {
    background-color: #ff9d00;
    width: 88px;
    color: white;
  }

  .btn-css:hover {
    background-color: #ff7e00;
  }

  /*三个列表按钮*/
  .div-button {
    height: 61px;
    border: #e5e5e5 1px solid;
    /*border-bottom: 1px solid ;*/
    border-bottom: none;
    border-left: none;
    border-right: none;
  }

  /*取消超链接下划线*/
  .a-none-line {
    text-decoration: none !important;
  }


</style>
