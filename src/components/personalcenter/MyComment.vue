<!--我的评论-->
<template>
  <div>

    <div class="col-md-6 btn button1 button navbar-brand" @click="gettcommit()">关于游记</div>
    <div class="col-md-6 btn button2 button right navbar-brand" @click="getscommit()">关于攻略</div>

    <!--评论游记-->
    <div  style="background-color: red" ref="tra">

      <div class="col-md-12 btn-circle" style="margin-top: 20px; height: 189px;"  v-for="tcommit in tcommits">
        <div class="col-md-3" style="height: 150px" :style="{background:'url('+tcommit['tid__cover__url']+')'}"></div>
        <div class="col-md-9" style="background-color: rebeccapurple">
          <div v-text="tcommit['']">评论的游记的标题</div>
          <div>评论时间</div>
          <div>评论信息</div>
        </div>
      </div>

    </div>


    <!--评论攻略-->
    <div  style="background-color: red"  ref="scr">
      <div class="col-md-12 btn-circle" style="margin-top: 20px; height: 189px;background-color: antiquewhite" v-for="scommit in scommits">
        <div class="col-md-3" style="background-color: chartreuse">
          被评论游记的封皮
        </div>
        <div class="col-md-9" style="background-color: rebeccapurple">
          <div>评论的游记的标题</div>
          <div>评论时间</div>
          <div>评论信息</div>
        </div>
      </div>

    </div>


  </div>
</template>
<!--复制模板-->

<script>
  import axios from 'axios'
export default {
  name: 'mycomment',
  data () {
    return {
       tcommits:[],
       scommits:[],

    }
  },
  created(){
},

  methods: {
  //  获取关于游记的评论
    gettcommit : function () {
      var vm = this
      vm.$refs.scr.style.display = "none"
      vm.$refs.tra.style.display = "block"
      axios.get(' http://127.0.0.1:8000/travelnote/tcommit/' + 1 + '/')
        .then(function (response) {
          vm.tcommits = response.data
          console.log(vm.tcommits)
        })
        .catch(function (error) {
          return error
        })

    },

    //获取关于攻略的评论
    getscommit:function () {
      var vm = this
      vm.$refs.scr.style.display = "block"
      vm.$refs.tra.style.display = "none"
      axios.get(' http://127.0.0.1:8000/strategy/scommit/' + 1 + '/')
        .then(function (response) {
          vm.scommits = response.data
          console.log(vm.scommits)
        })
        .catch(function (error) {
          return error
        })
    }

    }

}
</script>

<style scoped>
  /*<!--大按钮-->*/
  .button1 {
    background-color: #53a1c7;
    border-radius: 4px 0 0 4px !important;
  }

  .button2 {
    background-color: #53a1c7 !important;
    border-radius: 0 4px 4px 0 !important;
  }


  .button {
    height: 80px !important;
    width: 49%;
    color: white !important;
    line-height: 48px !important;
    margin: 15px 0 !important;
    box-shadow: rgba(51, 51, 51, 0.31) 1px 1px 2px;

  }

  .button:hover {
    opacity: 0.8;
    /*background-color: rgba(213, 209, 213, 0.21);*/
    box-shadow: rgba(51, 51, 51, 0.31) 0px 1px 10px 1px;

  }

  /*循环的div*/
  .content-img{
    height: 136px;
  }
  /*圆角*/
  .btn-circle{
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    border-bottom-right-radius:7px;
    border-bottom-left-radius:7px;
  }

</style>
