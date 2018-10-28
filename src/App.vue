<template>
  <div>
  <div id="app">
    <!--<motaikuang></motaikuang>-->
    <!--<testx></testx>-->
    <router-view/>

  </div>
    <!--<footer1></footer1>-->
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  components: {Footer},
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
  body{
    /*background-color: #333333;*/
  }
#app {
  font-family: "Apple Color Emoji !important";
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  min-height: 1500px;
  overflow: inherit;
}
</style>
