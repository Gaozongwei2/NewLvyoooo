<template>
  <div class="row">
    <nav-top></nav-top>
    <!--攻略标题-->
    <nav-bottom  :strageid="ssid" :strage="title"></nav-bottom>
    <!--<nav-bottom  :strage="title"></nav-bottom>-->


    <!--上方几天的路线和总结-->
    <!-- 绑定天数，循环出几条路线 -->
    <route-view :strage="detdata" :sday="days"></route-view>



    <!---------------------里面具体的内容---------------从这里循环---------------------------->
    <specific-route   v-for="dd in days"  :key="dd"  :howmuch="dd" :strage="detdata[dd-1]"></specific-route>

    <route-discuss :tt="this.res"></route-discuss>
    <!--轮播-->
    <!--<sowing-map></sowing-map>-->
    <!--<hello></hello>-->
  </div>
</template>

<!--复制模板-->

<script>
  import axios from 'axios'
  export default {
  name: 'all',
  data () {
    return {
      //攻略的所有信息
      detdata:[],
      //游玩天数
      days:'',
      //攻略标题
      title:'',
      stragy:{},
    //  当前攻略id
      ssid:'',
      pac:'',
      res:'',
      travels:'',
    }
  },
  created(){
    var vm =this
    vm.stragy = vm.$route.params.stragy
    vm.ssid = vm.$route.params.stragy['id']
    vm.title= vm.$route.params.stragy['title']
    vm.travels = vm.$route.params.travel
    vm.res={
      'id':vm.travels['id'],
      //游记的状态为1
      'flag':2
    },
      console.log(vm.travels)
    console.log(vm.stragy)
    //组件传值
    this.getcontent()
    // console.log('攻略id：'+vm.ssid)
  },

  methods:{
    //攻略的具体内容
    getcontent:function () {
      var vm = this
      axios.get('http://127.0.0.1:8000/strategy/detailcontent/' +vm.stragy['id']+ '/')
        .then(function (response) {
            vm.detdata = response.data["content"]
            //截断字符串
            // console.log(response.data["content"][0]['advantage'].split('，'))
            vm.days = response.data['day']
            // vm.title = response.data['title'][0]
          }
        )
        .catch(function (error) {
          return error
        })
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
