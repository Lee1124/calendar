<template>
  <div id="orderManage">
    <div class="orderManage-hd">
      <div class="orderManage-nav">

      </div>
      <div class="orderManage-search">
        <div class="searchBox clearfloat">
          <selectTime class="floatL"></selectTime>
          <inputSelect class="floatL"></inputSelect>
        </div>
      </div>
    </div>
    <div class="orderManage-ct">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import selectTime from '../common/selectTime/selectTime';
  import inputSelect from '../common/inputSelect/inputSelect';
  /*数据*/
  let dataObj = {};
  /*方法*/
  let myMethods = {};
  export default {
    name: "orderManage",
    data() {
      return dataObj;
    },
    methods: myMethods,
    created() {

    },
    components:{
      selectTime:selectTime,
      inputSelect:inputSelect,
    }
  }
</script>

<style scoped>
  #orderManage {
    height: 100%;
  }
  .orderManage-hd {
    height: 20%;
    padding: 35px 45px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
  }
  .orderManage-ct {
    height: 80%;
    padding: 30px 35px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .orderManage-nav {
    height: 50%;
    background: #CED8EA;
  }
  .orderManage-search {
    height: 50%;
    /*background: yellowgreen;*/
    position: relative;
  }
  .searchBox {
    position: absolute;
    bottom: 0;
  }
</style>
