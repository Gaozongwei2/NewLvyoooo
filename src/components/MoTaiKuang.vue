<!--查看槽点对话框-->
<template>
  <div :class="pattern" ref="abc" @click="Hidden">
    <div class="show" ref="abc" @click.prevent.stop>
      <div class="btn-warning" @click="Hidden">取消</div>
      <div class="btn-success">发布</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['pattern'],
    data() {
      return {
        look:'motaikuang',
        travel:'',
      }
    },
    watch:{
      pattern(newvalue,oldvalue){
        this.pattern = newvalue
      }
    },
    created() {
      this.look = this.$route.params.pattern
      alert(pattern)
      console.log(this.travelnoteid)
      this.travelnotedetail()
    },

    methods: {
      // 点击空白处消失
      Hidden: function () {
        var vm = this
        // vm.pattern = "motaikuang1"
        vm.$emit("disappear",vm.pattern)

      },

    },
  }
</script>

<style lang="css" scoped>
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
    height: 500px;
    /*overflow: auto;*/
    /*overflow-y: auto;*/
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




</style>
