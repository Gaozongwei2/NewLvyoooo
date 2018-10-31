<!--页面上部-->
<template>
  <div>
    <!--导航-->
    <nav-top></nav-top>
    <div class="contentsainer-fluid bg-color-ff " style="margin: 0;padding: 0; ">
      <div class="row text-center  line " style="margin: 0;padding: 0;width: 100%;">
        <div class="col-lg-1 visible-lg"></div>
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2">
        </div>
        <div class="col-lg-4 col-md-4 col-lg-offset-3" style="margin-top: 1%;height: 15px">
          <input type="text" maxlength="7" :readonly="readonly" ref="title" @blur="disfocus()"
                 class="form-contentsrol text-center input-rename  float center-block" v-model="title"
                 style="height: 40px; margin-left: -50px; border-radius: 7px; border: none">
          <a href="#" class="float rename" style="font-size: 14px; height:35px; line-height: 35px; margin-left: 10px;  color: #ff9e00;text-decoration:none;"
             @click="rename">重命名</a>
        </div>

        <!--发布按钮-->
        <div class="col-lg-1 col-lg-offset-2 upbtn">
          <!--这里style改了按钮大小 圆角-->
          <div ref="upload" class="btn btn-circle upbtn" @click="save" style="width: 110px;height: 35px; background-color: limegreen; color: white; margin-right: 20px">发
            布
          </div>
        </div>
      </div>
    </div>


    <!---------------------------------左侧导航------------------------------->
    <div class="contentsainer-fluid bg-color-f5" id="contentsain" style="padding: 0; background-color: rgba(169,169,169,0.31)">
      <!--左边导航-->
      <div class="col-lg-2 bg-color-f5 leftnav">

        <!--追加天数-->
        <ul class="list-unstyled div-left" ref="ul" id="day-ul-li">
          <li v-for="i in days" @click="left($event)" :id="i" class="add-day text-center btn-circle"
              style="margin-top: 10px">
            第
            <span>{{i}}</span>
            天
          </li>
        </ul>
        <!--图片-->
        <div class="add-day text-center btn-circle " id="add-div" @click="addevent"
             style="margin-left: 45%; margin-top: 10px">
          <img src="../../../assets/strategy/添加.png" alt="" style="width: 20px">
        </div>


      </div>


      <!------------------循环添加模版-------------------->

      <div style="background-color: rebeccapurple"  id="moban">
        <div class="col-lg-8 bg-color-ff div-edit aaaa" id="div-center-edit" :id="i">
          <ul class="list-unstyled">

            <li>

              <!--上划线-->
              <div class="div-border-bottom" style="width: 100%;height: 10px">
              </div>
              <!--总结-->
              <div class="div-border-bottom" style="margin-top: 40px">
                <!--总结标题-->
                <!--这里style改了-->
                <span class="font-20">简介：</span>
                <!--多文本输入框-->
                <!--这里style改了-->
                <div class="form-group div-height1 center-block edit-div focusdiv" contenteditable="true" style="margin-top: 10px; padding: 15px; font-size:16px" ref="contents" v-html="contents" v-model="contents">
                </div>
              </div>

              <div class="contentsainer-fluid div-border-bottom ">
                <div class="row ">
                  <!--添加目的地-->
                  <div class="div-day-circle-top  div-border-space col-lg-1">

                    <!---------------------------------圆圈天数-------------------------------->
                    <div class="img-circle div-day-size list-inline text-center div-day-margin ">
                      <span>第</span>
                      <span class="day" v-text="nday" ref="day"></span>
                      <span>天</span>
                    </div>
                  </div>
                  <!--景点地名-->
                  <div class="col-lg-8">
                    <ul class="space-size list-unstyled address-close" style="margin-top: 40px;margin-left: 20px">
                      <li v-for="c in city.length">
                            <span class="place">
                                <strong v-text="city[c-1]">成都</strong>
                                <i class="i-line"></i>
                                <i class="i-close" :id="c-1"  @click="delcity($event)"></i>
                            </span>
                      </li>
                    </ul>
                    <div>
                    </div>


                  </div>
                  <div class="col-lg-1" style="margin-top: 60px">
                    <!--添加目的地-->
                    <!--删除本日-->
                    <button type="button" class="btn btn-default btn-style"
                            style="outline: none; margin-right:1px;width: 78px">删除本日
                    </button>
                  </div>
                  <div class="col-lg-1" style="margin-top: 60px">
                    <!--添加目的地-->
                    <button type="button" class="btn btn-default btn-style  " style="outline: none;width: 78px" @click="addstate" >目的地
                    </button>
                    <!--删除本日-->
                  </div>
                </div>

              </div>

              <!---------------------------------------详细攻略start-------------------------------------->


              <!--****************************游玩攻略********************************-->
              <div class="div-border-bottom div-border-space">
                <!--图片-->
                <div class="div-span-img-play float title-img" ref="ppic" v-html=""></div>
                <!--游玩攻略title-->
                <div class="title-size div-title-height font-20">
                  <img src="../../../assets/strategy/addresss.png" alt="">
                  游玩攻略
                </div>
                <!--编写div文本框-->
                <div class="form-group div-height1 center-block edit-div focusdiv" v-on:blur="reftext($event)" style="font-size: 16px; padding: 15px 55px 15px 15px;"
                     @click="brgorereftext()" contenteditable="true" ref="play" v-html="play">
                </div>
                <!--添加图片-->
                <ul class="list-unstyled list-inline " id="ul">
                  <li class="li-space " style="margin-bottom: 20px;" data-toggle="modal" data-target="#myModal">
                    <a href="javascript:;" class="div-img-size float" @click="showmodel()" data-toggle="modal"
                       data-target="#myModal">
                      <!--<img src="../../../assets/images/straffictegy/add.png" alt="">-->
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
                  <div class="title-size div-title-height font-20">
                    <img src="../../../assets/strategy/addresss.png" alt="">
                    交通攻略
                  </div>
                  <!--编写div文本框-->
                  <div class="form-group div-height1 center-block edit-div focusdiv" ref="traffic" style="font-size: 16px; padding: 15px 55px 15px 15px;" v-html="traffic" contenteditable="true">
                  </div>
                </div>


                <!--门票攻略-->
                <div class="div-border-bottom div-border-space">
                  <!--图片-->
                  <div class="div-span-img-play float title-img"></div>
                  <!--门票攻略title-->
                  <div class="title-size div-title-height font-20">
                    <img src="../../../assets/strategy/addresss.png" alt="">
                    门票攻略
                  </div>
                  <!--编写div文本框-->
                  <div style="padding: 15px 55px 15px 15px; font-size: 16px;" class="form-group div-height1 center-block edit-div focusdiv" contenteditable="true" ref="ticket" v-html="ticket">
                  </div>
                </div>


                <!--餐饮攻略-->
                <div class="div-border-bottom div-border-space">
                  <!--图片-->
                  <div class="div-span-img-play float title-img"></div>
                  <!--餐饮攻略title-->
                  <div class="title-size div-title-height font-20">
                    <img src="../../../assets/strategy/addresss.png" alt="">
                    餐饮攻略
                  </div>
                  <!--编写div文本框-->
                  <div class="form-group div-height1 center-block edit-div  focusdiv" contenteditable="true" ref="food" v-html="food" style="padding: 15px 55px 15px 15px; font-size: 16px">

                  </div>

                  <!--添加图片-->
                  <ul class="list-inline list-unstyled" id="ul1">
                    <li class="li-space">
                      <a href="javascript:;" class="div-img-size" data-toggle="modal" data-target="#myModal1">

                        <!--<img src="../../../assets/images/straffictegy/add.png" alt="">-->
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
          <div class="col-lg-2 bg-color-f5"></div>
        </div>
      </div>
    </div>
    <stateadd :getcity="cityshow" @htitlepush = "htitlepush"></stateadd>

    <!--信息不全提示-->
    <!--<mwarning2 :warning2="warning2" :text="warntext" @hidden="htitlepush"></mwarning2>-->

  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    name: 'E_Edit',
    data() {
      return {
        // -------------------------------
        sid: '',// 攻略ID
        nday:1,// 模板中显示的天数
        // -------------------------------
        cityshow: false,// 控制模态框状态
        title: '在这里填写标题', //攻略标题
        warning2: false,
        warntext: '',
        days: 1,// 左侧导航栏天数
        readonly: true, // 标题readonly属性
        messagelist: [],// 存放所有天数的数据
        leftday:[],// 模板数量
        modal: false,
        // html绑定



        days: 0, // 左侧导航天数
        play:'',
        contents: '',// 简介内容
        traffic: '',// 交通攻略内容
        ticket: '',// 门票攻略内容
        food: '',// 饮食攻略内容
        city: [],// 城市列表
        daymsg: { // 主要信息封装字典
          "play": '',
          "contents": '',
          "traffic": '',
          "ticket": '',
          "food": '',
          "city": [],
        },
      }
    },

    created() {
      this.sid = this.$route.params.id // 获取传递过来的攻略ID
      this.getmaintable() // 查询该攻略的信息
    },
    methods: {
      // 编辑时获取大表信息
      getmaintable:function(){
        var vm = this
        alert("haha")
        axios.get('http://127.0.0.1:8000/strategy/detailcontent/'+vm.sid+'/')
          .then(function (response) {
            var data = response.data
            vm.days = parseInt(data['day']) // 游记天数
            vm.messagelist = data['content'] //游记主要内容
            vm.title = data['title'][0]['title'] // 获取标题
            // 加载第一天数据
            var nowdayms = vm.messagelist[0]
            vm.play = nowdayms['play']
            vm.contents = nowdayms['contents']
            vm.traffic = nowdayms['traffic']
            vm.ticket = nowdayms['ticket']
            vm.food = nowdayms['food']
            vm.city = eval(nowdayms['advantage'])
          })
          .catch(
          )
      },
      // 获取当前时间方法
      gettimenow:function(){
        let date  = new Date()  //系统当前时间
        let year = date.getFullYear();
        let month = date.getMonth()+1;//js中是从0开始所以要加1
        let day = date.getDate();
        let utime = year+'-'+month+'-'+day
        return utime
      },
      // 重命名按钮
      rename: function (text) {
        var vm = this
        vm.readonly = false
        vm.$refs.title.style.backgroundColor = "white"
        vm.$refs.title.style.border = "none"
        vm.$refs.title.style.boxShadow = "rgba(50, 205, 50, 0.51) 0px 1px 3px 1px"
        vm.$refs.title.focus()
      },
      // 标题输入框失去焦点
      disfocus(){
        var vm = this
        vm.readonly = "true"
        vm.$refs.title.style.backgroundColor = "#ededed"
        vm.$refs.title.style.outline = "none"
        vm.$refs.tilte.style.border = "rgba(0,0,0,0.2) 1px solid"
      },
      // 添加地点时弹出模态框
      addstate: function () {
        this.cityshow = !this.cityshow
      },
      // 模态框点击确定调用，在city中增加新项，
      htitlepush: function (city) {
        this.city.push(city)
      },
      // 删除地点卡片
      delcity: function (event) {
        let id = event.target.id
        this.city.splice(id, 1)
      },
      // 保存主表信息方法
      savemain:function(){
        var vm = this
        // 存储当前界面信息
        //取出当前页面显示的数据
        var playt = vm.$refs.ywgl.innerHTML
        var cont = vm.$refs.content.innerHTML
        var transf = vm.$refs.transf.innerHTML
        var ticket = vm.$refs.ticket.innerHTML
        var food = vm.$refs.food.innerHTML
        vm.daymsg = {
          "playt": playt,
          'cont': cont,
          'tra': transf,
          'tic':ticket,
          'foo':food,
          'city':vm.city,
        }
        //取出当前显示界面的天数
        var day = vm.nday
        //更新当前显示界面的数据
        vm.messagelist[day - 1] = vm.daymsg
        console.log(vm.daymsg)
        // 获取保存主表信息
        var strategy= [{
          "title":vm.title,
          "state":vm.daymsg['city'][0],
          "time": vm.gettimenow(),
          "good":0,
          "view":0,
          "content":vm.daymsg['cont'],
          "condition_id":1,
          "scover_id":3,
          "userid_id":vm.id,
        }]
        var params = new URLSearchParams()
        params.append('strategy', JSON.stringify(strategy))
        axios.post('http://127.0.0.1:8000/strategy/addstrategy/', params)
          .then(function (response) {
            var strategyid = response.data  // 获取到tid
            alert(response.data)
            var params1 = new URLSearchParams()
            // 数据清洗
            var strategys = new Array();
            console.log(vm.messagelist)
            for ( let i=0; i<vm.messagelist.length; i++){
              var content = {
                "contents":vm.messagelist[i]['cont'],
                "advantage":vm.messagelist[i]['city'],
                "address":'',
                "play":vm.messagelist[i]['playt'],
                "playphoto":"",
                "traffic":vm.messagelist[i]['tra'],
                "ticket":vm.messagelist[i]['tic'],
                "food":vm.messagelist[i]['foo'],
                "foodphoto":"",
                "sid_id":parseInt(strategyid),
              }

              strategys.push(content)
            }
            console.log(strategys)
            params1.append('strategy', JSON.stringify(strategys))
            axios.post('http://127.0.0.1:8000/strategy/addcontent/', params1)
              .then(function (response) {
                console.log(response.data)
              })
              .catch(
              )

            alert(vm.tid)
          })
          .catch(
          )
      },
      // 保存按钮
      save: function () {
        var vm = this
        // 判断主题信息是否为空
        if (vm.title.length != 0) {
          vm.savemain()
        }
        else {
          vm.warning2 = !vm.warning2
          vm.warntext = "没有标题的游记不是真游记"
        }
      },

      // 点击左侧天数
      left: function (event) {
        var vm = this
        //取出当前页面显示的数据
        var play = vm.$refs.play.innerHTML
        var contents = vm.$refs.contents.innerHTML
        var traffic = vm.$refs.traffic.innerHTML
        var ticket = vm.$refs.ticket.innerHTML
        var food = vm.$refs.food.innerHTML
        var data = {
          "play": play,
          'contents': contents,
          'traffic': traffic,
          'ticket':ticket,
          'food':food,
          'advantage':vm.city,
        }
        // 取出当前显示界面的天数
        var showday = vm.nday
        //更新当前显示界面的数据
        vm.messagelist[parseInt(showday) - 1] = data
        //从列表中取出点击天数的数据
        var nowday = event.target.id
        var nowdayms = vm.messagelist[parseInt(nowday) - 1]
        vm.play='',
        vm.contents='',
        vm.traffic='',
        vm.ticket='',
        vm.food='',
        vm.city = [],

        vm.nday = nowday
        vm.play = nowdayms['play']
        vm.contents = nowdayms['contents']
        vm.traffic = nowdayms['traffic']
        vm.ticket = nowdayms['ticket']
        vm.food = nowdayms['food']
        vm.city = eval(nowdayms['advantage'])
        console.log(vm.contents)
      },
      //点击加号将新的模版添加到模版数组里=====================================================
      addevent: function () {
        var vm = this
        //获取并更新当前数据===================
        var play = vm.$refs.play.innerHTML
        var contents = vm.$refs.contents.innerHTML
        var traffic = vm.$refs.traffic.innerHTML
        var ticket = vm.$refs.ticket.innerHTML
        var food = vm.$refs.food.innerHTML
        var data = {
          "play": play,
          "contents": contents,
          "traffic":traffic,
          'ticket':ticket,
          'food':food,
          'advantage':vm.city,
        }
        //取出当前显示界面的天数
        var day = vm.nday
        //更新当前显示界面的数据
        vm.messagelist[parseInt(day) - 1] = data
        //获取第几天
        vm.days++
        //新建第几天的按钮和模版
        alert(vm.days)


        // 获取新表数据===========================
        // vm.city=[]
        vm.play='',
        vm.contents='',
        vm.traffic='',
        vm.ticket='',
        vm.food='',
        vm.city = [],

       vm.daymsg= {
        "play": '',
        "contents":  '',
        "traffic": '',
        'ticket': '',
        'food':'',
        'advantage':[],
      }
        vm.messagelist.push(vm.daymsg)
      },
      }










      //获取到的html传递到后台
      // sendhtml:function(){
      //   let vm = this;
      //   this.$post('http://127.0.0.1:8000/straffictegy/insertdetail/',
      //     this.$qs.stringify({"contentmsg": vm.text})).then((response) => {
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
      // params.append('contentmsg', vm.text);
      // axios.post('http://127.0.0.1:8000/straffictegy/edit/', params)
      //
      //   .then(function (response) {
      //     vm.list = response.data
      //     console.log(vm.list)
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   })



  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .leftnav {
    min-height: 1374px;
  }

  .aaaa {
    position: absolute;
    left: 18%;
  }

  .place {
    display: inline-block;
    margin-right: 10px;
    padding-top: 9px;
    border: 1px solid #f2f2f2;
    background-color: #f5f5f5;
    position: relative;
    verticketal-align: middle;
    cursor: move;
  }

  strong {
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    font-size: 20px;
    color: #333;
    background-color: #fff;
    font-weight: normal;
  }

  .i-line {
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

  .i-close {
    position: absolute;
    right: -8px;
    top: -5px;
    width: 18px;
    height: 18px;
    background: url('../../../assets/strategy/取消.png') no-repeat;
    overflow: hidden;
    display: inline;
  }
  .i-close:hover{
    trafficnsform: rotateZ(360deg);
    -webkit-trafficnsform: rotateZ(360deg);
    -moz-trafficnsform: rotateZ(360deg);
  }

  .address-close > li {
    margin-left: 10px;
    margin-top: 10px;
  }

  ul, lu {
    margin: 0;
    padding: 0;
  }

  /*float*/
  .float {
    float: left;
  }

  /*字体大小——20*/
  .font-20 {
    font-size: 20px;
  }

  /*标题高度*/
  .div-title-height {
    height: 48px;
    line-height: 60px;
  }

  ul, li {
    padding: 0px;
    margin: 0px;
  }

  /*标题文本框*/
  .div-height1 {
    margin-top: 5px;
    min-height: 80px;
  }
  .upbtn{
    margin-left: 0;
    width: 120px;
  }
  .upbtn:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  /*模块间的下边框*/
  .div-border-bottom {
    border: 1px solid #f2f2f2;
    border-left: none;
    border-right: none;
    border-top: 10px #888888;
  }

  /*边框和模块的间距*/
  .div-border-space {
    padding-bottom: 20px;
  }

  /*左面导航*/
  .add-day {
    width: 100px;
    height: 50px;
    background-color: #fff;
    border: #e6e6e6 1px solid;
    line-height: 50px;
  }

  .add-day:hover {
    color: #ff9d00;
    border: #ff9d00 solid 1px;
  }

  /*添加图片*/
  .div-img-size {
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
  .li-space {
    margin-left: 28px;
    margin-bottom: 10px;
  }

  /*悬浮*/
  .div-img-size:hover {
    border: 1px #ff9e00 dashed;
    background: url("../../../assets/strategy/addhover.png");
    background-position: center;
    background-repeat: no-repeat;
  }

  /*攻略重命名文本框*/
  .input-rename {
    font-size: 27px;
    background-color: #ffffff;
    width: 70%;
  }

  .input-rename:focus {
    -webkit-box-shadow: 0 0 0 #fff;
    -moz-box-shadow: 0 0 0 #fff;
  }

  /*圆圈天数的大小*/
  .div-day-size {
    width: 100px;
    height: 100px;
    background-color: #747982;
    color: #f2f2f2;
  }

  /*圆圈距离总结的高度*/
  .div-day-circle-top {
    margin-top: 30px;
  }

  /*圆圈天数垂直居中*/
  .div-day-margin {
    padding-top: 25px;
  }

  /*圆角*/
  .btn-circle {
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  /*编写div文字*/
  .edit-div:hover {
    background-color: #f3f3f3;
    /*border: 1px solid #e6e6e6;*/
  }

  /* 向右靠齐*/
  .div-left li {
    margin-left: 45%;
  }

  .lin > li {
    float: left;
  }

  /*确认取消按钮*/
  .btn-style {
    width: 120px;
    height: 35px;
    margin-left: 20px;
  }

  /*景点图标大小*/
  .space-size > li {
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
  .bg-color-ff {
    background-color: #ffffff;
  }

  /*导航条*/
  .row {
    line-height: 58px;
  }

  /*下划线*/
  .line {
    border: 5px solid #d6d6d6;
    border-left: none;
    border-right: none;
    border-top: none;
    background-color: rgba(0, 0, 0, .06);
  }

  /*背景颜色f5*/
  .bg-color-f5 {
    background-color: #f5f5f5;
  }

  .add-day:hover {
    color: #ff9d00;
    border: #ff9d00 solid 1px;
  }

  /*字体大小——20*/
  .font-20 {
    font-size: 20px;
  }

  /*总结div大小*/
  .div-height {
    width: 80%;
    min-height: 80px;
  }

  /*模块间的下边框*/
  .div-border-bottom {
    border: 1px solid #f2f2f2;
    border-left: none;
    border-right: none;
    border-top: none;
  }

  /*div点击 边框变色*/
  .focusdiv:focus {
    outline-color: #ff9e00;
    background-color: #ffffff;
  }
</style>
