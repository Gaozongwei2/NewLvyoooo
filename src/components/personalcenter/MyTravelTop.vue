<!--顶部我的足迹-->
<template>
  <div class="container-fluid" style="padding: 0;margin: 0">
    <!--<div class="row">-->
      <ul class="list-unstyled " style="padding: 0;margin: 0" >
        <li class="border-circle font-sty text-center " v-for="ll in this.city"  :style="{background:'url('+ll['cover__url']+')'}">
          <span v-text="ll['city']"></span>
        </li>
      </ul>


    <!--分页-->
    <page-index ></page-index>
    <!--</div>-->


  </div>
</template>
<!--复制模板-->

<script>
  import axios from 'axios'
export default {
  name: 'mytraveltop',
  data () {
    return {
      userid:'',
      city:[]
    }
  },
  mounted(){
    var vm = this
    vm.userid=sessionStorage.getItem('id')
//    调用ajax
    axios.get('http://127.0.0.1:8000/travelnote/gonecity/' + 1 + '/')
      .then(function (response) {
        vm.city = response.data
        console.log(vm.city)
      })
      .catch(function (error) {
        return error
      })

},

  method: {}
}
</script>
<style scoped>
/*圆角*/
  .border-circle{
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    border-bottom-right-radius:7px;
    border-bottom-left-radius:7px;
  }
  /*字体很大*/
  .font-sty{
    font-size: 32px;
  }
  li{
    width: 100%;
    height: 100px;
    line-height: 100px;
    margin-bottom: 20px;
  }
</style>
