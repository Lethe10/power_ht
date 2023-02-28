<template>
  <div class="center-bottom-box">
    <div class="box-title">
      <div class="box-title-icon"></div>
      <p class="box-title-txt">这里是标题</p>
    </div>
    <div class="left-center-echarts" ref="CenterBottomEcharts"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var myChart = this.$echarts.init(this.$refs.CenterBottomEcharts);
    // 绘制图表
    myChart.setOption({
      grid: {
        left: "0%",
        right: "0%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        splitLine: { show: false },
      },
      yAxis: {
        type: "value",
        splitLine: { show: false },
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          color: "skyblue",
          barWidth: 20,
        },
        {
          data: [140, 20, 34, 120, 150, 10, 30],
          type: "line",
          color: "#0B78C8",
        },
      ],
    });
  },
};
</script>

<style scoped lang="scss">
.center-bottom-box {
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
  .left-center-echarts {
    width: 650px;
    height: 220px;
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