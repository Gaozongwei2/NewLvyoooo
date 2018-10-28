<!--我的成就-->
<template>
          <!--圆圈-->
  <div>

          <div class="demo1-bg1">
            <div id="J_bg2_1" ref="bg1" class="demo1-bg2-1"></div>
            <div id="J_bg2_2" ref="bg2" class="demo1-bg2-2"> </div>
          </div>
        <div class="circlediv circlefont" v-text="res['achieve']">
          <!--积分职称-->
        </div>
        <!--当前用户积分数-->
        <div class="circlrfonta " v-text="res['mark']"> </div>
        <!--升级还需XX-->
        <div class="circlrneed">----升级还需<span>44</span>-----</div>
    <!--长条积分线-->
    <div>
    <div v-for="count in allres" class="father">
      <!--上面-->
      <div class="changecolor : nowlevel==count['name']" :id="count['name']"  ref="card">
        <span v-text="count['minstandard']"></span>-
        <span v-text="count['maxstandard']"></span>
        <div class="backc" v-if="count['name'] == username"></div>

      </div>

    </div>
    <!--下面-->
    <div class="longbottomdiv"></div>
    </div>
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
      // 用户当前积分
      val:'',
      id:'',
      res:'',
      //用户积分称号
      username:'',
      allres:'',
      //最大积分
      maxmark:'',
    //  最小积分
      minmark:'',
    //  还需要积分
      needmark:'',
      i:'',
      nowlevel:'',
      state:true,
    }
  },
  created(){

    this.getalllevel()

    this.getmarknow()

    this.$refs.card.style.backgroundColor = "red"
    console.log(this.$refs[0].id)

    // var vm = this
    // vm.$refs.card.style.backgroundColor = "red"
    // vm.id = sessionStorage.getItem('id')
    // //   获取用户当前积分，根据积分画圈
    axios.get('http://127.0.0.1:8000/user/mark/'+vm.id+'/')
      .then(function (response) {
        vm.res = response.data
        vm.val = vm.res["mark"]
        vm.maxmark = vm.res["maxmark"]
        // console.log(vm.maxmark)
        vm.username = vm.res['achieve']
        console.log(vm.username)




        // if(vm.username=='小积分'){
        //   // console.log(22222)
        //   // vm.$refs.小积分. ='red'
        // }
        // for(let i=0; i<=3; i++){
        //   vm.$refs.card.style.backgroundColor="red"
        })
    //
    //
    //     //循环出最大积分和最小积分
        vm.getachieve()
    //   })
    //   //  获取所有的用户等级积分
    // axios.get('http://127.0.0.1:8000/user/usermark/')
    //   .then(function (response) {
    //     vm.allres = response.data
    //     vm.uchangecolor()
    //   })
  }


