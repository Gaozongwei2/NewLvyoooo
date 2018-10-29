<template>
  <div class="row">
    <nav-top></nav-top>
    <nav-bottom></nav-bottom>
    <route-view></route-view>
    <specific-route></specific-route>
    <route-discuss :tt="this.res"></route-discuss>
    <!--轮播-->
    <!--<sowing-map></sowing-map>-->
    <!--<hello></hello>-->
  </div>
</template>

<!--复制模板-->

<script>
export default {
  name: 'HelloWorldAll',
  data () {
    return {
      res:'',
      travels:'',
    }
  },
  created(){
    var vm = this
    vm.travels = vm.$route.params.travel
    vm.res={
      'id':vm.travels['id'],
        //游记的状态为1
        'flag':2
    },
    console.log(vm.travels)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
