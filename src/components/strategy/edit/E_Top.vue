<!--页面上部-->
<template>

  <div >

    <!--导航-->
    <div class="container-fluid bg-color-ff " style="margin: 0;padding: 0">
      <div class="row text-center  line " style="margin: 0;padding: 0;width: 100%;">
        <div class="col-lg-1 visible-lg"></div>
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2">
          <!--<img  class="logo" src="../images/logo.png" alt="">-->
        </div>



        <!--这里style改了-->
        <div class="col-lg-3 col-md-3 col-lg-offset-3" style="margin-top: 1%;height: 10px">
          <input type="text" maxlength="7" readonly="readonly" class="form-control text-center input-rename  float center-block"  value="洛阳发两日玩法" style="background-color: #ededed;border: none;outline:none;">
          <a href="#" class="float rename" style="font-size: 13px;margin-left: 5px;color: #ff9e00;text-decoration:none;">重命名</a>

        </div>

        <!--发布按钮-->
        <div class="col-lg-1 col-lg-offset-2 upbtn">
              <!--这里style改了按钮大小 圆角-->
          <button type="button" ref="upload" class="btn btn-circle upbtn" @clikc="" style="width: 130px;height: 35px">发 布</button>
        </div>
        <div class="col-lg-1  visible-lg"></div>
      </div>
    </div>


    <div class="container-fluid bg-color-f5" id="contain" style="padding: 0">
      <!--左边导航-->
      <div class="col-lg-2 bg-color-f5" >

        <!--追加天数-->
        <ul class="list-unstyled div-left" ref="ul" id="day-ul-li">
          <li v-for="i in msg" @click="routeday($event,i)" class="add-day text-center btn-circle" style="margin-top: 10px">
            第
            <span>{{i}}</span>
            天
          </li>
        </ul>
          <!--图片-->
          <div class="add-day text-center btn-circle " id="add-div" @click="addbtn()" style="margin-left: 45%; margin-top: 10px">
            <img src="../../../assets/strategy/添加.png" alt="" style="width: 20px">
          </div>



      </div>

      <!--中间编辑-->
      <!--<div class="col-lg-8 bg-color-ff div-edit aaaa" ref="mybox" id="div-center-edit" >-->
        <!--<ul v-for="li in list" ref="ul">-->
      <div class="col-lg-8 bg-color-ff div-edit aaaa" id="div-center-edit" >
        <ul class="list-unstyled">

          <li>

            <!--上划线-->
            <div class="div-border-bottom" style="width: 100%;height: 10px">
            </div>
              <!--总结-->
              <div class="div-border-bottom" style="margin-top: 40px">
                <!--总结标题-->
                <!--这里style改了-->
                <span class="font-20">优点</span>
                <!--多文本输入框-->
                <!--这里style改了-->
                <div class="form-group div-height1 center-block edit-div focusdiv"  contenteditable="true" style="margin-top: 10px">

                </div>
              </div>

              <div class="container-fluid div-border-bottom ">
                <div class="row ">
                  <!--添加目的地-->
                  <div class="div-day-circle-top  div-border-space col-lg-1">
                    <!--圆圈天数-->
                    <div class="img-circle div-day-size list-inline text-center div-day-margin ">
                      <span>第</span>
                      <span class="day" v-text="msg"></span>
                      <span>天</span>
                    </div>
                  </div>
                  <!--景点地名-->
                  <div class="col-lg-8">
                      <ul class="space-size list-unstyled address-close" style="margin-top: 40px;margin-left: 20px">
                        <li>
                            <span class="place">
                                <strong>成都</strong>
                                <i class="i-line"></i>
                                <i class="i-close"></i>
                            </span>
                        </li>

                        <li>
                            <span class="place">
                                <strong>lalallalala</strong>
                                <i class="i-line"></i>
                                <i class="i-close"></i>
                            </span>
                        </li>



                        <li>
                            <span class="place">
                                <strong>成都</strong>
                                <i class="i-line"></i>
                                <i class="i-close"></i>
                            </span>
                        </li>

                        <li>
                            <span class="place">
                                <strong>成都</strong>
                                <i class="i-line"></i>
                                <i class="i-close"></i>
                            </span>
                        </li>

                        <li>
                            <span class="place">
                                <strong>成都</strong>
                                <i class="i-line"></i>
                                <i class="i-close"></i>
                            </span>
                        </li>

                      </ul>
                    <div>


                    </div>


                  </div>
                  <div class="col-lg-1" style="margin-top: 60px">
                    <!--添加目的地-->
                    <!--删除本日-->
                    <button type="button" class="btn btn-default btn-style" style="outline: none; margin-right:1px;width: 78px" >删除本日</button>

                  </div>
                  <div class="col-lg-1" style="margin-top: 60px">
                    <!--添加目的地-->
                    <button type="button" class="btn btn-default btn-style  " style="outline: none;width: 78px" >目的地</button>
                    <!--删除本日-->
                  </div>

                </div>
              </div>

              <!--详细攻略start-->
              <!--游玩攻略-->
              <div class="div-border-bottom div-border-space">
                <!--图片-->
                <div class="div-span-img-play float title-img"></div>

                <!--游玩攻略title-->
                <div class="title-size div-title-height font-20"  >
                  <img src="../../../assets/strategy/addresss.png" alt="">
                  游玩攻略
                </div>

                <!--编写div文本框-->
                <div class="form-group div-height1 center-block edit-div focusdiv"  contenteditable="true">

                </div>

                <!--添加图片-->
                <ul class="list-unstyled list-inline " id="ul">
                  <li class="li-space " style="margin-bottom: 20px;"  data-toggle="modal" data-target="#myModal">
                    <a href="javascript:;" class="div-img-size float"  @click="showmodel()"  data-toggle="modal" data-target="#myModal">
                      <!--<img src="../../../assets/images/strategy/add.png" alt="">-->
                    </a>
                  </li>
                </ul>





                <!--模态框-->
            <!--<modelk @hidden="hiddenShow" :txt="text1" ></modelk>-->

              <!--交通攻略-->
              <div class="div-border-bottom div-border-space">
                <!--图片-->
                <div class="div-span-img-play float title-img"></div>

                <!--交通攻略title-->
                <div class="title-size div-title-height font-20" >
                  <img src="../../../assets/strategy/addresss.png" alt="">
                  交通攻略
                </div>

                <!--编写div文本框-->
                <div class="form-group div-height1 center-block edit-div focusdiv" contenteditable="true">

                </div>
              </div>


              <!--门票攻略-->
              <div class="div-border-bottom div-border-space">
                <!--图片-->
                <div class="div-span-img-play float title-img"></div>

                <!--门票攻略title-->
                <div class="title-size div-title-height font-20" >
                  <img src="../../../assets/strategy/addresss.png" alt="">
                  门票攻略
                </div>

                <!--编写div文本框-->
                <div class="form-group div-height1 center-block edit-div focusdiv" contenteditable="true">
                  fds
                </div>
              </div>


              <!--餐饮攻略-->
              <div class="div-border-bottom div-border-space">
                <!--图片-->
                <div class="div-span-img-play float title-img"></div>

                <!--餐饮攻略title-->
                <div class="title-size div-title-height font-20"  >
                  <img src="../../../assets/strategy/addresss.png" alt="">
                  餐饮攻略
                </div>

                <!--编写div文本框-->
                <div class="form-group div-height1 center-block edit-div  focusdiv" contenteditable="true">

                </div>

                <!--添加图片-->
                <ul class="list-inline list-unstyled" id="ul1">
                  <li class="li-space"  >
                    <a href="javascript:;" class="div-img-size" data-toggle="modal" data-target="#myModal1">

                      <!--<img src="../../../assets/images/strategy/add.png" alt="">-->
                    </a>
                  </li>
          <!--{{li}}-->
              </ul>

       </div>



              <!--&lt;!&ndash;模态框&ndash;&gt;-->

