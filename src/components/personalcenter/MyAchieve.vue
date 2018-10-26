<!--我的成就-->
<template>
  <div>

    <div class="size">
        <div class="sizeee"  >

        </div>
    </div>
  </div>
</template>
<!--复制模板-->

<script>
  import axios from 'axios'
export default {
  name: 'TestX',
  // props:['user'],
  data () {
    return {

    }
  },
  created(){

},

  method:{

  }
}
</script>
<style scoped>
.size{
  width: 800px;
  height: 600px;
  background-color: rebeccapurple;
  /*position: absolute;*/
  /*left: 15%;*/
  /*top: 10%;*/
}
  .sizeee{
    background: url('../../assets/images/zan.png'); width: 800px;height: 600px;
      ;
    z-index: 999;
  }


</style>
