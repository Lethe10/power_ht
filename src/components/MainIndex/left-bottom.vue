<template>
  <div class="left-bottom-box">
    <div class="box-title">
      <div class="box-title-icon"></div>
      <p class="box-title-txt">这里是标题</p>
    </div>
    <div class="left-center-echarts" ref="leftBottomEcharts"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var myChart = this.$echarts.init(this.$refs.leftBottomEcharts);
    // 绘制图表
    myChart.setOption({
      legend: {
        textStyle: {
          color: "#fff",
        },
      },
      grid: {
        left: "0%",
        right: "0%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          color: "#E9BA26",
        },
        {
          data: [140, 20, 34, 120, 150, 10, 30],
          type: "bar",
          color: "#0B78C8",
        },
      ],
    });
  },
};
</script>

<style scoped lang="scss">
.left-bottom-box {
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
  .left-center-echarts {
    width: 100%;
    height: 90%;
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