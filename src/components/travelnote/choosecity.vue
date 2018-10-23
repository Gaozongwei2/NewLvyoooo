<!--查看槽点对话框-->

<template>

  <div class="motaikuang" ref="abc" @click="Hidden">
    <div class="show" ref="abc" @click.prevent.stop>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['travelnoteid'],
    data() {
      return {

        travel:'',
        t: "motaikuang",
        t1: "motaikuang motaikuang1",
      }
    },
    created() {
      console.log(this.travelnoteid)
      this.travelnotedetail()
    },
    methods: {
      // 点击空白处消失
      Hidden: function () {
        this.$refs.abc.className = this.t1
        // this.$refs.abc.display = none
        // this.$refs.abc.style.display = none
        // event.target.style.display = none;
        this.$emit('hidden')
        // alert("hidden")
      },
      // 查询传过来id对应的详细信息
      travelnotedetail: function () {
        var vm = this
        axios.get('http://127.0.0.1:8000/travelnote/gettravelnotedetail/' + vm.travelnoteid + '/')
          .then(function (response) {
            // 获取帖子详细信息
            vm.travel = response.data

            vm.$refs.abc.innerHTML = response.data["content"]
          })
          .catch(function (error) {
            return error
          })
      },
    },
  }
</script>

<style lang="css" scoped>

  /*正文样式*/
  .pa {
    font-size: 18px;
    color: red;
    background-color: lime;
  }

  .txt {
    margin: 10px 0;
    font-weight: bold;
    text-align: left;
  }

  .img {
    height: 350px;
    width: 500px;

  }

  .motaikuang {
    position: fixed;
    top: 0;
    left: 0;
    height: 1000px;
    width: 100%;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.49);
    display: block;
    transition: opacity 0.5s, top 0.4s;
  }

  .motaikuang1 {
    position: fixed;
    top: -100%;
    opacity: 0;
    transition: opacity 0.5s, top 0.4s;
    overflow: hidden;
  }

  .show {

    position: absolute;
    margin-top: 25px;
    width: 80%;
    left: 50%;
    overflow: auto;
    overflow-y: auto;
    background-color: white;
    border-radius: 10px;
    transform: translate(-50%, 0);
    z-index: 100;
    padding-right: 17px;
  }


  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /*导航*/
  .container-fluid {
    height: 58px;
    border-bottom: solid 1px #9e9e9e;
  }

  #logo-img {
    background-image: url("../../assets/travelnote/logoweight.png");
    height: 40px;
    width: 150px;
    background-repeat: no-repeat;
    margin-left: 100px;
    margin-top: 5px;
  }

  #nav-list {
    float: left;
    width: 420px;
    height: 58px;
  }

  #nav-list li {
    float: left;
    display: inline-block;
    padding: 15px 30px;
    color: #333;
    vertical-align: top;
    overflow: hidden;
    font-size: 15px;
    margin-top: 8px;
  }

  #search-bar-input {
    /*圆角*/
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #fafafa;
    border: none;
    width: 130px;
    height: 28px;
    transition: width .5s ease 0s;
    /*background-image: url("../assets/4.svg");*/
    background-repeat: no-repeat;
    margin-left: 10px;
    margin-top: 6px;
  }

  #search-bar-input:focus {
    outline-style: none;
    transition: width .5s ease 0s;
    width: 375px;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
    border: 1px solid #ff9d00;
    background-position: 95%;
    background-repeat: no-repeat;
    margin-left: 10px;
    margin-top: 6px;
  }

  h1 {
    width: 710px;
    height: 80px;
    font-size: 26px;
    line-height: 38px;
    overflow: hidden;
    margin-left: 32%;
    font-weight: bold;
    color: #fff;
  }

  #user-img {
    border: 0;
    vertical-align: middle;
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 10px;
  }

  /*背景图片*/
  #set-bg-big {
    background-image: url("../../assets/travelnote/set-bg-.png");
    width: 1400px;
    height: 470px;
    background-repeat: no-repeat;
  }

  /*头像*/
  #user-head img {
    border-radius: 50%;
    position: absolute;
    top: -60px;
    left: 45%;
    z-index: 88;
  }

  #user-person {
    width: 450px;
    height: 78px;
    border-right: 1px solid #d7d7d7;
    padding: 20px 0 0 150px;
    float: left;
  }

  /*个人信息*/
  a {
    background-color: transparent;
    text-decoration: none;
    color: #ff9d00;
    cursor: pointer;
  }

  a.per_name {
    color: #ff7200;
    font-size: 14px;
    font-weight: normal;
    margin-left: -45%;
  }

  a.per_grade {
    color: #ea3c1a;
    font-family: Verdana, Arial, Helvetica, STHeiti;
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
  }

  span.now_time {
    font-family: Verdana, Arial, Helvetica, STHeiti;
    margin-right: 10px;
    color: #acacac;
    display: inline;
    margin-left: 10px;
  }

  span i {
    width: 18px;
    height: 14px;
    display: inline-block;
    background: url(../../assets/travelnote/浏览.png);
    background-repeat: no-repeat;
    margin-right: 4px;
    vertical-align: -2px;
  }

  /*收藏*/
  a.collect_num i {
    width: 30px;
    height: 30px;
    display: inline-block;
    background: url("../../assets/travelnote/collect.png");
    margin-top: 15px;
    margin-left: 35px;
  }

  a.collect_num span {
    margin-left: 34px;
  }

  #collect {
    height: 80px;
    border-right: 1px solid #acacac
  }


</style>
