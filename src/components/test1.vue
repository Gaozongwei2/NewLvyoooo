
<template >
  <div>


    <div class="demo1-bg1">
      <div id="J_bg2_1" ref="bg1" class="demo1-bg2-1"></div>
      <div id="J_bg2_2" ref="bg2" class="demo1-bg2-2"></div>
    </div>
    <input id="J_btn_1" type="text" name="" value="10">
    <input id="J_btn_2" type="button" name="" value="set">



  </div>
</template>
<!--复制模板-->

<script>
  import axios from 'axios'
export default {
  name: 'test1',
  // props:['user'],
  data () {
    return {
      // 用户当前积分
      val:10
    }
  },
  mounted(){
//   获取用户当前积分，根据积分画圈
//     alert(11111)
    this.getachieve()
},

  methods:{
    getachieve : function () {
    //  最大值
      this.val = Math.max(0,this.val);
    //  最小值
      this.val = Math.min(100,this.val);

      if (this.val <= 50){
        this.$refs.bg2.style.transform = "rotate(" + 180 * this.val * 2 / 100 + "deg)";
        this.$refs.bg2.style.borderColor = "grey grey grey transparent";
        this.$refs.bg1.style.transform = "rotate(0deg)";
      }else{
        this.$refs.bg2.style.transform = "rotate(0deg)";
        this.$refs.bg2.style.borderColor = "red red red transparent";
        this.$refs.bg1.style.transform = "rotate(" + 180 * (this.val - 50) * 2 / 100 + "deg)";
      }



    }
  }
}
</script>
<style scoped>



  body{text-align: center}
  .demo1-bg1{
    width: 300px;
    height: 300px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    margin: 50px auto;
    background: yellowgreen;
    border-radius: 50%;
    box-shadow: 0 0 0 10px red inset;
    transition: background 4s;
    -moz-transition: background 2s; /* Firefox 4 */
    -webkit-transition: background 2s; /* Safari 和 Chrome */
    -o-transition: background 2s; /* Opera */

  }
  .demo1-bg2-1,.demo1-bg2-2{
    position: relative;
    margin: 0;
    padding: 0;
    -webkit-box-flex: 1;
    height: 300px;
    background: #fff;
    border: 10px solid green;
  }
  .demo1-bg2-1{
    border-radius: 150px 0 0 150px;
    border-color: black black black black;
    transform-origin: 100% 50%;
    z-index: 1;
  }
  .demo1-bg2-2{
    border-radius: 0 150px 150px 0;
    border-color: black black black transparent;
    transform-origin: 0 50%;
    z-index: 2;
  }







</style>
