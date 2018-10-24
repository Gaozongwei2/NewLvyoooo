<template>
  <div class="container">
    <div class="col-md-9" id="travel-notes">
      <div id="header">
        <ul class="header-ul">
          <li class="time" style=" background-position: -22px 0;">出发时间<span>/</span>2018-08-21<i></i></li>
          <li class="day" style="background-position: -22px -22px;">出行天数<span>/</span>12 天</li>
          <li class="people" style=" background-position: -22px -44px;">人物<span>/</span>和朋友</li>
          <li class="cost" style=" background-position: -22px -66px;">人均费用<span>/</span>4000RMB</li>
        </ul>
      </div>

      <div id="content">
        <h1 id="two">游记简介</h1>
        <p>
          简单介绍一下自己的属性，本人属“懒”，很“懒”的“懒”，
          一般旅游完毕以后就发发朋友圈， 打卡打卡微博就了事，
          绝对没有想认真写游记的打算，但这次我为什么要写，是真觉得有必要
          给未来想前往印尼游玩，而又不想仅仅局限于印尼 巴厘岛 的小伙伴们
          一些靠谱的建议。

          因为这次行程我发现，关于印尼更美的海岛 科莫多 岛的游记帮助，
          在马蜂窝上真的太少，将心比心，希望我摸索着游玩的经验能帮到大家。
        </p>

        <h1 id="three">1.关于交通</h1>
        <p>
          【机票】<br>

          大概提前两个多月，春节的时候在飞猪上买了机票，去程和回程是分开买的，用了飞猪的优惠券。<br>

          4月19日 07:45-10:20 上海 浦东—— 济州国际机场 <br>
          春秋航空 9C8569 手提5kg+托运10kg <br>

          4月22日 22:10-22:55 济州国际机场 —— 上海 浦东 <br>
          韩国 真航空 LJ101 手提12kg+托运20kg <br>
          （关于机场提货手提行李的重量是否严格种种，下文再说）<br>

          算是完整的4天三夜。去程和回程这个时间地铁都没有运营，所以打的是嘀嗒拼车，嘀嗒比滴滴的计价方式稍微便宜一点。
          另外滴滴是不允许建立早上6点之前的顺风车订单的。其实不管哪个平台，打到的都是专门做凌晨生意、自己接活的那种
          小面包车吧～或许会因为同行的乘客而等待，看运气。大家也要注意安全！<br>

          还好我打的都没有等很久，司机人很好很顺利。单程一个人都是50块左右。<br>
        </p>

        <h1 id="four">2.关于住宿</h1>
        <p>
          自己出来玩向来都是住青旅的，一来真的很便宜，二来喜欢那种氛围，每次也都能找到很有趣也很整洁的旅舍。<br>

          3个晚上：1夜住在济州市，Lyndon Hostel 林登旅舍，6人女生间，77元。<br>
          2夜住 西归浦 市，Mido Hostel 美度旅舍，8人女生间，199元。
          是在Booking上定的，另外也有别的房间种类可以选择的。
          住下来之后想说这两家都非常好，让我惊讶的是，两家都是真正的bnb！
          就是包含自助早餐（简单的牛奶、果汁、备着吐司机的吐司、果酱和花生酱、自己动手的煎蛋）。
          因为之前国内外住的很多青旅都是没有早饭或者收费的套餐式早饭， 现在这样自己动手又蛮丰盛的早饭可以说是打开元气满 满的一天呢！
          <img src="../../assets/travelnote/zhusu.png" alt="">
        </p>

        <h1 id="five">3.游记行程</h1>
        <p>
          DAY 1 ：南方南，南海畔，北海不北
          <img src="../../assets/travelnote/day1.png" alt=""> <br>

          Day 2: 天之涯，海之角，涠洲喃
          今日行程：轮渡前往 涠洲岛 +滴水丹屏+270度夕阳观景酒店+鳄鱼山景区+暮崖...
          <img src="../../assets/travelnote/day2.png" alt="">
        </p>

        <h1 id="six">4.游记美食</h1>
        <p>
          Day 3: 南湾海鲜街 <br>
          <img src="../../assets/travelnote/food.png" alt="">
        </p>
      </div>
    </div>

    <div class="col-md-3" id="web-side">
      <h2 ><a href="#header">游记目录</a></h2>
      <a href="#two"><h5>0.默认段落</h5></a>
      <a href="#three"><h5 >1.关于交通</h5></a>
      <a href="#four"><h5>2.关于住宿</h5></a>
      <a href="#five"><h5>3.游记行程</h5></a>
      <a href="#six"><h5>4.游记美食</h5></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TravelMain",
    props: ["travels"],
    data() {
      return {

      }
    },
    created() {


    },
    methods: {

      //测试
      scroll:function () {
        var vm = this
        console.log(qqqqqqqqqqqqqqq)
        this.scrollTop = this.$refs.content.scrollTop
      },
    }

  }
</script>

<style scoped>
  /*游记详情*/
  .container {
    height: 700px;
    margin: auto;
  }

  /*侧边栏*/
  #web-side {
    height: 700px;
    margin-top: 40%;
    /*top: 30%;*/
    /*left: 50%;*/
    /*position: fixed;*/
    /*background: antiquewhite;*/
    /*z-index: 18;*/
    /*line-height: 49px;*/
  }


  #travel-notes {
    width: 844px;
  }

  #header {
    width: 650px;
    height: 100px;
    margin-top: 35px;
    border: 1px dashed #d7d7d7;
    padding-bottom: 18px;
    margin-bottom: 30px;
    border-radius: 4px;
    position: relative;
  }

  /*列表*/
  .header-ul li {
    width: 170px;
    margin-top: 18px;
    float: left;
    display: inline;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    color: #666;
    padding-left: 5%;
    background: url("http://css.mafengwo.net/images/post/new_notes/151204sprite1.png");
    background-repeat: no-repeat;
    cursor: pointer;
  }

  /*游记*/
  #content {
    margin-top: 15px;
    height: 1300px;
  }

  /*段落*/
  p {
    margin-bottom: 20px;
    text-align: justify-all;
    word-break: break-word;
    font-size: 14px;
    color: #444;
    line-height: 45px;
  }

  /*图片大小*/
  p img{
    width: 780px;
    height: 517px;
  }

  h1 {
    width: 400px;
    height: 50px;
    color: #222;
    font-weight: normal;
    margin-top: 25px;
    font-size: 25px;
    /*margin-left: 25px;*/
  }

  h2 {
    height: 30px;
    margin: auto;
    font-size: 25px;
  }

  h5 {
    color: #999;
    margin-top: 55px;
    font-size: 16px;
  }
  a{
    text-decoration: none;
    /*background-color: #999;*/
    color: #999;
  }
</style>
