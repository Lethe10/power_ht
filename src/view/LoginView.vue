<template>
  <div class="login-container">
    <div class="login-form">
      <p class="login-view-title">侯霖机电智能物联节能系统</p>
      <p class="login-form-title">欢迎登录</p>
      <div class="login-form-content">
        <div class="login-form-content-inputbox">
          <div class="input-icon">
            <img src="../assets/images/LoginView/icon1.png" alt="" />
          </div>
          <input type="text" placeholder="请输入账号" v-model="parameter.username"/>
        </div>
        <div class="login-form-content-inputbox">
          <div class="input-icon">
            <img src="../assets/images/LoginView/icon2.png" alt="" />
          </div>
          <input type="password" placeholder="请输入密码" v-model="parameter.password"/>
        </div>
        <div class="login-form-content-inputbox-1">
          <div class="input-icon">
            <img src="../assets/images/LoginView/icon3.png" alt="" />
          </div>
          <input type="text" placeholder="请输入验证码" v-model="parameter.code"/>
        <img :src='src'>
        </div>
        <!-- <div class="login-form-content-rememberbox">
          <div class="box"></div>
          <div class="tip">记住密码</div>
        </div> -->
        <div class="login-form-content-button" @click="toLogin">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCodeImg,login} from './../api/LoginApi.js'
export default {
  data(){
    return{
      src:'',
      parameter:{
        username:'',
        password:'',
        code:'',
        uuid:''
      }
    }
  },
  mounted(){
    getCodeImg().then(res=>{
      console.log(res)
      this.src= "data:image/gif;base64," + res.img
      this.parameter.uuid=res.uuid
    })
  },
  methods: {
    toLogin() {
      login(this.parameter).then(res=>{
        console.log(res)
        if(res.code==200){
          this.$cookie.set('token',res.token,{ expires: 1 })
          this.$emitter.emit("toLogin",false)
        }
      })
    },
  },
};
</script>

<style scoped lang='scss'>
.login-container {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/LoginView/loginBg.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 926px;
    height: 592px;
    background: url("../assets/images/LoginView/loginFromBg.png");
    background-size: 100% 100%;
    .login-view-title {
      position: absolute;
      top: -13%;
      left: 50%;
      transform: translateX(-50%);
      background-image: linear-gradient(to bottom, #35dfff, #5fceff);
      -webkit-background-clip: text;
      color: transparent;
      font-size: 35px;
      font-weight: 600;
      text-align: center;
      font-size: 30px;
    }
    .login-form-title {
      width: 100%;
      padding-top: 40px;
      box-sizing: border-box;
      text-align: center;
      color: #fff;
      font-size: 26px;
    }
    .login-form-content {
      width: 50%;
      height: 70%;
      box-sizing: border-box;
      padding-top: 20px;
      .login-form-content-inputbox {
        display: flex;
        align-items: center;
        width: calc(100% - 40px);
        margin-left: 20px;
        margin-top: 30px;
        height: 51px;
        background: url("../assets/images/LoginView/loginInputBg.png");
        background-size: 100% 100%;
        .input-icon {
          width: 13%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 35%;
          }
        }
        input {
          width: 80%;
          height: 80%;
          background: transparent;
          color: #fff;
          border: 0;
          box-sizing: border-box;
          padding-left: 10px;
          font-size: 14px;
          outline: none;
        }
        input::placeholder {
          color: #fff;
        }
      }
      .login-form-content-inputbox-1 {
        display: flex;
        align-items: center;
        width: calc(100% - 40px);
        margin-left: 20px;
        margin-top: 30px;
        height: 51px;
        background: url("../assets/images/LoginView/loginInputBg.png");
        background-size: 100% 100%;
        .input-icon {
          width: 13%;
          height: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 35%;
          }
        }
        input {
          width: 58%;
          height: 80%;
          background: transparent;
          color: #fff;
          border: 0;
          box-sizing: border-box;
          padding-left: 10px;
          font-size: 14px;
          outline: none;
        }
        input::placeholder {
          color: #fff;
        }
        img{
          width:30%;
          height:100%;
        }
      }
      .login-form-content-rememberbox {
        width: calc(100% - 40px);
        margin-left: 20px;
        margin-top: 15px;
        height: 21px;
        display: flex;
        align-items: center;
        .box {
          width: 12px;
          height: 12px;
          border: 1px solid #00fff7;
          margin-right: 10px;
        }
        .tip {
          font-size: 12px;
          color: #00fff7;
        }
      }
      .login-form-content-button {
        cursor: pointer;
        width: calc(100% - 40px);
        margin-left: 20px;
        margin-top: 20px;
        height: 51px;
        background: #00b1ff;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
        padding-top: 12px;
      }
    }
  }
}
</style>