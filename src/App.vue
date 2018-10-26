<template>
  <div>
  <div id="app">
    <!--<motaikuang></motaikuang>-->
    <!--<testx></testx>-->
    <!--<mwarning></mwarning>-->
    <router-view/>

  </div>
    <!--<footer1></footer1>-->
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {Footer}
}
</script>

<style>
  body{
    /*background-color: #333333;*/
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  min-height: 1500px;
  overflow: inherit;
}
</style>
