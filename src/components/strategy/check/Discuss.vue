<template>
  <div>
    <!--展示数据库中的评论-->
    <div class="commitbox1 ">
      <div style="height: 2px; background-color: darkgrey; width: 100%"></div>
      <div class="commit1" v-for="item in commits" style="padding-top: 5px">
        <div class="col-md-2 nopadding" style="border-right: 1px solid rgba(130,130,130,0.51)">
          <div class="col-md-12 nopadding" style="height: 40px;">
            <div class="img-circle icno" :style="{background:'url('+item['userid__icno__imageurl']+')'}"></div>
          </div>
          <div class="col-md-12 nopadding" style="height: 20px; text-align: center; line-height: 20px;color: orange"
               v-text="item['tid__userid__username']"></div>
        </div>
        <div class="col-md-10 nopadding" style="min-height: 60px; padding: 10px; font-family: 'Apple Color Emoji'">
          <div class="text" v-text="item['commit']"></div>
        </div>
      </div>

    </div>


    <!--数据库中读出来的信息-->
    <!--<li class="line" v-for="info in list"   style="border:1px solid #fafafa">-->
    <!--<div class="container-fluid bg-color-ff">-->
    <!--<div class="row">-->
    <!--&lt;!&ndash;用户头像&ndash;&gt;-->
    <!--<div class="col-lg-1 ">-->
    <!--&lt;!&ndash;<img :src="i['url']" alt="" class="img-circle img-responsive center-block face-col-center" style="width: 48px;height: 48px">&ndash;&gt;-->
    <!--</div>-->
    <!--&lt;!&ndash;用户名，引用，回复&ndash;&gt;-->
    <!--<div class="col-lg-11 row-span-content" >-->

    <!--&lt;!&ndash;第一行&ndash;&gt;-->
    <!--<ul class="list-unstyled list-inline first-line a-none-line">-->
    <!--&lt;!&ndash;用户名&ndash;&gt;-->
    <!--<li >-->
    <!--<a href="" >-->
    <!--<span class="uname" v-text="info['username']" >-->
    <!--</span>-->
    <!--</a>-->
    <!--</li>-->

    <!--&lt;!&ndash;评论时间&ndash;&gt;-->
    <!--<li >-->
    <!--<span class="utime" v-text="info.time"></span>-->
    <!--</li>-->

    <!--&lt;!&ndash; 如果用户是自己，就有删除按钮&ndash;&gt;-->
    <!--<li >-->
    <!--<a href="#" @click="udelete">删除</a>-->
    <!--</li>-->
    <!--&lt;!&ndash;如果用户不是自己，就有回复按钮&ndash;&gt;-->
    <!--<li  >-->
    <!--<a href="#" >回复</a>-->
    <!--</li>-->
    <!--</ul>-->
    <!--&lt;!&ndash;第二行内容&ndash;&gt;-->
    <!--<span class="row-span bg-color-ff " v-text="info.content">-->
    <!--&lt;!&ndash;{{ulist['content']}}&ndash;&gt;{{info["content"]}}-->
    <!--</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<!--复制模板-->

<script>
  import axios from 'axios'

  export default {
    name: 'discuss',
    props: ["newcommit"],
    data() {
      return {
        commits: [],
        cid: this.newcommit['id'],
        flag: this.newcommit['flag']
      }
    },
    // watch: {
    //   newcommit: {
    //     handler(newValue, oldValue) {
    //       //父组件param对象改变会触发此函数
    //       this.newlist = newValue
    //       alert(this.newlist)
    //     },
    //     deep: true
    //   }
    // },
    created() {
      console.log(this.cid)
      if (this.flag == 1) {
        this.searchtravelnotecommit()
      } else if (this.flag == 2) {

      }
      // alert(newcommit.length)
      // alert("discuss")
      // console.log("discuss")
      // console.log(this.ulists)
      // this.id = this.ulists['id']
      // console.log(this.id)
      // if (this.id == 1){
      //   this.searchtravelnotecommit()
      // }else if(this.id == 2){
      //
      // }
    },
    mounted: function () {
    },
    methods: {
      // 查询攻略评论
      searchtravelnotecommit: function () {
        var vm = this
        axios.get('http://127.0.0.1:8000/travelnote/searchreview/' + vm.cid + '/')
          .then(function (response) {

            vm.commits = response.data['data']
            console.log(vm.commits)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      //删除
      udelete() {
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
      saveinfo: function () {

      }

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nopadding{
    padding:0px
  }
  .icno {
    background-color: #ff9d00;
    height: 40px;
    width: 40px;
    margin: auto
  }

  .commitbox1 {
    min-height: 50px;
  }

  .commit1 {
    min_height: 50px
  }

  /*评论区的文本间距*/
  .row-span-content {
    line-height: 28px;
  }

  /*第一行间距*/
  .first-line {
    height: 30px;
    margin-top: 15px;
  }

  /*取消超链接下划线*/
  .a-none-line {
    text-decoration: none !important;
  }

  /*评论内容超出部分自动换行*/
  .row-span {
    white-space: normal;
    word-break: break-all;
  }

  /*头像垂直居中*/
  .face-col-center {
    position: relative;
    /*top:50%;*/
    transform: translateY(30%);
  }

</style>
