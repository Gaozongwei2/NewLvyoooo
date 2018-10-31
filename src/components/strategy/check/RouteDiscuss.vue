<!--路线讨论区-->
<template>
  <div class="container-fluid box">
    <!--编写div文本框-->
    <div style="font-size: xx-large; font-family: 'Apple Color Emoji'; line-height:60px; font-weight: bold; text-align: center; border-bottom: 2px solid #cbcbcb; margin-bottom: 20px; ">评论</div>
    <div class="col-md-9 comtext" contenteditable="true" ref="com"></div>
    <div class="col-md-1"></div>
    <div class="col-md-2 btn submit nopadding" @click="up">发布</div>

    <div class="commit1 col-md-12 nopadding" v-for="item in commitlist" style="padding-top: 5px;margin-top: 10px; border-bottom: 1px solid rgba(152,152,152,0.32); background-color: rgba(220,220,220,0.31); border-radius: 5px">
      <div class="col-md-2 nopadding" style="">
        <div class="col-md-12 nopadding" style="height: 40px;">
          <div class="img-circle icno" :style="{background:'url('+usericno+')'}"></div>
        </div>
        <div class="col-md-12 nopadding" style="height: 20px; text-align: center; line-height: 20px;color: orange"
             v-text="username"></div>
      </div>
      <div class="col-md-10 nopadding" style="border-left: 1px solid rgba(221,213,210,0.99); min-height: 60px; padding: 10px; font-family: 'Apple Color Emoji'">
        <div class="text" v-text="item"></div>
      </div>
  </div>
    <discuss :newcommit="tt" class="col-md-12 nopadding" style="margin-top: 20px"></discuss>
  </div>
</template>

<!--复制模板-->


<script>
  import axios from 'axios'


  export default {
    name: 'RouteDiscuss',
    props: ["tt"],

    data() {
      return {
        commits:[],
        commitlist:[],
        username:'',
        usericno:'',
        commit:'',
        lists:'',
        id:this.tt['id'],
      }
    },
    created(){
      this.getmymessage()
      if (this.tt['flag'] == 1){
        this.searchtravelnotecommit()
      }else if(this.tt['flag'] == 2){
      }
      alert(this.lists.length)
    },
    //组件停用时调用
    beforeDestroy: function () {

    },
    methods: {
      // 获取自身信息
      //查询用户信息
      getmymessage: function () {
        var vm = this
        axios.get(' http://127.0.0.1:8000/user/getusermessage/'+sessionStorage.getItem('id')+'/')
          .then(function (response) {
            console.log(response.data)
            vm.usericno = response.data[0]['icno__imageurl']
            vm.username = response.data[0]['username']
            console.log(vm.usericno)
            console.log(vm.username)
          })
          .catch(function (error) {
            return error
          })
      },
      //写评论
      up() {
        var vm = this
        vm.commit = vm.$refs.com.innerHTML
        if (vm.commit.length>0){
          vm.commitlist.push(vm.commit)
          console.log(vm.commitlist)
        }
        alert(vm.flag)
        //定义变量
        let date = new Date()
        let year = date.getFullYear();
        let month = date.getMonth() + 1;//js中是从0开始所以要加1
        let day = date.getDate();
        let time = year + "-" + month + "-" + day
        let utime = year + '年' + month + '月' + day + '日 '

        // 输入框的内容
        let discusstxt = vm.commit
        //封装到一个新的字典中

        if (discusstxt.value.trimLeft() != '') {
          alert(1)
          let dict = {
            datetime: utime,
            content: discusstxt.value,
            tid_id: this.id,
            sid_id: this.id,
            userid_id: this.uid
          }

          // 存到lists中
          vm.lists.push(dict)
          console.log(vm.lists)
          alert(vm.lists)

        }

        //存储游记用户评论
        //根据不同的flag值进入不同的ajax中
        if(vm.tt['flag']==1){
          alert("游记")
          var params = new URLSearchParams();
          params.append('date', time)
          params.append('content', discusstxt.value)
          params.append('tid_id', vm.id)
          params.append('userid_id', vm.uid)
          console.log(params)

          axios.post('http://localhost:8000/travelnote/storagereview/' + vm.id + '/' + vm.uid + '/', params)
            .then(function (response) {
              vm.review = response.data
              console.log(vm.review)
              vm.getpages()
            })
            .catch(function (error) {
              return error
            })


        // 存储攻略评论
        }else if(vm.tt['flag'] == 2){
          alert("攻略")
          var params = new URLSearchParams();
          params.append('date', time)
          params.append('content', discusstxt.value)
          params.append('sid_id', this.id)
          params.append('userid_id', this.uid)
          console.log(params)

          axios.post('http://localhost:8000/strategy/storagereview/' + this.id + '/' + this.uid + '/', params)
            .then(function (response) {
              vm.sreview = response.data
              console.log(vm.sreview)
              vm.getpages()
            })
            .catch(function (error) {
              return error
            })

        }else{
          alert("判断出错")
        }
        // 清空文本框
        vm.commit = ''
      },




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
    // searchData: function () {
    //   this.pageindex = 1;
    //   // this.getData();
    //   // this.getPageSize();
    // },
    getIndex: function (i) {
      this.pageindex = i;
      // this.getData();
      // this.getPageSize();
    },


    // }

  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    height: auto;
    margin-bottom: 100px;
  }
 .comtext{
   padding: 10px;
   min-height: 50px;
   border-radius: 5px;
   border:1px solid orange;
   outline: none;

 }
  .submit{
    padding:0;
    height: 50px;
    line-height: 50px;
    font-family: "Apple Color Emoji";
    border-radius: 5px;
    font-size:larger;
    color: white;
    text-align: center;
    background-color: #ff9d00;
  }
  .mycommit{
    min-height: 50px;
    background-color: whitesmoke;
  }
</style>
