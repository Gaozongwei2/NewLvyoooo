<!--路线概览-->
<template>

  <div>

    <div class="container-fluid bg-color-ff" style="padding-left:30px " id="one">
      <!--标题-->
      <div class="row " style="line-height: 30px;margin-top: 4%">

        <!--左边-->
        <div class="col-lg-6  col-md-7 col-sm-6 col-lg-offset-1 bg-color-ff" >
          <!--标题-->
          <div class="font-title">
            路线概览
          </div>
          <div class="collapse in a-none-line" id="demo">



            <p v-for="(item, index) in showall"    v-if='index<2'>
              <span style="padding-bottom: 0px">
                 D1
              </span>
              <a href="" >白马寺</a>
              <span style="padding-bottom: 0px">
                 箭头
              </span>
              <a href="">洛阳周王城天子驾六博物馆（1.5小时）</a>
              <span style="padding-bottom: 0px">箭头</span>
              <a href="">隋唐洛阳城国家遗址公园（天堂明堂景区）（3小时）</a>
              <span style="padding-bottom: 0px">箭头</span>
              <a href="">丽景门（2小时）</a>
            </p>



            <a href="javascript:;"  class="show_all" ref="show" @click="showallll()">
              展开全部
            </a>

          </div>
          <!--横线-->
          <div class="row-line" style="margin-top: 20px"></div>

          <div class="sum hidden-xs totle-title">
            <div class="h3">
              总结
            </div>
            <span>
                        按照景点的热度和位置来安排，是一条经典的线路，能更全面的了解成都市区。
                    </span>

          </div>
        </div>
        <!--右边-->
        <div class="col-lg-4 col-md-5 col-sm-6  hidden-xs route-right" style="padding: 0">
          <!--D1,D2,D3,D4-->
          <div class="section-map hh">
            <ul class=" list-unstyled list-inline text-center" style=" position: absolute;z-index: 19;padding: 0;margin: 0">
              <li class="ll img-circle" >D1</li>
              <li class="ll img-circle">D2</li>
              <li class="ll img-circle">D3</li>
              <li class="ll img-circle">D4</li>
            </ul>

          </div>

          <div id="container" style="width:94%;height:285px; margin: 0"></div>

        </div>

      </div>

    </div>
    <div class="line"></div>

    <!--<route-discuss :tt="this.res"></route-discuss>-->

  </div>
</template>

<!--复制模板-->

<script>
  export default {
    name: 'RouteView',
    data () {
      return {
        res:{
          'id':this.travels['id'],
          //游记的状态为1
          'flag':2
        },
        //数据库获取p的条数
        showall:3
      }
    },
    methods:{
      showallll:function (){
        //  如果条数>4，就把剩余的收起
        if(this.showall>2){
          this.$refs.show.innerHTML = "收起"
        }
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