<!---->
          </div>
        </li>
      </ul>
      <!--右边回到顶部-->
          <div class="col-lg-2 bg-color-f5" ></div>
        </div>
      </div>
  </div>
</template>




<script>
  import axios from 'axios'
  export default {
  name: 'E_Top',
  data () {
    return {
      msg: 1,
      //新添加的模版个数
      lis:1,
      html:'',
      //新生成的天数
      // newlist:[],
      modal:false,
      text:'',
      //空白模版
      list:[],
    //  模态框
      show:false,
      a:'',

      text1:'11'
    }
  },

  mounted(){
    this.text=this.$refs.mybox.innerHTML
    console.log(this.text)

  //从数据库中取出空模版
    let vm = this;
      axios.get('http://0.0.0.0:8000/strategy/insertdetail/')
        .then(function (response) {
          vm.list.push(response.data);
          console.log(response.data[0].content)
          console.log(11111)
          console.log(vm.list[0])
        })
        .catch(function (error) {
          console.log(error);
        })


  },
  methods: {
  //点击➕添加btn
    addbtn:function(){
        var vm = this;
        vm.msg++;

    //并把新加载的页面存到列表里
    //    newlist.push()
    //    console.log(newlist)
    },
    //点击弹出模态框
    showmodel:function(){
      this.show = true
    },
    hiddenShow:function(){
      let that = this;
      that.show = false

    },
    //点击侧导航栏就跳转到对应页
    routeday:function (e) {
      //
      //获取第几天
      // alert(e.target.innerText.charAt(2))

      // 发送ajax
      // getdata({"id":e})
      // 获取第e天的静态页面html1
      // 查出来的静态页面赋值给html
      // this.html=html1
    },

    //获取到的html传递到后台
    // sendhtml:function(){
    //   let vm = this;
    //   this.$post('http://127.0.0.1:8000/strategy/insertdetail/',
    //     this.$qs.stringify({"content": vm.text})).then((response) => {
    //     console.log(response)
    //     this.$notify({
    //       title: '成功',
    //       message: response.errorCode,
    //       type: 'success'
    //     })
    //   }).catch((response) => {
    //     let errorData = ''
    //     if (response.response === undefined) {
    //       errorData = response.errorMsg
    //     } else {
    //       errorData = response.errorMsg
    //     }
    //     this.$notify.error({
    //       title: '失败',
    //       message: errorData
    //     })
    //   })

      // let vm = this;
      // console.log(text)
      // var params = new URLSearchParams();
      // params.append('content', vm.text);
      // axios.post('http://127.0.0.1:8000/strategy/edit/', params)
      //
      //   .then(function (response) {
      //     vm.list = response.data
      //     console.log(vm.list)
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   })



    },

    //模态框添加图片
    // addphoto:function () {
    //
    //   this.model = !this.model;
    //   $('#myModel').modal(options)
    // }

  // }，
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .place{
    display: inline-block;
    margin-right: 10px;
    padding-top: 9px;
    border: 1px solid #f2f2f2;
    background-color: #f5f5f5;
    position: relative;
    vertical-align: middle;
    cursor: move;
  }
  strong{
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    font-size: 20px;
    color: #333;
    background-color: #fff;
    font-weight: normal;
  }
  .i-line{
    position: absolute;
    top: 2px;
    left: 50%;
    margin-left: -5px;
    width: 9px;
    height: 1px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    display: inline;
  }
  .i-close{
    position: absolute;
    right: -8px;
    top: -5px;
    width: 18px;
    height: 18px;
    background: url('../../../assets/strategy/取消.png') no-repeat ;
    overflow: hidden;
    display: inline;
  }

  .address-close>li{
    margin-left: 10px;
    margin-top: 10px;
  }

  ul,lu{
    margin: 0;
    padding: 0;
  }
  /*float*/
  .float{
    float: left;
  }

  /*字体大小——20*/
  .font-20{
    font-size:  20px;
  }

  /*标题高度*/
  .div-title-height{
    height: 48px;
    line-height: 60px;
  }

  ul,li{
    padding: 0px;
    margin: 0px;
  }

  /*标题文本框*/
  .div-height1{
    margin-top: 5px;
    min-height: 80px;
  }

  .upbtn:focus{
    outline: none;
    border: none;
    box-shadow:none;
  }

  /*模块间的下边框*/
  .div-border-bottom{
    border: 1px solid #f2f2f2;
    border-left: none;
    border-right: none;
    border-top:10px #888888;
  }

  /*边框和模块的间距*/
  .div-border-space{
    padding-bottom: 20px;
  }

  /*左面导航*/
  .add-day{
    width: 100px;
    height: 50px;
    background-color: #fff;
    border: #e6e6e6 1px solid;
    line-height: 50px;
  }

  .add-day:hover{
    color: #ff9d00;
    border: #ff9d00 solid 1px;
  }
  /*添加图片*/
  .div-img-size{
    display: block;
    width: 225px;
    height: 150px;
    background-color: #FFFFFF;
    border: 1px #767581 dashed;
    background: url("../../../assets/strategy/add.png");
    background-position: center;
    background-repeat: no-repeat;
  }

  /*图片间距*/
  .li-space{
    margin-left: 28px;
    margin-bottom: 10px;
  }
  /*悬浮*/
  .div-img-size:hover{
    border: 1px #ff9e00 dashed;
    background: url("../../../assets/strategy/addhover.png");
    background-position: center;
    background-repeat: no-repeat;
  }
  /*攻略重命名文本框*/
  .input-rename{
    font-size: 27px;
    background-color: #ffffff;
    width: 70%;
  }

  .input-rename:focus {
    -webkit-box-shadow: 0 0 0 #fff;
    -moz-box-shadow: 0 0 0 #fff;
  }

  /*圆圈天数的大小*/
  .div-day-size{
    width: 100px;
    height: 100px;
    background-color: #747982;
    color: #f2f2f2;
  }

  /*圆圈距离总结的高度*/
  .div-day-circle-top{
    margin-top: 30px;
  }

  /*圆圈天数垂直居中*/
  .div-day-margin{
    padding-top: 25px;
  }


  /*圆角*/
  .btn-circle{
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    border-bottom-right-radius:7px;
    border-bottom-left-radius:7px;
  }


  /*编写div文字*/
  .edit-div:hover{
    background-color: #f3f3f3;
    /*border: 1px solid #e6e6e6;*/
  }



  /* 向右靠齐*/
  .div-left li{
    margin-left: 45%;
  }

  .lin>li{
    float: left;
  }


  /*确认取消按钮*/
  .btn-style{
    width: 120px;
    height: 35px;
    margin-left: 20px;
  }


  /*景点图标大小*/
  .space-size>li{
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    font-size: 20px;
    color: #333;
    background-color: #fff;
    font-weight: normal;
  }


  /*背景颜色fffff*/
  .bg-color-ff{
    background-color: #ffffff;
  }
  /*导航条*/
  .row{
    line-height: 58px;
  }
  /*下划线*/
  .line{
    border:5px solid #d6d6d6;
    border-left: none;
    border-right: none;
    border-top: none;
    background-color: rgba(0,0,0,.06);
  }
  /*背景颜色f5*/
  .bg-color-f5{
    background-color: #f5f5f5;
  }

  .add-day:hover{
    color: #ff9d00;
    border: #ff9d00 solid 1px;
  }

  /*字体大小——20*/
  .font-20{
    font-size:  20px;
  }
  /*总结div大小*/
  .div-height{
    width: 80%;
    min-height:80px;
  }
  /*模块间的下边框*/
  .div-border-bottom{
    border: 1px solid #f2f2f2;
    border-left: none;
    border-right: none;
    border-top: none;
  }
  /*div点击 边框变色*/
  .focusdiv:focus{
    outline-color: #ff9e00;
    background-color:#ffffff ;
  }
</style>
