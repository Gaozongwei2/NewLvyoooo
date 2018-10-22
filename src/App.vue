<template>
  <div>
  <div id="app">
    <!--<motaikuang></motaikuang>-->
    <!--<testx></testx>-->
    <router-view/>
    <!--<footer></footer>-->
  </div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
