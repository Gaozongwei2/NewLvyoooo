<!--我的收藏-->
<template>
  <div>
    <ul class="myfocus container-fluid">
      <li class="nav navbar navbar-nav col-md-4  card" style="contenteditable:true">
        <!--游记收藏-->
        <div class="col-md-3 collection " ref="abc"  @click="trshowita($event)">游记收藏</div>
        <!--攻略收藏-->
        <div class="col-md-3 collection" ref="def" @click="scshowita($event)" >攻略收藏</div>

        <!--游记详情-->
        <!--<div v-if="!this.showit">-->
        <div  ref="trtest">

          <!--循环-->
          <div class="col-md-12" style="margin-top: 20px" v-for="travel in travels">
            <div class="col-md-4 content-img" :style="{background:'url('+travel['ctravelnote__cover__url']+')'}"></div>
            <div class="col-md-8">
              <a href="">
                <h3 style="margin-top: 0;color: #fa0" >
                  <button type="button" class="btn-collect" style="color:#fa0"  >取消收藏</button>
                </h3>
              </a>

              <p style="color: #666" >
                <img src="http://n3-q.mafengwo.net/s12/M00/ED/22/wKgED1vEm1GAJYGdAA4JRgRT65c86.jpeg?
                imageMogr2%2Fthumbnail%2F%21196x140r%2Fgravity%2FCenter%2Fcrop%2F%21196x140%2Fquality%2F90"
                     style="width: 16px;height: 16px">
                作者:
                <span  v-text="travel['ctravelnote__userid__username']"></span>
              </p>
              <p style="font-size: 14px;color: #666" v-text="travel['ctravelnote__content']"></p>
            </div>
          </div>
        </div>


        <!--攻略详情-->
        <!--<div v-if="this.showit">-->
        <div ref="sctest">
          <div class="col-md-12" style="margin-top: 20px"  v-for="strate in strates">
            <div class="col-md-4 content-img" :style="{background:'url('+strate['cstrategy__scover__url']+')'}"></div>
            <div class="col-md-8">
              <a href="">
                <h3 style="margin-top:0;text-decoration: none;font-size: 18px">
                  <button type="button" class="btn-collect" style="margin-left: 200px;color:#fa0">取消收藏</button>
                </h3>
              </a>

              <p style="color: #666" v-text="strate['cstrategy__title']"> </p>
              <p v-text="strate['cstrategy__content']"></p>
            </div>
          </div>
        </div>
      </li>
      <li class="nav navbar navbar-nav col-md-4"></li>
      <li class="nav navbar navbar-nav col-md-4"></li>
    </ul>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'MyFocus',
    // props:['user'],
    data() {

      return {
        // showit: false,
        travels: [],
        strates:[],
        id:sessionStorage.getItem("id")
      }
    },
    created() {
      // this.scshowita()
      this.strategy()
    },

    methods: {
      // 攻略
      scshowita: function (event) {
        var vm = this
        vm.$refs.trtest.style.display = "none"
        vm.$refs.sctest.style.display = "block"
        vm.$refs.abc.style.borderBottomColor = "white"
        vm.$refs.def.style.borderBottomColor = "white"
        event.currentTarget.style.borderBottomColor = "#fa0"

        //  展示攻略收藏
        axios.get('http://127.0.0.1:8000/user/colstrategy/' + vm.id + '/')
          .then(function (response) {
            vm.strates = response.data
            console.log(vm.strates)
          })
          .catch(function (error) {
            return error
          })
      },

      //游记
      trshowita: function (event) {
        var vm = this
        vm.$refs.sctest.style.display= 'none'
        vm.$refs.trtest.style.display= 'block'
        vm.$refs.abc.style.borderBottomColor = "white"
        vm.$refs.def.style.borderBottomColor = "white"
        event.currentTarget.style.borderBottomColor = "#fa0"

        axios.get('http://127.0.0.1:8000/user/coltravelnote/' + vm.id + '/')
          .then(function (response) {
            vm.travels = response.data
            console.log(vm.travels)
          })
          .catch(function (error) {
            return error
          })
      },
      strategy:function(){
        var vm = this
        //  展示游记收藏
        axios.get('http://127.0.0.1:8000/user/coltravelnote/' + vm.id + '/')
          .then(function (response) {
            vm.travels = response.data
            console.log(vm.travels)
          })
          .catch(function (error) {
            return error
          })
      },
      // 获取关注人信息
      getmessage: function () {
        var vm = this
        axios.get(' http://127.0.0.1:8000/user/myfocus/' + vm.id + '/')
          .then(function (response) {
            vm.some = response.data
          })
          .catch(function (error) {
            return error
          })
      }
    }
  }
</script>

<style scoped>
  ul, li {
    list-style: none;
  }

  .content-img{
    height: 136px;
    background-size: cover;
  }

  .myfocus {
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .card {
    border: rgba(0, 0, 0, 0.2) 1px solid;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 1px;
    padding: 10px 15px;
    width: 700px;
    margin-left: 15px;
    margin-top: 20px;
  }

  .collection {
    height: 35px;
    font-size: 17px;
    margin-top: 10px;
    margin-left: 95px;
    border-bottom: 2px white solid;
    text-align: center;

  }

  .collection-img img {
    background-repeat: no-repeat;
  }

  h3 a {
    font-size: 18px;
    color: #fa0;
  }

  .btn-collect {
    font-size: 12px;
    margin-left: 75px;
    line-height: 8px;
    margin-top: 2px;
    border: 0px;
    background: #faf8ff;
  }

  p {
    margin-bottom: 0px;
  }

  a {
    /*font-weight: bold;*/
    color: darkgrey;
    text-decoration: none;
  }

</style>
