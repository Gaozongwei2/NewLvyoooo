<!--查看槽点对话框-->
<template>
  <div :class="war" ref="abc" @click="Hidden">
    <div class="show" ref="abc" @click.prevent.stop>
      <div class="showmessage container-fluid" >
        <div class="col-md-12 txt">是否删除？？？</div>
        <div class="box">
          <div class="btn col-md-1"></div>
          <div class="btn col-md-4 but" style="background-color: red; color: white" @click="deletetravel">确认</div>
          <div class="col-md-2"></div>
          <div class="btn col-md-4 but" @click="Hidden">取消</div>
          <div class="btn col-md-1"></div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'motaikuangdelete',
    props: ['del'],
    data() {
      return {
        war:"motaikuang1",
        text:'',
      }
    },
    // 监听传值动态
    watch: {
      del: {
        handler(newValue, oldValue) {
          //父组件param对象改变会触发此函数
          this.war = "motaikuang"
        },
        deep: true
      },
    },
    created() {

    },
    methods: {
      // 点击空白处消失
      Hidden: function () {
        var vm = this
        vm.war = "motaikuang1"
        // vm.$emit("htitlepush", vm.text)
      },
      deletetravel:function () {
        this.Hidden()
        this.$emit("htitlepush", this.text)
      }

    },
  }
</script>

<style lang="css" scoped>
  .but{
    border-radius: 10px;
    height: 40px;
    line-height: 40px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-family: "Apple Color Emoji";
    font-size: 15px;
  }
  .but:hover{
    background-color: rgba(50, 205, 50, 0.13);
    height: 40px;
    line-height: 40px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .box{
    height: 60px;
    width: 100%;
    line-height: 60px;
  }
  .box div{

  }
  .txt{
    height: 140px;
    line-height: 140px;
    font-size: 18px;
    border-bottom: rgba(165, 169, 164, 0.53) 1px solid;
    font-family: "Apple Color Emoji";

    text-align: center;
  }
  .showmessage{

  }
  .motaikuang {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 20;
    border:none;
    /*background-color: #3f9f5f !important;*/
    /*box-shadow: whitesmoke 1px 1px 5px 1px;*/
    transition: opacity 0.5s, top 0.5s, height 0.5s;
  }

  .motaikuang1 {
    position: fixed;
    height: 0px;
    opacity: 0;
    border:none;
    transition: opacity 0.5s, top 0.4s, height 0.6s;
    overflow: hidden;
  }
  .showmessage{
    border-radius: 7px;
    background-color: white;

  }
  .show {
    position: absolute;
    top:20%;
    width: 30%;
    left: 10%;
    height: 200px;
    background-color: white;
    border-radius: 7px;
    border:1px solid rgba(75, 75, 75, 0.31);
    box-shadow: rgba(75, 75, 75, 0.3) 1px 1px 10px 1px;
    transform: translate(-50%, 0);
    /*z-index: 100;*/
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
