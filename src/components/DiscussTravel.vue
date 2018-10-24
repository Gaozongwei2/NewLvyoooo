<template>
  <div class="discuss">
    <div
      style="width:700px;height: 50px;background-color: #f6f6f6;border-top-left-radius: 24px;border-bottom-left-radius: 24px;">
      <!--用户头像-->
      <div class="mcmt-photo " style="width: 60px;float: left">
        <a href="">
          <img src="http://b3-q.mafengwo.net/s12/M00/2C/B4/wKgED1umSXiAWdwCABluw2bwNe420.jpeg?" alt="" style="width: 48px;height: 48px;border-radius: 50%"></a>
      </div>
      <!--用户名 关注-->
      <div class="mcmt-user" style="width:130px;float: left;margin: 13px 15px">
        <a href="" target="_blank" class="name">梁雨甜(苏州)</a>
        <a href=""><img src="http://images.mafengwo.net/images/home/tweet/btn_sfollow.gif" title="关注TA"></a>
      </div>

      <!--楼层-->
      <div class="mcmt-other">
        <span class="floor" style="float: right;margin-top: 13px;padding-right: 30px">1F</span>
      </div>

      <!--评论内容和时间 回复-->
    </div>
    <div style="width:700px;height: 40px;color:#666;font-size: 14px">
      <p style="width: 500px;height:30px; margin:10px auto">这是用户评论的内容...................</p>
    </div>
    <div style="width:700px;height: 30px">
      <p style="width: 500px;height:30px; margin:5px auto;color: #999;font-size: 14px;">2018-10-24 12:49
        <a href="" style="margin-left: 30px">回复</a>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DiscussTravel"
    }
</script>

<style scoped>
  /*评论*/
  .discuss {
    /*background: #dfdfdf;*/
    width: 700px;
    height: 120px;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 24px;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: #ff9d00;
    cursor: pointer;
  }
</style>
