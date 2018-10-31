<!--我的关注-->
<template>
  <div>
    <ul class="myfocus container-fluid nopadding">
      <li class="nav navbar navbar-nav col-md-4  card" v-for="item in some" v-if="disappear !== item['id'] ">
        <div class="col-md-12  margin icno">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="focus-icon col-md-6  "><a href="####"><img class="img-circle" :src="item['icno__imageurl']" height="80" width="80"></a></div>
            <div class="col-md-3"></div>
          </div>
        </div>

        <div class="name col-md-12" v-text="item['username']" ></div>
        <div class="hei col-md-12 margin">
          <div class="col-md-3 nopadding"><p v-text="item['fans']"></p><a href="####">粉丝</a></div>
          <div class="col-md-6 nopadding"><p v-text="item['tnum']"></p><a href="####">游记</a></div>
          <div class="col-md-3 nopadding"><p v-text="item['snum']"></p><a href="####">攻略</a></div>
        </div>
        <div class="col-md-12 anniu">
          <div class="btn  col-md-5 cancel"  :id="item['id']" @click="unfocus($event)">取消关注</div>

          <div class="btn  col-md-5 message">私信</div>
        </div>
      </li>

    </ul>
  </div>

</template>

<!--复制模板-->

<script>
  import axios from 'axios'
  export default {
    name: 'MyCollect',
    // props:['user'],
    data () {
      return {
        id:'',
        some:'',
        disappear:"haha",

      }
    },
    created(){
      this.id = sessionStorage.getItem("id")
      this.getmessage()
    },

    methods:{
      // 获取关注人信息
      getmessage:function () {
        var vm  = this
        var id = sessionStorage.getItem("id")
        axios.get('http://127.0.0.1:8000/user/myfocus/' + id + '/')
          .then(function (response) {
            //关注人数和粉丝数
            vm.some = response.data

          })
          .catch(function (error) {
            return error
          })
      },
      //取消关注
      unfocus:function (event) {
        //  获取当前被点击的userid
        var vm = this
        var id = sessionStorage.getItem("id")
        vm.disappear = event.target.id
        axios.get('http://127.0.0.1:8000/user/unfocus/' + id + '/' + event.target.id+'/')
          .then(function (response) {
            //关注人数和粉丝数
            alert("取消成功")
            vm.getmessage()
          })
          .catch(function (error) {
            return error
          })



      }

    }

  }
</script>

<style scoped>
  /*默认显示*/
  ul,li{
    list-style: none;
  }
  .icno{
    background-color: rgba(169, 169, 169, 0.31);
  }
  .myfocus {
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .card{
    /*width: 215px;*/
    /*height: 205px;*/
    /*margin: 10px 0 0 15px ;*/
    border: rgba(0, 0, 0, 0.2) 1px solid;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 1px ;
    padding: 10px 15px;
  }
  .name{
    width: 100%;
    text-align: center;
    height: 20px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
  }
  .nopadding{
    padding: 0px !important;
  }
  .hei{
    text-align: center;
  }
  p{
    font-weight: bolder;
    margin-bottom: 0px;

  }
  a{
    font-weight: bold;
  }
  .cancel{
    background-color: darkgrey;
    text-align: center;
    padding: 0px;
    height: 34px;
    line-height: 32px;


  }
  .message{
    border:1px solid limegreen;
    color: limegreen;
    margin-left: 29.875px;
  }
  .message:hover{
    color: white;
    background-color: limegreen;
    transition: background-color 0.2s, color 0.3s;
  }
  .anniu{
    margin: 10px 0px;
  }
</style>
