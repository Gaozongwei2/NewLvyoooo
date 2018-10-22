
<template id="title1">
  <div>
  <div class="imageback">
    <div class="imagebackcover" v-for="i in [2,4]">
      这是一个测试文件
    </div>
  </div>
  <!--<div class="imagebackcover"></div>-->
  </div>
</template>
<!--复制模板-->

<script>
  import axios from 'axios'
export default {
  name: 'TestX',
  // props:['user'],
  data () {
    return {
      id:1,
      aa:[1,2,3,4,5],
      bb:0,
      props:["user","token"],
      user:{
        'id':'1',
        "username":"棕色试剂瓶",
        "usericno":"http://n3-q.mafengwo.net/s10/M00/0F/9B/wKgBZ1iUpFWAbScxAAC2Vfg46fo14.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
        "sex":"男",
        "mark":"15",
        "birthday":"1997-6-2",
        "state":"大庆",
        "content":"起始",
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    var vm  = this
    axios.get('http://127.0.0.1:8000/strategy/searchbysome/all/2/')
      .then(function (response) {
       console.log(response.data)
      })
      .catch(function (error) {
        return error
      })
    sessionStorage.setItem("token","congqianyouzuoshan")
    sessionStorage.setItem("id","1")
    this.token = "gzw"
    console.log(this.props)
},

  method:{
    // 显示热门游记
    showtrvelnotes:function () {
      var vm  = this
      axios.get(' http://127.0.0.1:8000/user/myfocusnum/' + vm.user.id + '/')
        .then(function (response) {
          // vm.some = response.data
          // alert(vm.some)
          // 获取所有数据
          // vm.alldata = response.data
        })
        .catch(function (error) {
          return error
        })
    }
  }
}
</script>
<style scoped>
  .imageback{
    height: 200px;
    width: 160px;
    border: 1px solid #333333;
    background-image: url("https://n1-q.mafengwo.net/s12/M00/85/32/wKgED1u3BnmAUwvoAATY8Amfqrc33.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90");
    background-size: cover;
  }
  .imagebackcover{
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0;
    background-color: rgba(205, 44, 45, 0.78);
  }
  .imagebackcover:hover{
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 1;
    transition: opacity 0.8s;
    background-color: indianred;
  }

</style>
