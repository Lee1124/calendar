<template>
  <div id="login">
    欢迎来到登录页面!
  </div>
</template>

<script>
  /*数据*/
  let dataObj = {};
  /*方法*/
  let myMethods = {

  };
  export default {
    name: "login",
    data() {
      return dataObj;
    },
    methods: myMethods,
    created() {
      // // console.log(getTimeSlot(7,'/'))
      // let url = 'http://xilai99.com/xlapi/Mater/ZuheManager/Bran/RetBranLogo2';
      // this.request({
      //   method:'GET',
      //   url:url,
      //   data:{branid:1186,userid:1},
      //   success(res){
      //     console.log(res)
      //   },
      //   // error(err){
      //   //   console.log(err)
      //   // }
      // });
    },
    mounted() {
      // let url='http://xilai99.com/xlapi/SysManage/Hotel/Hotel/GetBranlis';
      // let data={
      //   userid:1,
      //   isroul:false,
      // };
      // this.request({
      //   method:'POST',
      //   url:url,
      //   data:data,
      //   success(res){
      //     console.log(res)
      //   },
      //   // error(err){
      //   //   console.log(err)
      //   // }
      // });

    },
    watch: {}
  }
</script>

<style scoped>

</style>
