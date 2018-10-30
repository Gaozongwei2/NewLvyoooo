<!--路线概览-->
<template>

  <div>

    <div class="container-fluid bg-color-ff" style="padding-left:30px " id="one">
      <!--标题-->
      <div class="row" style="line-height: 30px;margin-top: 4%">
        <!--左边-->
        <div class="col-lg-6 col-md-7 col-sm-6 col-lg-offset-1 bg-color-ff" >
          <!--标题-->
          <div class="font-title">
            路线概览
          </div>

          <div class="collapse in a-none-line" id="demo">



            <!------------路线概览------------>
            <!---------------循环几天---------------->
            <p v-for="ddy in cc" :key="ddy"  ref="showall">
              <span style="padding-bottom: 0px">
                 D{{ddy}}
              </span>

              <span>
                <!--循环这一天的景点个数-->
                <!--------------如果天数>4，隐藏剩余的那些-------------->

              <span  v-for="item in strage[ddy-1]['advantage'].split('，').length-1"  >
                <span v-text="strage[ddy-1]['advantage'].split('，')[item-1]"></span>
                <img src="../../../assets/images/箭头.png" alt="">
              </span>
                <span v-text="strage[ddy-1]['advantage'].split('，')[strage[ddy-1]['advantage'].split('，').length-1]"></span>



              </span>
            </p>

            <a href="javascript:;"  @click="showall"  class="show_all" ref="show" >展开全部</a>



          </div>
          <!--横线-->
          <div class="row-line" style="margin-top: 20px"></div>

          <div class="sum hidden-xs totle-title">
            <div class="h3">
              总结
            </div>

            <!-----------------总结文本------------------->
            <span v-text="strage['contents']"></span>
          </div>
        </div>
        <!--右边-->
        <div class="col-lg-4 col-md-5 col-sm-6  hidden-xs route-right" style="padding: 0">

          <!---------------------根据天数循环地图的个数-------------------->
          <div class="section-map hh">
            <ul class=" list-unstyled list-inline text-center" style=" position: absolute;z-index: 19;padding: 0;margin: 0">
              <li class="ll img-circle"  v-for="ddy in sday" :key="ddy">D{{ddy}}</li>
            </ul>
          </div>

          <div id="container" style="width:94%;height:285px; margin: 0"></div>
        </div>

      </div>

    </div>
    <div class="line"></div>

  </div>
</template>

<!--复制模板-->

<script>
  export default {
    name: 'RouteView',
    props:['strage','sday'],
    data () {
      return {
        city:'',
        cc:4,

      }
    },
    mounted(){

    },
    methods:{
        //展开全部
        showall:function () {
          var vm = this
          //循环剩余的天数
          if(vm.$refs.show.innerHTML =='展开全部'){
            vm.cc = vm.sday
            vm.$refs.show.innerHTML = '收起'
          }
          else{
            vm.cc = 4
            vm.$refs.show.innerHTML = '展开全部'


          }


          //更改文本


        }

    }

}


</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*背景颜色fffff*/
  .bg-color-ff{
    background-color: #ffffff;
  }

  /*路线概览字体*/
  .font-title{
    /*background-color: #4cae4c;*/
    margin-left: 10px;
    font-size: 18px;
  }


  /*取消超链接下划线*/
  .a-none-line{
    text-decoration: none !important;
  }

  /*展开全部*/
  .show_all{
    color: #ff9d00;
  }
  .show_all:hover{
    color: #ff9d00;
  }


  /*横线*/
  .row-line{
    width: 90%;
    height: 1px;
    margin: auto;
    border: 1px solid #f2f2f2;
    border-right: none;
    border-left: none;
    border-bottom: none;
  }

  /*总结*/
  .totle-title{
    margin-top: 10px;
  }


  /*地图*/
  .section-map ul li{
    width: 33px;
    height: 33px;
    background-color: #616262;
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    margin: 0;
  }
  .section-map ul{
    position: absolute;
    top: 7px;
    left: 10px;
    /*margin: 0;*/
    padding: 0;
  }
  .hh li{
    margin: 0!important;
    padding: 0!important;
    padding-left: -2px !important;
  }

  /*下划线*/
  .line{
    border:5px solid #d6d6d6;
    border-left: none;
    border-right: none;
    border-top: none;
    background-color: rgba(0,0,0,.06);
  }


</style>
