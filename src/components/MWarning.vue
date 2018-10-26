<!--查看槽点对话框-->
<template>
  <div :class="war" ref="abc" @click="Hidden">
    <div class="show" ref="abc" @click.prevent.stop>
      <div class="showmessage">发布成功，积分 + <span style="color:red">15</span> </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'mwarning',
    props: ['warning'],
    data() {
      return {
        war:"motaikuang1",
      }
    },
    // 监听传值动态
    watch: {
      warning: {
        handler(newValue, oldValue) {
          //父组件param对象改变会触发此函数
          this.war = "motaikuang"
          var t;
          clearTimeout(t)
          t = setTimeout(function (){
            this.Hidden()
          }, 1000);

        },
        deep: true
      }
    },
    created() {

    },
    methods: {
      // 点击空白处消失
      Hidden: function () {
        var vm = this
        vm.war = "motaikuang1"
      },
    },
  }
</script>

<style lang="css" scoped>
  .showmessage{
    font-size: 15px;
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 78px;
    border: #3f9f5f 10px solid;
    background-color: whitesmoke;
  }
  .motaikuang {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 20;
    border:none;
    box-shadow: whitesmoke 1px 1px 5px 1px;
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

  .show {
    position: absolute;
    top:35%;
    width: 20%;
    left: 50%;
    height: 100px;
    background-color: #2a86ac;
    border-radius: 4px;
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
