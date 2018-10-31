
<!--<template id="title1">-->
  <!--<div>-->
    <!--<upload :uploadurl="uploadimgs" :pickfile ="pickfiles" : multiple="true">-->
      <!--<div slot="upload">-->
        <!--<div :id="pickfiles" class="btn">点击添加门店logo/照片<img :src="uploadimgs" class="uploadimg"></div>-->
      <!--</div>-->
    <!--</upload>-->

    <!--<div class="logo">-->
      <!--<div class="upload-container">-->
        <!--<div class="imgBox">-->
          <!--<input type="file" class="inputstyle" name="file" @change="PreviewImage"  />-->
          <!--<img :src="imageUrl" alt="" class="fileImg">-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--</div>-->
  <!--&lt;!&ndash;<div class="imageback">&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="imagebackcover" v-for="i in aa">&ndash;&gt;-->
      <!--&lt;!&ndash;<h1>{{i}}</h1>&ndash;&gt;-->
      <!--&lt;!&ndash;这是一个测试文件&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="imagebackcover"></div>&ndash;&gt;-->
<!--</template>-->
<!--&lt;!&ndash;复制模板&ndash;&gt;-->

<!--<script>-->
  <!--import axios from 'axios'-->
  <!--import upload from './test1';-->

<!--export default {-->
  <!--components: {-->
    <!--upload,-->
  <!--},-->
  <!--name: 'TestX',-->
  <!--// props:['user'],-->
  <!--data () {-->
    <!--return {-->
      <!--id:1,-->
      <!--aa:[2,3,4,5,6],-->
      <!--bb:0,-->
      <!--props:["user","token"],-->
      <!--user:{-->
        <!--'id':'1',-->
        <!--"username":"棕色试剂瓶",-->
        <!--"usericno":"http://n3-q.mafengwo.net/s10/M00/0F/9B/wKgBZ1iUpFWAbScxAAC2Vfg46fo14.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",-->
        <!--"sex":"男",-->
        <!--"mark":"15",-->
        <!--"birthday":"1997-6-2",-->
        <!--"state":"大庆",-->
        <!--"content":"起始",-->
      <!--},-->
      <!--msg: 'Welcome to Your Vue.js App'-->
    <!--}-->
  <!--},-->
  <!--mounted(){-->
<!--// //          初始化token-->
<!--//     this.http.get('/qiniu-token')-->
<!--//       .then(res =>{-->
<!--//         this.qiniutoke=res.data.token;-->
<!--//         console.log('&#45;&#45;&#45;&#45;&#45;&#45;')-->
<!--//         console.log(res.data.token)-->
<!--//       })-->
<!--//       .catch(function (error) {-->
<!--//         console.log(error);-->
<!--//       });-->
<!--//     this.shuaxin();-->
  <!--},-->
  <!--created(){-->
<!--},-->

  <!--method:{-->
    <!--// //          上传头像-->
    <!--// PreviewImage(event){-->
    <!--//   this.http.get('/qiniu-token')-->
    <!--//     .then(res =>{-->
    <!--//       this.qiniutoke=res.data.token;-->
    <!--//       console.log('&#45;&#45;&#45;&#45;&#45;&#45;')-->
    <!--//       console.log(res.data.token)-->
    <!--//     })-->
    <!--//     .catch(function (error) {-->
    <!--//       console.log(error);-->
    <!--//     });-->
    <!--//   var addr = 'http://opf2ucy0n.bkt.clouddn.com/'-->
    <!--//   var file = event.target.files[0];-->
    <!--//   var formData = new FormData();-->
    <!--//   formData.append('file', file);-->
    <!--//   formData.append('token', this.qiniutoke);-->
    <!--//   $.ajax({-->
    <!--//     url: 'http://up-z1.qiniu.com/',-->
    <!--//     type: 'POST',-->
    <!--//     dataType: 'json',-->
    <!--//     cache: false,-->
    <!--//     data: formData,-->
    <!--//     processData: false,-->
    <!--//     contentType: false-->
    <!--//   }).done((res) => {-->
    <!--//     this.imageUrl= addr+res.key-->
    <!--//     console.log(this.imageUrl)-->
    <!--//   }).fail(function(err) {-->
    <!--//     console.log('error');-->
    <!--//   });-->
    <!--//-->
    <!--// },-->
  <!--}-->
<!--}-->
<!--</script>-->
<!--<style scoped>-->
  <!--.imageback{-->
    <!--height: 200px;-->
    <!--width: 160px;-->
    <!--border: 1px solid #333333;-->
    <!--background-image: url("https://n1-q.mafengwo.net/s12/M00/85/32/wKgED1u3BnmAUwvoAATY8Amfqrc33.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90");-->
    <!--background-size: cover;-->
  <!--}-->
  <!--.imagebackcover{-->
    <!--width: 100%;-->
    <!--height: 100%;-->
    <!--position: relative;-->
    <!--opacity: 0;-->
    <!--background-color: rgba(205, 44, 45, 0.78);-->
  <!--}-->
  <!--.imagebackcover:hover{-->
    <!--width: 100%;-->
    <!--height: 100%;-->
    <!--position: relative;-->
    <!--opacity: 1;-->
    <!--transition: opacity 0.8s;-->
    <!--background-color: indianred;-->
  <!--}-->

<!--</style>-->
