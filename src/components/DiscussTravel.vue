<template>
  <div class="discuss">
    <div class="user-message">
      <!--用户头像-->
      <div class="mcmt-photo">
        <a href="">
          <img src="http://b3-q.mafengwo.net/s12/M00/2C/B4/wKgED1umSXiAWdwCABluw2bwNe420.jpeg?" alt=""></a>
      </div>
      <!--用户名 关注-->
      <div class="mcmt-user">
        <a href="" target="_blank" class="name">梁雨甜(苏州)</a>
        <a href=""><img src="http://images.mafengwo.net/images/home/tweet/btn_sfollow.gif" title="关注TA" ></a>
      </div>

      <!--楼层-->
      <div class="mcmt-other">
        <span class="floor">1F</span>
      </div>
    </div>

    <!--评论内容和时间 回复-->
    <div class="user-content">
      <div contenteditable="true" class="user-content-message">这是用户评论的内容...................</div>
    </div>
    <!--时间-->
    <div class="user-time">
      <p>2018-10-24 12:49 <button @click="review($event)">提交</button></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DiscussTravel",
    data(){
      return{

      }
    },
    methods:{
      review:function (event) {
        var vm = this
       event.target.id
      }
    }
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

  .user-message {
    width: 700px;
    height: 50px;
    background-color: #f6f6f6;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
  }

  /*评论用户头像*/
  .mcmt-photo {
    width: 60px;
    float: left;
  }

  .mcmt-photo a img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  /*用户关注*/
  .mcmt-user {
    width: 130px;
    float: left;
    margin: 13px 15px;
  }

  /*楼层*/
  .mcmt-other .floor {
    float: right;
    margin-top: 13px;
    padding-right: 30px;
  }

  /*用户评论 */
  .user-content {
    width: 700px;
    height: 40px;
    color: #666;
    font-size: 14px;
  }

  /*评论内容+++*/
  .user-content-message{
    width: 500px;
    height:30px;
    margin:15px auto;
    padding-top: 5px;
    outline: none;
  }


  /*评论时间*/
  .user-time{
    width:700px;
    height: 30px;
  }
  .user-time p{
    width: 500px;
    height:30px;
    margin:5px auto;
    color: #999;
    font-size: 14px;
  }

  /*评论按钮*/
  button {
    margin-left: 40px;
    width: 36px;
    height: 18px;
    background: #ff8a00;
    font-size: 10px;
    border: none;
    color:#fff;
    border-radius: 10%;
    /*padding-bottom: 3px;*/
    outline: none;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: #ff9d00;
    cursor: pointer;
  }
</style>
