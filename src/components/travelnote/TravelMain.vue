<template>
  <div class="container">
    <div class="col-md-9" id="travel-notes">
      <div id="header">
        <ul class="header-ul">
          <li class="time" style=" background-position: -22px 0;">出发时间<span>/</span>2018-08-21<i></i></li>
          <li class="day" style="background-position: -22px -22px;">出行天数<span>/</span>12 天</li>
          <li class="people" style=" background-position: -22px -44px;">人物<span>/</span>和朋友</li>
          <li class="cost" style=" background-position: -22px -66px;">人均费用<span>/</span>4000RMB</li>
        </ul>
      </div>
      <div class="savedata btn" @click="savedata">保存数据</div>
      <div class="savedata btn">获取数据</div>

      <div id="content" v-html="this.newcontent">

        <!--评论(存储到数据库 但未显示用户评论)-->
        <route-discuss :tt="this.res"></route-discuss>

      </div>
      <!--<div id="content" ref ="content" v-text="this.newcontent">-->
        <!--&lt;!&ndash;{{this.newcontent}}nbhjkk&ndash;&gt;fsdafsafabhjbhbjhjhvjvghvhvgvvvvvhv-->
        <!--<div style="position: absolute; z-index: 99">fasdfdafgdagdfsgdfahsduiahfiusadhfiua</div>-->
      <!--</div>-->


    </div>

    <div class="col-md-3" id="web-side">
      <h2 ><a href="#header">游记目录</a></h2>
      <a href="#two"><h5>0.默认段落</h5></a>
      <a href="#three"><h5 >1.关于交通</h5></a>
      <a href="#four"><h5>2.关于住宿</h5></a>
      <a href="#five"><h5>3.游记行程</h5></a>
      <a href="#six"><h5>4.游记美食</h5></a>
      <a href="#seven"><h5>5.结尾</h5></a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "TravelMain",
    props: ["aa","travels"],
    data() {
      return {
        //里面的具体内容
        newcontent: '',
        "contentt": '',
        // "tid_id": aa,aa
        color: '',
        content: '',
        travel: '',
        res:{
          'id':this.travels['id'],
          //游记的状态为1
          'flag':1
        },
      }
    },
    created() {
      var vm = this
      // alert(this.aa)
      // vm.travel = vm.$route.params.travels
      // console.log(vm.$route.params.travels)
      vm.getdetaildata()
    },
    methods: {
      red: function () {
        var vm = this
        alert("change")
        vm.color = "change"
      },
      savedata: function () {
        var vm = this
        var params = new URLSearchParams();
        params.append('content', vm.$refs.content.innerHTML)
        axios.post('http://127.0.0.1:8000/travelnote/savecontent/', params)
          .then(
          )
          .catch(
          )
      },

      //测试
      scroll:function () {
        var vm = this
        console.log(qqqqqqqqqqqqqqq)
        this.scrollTop = this.$refs.content.scrollTop
      },

      //获取游记具体内容
      getdetaildata: function () {
        var vm = this
        axios.get('http://127.0.0.1:8000/travelnote/detailcontent/' +vm.aa+ '/')
          .then(function (response) {
              vm.newcontent = response.data["code"][0]["contentall__contentt"]
              console.log(vm.newcontent)
            }
          )
          .catch(function (error) {
            return error
          })
      }
      // getdata:function () {
      //   var vm = this
      //   axios.get('http://127.0.0.1:8000/travelnote/getcontent/20/')
      //     .then(function (response) {
      //       // 获取帖子详细信息
      //       console.log(response.data["contentt"])
      //       vm.content = response.data["contentt"]
      //
      //     })
      //     .catch(function (error) {
      //       return error
      //     })

    }

  }
</script>

<style scoped>
  /*游记详情*/
  .container {
    height: 700px;
    margin: auto;
  }

  #web-side {
    height: 700px;
    margin-top: 40%;
    /*top: 30%;*/
    /*left: 50%;*/
    /*position: fixed;*/
    /*background: antiquewhite;*/
    /*z-index: 18;*/
    /*line-height: 49px;*/
    border: 1px solid rgba(0, 0, 0, 0.42);
    /*height: 50px;*/
    /*width: 50px;*/
    /*border-radius: 50%;*/
    background-color: red;
    color: white;
    font-size: 25px;
    text-align: center;
    line-height: 50px;
    position: fixed;
    left: 65%;
    top: 60%;
  }

  #travel-notes {
    width: 844px;
  }

  #header {
    width: 650px;
    height: 100px;
    margin-top: 35px;
    border: 1px dashed #d7d7d7;
    padding-bottom: 18px;
    margin-bottom: 30px;
    border-radius: 4px;
    position: relative;
  }

  /*列表*/
  .header-ul li {
    width: 170px;
    margin-top: 18px;
    float: left;
    display: inline;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    color: #666;
    padding-left: 5%;
    background: url("http://css.mafengwo.net/images/post/new_notes/151204sprite1.png");
    background-repeat: no-repeat;
    cursor: pointer;
  }

  /*游记*/
  #content {
    margin-top: 15px;
    height: 1300px;
  }

  p {
    margin-bottom: 20px;
    text-align: justify-all;
    word-break: break-word;
    font-size: 14px;
    color: #444;
    line-height: 45px;
  }

  /*图片大小*/
  p img{
    width: 780px;
    height: 517px;
  }

  h1 {
    width: 400px;
    height: 50px;
    color: #222;
    font-weight: normal;
    margin-top: 25px;
    font-size: 25px;
    /*margin-left: 25px;*/
  }

  h2 {
    height: 30px;
    margin: auto;
    font-size: 25px;
  }

  h5 {
    color: #999;
    margin-top: 55px;
    font-size: 16px;
  }
  a{
    text-decoration: none;
    /*background-color: #999;*/
    color: #999;
  }

  /*评论*/
  .discuss {
    /*background: #dfdfdf;*/
    width: 700px;
    height: 120px;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 24px;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: #ff9d00;
    cursor: pointer;
  }

</style>
