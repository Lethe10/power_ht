<template>
  <div class="left-top-box">
    <div class="box-title">
      <div class="box-title-icon"></div>
      <p class="box-title-txt">这里是标题</p>
    </div>
    <div class="box-main">
      <div class="box-main-left">
        <p class="box-main-left-number">345</p>
        <p class="box-main-left-tip">设备总数</p>
        <div class="box-main-left-image">
          <div class="box-main-left-image-icon"></div>
        </div>
      </div>
      <div class="box-main-right">
        <p class="box-main-right-number">56</p>
        <p class="box-main-right-tip">设备异常</p>
        <div class="box-main-right-image">
          <div class="box-main-right-image-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.left-top-box {
  width: 455px;

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
    height: 85%;
    margin-top: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    .box-main-left {
      width: 40%;
      height: 100%;
      margin-right: 10px;
      .box-main-left-number {
        margin-top: 10px;
        text-align: center;
        background-image: linear-gradient(to bottom, #0aad92, #0adb8b);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 35px;
        font-weight: 600;
      }
      .box-main-left-tip {
        margin-top: 10px;
        text-align: center;
        color: #fff;
        font-size: 14px;
      }
      .box-main-left-image {
        position: relative;
        width: calc(100% - 30px);
        margin-left: 15px;
        margin-top: 20px;
        height: 50%;
        background: url("../../assets/images/MainIndex/topLeft1-1.png");
        background-size: 100% 100%;
        .box-main-left-image-icon {
          position: absolute;
          top: 10%;
          left: 40%;
          width: 30px;
          height: 50px;
          background: url("../../assets/images/MainIndex/topLeft1-2.png");
          background-size: 100% 100%;
          animation: powerIcon 2s linear infinite;
        }
      }
    }
    .box-main-right {
      width: 40%;
      height: 100%;
      margin-left: 10px;
      .box-main-right-number {
        margin-top: 10px;
        text-align: center;
        background-image: linear-gradient(to bottom, #E0A912 , #FDE053);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 35px;
        font-weight: 600;
      }
      .box-main-right-tip {
        margin-top: 10px;
        text-align: center;
        color: #fff;
        font-size: 14px;
      }
      .box-main-right-image {
        position: relative;
        width: calc(100% - 30px);
        margin-left: 15px;
        margin-top: 20px;
        height: 50%;
        background: url("../../assets/images/MainIndex/topLeft2-1.png");
        background-size: 100% 100%;
        .box-main-right-image-icon {
          position: absolute;
          top: 10%;
          left: 40%;
          width: 30px;
          height: 50px;
          background: url("../../assets/images/MainIndex/topLeft2-2.png");
          background-size: 100% 100%;
          animation: powerIcon 2s linear infinite;
        }
      }
    }
  }
}
@keyframes powerIcon {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>