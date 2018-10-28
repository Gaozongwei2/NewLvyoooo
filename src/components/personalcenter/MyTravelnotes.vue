<template>
  <div class="mytravelnotes container-fluid nopadding">
    <!--______________________________________________________-->
    <!--<motaikuang @hidden="hiddenshow" v-if="motaikuang"></motaikuang>-->
    <ul class="col-md-12 nopadding travelnotes-list">

      <li v-for="travelnote in travelnotes">

        <div class="col-md-12 nopadding">
          <!--***********点击触发事件**********************************************************-->
          <router-link to="/travel">
            <div class="col-md-5 nopadding img" @click="showthat"><img :src="travelnote['cover__url']" alt=""
                                                                       height="195px" width="300px"></div>
            <div class="col-md-7">
              <div class="margin">
                <span class="h4 " v-text="travelnote['title']">标题</span>
              </div>
              <div>
                <span class="time col-md-4" v-text="travelnote['time']">时间</span>
                <span class="views col-md-4">浏览量：<span v-text="travelnote['view']"></span></span>
                <span class="good col-md-4">点赞数：<span v-text="travelnote['good']"></span></span>
              </div>
              <!--简介-->
              <div class="content">
                <span v-text="travelnote['content']"></span>
              </div>
            </div>



          </router-link>
          <div>
            <span class="left identification" v-text="travelnote['condition__condition']"></span>
            <div class="fix right btn btn-success bb" @click="edit($event)" :id="travelnote['id']">编辑</div>
            <div class="fix right btn btn-danger bb" :id="travelnote['id']" @click="shanchu($event)">删除</div>
          </div>
        </div>>
  </li>

  </ul>
    <motaikuangdelete :del="deletes" @deletes="deletes"></motaikuangdelete>

    <router-view/>
  <!-- Modal -->
  <!--<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">-->
  <!--<div class="modal-dialog" role="document">-->
  <!--<div class="modal-content">-->
  <!--<div class="modal-header">-->
  <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
  <!--<h4 class="modal-title" id="myModalLabel">Modal title</h4>-->
  <!--</div>-->
  <!--<div class="modal-body">-->
  <!--...-->
  <!--</div>-->
  <!--<div class="modal-footer">-->
  <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
  <!--<button type="button" class="btn btn-primary">Save changes</button>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--模态框-->
  </div>
</template>

<!--复制模板-->

<script>
  // 注册局部组件
  import motaikuang from './moaikuang'
  import axios from 'axios'

  export default {
    name: 'MyTravelnotes',
    data() {
      return {
        deletes: false,
        motaikuang: false,
        travelnotes: '',
        id: sessionStorage.getItem("id")
      }
    },
    // 注册局部组件
    components: {
      motaikuang
    },
    created() {
      this.gettravel()
    },
    methods: {
      // 点击删除按钮
      shanchu: function (event) {
        var vm = this
        vm.deletes = !vm.deletes
        // let tid = event.target.id
        // 弹出删除确认模态框
      },
      // 点击显示模态框
      showthat() {
        this.motaikuang = true
      },
      // 被动执行隐藏模态框
      hiddenshow() {
        // var e = event||window.event;
        // e.target.style.display="none";
        let that = this;
        // 将其值修改为false
        that.motaikuang = !that.motaikuang

        //   this.motaikuang = false
        //   this.$set = (this.motaikuang,false)
        // this.$forceUpdate();
        // that.$set = (that.motaikuang,false)

        // this.motaikuang = false
        // alert(this.motaikuang)
        //   alert("hiddenshow")
      },
      // 获取我的游记信息
      gettravel: function () {
        var vm = this
        console.log(vm.id);
        axios.get('http://127.0.0.1:8000/user/usertravelnotes/' + vm.id + '/')
          .then(function (response) {
            vm.travelnotes = response.data
            console.log(vm.travelnotes)
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

  .travelnotes-list li {

  }

  .travelnotes-list li > div {
    height: 195px !important;
    border: thin rgba(34, 34, 34, 0.21) !important;
    box-shadow: darkgrey 0px 1px 10px 1px;

  }

  .margin {
    height: 30px;
    margin-top: 20px;

    /*margin: 10px 0px;*/
  }

  .margin div {
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

  .content {
    height: 100px;
  }

  .content > span {
    margin-top: 10px;
  }

  .img img {
    border-radius: 5px 0 0 5px;
  }

  .mytravelnotes {
    overflow: auto
  }
</style>