,

  methods:{
    // 获取所有用户等级积分
    getalllevel:function(){
      var vm = this
      axios.get('http://127.0.0.1:8000/user/usermark/')
        .then(function (response) {
          vm.allres = response.data
          vm.uchangecolor()
        })
        .catch(function (error) {
          return error
        })
    },

    // 获取用户当前积分
    getmarknow:function(){
      var vm = this
      vm.id = sessionStorage.getItem('id')
      axios.get('http://127.0.0.1:8000/user/mark/'+vm.id+'/')
        .then(function (response) {
          vm.res = response.data
          vm.val = vm.res["mark"]
          vm.maxmark = vm.res["maxmark"]
          // console.log(vm.maxmark)
          vm.username = vm.res['achieve']
          // vm.username = "中积分"
          // console.log(vm.username)
          // if(vm.username=='小积分'){
          //   // console.log(22222)
          //   // vm.$refs.小积分. ='red'
          // }
          // for(let i=0; i<=3; i++){
          //   vm.$refs.card.style.backgroundColor="red"
          // }
          //循环出最大积分和最小积分
          vm.getachieve()
        })
    },
    getachieve : function () {
      var vm = this
      //  最大值
      vm.val = Math.max(0,vm.val);
      //  最小值
      vm.val = Math.min(100,vm.val);

      if (vm.val <= 50){
        this.$refs.bg2.style.transform = "rotate(" + 180 * vm.val* 2 / 100 + "deg)";
        this.$refs.bg2.style.borderColor = "rgba(40, 143, 214, 0.45) rgba(40, 143, 214, 0.45) rgba(40, 143, 214, 0.45) transparent";
        this.$refs.bg1.style.transform = "rotate(0deg)";
      }else{
        this.$refs.bg2.style.transform = "rotate(0deg)";
        this.$refs.bg2.style.borderColor = "rgba(40, 143, 214, 0.45) rgba(40, 143, 214, 0.45) rgba(40, 143, 214, 0.45) transparent";
        this.$refs.bg1.style.transform = "rotate(" + 180 * (vm.val - 50) * 2 / 100 + "deg)";
      }



    },

  //  当前用户积分所在范围
    uchangecolor:function () {
      console.log(vm.allres)

      // for( var i in vm.allres){
        // if(vm.mark<=vm.i["maxstandard"] && vm.mark>=vm.i["minstandard"]){
        //   console.log(111111)
        // }
      // }


    }
  }
}
</script>
<style scoped>
  .backc{
    position: absolute;
    width: 70px;
    height: 40px;
    top:84.9%;
    border-radius:50px;
    margin-bottom: 20px;
    background-color: rgba(142, 0, 16, 0.65) !important;
    /*float: left;*/
    /*margin-right: 20px;*/
    /*opacity: 0;*/
    /*margin-top: 40px;*/


  }
  .father{
    /*height: 40px;*/
  }
  .father>div{
    width: 70px;
    height: 40px;
    border-radius:50px;
    background-color: rgba(141, 214, 255, 0.69);
    /*background-color: rgba(142, 124, 96, 0.65);*/
    float: left;
    margin-right: 20px;
    margin-top: 40px;
  }


  body{text-align: center}
  .changecolor{
    position: static;
    /*background-color: red!important;*/
  }
  .demo1-bg1{
    width: 300px;
    height: 300px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    margin: 50px auto;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #288fd6 inset;
    transition: background 4s;
    -moz-transition: background 2s; /* Firefox 4 */
    -webkit-transition: background 2s; /* Safari 和 Chrome */
    -o-transition: background 2s; /* Opera */

  }
  .demo1-bg2-1,.demo1-bg2-2{
    position: relative;
    margin: 0;
    padding: 0;
    -webkit-box-flex: 1;
    height: 300px;
    background: #fff;
    border: 10px solid green;
  }
  .demo1-bg2-1{
    border-radius: 150px 0 0 150px;
    border-color: rgba(40, 143, 214, 0.45) transparent rgba(40, 143, 214, 0.45) rgba(40, 143, 214, 0.45);
    transform-origin: 100% 50%;
    z-index: 1;
  }
  .demo1-bg2-2{
    border-radius: 0 150px 150px 0;
    border-color: rebeccapurple rebeccapurple rebeccapurple transparent;
    transform-origin: 0 50%;
    z-index: 2;
  }

  .circlediv{
    position: absolute;
    top:25%;
    left:41% ;
    z-index:56;
    /*background-color: green;*/
    width: 180px;
    height: 100px;
  }

  .circlefont{
    font-size: 30px;
    color: #222222;
    text-align: center;
  }

  .circlrfonta{
    position: absolute;
    z-index: 77;
    top: 39%;
    left: 49%;
    font-size: 18px;

  }

  .circlrneed{
    position: absolute;
    z-index: 77;
    top: 46%;
    left: 45%;
    font-size: 14px;
  }

  /*长条积分值*/
  .longbottomdiv{
    width: 700px;
    height: 14px;
    background-color: rgba(19, 66, 102, 0.34);
    border-radius:50px;
    margin: auto;
    margin-top: 8%;
  }

  /*长条上面的div*/
  .longtopdiv{
    width: 70px;
    height: 40px;
    border-radius:50px;
    background-color: rgba(142, 124, 96, 0.65);
    float: left;
    margin-right: 20px;
    margin-top: 40px;
  }

  /*小的div*/
  .longtopdiv>span{
    text-align: center;
    color: #636359;
    line-height: 40px;
    padding-left: 5px;
  }


</style>
