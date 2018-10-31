<template>
  <div class="mytravelnotes container-fluid nopadding">
    <ul class="col-md-12 nopadding travelnotes-list">
      <li v-for="strategy in this.strategys"  v-if="strategy['id'] !== showid">
        <div class="col-md-12 nopadding">
          <div class="col-md-5 nopadding img"><img :src="strategy['scover__url']" alt="" height="195px" width="300px"></div>
          <div class="col-md-7">
            <div class="margin">
              <span class="h4 " v-text="strategy['title']"></span>
            </div>
            <div>
              <span class="time col-md-4" v-text="strategy['time']"></span>
              <span class="views col-md-4" >浏览量：<span v-text="strategy['view']"></span></span>
              <span class="good col-md-4" >点赞数：<span v-text="strategy['good']"></span></span>
            </div>
            <div class="content">
              <span v-text="strategy['content']"></span>
            </div>
            <div>
              <span class="left identification" v-text="strategy['condition__condition']">已发布</span>
              <div class="fix right btn btn-success bb" :id="strategy['id']"  @click="edit"><router-link :to="{name:'e_edit',params:{id:strategy['id']}}">编辑</router-link></div>
              <div class="fix right btn btn-danger bb" data-toggle="modal" data-target="#myModal"  :id="strategy['id']" @click="shanchu($event)">删除</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <motaikuangdelete :del="deletes" @htitlepush="deletestrategy"></motaikuangdelete>

  </div>
</template>

<!--复制模板-->

<script>
  import axios from 'axios'
  export default {
    name: 'MyStrategys',
    data() {
      return {
        showid:'',
        chooseid:'',
        deletes: false,
        strategys:'',
        sid:'',
        id: sessionStorage.getItem("id")
      }
    },
    created() {
      this.gettravel()
    },
    methods:{
      // 点击删除按钮
      shanchu: function (event) {
        var vm = this
        vm.chooseid = event.target.id
        vm.deletes = !vm.deletes
        alert(vm.deletes)
        vm.sid = event.target.id

      },
      // 删除攻略信息
      deletestrategy:function (text) {
        var vm = this
        axios.get('http://127.0.0.1:8000/strategy/deletestrategy/' + vm.sid + '/')
          .then(function (response) {
            console.log(response.data)
            vm.showid = vm.chooseid
          })
          .catch(function (error) {
            return error
          })
        vm.gettravel()
        // vm.reload()

      },
      // 获取我的游记信息
      gettravel:function () {
        var vm = this
        axios.get('http://127.0.0.1:8000/user/userstrategy/' + vm.id + '/')
          .then(function (response) {
            vm.strategys = response.data
            console.log(vm.strategys)
          })
          .catch(function (error) {
            return error
          })
      },
    }
  }
</script>

<style scoped>
  .mytravelnotes ul {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .mytravelnotes ul li {
    list-style: none;
    border-radius: 4px !important;
    background-color: white !important;
  }

  .mytravelnotes ul li > div {
    margin-bottom: 10px;
    border-radius: 4px !important;
    background-color: white !important;
  }

  .identification {
    height: 15px !important;
    margin: 0;
    line-height: 45px;
    /*font-weight: bold;*/
    vertical-align: center;
    color: #999999;
  }

  .fix {
    font-size: large;
    margin-left: 15px;
    float: right;
  }

  .checkbox {
    display: block;
    border-radius: 2px;
    height: 15px;
    width: 15px;
    border: 1px #949494 solid;
    /*background-color: yellow;*/
    /*background-image: none !important;*/
    /*background-image: url("../../images/check_box.png") !important;*/
    object-fit: cover;
  }

  .checkall {
    margin: 15px 0 !important;
  }

  .checkbox-div {
    height: auto;
    width: 42px !important;
    vertical-align: center;
  }

  .tr-footer {
    line-height: 45px;
    vertical-align: center;
    margin-bottom: 10px;
    padding: 0 30px;
    height: 45px;
    display: block;
    background-color: white !important;
    background-color: rgba(169, 169, 169, 0.31);
    border-radius: 4px !important;
  }

  .tr-footer div {
    height: 45px;
  }

  .tr-footer span {
    color: #222222;
    padding-left: 10px;
  }

  .del {
    height: 35px !important;
    margin: 5px 0;
    margin-right: 20px;
    float: right;
  }
  .travelnotes-list li{

  }
  .travelnotes-list li > div {
    height: 195px!important;
    border: thin rgba(34, 34, 34, 0.21) !important;
    box-shadow: darkgrey 0px 1px 10px 1px;

  }

  .margin {
    height: 30px;
    margin-top: 20px;

    /*margin: 10px 0px;*/
  }
  .margin div{
    font-weight: bold;
  }

  .bb {
    height: 30px;
    line-height: 16px;
    font-size: 16px;
    margin-top: 2.5px;
    margin-bottom: 2.5px;
  }
  .nopadding {
    padding: 0 !important;
  }
  .content{
    height: 100px;
  }
  .content>span{
    margin-top: 10px;
  }
  .img img{
    border-radius: 5px 0 0 5px;
  }
</style>
