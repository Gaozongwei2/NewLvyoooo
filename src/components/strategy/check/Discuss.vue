<template>
 <div>
   <!--评论-->
   <!--暂时指定高度-->

   <!--每一个用户-->
   <ul class="list-unstyled  " >
     <!--新写的信息-->
     <li class="line" v-for="item in list"   style="border:1px solid #fafafa">
       <div class="container-fluid bg-color-ff">
         <div class="row">
           <!--用户头像-->
           <div class="col-lg-1 ">
             <!--<img :src="i['url']" alt="" class="img-circle img-responsive center-block face-col-center" style="width: 48px;height: 48px">-->
           </div>

           <!--用户名，引用，回复-->
           <div class="col-lg-11 row-span-content" >

             <!--第一行-->
             <ul class="list-unstyled list-inline first-line a-none-line" v-if="list.length" >
               <!--用户名-->
               <li >
                 <a href="" >
                   <span class="uname" v-text="item['tid__userid__username']" ></span>
                 </a>
               </li>

               <!--评论时间-->
               <li >
                 <!--<span class="utime" v-text="ulist['datatime']">-->
                 <span class="utime" v-text="item['time']"></span>
               </li>

              <!-- 如果用户是自己，就有删除按钮-->
               <li >
                 <a href="#" @click="udelete">删除</a>
               </li>

               <!--如果用户不是自己，就有回复按钮-->
               <li  >
                 <a href="#" >回复</a>
               </li>
             </ul>

             <!--第二行内容-->
             <span class="row-span bg-color-ff " v-text="item['commit']">
               <!--{{ulist['content']}}-->
             </span>
           </div>
         </div>
       </div>
     </li>


     <!--数据库中读出来的信息-->
     <li class="line" v-for="info in list"   style="border:1px solid #fafafa">
       <div class="container-fluid bg-color-ff">
         <div class="row">
           <!--用户头像-->
           <div class="col-lg-1 ">
             <!--<img :src="i['url']" alt="" class="img-circle img-responsive center-block face-col-center" style="width: 48px;height: 48px">-->
           </div>
           <!--用户名，引用，回复-->
           <div class="col-lg-11 row-span-content" >

             <!--第一行-->
             <ul class="list-unstyled list-inline first-line a-none-line">
               <!--用户名-->
               <li >
                 <a href="" >
                   <span class="uname" v-text="info['username']" >
                   </span>
                 </a>
               </li>

               <!--评论时间-->
               <li >
                 <span class="utime" v-text="info.time"></span>
               </li>

               <!-- 如果用户是自己，就有删除按钮-->
               <li >
                 <a href="#" @click="udelete">删除</a>
               </li>

               <!--如果用户不是自己，就有回复按钮-->
               <li  >
                 <a href="#" >回复</a>
               </li>
             </ul>

             <!--第二行内容-->
             <span class="row-span bg-color-ff " v-text="info.content">
               <!--{{ulist['content']}}-->{{info["content"]}}
             </span>
           </div>
         </div>
       </div>
     </li>
   </ul>
 </div>
</template>

<!--复制模板-->

<script>
  import axios from 'axios'
export default {
  name: 'Discuss',
  props:["ulists"],
  data () {
    return {
      //数据库查询的数据
      list:'',
      //新写的数据
      newlist:'',
      pid:1
    }
  },
  created(){
    alert("discuss")
    console.log("discuss")
    console.log(this.ulists)
    this.id = this.ulists['id']
    console.log(this.id)
    if (this.id == 1){

      this.searchtravelnotecommit()
    }else if(this.id == 2){

    }
  },
  mounted:function(){
    this.getinfo();
  },
  methods:{
    // 查询攻略评论
    searchtravelnotecommit:function () {
      var vm = this
      axios.get('http://127.0.0.1:8000/travelnote/searchreview/'+vm.id+'/')
        .then(function (response) {
          console.log(response.data['data'])
          vm.list = response.data['data']
          console.log(vm.list)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    //删除
    udelete(){
        pass
    },
    //根据帖子id获取评论
    // getinfo:function(){
    //   let vm = this;
    //   axios.get('http://127.0.0.1:8000/strategy/show/'+vm.pid+'/')
    //     .then(function (response) {
    //       vm.list = response.data
    //       console.log(vm.list)
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    // },
  //  存储传递的值
    saveinfo:function () {

    }



  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*评论区的文本间距*/
  .row-span-content{
    line-height: 28px;
  }
  /*第一行间距*/
  .first-line{
    height: 30px;
    margin-top: 15px;
  }

  /*取消超链接下划线*/
  .a-none-line{
    text-decoration: none !important;
  }

  /*评论内容超出部分自动换行*/
  .row-span{
    white-space: normal;
    word-break: break-all;
  }
  /*头像垂直居中*/
  .face-col-center{
    position:relative;
    /*top:50%;*/
    transform:translateY(30%);
  }

</style>
