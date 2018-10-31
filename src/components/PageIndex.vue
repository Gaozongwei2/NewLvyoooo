<!--分页-->
<template>
    <div class="page">
      <button class="btn before-page" @click="before">上一页</button>
      <div class="lin_page_index btn " v-for="i in pagecount">
        <a class="btn btn-default padding" href="javascript:;" v-text="i" :id="i" @click="showpage($event)" ></a>
      </div>
      <a class="btn btn-default padding" href="javascript:;" v-if="morepage" :id="i" @click="countshow()" >...</a>
      <button class="btn next-page" @click="next">下一页</button>
      <div class="btn ">共<span style="color: #549c55" v-text="countnum"></span>页</div>
    </div>
</template>
<!--复制模板-->

<script>
  import axios from 'axios'
export default {
  name: 'PageIndex',
  props:['pagecount'],
  data () {
    return {
      pagecount:0,
      pagesize:6,
      page:1,
      pagelist:[1,2,3,4,5,6],
      morepage:false,
      count:1,
      nowcount:1,
      countnum:0,

      travelnoteid: '1'


    }
  },
  created(){


},

  methods:{
    // 上一页
    before:function(){
      var vm = this
      if (vm.page-1>0){
        vm.page = vm.page - 1
      }
    },
    // 下一页
    next:function(){
      var vm = this
      if(vm.page+1<=vm.pagecount){
        vm.page = vm.page + 1
      }
    },

    // 获取游记条数进而确定页数
    getpages: function () {
      var vm = this
      vm.countnum = Math.ceil(vm.travels.length/vm.pagesize)
      vm.count = Math.ceil(vm.countnum/9)
      if (vm.countnum>=9){
        vm.pagecount = 9
        vm.morepage = true
      }else{
        vm.pagecount = vm.countnum
      }

      console.log(vm.pagecount)
    },
    showpage:function (event) {
      var vm = this
      var newlist=[]
      vm.page = event.currentTarget.id
      if (vm.page*vm.pagesize<=vm.travels.length){
        vm.pagesize = 6
        for(let i =1; i<=6; i++){
          newlist.push((vm.page-1)*6+i)
        }
      }else{
        vm.pagesize = vm.travels.length-((vm.page-1)*vm.pagesize)
        for(let i =1; i<=vm.pagesize; i++){
          newlist.push((vm.page-1)*6+i)
        }
      }
      vm.pagelist = newlist
    }


  }
}
</script>
<style scoped>
  .page{
    width: 100%;
    display: block;
    margin: auto;
    margin-left: 40px;
    margin-top: 40px;
  }

</style>
