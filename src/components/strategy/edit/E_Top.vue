<!--页面上部-->
<template>

  <div>
    <!--导航-->
    <div class="container-fluid bg-color-ff " style="margin: 0;padding: 0">
      <div class="row text-center  line " style="margin: 0;padding: 0;width: 100%;">
        <div class="col-lg-1 visible-lg"></div>
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2">
        </div>
        <div class="col-lg-4 col-md-4 col-lg-offset-3" style="margin-top: 1%;height: 15px">
          <input type="text" maxlength="7" :readonly="readonly" ref="title" @blur="disfocus()"
                 class="form-control text-center input-rename  float center-block" v-model="title"
                 style="">
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
    <div class="container-fluid bg-color-f5" id="contain" style="padding: 0">
      <!--左边导航-->
      <div class="col-lg-2 bg-color-f5 leftnav">

        <!--追加天数-->
        <ul class="list-unstyled div-left" ref="ul" id="day-ul-li">
          <li v-for="i in msg" @click="left($event)" :id="i" class="add-day text-center btn-circle"
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

      <div style="background-color: rebeccapurple" v-for="moban in leftday" id="moban" v-if=" moban == newtest">


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
                <div class="form-group div-height1 center-block edit-div focusdiv" contenteditable="true" style="margin-top: 10px; padding: 10px; font-size: 14px" ref="content" v-html="con">
                </div>
              </div>

              <div class="container-fluid div-border-bottom ">
                <div class="row ">
                  <!--添加目的地-->
                  <div class="div-day-circle-top  div-border-space col-lg-1">

                    <!---------------------------------圆圈天数-------------------------------->
                    <div class="img-circle div-day-size list-inline text-center div-day-margin ">
                      <span>第</span>
                      <span class="day" v-text="moban" ref="day"></span>
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
                <div class="form-group div-height1 center-block edit-div focusdiv" v-on:blur="reftext($event)"
                     @click="brgorereftext()" contenteditable="true" ref="ywgl" v-html="mms">

                </div>

                <!--添加图片-->
                <ul class="list-unstyled list-inline " id="ul">
                  <li class="li-space " style="margin-bottom: 20px;" data-toggle="modal" data-target="#myModal">
                    <a href="javascript:;" class="div-img-size float" @click="showmodel()" data-toggle="modal"
                       data-target="#myModal">
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
                  <div class="title-size div-title-height font-20">
                    <img src="../../../assets/strategy/addresss.png" alt="">
                    交通攻略
                  </div>

                  <!--编写div文本框-->
                  <div class="form-group div-height1 center-block edit-div focusdiv" ref="transf" v-html="tra" contenteditable="true">

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
                  <div class="form-group div-height1 center-block edit-div focusdiv" contenteditable="true" ref="ticket" v-html="tic">
                    fds
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
                  <div class="form-group div-height1 center-block edit-div  focusdiv" contenteditable="true" ref="food" v-html="foo">

                  </div>

                  <!--添加图片-->
                  <ul class="list-inline list-unstyled" id="ul1">
                    <li class="li-space">
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
    name: 'E_Top',
    data() {
      return {
        tid:'',
        cityshow: false,
        title: '东北两日玩法', //攻略标题
        mainmessage: '',
        warning2: false,
        warntext: '',
        jj: "iuuinini",
        msg: 1,
        //新添加的模版个数
        lis: 1,
        html: '',
        //新生成的天数
        // newlist:[],
        modal: false,
        text: '',
        //空白模版
        list: [],
        //  模态框
        show: false,
        a: '',
        text1: '11',


        //  -------------------------new--------------------------
        //  左侧导航按钮的天数
        whichday: '',
        //  左侧天数从1开始存入数组
        leftday: [],

        //新建的模版存放的空数组
        savemodel: [],

        // 标题readonly属性
        readonly: true,

        newtest: '1',


        //--------------文本-----------------
        //优点
        good: [],
        //游玩攻略
        play: [],
        //交通攻略
        traffic: '',
        //门票攻略
        trick: '',
        //餐饮攻略
        food: '',

        //存放每天的游记攻略
        playday: [],

        //测试========
        messagelist: [],

        // html绑定
        mms: '',
        con:'',
        tra:'',
        tic:'',
        foo:'',
        city:[],
        daym :{
          "playt": '',
          "cont":'',
          "tra":'',
          "tic":'',
          "foo":'',
          "city":[],
        },

        day: '',

        test: [
          1, 2, 3, 4, 5
        ]
      }
    },

    created() {
      // this.addevent()
      //隐藏第二天的按钮
      this.leftday.push(this.msg)
      var day = {
        "playt": '',
        "cont":'',
        "tra":'',
        "tic":'',
        "foo":'',
        "city":[],
      }
      this.messagelist.push(day)
      console.log(day)
    },
    watch: {
      gao: function (newd, oldd) {
      }
    },

    methods: {
      // 获取当前时间方法
      gettimenow:function(){
        let date  = new Date()
        //系统当前时间
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
        vm.$refs.title.style.boxShadow = "rgba(50, 205, 50, 0.51) 1px 1px 3px 1px"
        vm.$refs.title.focus()
      },
      // 标题输入框失去焦点
      disfocus() {
        var vm = this
        vm.readonly = "true"
        vm.$refs.title.style.backgroundColor = "#ededed"
        vm.$refs.title.style.outline = "none"
        vm.$refs.tilte.style.border = "rgba(0,0,0,0.2) 1px solid"

      },
      addstate: function () {
        this.cityshow = !this.cityshow
      },
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
        var playt = vm.$refs.ywgl[0].innerHTML
        var cont = vm.$refs.content[0].innerHTML
        var transf = vm.$refs.transf[0].innerHTML
        var ticket = vm.$refs.ticket[0].innerHTML
        var food = vm.$refs.food[0].innerHTML
        vm.daym = {
          "playt": playt,
          'cont': cont,
          'tra': transf,
          'tic':ticket,
          'foo':food,
          'city':vm.city,
        }
        //取出当前显示界面的天数
        var day = this.$refs.day[0].innerHTML
        //更新当前显示界面的数据
        vm.messagelist[day - 1] = vm.daym
        // 获取保存主表信息
        var strategy= [{
          "title":vm.title,
          "state":vm.daym['city'][0],
          "time": vm.gettimenow(),
          "good":0,
          "view":0,
          "content":vm.daym['cont'],
          "condition_id":1,
          "scover_id":3,
          "userid_id":vm.id,
        }]
        var params = new URLSearchParams()
        params.append('strategy', JSON.stringify(strategy))
        axios.post('http://127.0.0.1:8000/strategy/addstrategy/', params)
          .then(function (response) {
            vm.tid = response.data
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
          var strategy = vm.tid
          alert(vm.tid)
          var params = new URLSearchParams()
          // 数据清洗
          var strategys = []
          var content = {
            "contents":'',
            "advantage":'',
            "address":'',
            "play":'',
            "playphoto":'',
            "traffic":'',
            "ticket":'',
            "food":'',
            "foodphoto":'',
            "sid_id":'',
          }
          console.log(vm.messagelist)
          for (let i in vm.messagelist){
            console.log(i)
            content["contents"] = vm.messagelist[i]['cont']
            content["advantage"] = vm.messagelist[i]['city']
            content['address'] = ''
            content['play'] = vm.messagelist[i]['playt']
            content['playphoto'] = '',
            content['traffic'] = vm.messagelist[i]['tra']
            content['ticket'] = vm.messagelist[i]['tic']
            content['food'] = vm.messagelist[i]['foo']
            content['foodphoto'] = ''
            alert(strategy)
            content['sid_id'] = parseInt(strategy)
            strategys.push(content)
            console.log(strategys)
          }
          params.append('strategy', JSON.stringify(strategys))
          axios.post('http://127.0.0.1:8000/strategy/addcontent/', params)
            .then(function (response) {
              console.log(response.data)
            })
            .catch(
            )
        }
        else {
          vm.warning2 = !vm.warning2
          vm.warntext = "没有标题的游记不是真游记"
        }
      },
      //左侧导航按钮上的天数
      clickone: function () {
        var vm = this
      },

      // 点击左侧天数
      left: function (event) {
        var vm = this
        //取出当前页面显示的数据
        var playt = vm.$refs.ywgl[0].innerHTML
        var cont = vm.$refs.content[0].innerHTML
        var transf = vm.$refs.transf[0].innerHTML
        var ticket = vm.$refs.ticket[0].innerHTML
        var food = vm.$refs.food[0].innerHTML
        vm.daym = {
          "playt": playt,
          'cont': cont,
          'tra': transf,
          'tic':ticket,
          'foo':food,
          'city':vm.city,
        }
        //取出当前显示界面的天数
        var day = this.$refs.day[0].innerHTML
        //更新当前显示界面的数据
        vm.messagelist[day - 1] = vm.daym
        //从列表中取出点击天数的数据
        var nowday = event.target.id
        var nowdayms = vm.messagelist[nowday - 1]
        vm.mms = nowdayms['playt']
        vm.con = nowdayms['cont']
        vm.tra = nowdayms['tra']
        vm.tic = nowdayms['tic']
        vm.foo = nowdayms['foo']
        vm.city = nowdayms['city']
        console.log(vm.messagelist)
        vm.newtest = event.target.id
        //获取当前按钮的天数
        vm.whichday = event.target.innerText.charAt(2)

      },


      //点击加号将新的模版添加到模版数组里=====================================================
      addevent: function () {
        var vm = this
        //获取并更新当前数据===================
        var playt = vm.$refs.ywgl[0].innerHTML
        var cont = vm.$refs.content[0].innerHTML
        var transf = vm.$refs.transf[0].innerHTML
        var ticket = vm.$refs.ticket[0].innerHTML
        var food = vm.$refs.food[0].innerHTML
        vm.daym = {
          "playt": playt,
          "cont": cont,
          "tra":transf,
          'tic':ticket,
          'foo':food,
          'city':vm.city,
        }
        //取出当前显示界面的天数
        var day = this.$refs.day[0].innerHTML
        //更新当前显示界面的数据
        vm.messagelist[day - 1] = vm.daym
        //获取第几天
        vm.msg++
        //新建第几天的按钮和模版
        vm.leftday.push(vm.msg)
        vm.newtest = vm.msg

        // 获取新表数据===========================
        vm.city=[]
        vm.playt='',
        vm.cont='',
        vm.tra='',
        vm.tic='',
        vm.foo='',

        vm.daym = {
          "playt": '',
          "cont":  '',
          "tra": '',
          'tic': '',
          'foo':'',
          'city':[],
        }
        vm.messagelist.push(vm.daym)
        console.log(vm.messagelist)
      },


        reftext: function(event) {

          // //如果文本框中的文本为空，就将空值填入数组
          // if(event.target.innerHTML.trim()==''){
          //   this.play.push('')
          //   alert(this.play[0])
          // }
          // else{
          //   this.play.push(event.target.innerHTML)
          //   alert(this.play[1])
          // }
          var day = this.$refs.day[0].innerHTML

          this.play[1] = event.target.innerHTML
        }

      }










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
    vertical-align: middle;
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
    transform: rotateZ(360deg);
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
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
