<template>
  <div class="col-md-8 nopadding" >
    <div class="col-md-12 top nopadding">
      <span class="title">游记</span>
    </div>
    <div class="col-md-12 nopadding" v-if="notxt">
      <span>没有找到和“<span style="color: limegreen">{{index}}</span>”有关的游记</span>
    </div>
    <div class="col-md-12 nopadding card" v-for="travel in travels">
      <div class="col-md-12 nopadding">
        <div class="col-md-12 top1 nopadding">
          <span class="title1" v-text="travel['title']">念念清风起，步步莲花生——斯里兰卡行走记</span>
        </div>
        <div class="col-md-3 img" :style="{background:'url('+travel['cover__url']+')', backgroundSize:cover}"></div>
        <div class="col-md-9 txt">
          <div class="content" v-text="travel['content']">
            引言 2016年倏尔起念，去膜拜 敦煌 莫高窟，在满洞霓裳翩翩的飞天神女下，静立，神仰。 或许，那时即在心田深处播下了种子， 缘结，今年冥冥中成行的 吴哥窟 之旅。 一如既往的几次旅行，最...
          </div>
          <div class="message">
            <div class="icno img-circle left" :style="{background:'url('+travel['userid__icno__imageurl']+')'}" ></div>
            <div class="username left" v-text="travel['userid__username']">Hella小荷</div>
            <div class="view left"><span v-text="travel['view']">浏览量：</span>123</div>
            <div class="time left" v-text="travel['time']"><span>发布日期：</span>2018-10-23</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12" v-if="showmore">
      <div class="more">查看更多</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "SearchTravelnoe",
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
          axios.get('http://127.0.0.1:8000/travelnote/searchbysome/' + vm.index + '/')
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
    height:150px;
  }
  .img{
    background-size: contain;
    height: 120px;
    margin-top: 10px;
    background-image: url("https://p1-q.mafengwo.net/s12/M00/86/96/wKgED1vOfiCAUoC7AARGfa3Vr-w75.jpeg?imageMogr2%2Finterlace%2F1");
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
