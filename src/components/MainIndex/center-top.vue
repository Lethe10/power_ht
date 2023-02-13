<template>
  <div class="center-top-box">
    <div class="box-title">
      <div class="box-title-icon"></div>
      <p class="box-title-txt">这里是标题</p>
    </div>
    <div class="box-main">
      <div class="box-main-content content-1">
        <p class="box-main-content-number">1234</p>
        <div class="box-main-content-base">
          <div class="box-main-content-special"></div>
        </div>
      </div>
      <div class="box-main-content content-2">
        <p class="box-main-content-number">4562</p>
        <div class="box-main-content-base">
          <div class="box-main-content-special"></div>
        </div>
      </div>
      <div class="box-main-content content-3">
        <p class="box-main-content-number">998</p>
        <div class="box-main-content-base">
          <div class="box-main-content-special"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.center-top-box {
  width: 706px;
  height: 270px;
  margin-right: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  background: url("../../assets/images/MainIndex/modelBg.png");
  background-size: 100% 100%;
  .box-title {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    .box-title-icon {
      width: 5px;
      height: 60%;
      background: url("../../assets/images/MainIndex/titleIcon.png");
      background-size: 100% 100%;
    }
    .box-title-txt {
      margin-left: 10px;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
    }
  }
  .box-main {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // background: red;
    .box-main-content {
      width: 25%;
      height: 90%;
      .box-main-content-number {
        text-align: center;
        font-size: 34px;
        font-weight: 700;
      }
      .box-main-content-base {
        position: relative;
        width: calc(100% - 20px);
        margin-top: 20px;
        margin-left: 10px;
        height: 70%;
        .box-main-content-special {
          position: absolute;
          top: -20%;
          left: 13%;
          width: 73%;
          height: 70%;
          animation: specialBg 3s linear infinite;
        }
      }
    }
    .content-1 {
      .box-main-content-base {
        background: url("../../assets/images/MainIndex/centerTop1-1.png");
        background-size: 100% 100%;
      }
      .box-main-content-number {
        background-image: linear-gradient(to bottom, #0aad92, #0adb8b);
        -webkit-background-clip: text;
        color: transparent;
      }
      .box-main-content-special {
        background: url("../../assets/images/MainIndex/centerTop1-2.png");
        background-size: 100% 100%;
      }
    }
    .content-2 {
      .box-main-content-base {
        background: url("../../assets/images/MainIndex/centerTop2-1.png");
        background-size: 100% 100%;
      }
      .box-main-content-number {
        background-image: linear-gradient(to bottom, #e0a912, #fde053);
        -webkit-background-clip: text;
        color: transparent;
      }
      .box-main-content-special {
        background: url("../../assets/images/MainIndex/centerTop2-2.png");
        background-size: 100% 100%;
      }
    }
    .content-3 {
      .box-main-content-base {
        background: url("../../assets/images/MainIndex/centerTop3-1.png");
        background-size: 100% 100%;
      }
      .box-main-content-number {
        background-image: linear-gradient(to bottom, #08d9f1, #08d9f1);
        -webkit-background-clip: text;
        color: transparent;
      }
      .box-main-content-special {
        background: url("../../assets/images/MainIndex/centerTop3-2.png");
        background-size: 100% 100%;
      }
    }
  }
}
@keyframes specialBg {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>