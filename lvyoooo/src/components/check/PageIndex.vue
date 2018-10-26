

<!--<template>-->
  <!--<nav aria-label="Page navigation">-->
    <!--<ul class="pagination">-->
      <!--<li>-->
        <!--<a href="#" aria-label="Previous" @click.prevent.stop="getPindex()">-->
          <!--<span aria-hidden="true">&laquo;</span>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li v-for="i in count"><a href="#" @click.prevent.stop="getIndex(i)" v-text="i"></a></li>-->

      <!--<li>-->
        <!--<a href="#" aria-label="Next" @click.prevent.stop="getNindex(count)">-->
          <!--<span aria-hidden="true" >&raquo;</span>-->
        <!--</a>-->
      <!--</li>-->
    <!--</ul>-->


  <!--</nav>-->
<!--</template>-->

<!--<script>-->
  <!--import axios from 'axios'-->
  <!--export default {-->
    <!--name: 'PageIndex',-->
    <!--props:['count'],-->
    <!--data:function(){-->
      <!--return{-->
        <!--pageindex:1,-->
      <!--}-->
    <!--},-->

    <!--methods:{-->
      <!--getIndex:function (i) {-->
        <!--this.$emit('indexclick',i);-->
        <!--this.pageindex=i;-->
      <!--},-->
      <!--getPindex:function () {-->
        <!--if(this.pageindex>1){-->
          <!--this.$emit('indexclick',this.pageindex-1);-->
          <!--this.pageindex=this.pageindex-1-->
        <!--}else {-->
          <!--this.$emit('indexclick',1);-->
        <!--}-->
      <!--},-->
      <!--getNindex:function (count) {-->
        <!--if(this.pageindex<count){-->
          <!--this.$emit('indexclick',this.pageindex+1);-->
          <!--this.pageindex=this.pageindex+1-->
        <!--}else {-->
          <!--this.$emit('indexclick',count);-->
        <!--}-->
      <!--}-->
    <!--}-->

  <!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
  <!--body,ul,li,p{-->
    <!--margin: 0;-->
    <!--padding: 0;-->
  <!--}-->
  <!--ul li{-->
    <!--list-style: none;-->
  <!--}-->
  <!--.job-header{-->
    <!--text-align: center;-->
  <!--}-->
<!--</style>-->








