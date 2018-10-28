<!--查看槽点对话框-->
<template>
  <div :class="pat" ref="abc" @click="Hidden">
    <div class="show" ref="abc" @click.prevent.stop>
      <input class="col-md-9 title" placeholder="请输入段落标题" v-model="title" >
      <div class="col-md-2 submit" @click="getit">确定</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['pattern'],
    data() {
      return {
        pat:"motaikuang1",
        title:'',
      }
    },
    watch: {
      pattern: {
        handler(newValue, oldValue) {
          //父组件param对象改变会触发此函数
          this.pat = "motaikuang"
        },
        deep: true
      }
    },
    created() {
      // this.travelnotedetail()
    },

    methods: {
      // 点击空白处消失
      Hidden: function () {
        var vm = this
        vm.pat = "motaikuang1"

      },
      getit:function () {
        var vm = this
        alert("haha")
        vm.pat = "motaikuang1"
        vm.$emit("htitle",vm.title)
        vm.title = ""
      },
    },
  }
</script>

<style lang="css" scoped>
  .title{
    border-radius: 30px;
    padding-left: 30px;
    outline: none;
  }
  .title:hover{
    border: limegreen 1.5px solid;
  }
  .motaikuang {
    position: fixed;
    top: 0;
    /*left: 0;*/
    height: 100%;
    width: 100%;
    z-index: 20;
    border: none;
    box-shadow: whitesmoke 1px 1px 5px 1px;
    /*background-color: rgba(0, 0, 0, 0.49);*/
    transition: opacity 0.5s, top 0.5s, height 0.5s;
  }

  .motaikuang1 {
    position: fixed;
    height: 0px;
    opacity: 0;
    border: none;
    transition: opacity 0.5s, top 0.4s, height 0.6s;
    overflow: hidden;
  }

  .show {
    position: absolute;
    top:35%;
    width: 50%;
    left: 40%;
    height: 200px;

    background-color: whitesmoke;
    border-radius: 4px;
    border:1px solid rgba(75, 75, 75, 0.31);
    box-shadow: rgba(75, 75, 75, 0.3) 1px 1px 10px 1px;
    transform: translate(-50%, 0);
    padding-right: 17px;
    padding: 69px 10px 69px 30px;
  }

  input {
    width: 80%;
    height: 60px;
    font-size: 18px;
    line-height: 60px;
    margin: auto;
    margin-left: 50px;
    padding-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.21);
    border-radius: 4px;
  }
  .submit{
    color: limegreen;
    height: 60px;
    width: 90px;
    font-size: large;
    border-radius: 30px;
    border: 1px solid limegreen;
    line-height: 60px;
    text-align: center;
    margin-left: 20px;
    font-weight: bold;
  }
  .submit:hover{
    background: limegreen;
    color: white;
  }

  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    list-style: none;
  }



</style>
