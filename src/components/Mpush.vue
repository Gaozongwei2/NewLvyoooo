<!--查看槽点对话框-->
<template>
  <div :class="pat" ref="abc" @click="Hidden">
    <div class="show" ref="abc" @click.prevent.stop>
      <div class="top">
        读万卷书，不如行万里路
      </div>
      <div class="mess" >你选择的地区是：<span class="lab">{{city}}</span></div>
      <div style="position: static">
      <input class="col-md-9 title" placeholder="输入地点" v-model="title">
      <ul class="listbox">
        <li class="list" v-for="item in area" :id="item['areaID']" v-text="item['area']" @click="thiscity($event)"></li>
      </ul>
      </div>
      <div class="col-md-2 submit" @click="getit">确定</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['getcity'],
    data() {
      return {
        pat: "motaikuang1",
        title: '',
        area:"",
        city:'北京',
      }
    },
    watch: {
      getcity: {
        handler(newValue, oldValue) {
          //父组件param对象改变会触发此函数
          this.pat = "motaikuang"
        },
        deep: true
      },
      title:{
        handler(newValue,oldVlaue){
          // 检索地区
         this.getarea()
        },
        deep: true
      }
    },
    created() {
      this.travelnotedetail()
    },

    methods: {
      // 点击空白处消失
      Hidden: function () {
        var vm = this
        vm.pat = "motaikuang1"

      },
      getit: function () {
        var vm = this
        vm.pat = "motaikuang1"
        vm.$emit("htitlepush", vm.city)
        vm.title = ""
      },
      getarea:function () {
        var vm = this
        axios.get("http://127.0.0.1:8000/user/searcharea/"+ vm.title+'/')
          .then(function (response) {
            vm.area = response.data
            if( response.data.length == 0){
              vm.area = [{
                "areaID":"230623",
                "area":"没有找到该城市"
              }]
            }
            console.log(vm.area)
          })
          .catch(function (error) {
            return error
          })
      },
      thiscity:function (event) {
        var vm = this
        vm.city = event.target.innerText
        vm.area = ''
      }
    },
  }
</script>

<style lang="css" scoped>
  .listbox{
    position: fixed;
    left: 65px;
    top:285px;
    box-shadow: rgba(60, 60, 60, 0.34) 0px 1px 20px 1px;
  }
  .list{
    height: 30px;
    width: 370px;
    padding-left: 20px;
    line-height: 30px;
    font-size: 18px;
    background-color: whitesmoke;
  }
  .list:hover{
    background-color: rgba(63, 159, 95, 0.57);
  }
  .mess{
    margin: 10px 0 10px 50px ;
  }
  .lab {
    height: 30px;
    border-radius: 15px;
    background-color: #ff9d00;
    color: whitesmoke;
    line-height: 30px;
    padding: 10px 15px;
  }

  .top {
    height: 180px;
    width: 100%;
    background: limegreen;
    color: whitesmoke;
    font-size: 25px;
    text-align: center;
    line-height: 180px;

  }

  .title {
    border-radius: 30px;
    padding-left: 30px;
    margin-top:15px;
    outline: none;
  }

  .title:hover {

    border: limegreen 1.5px solid;
  }

  .motaikuang {
    position: fixed;
    top: 0;
    /*left: 0;*/
    height: 100%;
    width: 100%;
    z-index: 20;
    border: none;
    box-shadow: whitesmoke 1px 1px 5px 1px;
    /*background-color: rgba(0, 0, 0, 0.49);*/
    transition: opacity 0.5s, top 0.5s, height 0.5s;
  }

  .motaikuang1 {
    position: fixed;
    height: 0px;
    opacity: 0;
    border: none;
    transition: opacity 0.5s, top 0.4s, height 0.6s;
    overflow: hidden;
  }

  .show {
    position: absolute;
    top: 20%;
    width: 50%;
    left: 40%;
    height: 400px;
    background-color: whitesmoke;
    border-radius: 4px;
    border: 1px solid rgba(75, 75, 75, 0.31);
    box-shadow: rgba(75, 75, 75, 0.3) 1px 1px 10px 1px;
    transform: translate(-50%, 0);
  }

  input {
    width: 60%;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    margin: auto;
    margin-left: 50px!important;
    padding-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.21);
    border-radius: 4px;
  }

  .submit {
    color: limegreen;
    height: 40px;
    width: 90px;
    font-size: large;
    border-radius: 30px;
    border: 1px solid limegreen;
    line-height: 40px;
    text-align: center;
    margin-left: 20px;
    margin-top: 15px;
    font-weight: bold;
  }

  .submit:hover {
    background: limegreen;
    color: white;
  }

  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    list-style: none;
  }


</style>
