<!--查看槽点对话框-->
<template>
  <div :class="pattern" ref="abc" @click="Hidden">
    <div class="show" ref="abc" @click.prevent.stop>
      <input class="col-md-9 title" placeholder="请输入段落标题" v-model="title" >
      <div class="col-md-2 submit" @click="title">确定</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['pattern'],
    data() {
      return {
        look: 'motaikuang',
        travel: '',
        title:''
      }
    },
    watch: {
      pattern: function (newQuestion, oldQuestion) {
        this.pattern = newQuestion
      }
    },
    created() {
      // this.look = this.$route.params.pattern
      // alert(pattern)
      console.log(this.travelnoteid)
      this.travelnotedetail()
    },

    methods: {
      // 点击空白处消失
      Hidden: function () {
        var vm = this
        vm.pattern = "motaikuang1"
        // vm.$emit("disappear",vm.pattern)

      },
      title:function () {
        var vm = this
        vm.pattern = "motaikuang1"
        vm.$emit("htitle",vm.title)
      },

    },
  }
</script>

<style lang="css" scoped>
  .motaikuang {
    position: fixed;
    top: 0;
    /*left: 0;*/
    height: 100%;
    width: 100%;
    z-index: 20;

    box-shadow: whitesmoke 1px 1px 5px 1px;
    /*background-color: rgba(0, 0, 0, 0.49);*/
    transition: opacity 0.5s, top 0.5s, height 0.5s;
  }

  .motaikuang1 {
    position: fixed;
    /*top: -768px;*/
    height: 0px;
    opacity: 0;
    transition: opacity 0.5s, top 0.4s, height 0.6s;
    overflow: hidden;
  }

  .show {
    position: absolute;
    top:35%;
    width: 50%;
    left: 40%;
    height: 200px;
    /*overflow: auto;*/
    /*overflow-y: auto;*/
    background-color: whitesmoke;
    border-radius: 4px;
    border:1px solid rgba(75, 75, 75, 0.31);
    box-shadow: rgba(75, 75, 75, 0.3) 1px 1px 10px 1px;
    transform: translate(-50%, 0);
    /*z-index: 100;*/
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
    height: 60px;
    width: 70px;
    font-size: large;
    border-radius: 25%;
    border: 1px solid limegreen;
    line-height: 60px;
    text-align: center;
    margin-left: 20px;
    font-weight: bold;

  }

  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    list-style: none;
  }



</style>
