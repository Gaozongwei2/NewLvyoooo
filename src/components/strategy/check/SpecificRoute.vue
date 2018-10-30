<!--具体路线-->
<template>
  <div class="container-fluid bg-color-ff" style="padding-left: 50px" id="two">
    <!--<div class="row">-->

    <div class="row" style="width:100%;">
      <div class="col-lg-1" ></div>


      <!--具体内容-->
      <div class="col-lg-10 center-block bg-color-ff" style="  border: #e4e4e4 1px solid ;border-right: none;border-top: none;border-bottom: none">
        <!--圆形-->
        <div class="div-circle img-circle pull-left text-center"  style="line-height:38px">  D{{this.howmuch}}</div>

        <ul class="list-unstyled" style="margin-left: 5px;margin-top: 100px">
          <!--游玩攻略-->
          <li>
            <div class="bg-color-ff ">
              <!--图片-->
              <div class="div-span-img-play float title-img "></div>
              <div class="title-size" >
                游玩攻略
              </div>
              <div class="line" style="border: 1px solid #f2f2f2"></div>
            </div>

            <!--游玩攻略内容-->
            <div class="row-space row-col-space bg-color-ff" >

              <!---------------------------游玩攻略具体内容---------------------------->
              <span v-text="strage['play']"></span>




              <!--地址-->
              <div class="container-fluid" style="padding: 0; margin: 0">
                <div class="row" style="padding: 0;margin: 0">

                  <div class="div-ul-li-play row-col-space hidden-xs bg-color-ff" style="padding: 0;margin: 0">

                    <ul class="list-unstyled  list-inline a-none-line" style="margin-left: 5px">

                      <li >
                        <span class="div-title-img float"></span>
                        <a href="">宽窄巷子</a>
                        <span>(2小时)</span>
                      </li>
                      <li  >
                        公交30分钟
                      </li>
                      <li >
                        <span class="div-title-img float"></span>
                        <a href="">武侯祠</a>
                        <span>(2小时) </span>
                      </li>
                      <li >
                        步行5分钟
                      </li>
                      <li >
                        <span class="div-title-img float"></span>
                        <a href="">锦里</a>
                        <span>(3小时)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!--游玩攻略图片-->
          <li class="row-col-space" >

            <!--左-->
            <div style="width: 32px;height: 32px;" class="div-left">
              <img src="../../../assets/strategy/lunbo/LC_icon_left_circle_line.svg" alt="">
            </div>


            <!--轮播图-->
            <div>
            <sowing-map></sowing-map>
            </div>


            <!--右-->
            <div style="width: 32px;height: 32px;" class="div_right">
              <img src="../../../assets/strategy/lunbo/right.svg" alt="">
            </div>

          </li>


          <!--交通攻略-->
          <li class="row-col-space bg-color-ff">
            <!--交通攻略标题-->
            <div style="clear: left">
              <!--图片-->
              <div class="div-span-img-play title-img float"></div>
              <div class="title-size">
                <span>交通攻略</span>
              </div>
              <div class="line" style="border: 1px solid #f2f2f2"></div>
            </div>

            <!--交通攻略内容-->
            <div class="row-space row-col-space bg-color-ff ">

              <!--------------------交通攻略内容--------------------->

                 <span v-text="strage['ticket']"></span>
            </div>

          </li>


          <!--门票攻略-->
          <li>
            <div class="row-col-space bg-color-ff">
              <!--图片-->
              <div class="div-span-img-play title-img float"></div>
              <div class="title-size " >
                门票攻略
              </div>
              <div class="line" style="border: 1px solid #f2f2f2"></div>
            </div>

            <!--门票内容-->
            <div class="row-space row-col-space bg-color-ff" >


              <!---------------------门票攻略内容------------------->
              <span v-text="strage['traffic']"></span>

            </div>
          </li>


          <!--餐饮攻略-->
          <li>
            <div class="row-col-space bg-color-ff">
              <!--图片-->
              <div class="div-span-img-play title-img float"></div>
              <div class="title-size " >
                餐饮攻略
              </div>
              <div class="line" style="border: 1px solid #f2f2f2"></div>
            </div>






            <!--餐饮攻略内容-->
            <div class="row-space row-col-space bg-color-ff" style="margin-bottom: 49px" >

              <!-----------------餐饮攻略内容--------------->
              <span v-text="strage['food']"></span>

            </div>
          </li>

          <!--餐饮攻略图片-->
          <li class="row-col-space" style="background-color: #843534">

            <!--轮播图-->
            <sowing-map></sowing-map>
          </li>


        </ul>



      </div>
      <div class="col-lg-1"></div>
    </div>


  </div>
</template>




<script>
export default {
  name: 'SpecificRoute',
  props:["strage","howmuch"],
  data () {
    return {
        idlength:[],
        i:'',
    }
  },

  methods:{




  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*浮动*/
  .float{
    float: left;
  }
  /*背景颜色fffff*/
  .bg-color-ff{
    background-color: #ffffff;
  }
  /*竖线圆形*/
  .div-circle{
    background-color: #9d9d9d;
    width: 38px;
    height: 38px;
    margin-left: -37px;
    margin-top: 62px;
  }
  /*标题图片居中显示*/
  .title-img{
    margin-top: 18px;
    margin-left: 5px;
    margin-right: 5px;
  }
  /*标题文字大小*/
  .title-size{
    font-size: 19px;
  }
  /*游玩攻略图标*/
  .div-span-img-play{
    width: 20px;
    height: 20px;
    /*background: url("../images/line-details-sprites.png");*/
    background-position: -25px -40px;
    background-repeat: no-repeat;
  }
  .row-space{
    line-height: 30px;
  }
  /*标题距离上个模块的距离*/
  .row-col-space{
    margin-top: 18px;
  }
  /*游玩路线超链接*/
  .div-ul-li-play ul li{
    line-height: 25px;
  }
  /*标题距离上个模块的距离*/
  .row-col-space{
    margin-top: 18px;
  }
  /*取消超链接下划线*/
  .a-none-line{
    text-decoration: none !important;
  }
  /*游玩攻略路线时间 */
  .div-title-img{
    display: block;
    width: 14px;
    height: 14px;
    margin-top: 5px;
    /*background: url("../images/line-details-sprites.png")  no-repeat -100px -145px;*/
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
