<template>
  <div class="col-md-8 nopadding" >
    <div class="col-md-12 top nopadding">
      <span class="title">用户</span>
    </div>
    <div class="col-md-12 nopadding" v-if="notxt">
      <span>没有找到和“<span style="color: limegreen">{{index}}</span>”有关的人</span>
    </div>
    <div class="col-md-12 nopadding card" v-for="travel in travels">
      <div class="img img-circle col-md-3" :style="{background:'url('+travel['icno__imageurl']+')'}"></div>
      <div class="txt col-md-6">
        <div class="col-md-12" v-text="travel['username']">这里是用户名</div>
        <div class="col-md-12">这里是基本信息</div>
      </div>
      <div class="button col-md-3">
        <div class="btn">关注</div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "SearchUser",
    props:["index"],
    data(){
      return{
        travels:'',
        notxt:false,
        showmore:false,
      }
    },
    created(){
      console.log("haha"+this.index)
      this.searchbysome()
    },
    watch: {
      index: function (newQuestion, oldQuestion) {
        this.searchbysome()
      }
    },
      methods: {
        // 按条件查询游记
        searchbysome: function () {
          var vm = this
          if (!vm.index) {
            vm.index = "index"
          }
          axios.get('http://127.0.0.1:8000/user/searchbysome/' + vm.index + '/')
            .then(function (response) {
              vm.travels = response.data
              if(response.data.length==0){
                vm.notxt = true
              }else{
                if (response.data.length==4){
                  vm.showmore=true
                }
                vm.notxt = false
              }

            })
            .catch(function (error) {
              return error
            })
        }
      }

  }
</script>

<style scoped>
  .left{
    float: left;
  }
  .nopadding{
    padding: 0;
  }
 .title{
   font-size: larger;
   color: green;
 }
 .title1{
   font-weight: bold;
   font-size: large;
   color: #333333;

 }
  .top{
    border-bottom: 2px solid rgba(60, 60, 60, 0.14);
    height: 40px;
    margin-bottom: 30px;
    line-height: 40px;
  }
 .top1{
   border-bottom: 1px solid rgba(60, 60, 60, 0.14);
   height: 30px;
   line-height: 30px;
 }
  .card{

    margin-bottom: 40px;
    height:60px;
  }
  .img{
    height: 50px;
    width: 50px;
    background-size: cover;
  }
  .txt{
    margin-top: 10px;
  }
  .content{
    height: 90px;

  }
  .icno{
    height: 20px;
    width: 20px;
    background-image: url("http://p1-q.mafengwo.net/s12/M00/A6/96/wKgED1uLs8SAFWZsAAwSxaDtaeA42.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90");
  }
  .message div{
    margin-left: 10px;
  }
  .more{
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: auto;
    width: 200px;
    background-color: rgba(169, 169, 169, 0.21);

  }
  .more:hover{
    color: whitesmoke;
    background-color: rgba(50, 205, 50, 0.81);
  }
</style>
