<!--路线讨论区-->
<template>
  <div >
    <div class="container-fluid bg-color-ff" style="padding-left: 50px; border: 1px solid #ededed ; border-bottom: none;border-left: none;border-right: none" id="three">

      <div class="row" >

        <!--左边空格-->
        <div class="col-lg-1"></div>

        <!-- 中间内容-->
        <div class="col-lg-10 bg-color-ff" style=" margin-top: 15px;width: 80%;">

          <!--标题-->
          <div class="h2 text-center" style="padding: 40px 0px">
            路线讨论区
          </div>

          <!--输入框-->
          <div>
            <!--多文本输入框-->
            <form role="form" class="text-center" >
              <div class="form-group">
                <textarea id="distext" class="form-control float" rows="2" style="background: none;transform: none; " ></textarea>
                <span class="input-group-btn">
                  <button type="button" class="btn btn-warning " @click="up">发 布</button>
                </span>
              </div>
            </form>
          </div>

          <!--向子组件传值-->
          <discuss :ulists="lists"></discuss>

          <!--右边空格-->
          <div class="col-lg-1"></div>
        </div>
      </div>
    </div>

    <!--分页-->
    <page-index :count="pagesize" @indexclick="getIndex"></page-index>
  </div>
</template>

<!--复制模板-->

<script>
  import Discuss from './Discuss'
  import axios from 'axios'
export default {
  name: 'RouteDiscuss',
  data () {
    return {
      condition:'',
      lists:[],
      pageindex: 1,
      pagesize:0
      }
    },
  components:{
    Discuss
  },
  mounted:function(){
    // this.getData();
    //   this.getPageSize();
    // this.searchData()
  },
  methods:{
    //写评论
    up(){
      //定义变量
      var a =0
      //  用户名，时间，评论内容
      //获取当前用户名
      // let uname = document.querySelector('.uname').value
      //系统当前时间
      let date = new Date()
      let year = date.getFullYear();
      let month = date.getMonth()+1;//js中是从0开始所以要加1
      let day = date.getDate();
      let utime = year+'年'+month+'月'+day+'日 '

      // 输入框的内容
      let discusstxt = document.querySelector('#distext')
      //封装到一个新的字典中

      if(discusstxt.value.trimLeft()!=''){
        let dict = {
          uface:"1111",
          // username:uname,
          datatime:utime,
          content:discusstxt.value
        }

        // 存到lists中
        this.lists.push(dict)
        }
        // 清空文本框
        discusstxt.value=""
        },
    // getData: function () {
    //   let vm = this;
    //   axios.get('http://0.0.0.0:8000/strategy/getcontent/'+vm.pageindex+'/')
    //     .then(function (response) {
    //       vm.getPageSize();
    //       vm.list = response.data;
    //       console.log(vm.list)
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    // },

    // getPageSize:function () {
    //   var vm=this;
    //   axios.get('http://127.0.0.1:8000/strategy/acount/')
    //     .then(function (response) {
    //       vm.pagesize=Math.ceil(response.data.acount/3);
    //       console.log(vm.pagesize);
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    },
    // searchData:function () {
    //   this.pageindex=1;
    //   // this.getData();
    //   // this.getPageSize();
    // },
    getIndex:function (i) {
      this.pageindex=i;
      // this.getData();
      // this.getPageSize();
    }
  // }

  }

</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*背景颜色fffff*/
  .bg-color-ff{
    background-color: #ffffff;
  }
  /*字体大小*/
  .h2{
    font-size: 26px;
  }
  /*浮动*/
  .float{
    float: left;
  }


  /*多文本输入框*/
  .form-control{
    width: 86%;
  }

  /*多文本输入框按钮*/
  .btn-warning{
    /*圆角*/
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius:0px;
    border-bottom-left-radius:0px;
    width: 80%;
    height: 51px;
    margin-top: -5px;
  }


</style>
