

<template id="title1">
  <div class="body">
    <div class="searchbox container-fluid">
      <div class="searchlogo col-md-12">
        <div class="col-md-3">
          <div class="col-md-3"><div class="radiosearch all" id="all" ref="all" @click="term($event)"></div></div>
          <span class="col-md-7 searchtxt">全部</span>
        </div>
        <div class="col-md-3">
          <div class="col-md-3"><div class="radiosearch" id="travelnote" ref="travelnote" @click="term($event)"></div></div>
          <span class="col-md-7 searchtxt">游记</span>
        </div>
        <div class="col-md-3">
          <div class="col-md-3"><div class="radiosearch" id="strategy" ref="strategy" @click="term($event)"></div></div>
          <span class="col-md-7 searchtxt">攻略</span>
        </div>
        <div class=" col-md-3">
          <div class="col-md-3"><div class="radiosearch" id="user" ref="user" @click="term($event)"></div></div>
          <span class="col-md-7 searchtxt">用户</span>
        </div>
      </div>
      <div class="inputbox col-md-12">
        <input class="col-md-11 searchinput" type="text" placeholder="请输入搜索内容" v-model="index"><div class="col-md-1 searchimg" @click="search"></div>
      </div>
    </div>
  </div>

</template>
<!--复制模板-->

<script>
  import axios from 'axios'
  export default {
    name: 'TestRadioButton',
    data () {
      return {
        termtext:'all',
        radiochange:false,
      }
    },
    created(){
      var vm = this
      vm.$refs.all.style.backgroundColor = "green"
      this.showtrvelnotes()
    },

    methods: {

      // 点击查询条件
      term: function (event) {
        var vm = this
        // 将所有按钮置为白色
        vm.$refs.all.style.backgroundColor = "white"
        vm.$refs.travelnote.style.backgroundColor = "white"
        vm.$refs.strategy.style.backgroundColor = "white"
        vm.$refs.user.style.backgroundColor = "white"
        // 判定选中按钮
        if (vm.radiochange) {
          event.currentTarget.style.backgroundColor = "white"
          vm.radiochange = !vm.radiochange
        } else {
          event.currentTarget.style.backgroundColor = "green"
          vm.termtext = event.currentTarget.id
        }
      },
    }
  }
</script>
<style scoped>
  .body{
    background-color: black;
  }
  /*搜索附近的单选按钮*/
  .radiosearch{
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: white;
    border: 1px whitesmoke solid;
  }
  .all{
    background-color: green;
  }
  .searchtxt{
    color: whitesmoke;
  }
  .searchlogo{
    height: 20px;
    margin: 15px 0 10px 0;
  }


</style>
