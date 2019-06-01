<template>
  <div id="login">
    <div class="loginText">
      <ul class="noSelect">
        <li>
          <img src="../../../static/img/welcome.png" class="noSelect">
        </li>
        <li class="twoLi">
          <span class="title1">摄像</span>
        </li>
        <li>
          <span class="title2">后台管理系统</span>
        </li>
      </ul>
    </div>
    <div class="loginForm">
      <form>
        <ul>
          <li>
            <input type="text" class="commonInput userNameInput noSelect" placeholder="请输入您的账户">
            <span class="userName"></span>
          </li>
          <li class="pwd">
            <input type="text" class="commonInput passWordInput noSelect" placeholder="请输入您的密码">
            <span class="passWord"></span>
          </li>
          <li class="register noSelect">
            <a>注册</a>
          </li>
          <li>
            <input type="button" value="登录" @click="loginConfirm">
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
  /*数据*/
  let dataObj = {};
  /*方法*/
  let myMethods = {
    //确认登录
    loginConfirm(){
      // this.
      sessionStorage.setItem('login',true);//保存登录信息
      sessionStorage.setItem('loginTime',new Date());//保存登录的时间
      this.$router.push({path:'/homePage'})
    }
  };
  export default {
    name: "login",
    data() {
      return dataObj;
    },
    methods: myMethods,
    created() {
      document.title='用户登录-摄像'
    },
    mounted() {
    },
    watch: {}
  }
</script>

<style scoped lang="scss">
  /*变量*/
  $color: red;

  #login {
    height: 100%;
    background: url("../../../static/img/login_bg.png") no-repeat center center;
    position: relative;
    min-width: 1250px;
  }

  /*左侧*/
  .loginText {
    color: #CCC;
    position: absolute;
    left: 14.5%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .loginText li.twoLi {
    margin: 40px 0 25px;
  }

  .title1 {
    font-size: 78px;
    position: relative;
  }

  .title1::before {
    content: '';
    width: 1px;
    height: 74px;
    background: rgba(236, 236, 237, 1);
    position: absolute;
    right: -25px;
    top: 54%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .title2 {
    font-size: 58px;
  }

  /*右侧*/
  .loginForm {
    width: 41.7%;
    height: 59.8%;
    min-width: 527px;
    min-height: 386px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(242, 242, 242, 1);
    border-radius: 10px;
    position: absolute;
    right: 14.5%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .loginForm form {
    width: 61%;
    height: 49.5%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .loginForm ul {
    height: 100%;
  }

  .loginForm ul {
    position: relative;
  }

  .loginForm ul li {
    height: 23%;
    margin-bottom: 20px;
    width: 100%;
    position: relative;
  }

  .loginForm ul li.pwd {
    margin-bottom: 0;
  }

  .loginForm ul li.register {
    margin-bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding-right: 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .loginForm ul li.register a {
    cursor: pointer;
    color: #3B4355;
    font-size: 16px;
    text-decoration: underline;
  }

  .loginForm ul li:last-of-type {
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
  }

  .loginForm ul li input {
    width: 100%;
    height: 100%;
  }

  .loginForm ul li .commonInput {
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(128, 128, 128, 0.8);
    font-size: 22px;
    padding: 0 85px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .loginForm ul li .commonInput::-webkit-input-placeholder {
    color: #B2B2B2;
  }

  .loginForm ul li .commonInput:focus {
    border: 1px solid rgba(58, 62, 70, 0.8);
  }

  .loginForm ul li span {
    width: 60px;
    height: 63%;
    position: absolute;
    border-right: 1px solid #515766;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .loginForm ul li .userName {
    background: url("../../../static/img/user_2.png") no-repeat center center;
    transition: all .2s;
  }

  .loginForm ul li .passWord {
    background: url("../../../static/img/pssaw_2.png") no-repeat center center;
    transition: all .2s;
  }

  .loginForm ul li .userNameInput:focus + .userName {
    background: url("../../../static/img/user_1.png") no-repeat center center;
  }

  .loginForm ul li .passWordInput:focus + .passWord {
    background: url("../../../static/img/passw_1.png") no-repeat center center;
  }

  .loginForm ul li input[type='button'] {
    cursor: pointer;
    border: 0;
    font-size: 24px;
    background: #1D213E;
    color: #fff;
    transition: all .2s;
  }

  .loginForm ul li input[type='button']:hover {
    border: 0;
    background: rgba(29, 33, 62, .9);
  }

  @media (max-width: 1600px) {
    .loginForm ul li .commonInput {
      font-size: 18px;
    }
    .loginForm ul li input[type='button'] {
      font-size: 18px;
    }
  }
</style>
