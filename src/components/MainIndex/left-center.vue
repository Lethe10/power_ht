<template>
  <div class="left-center-box">
    <div class="box-title">
      <div class="box-title-icon"></div>
      <p class="box-title-txt">这里是标题</p>
    </div>
    <div class="left-center-echarts" ref="leftCenterEcharts"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var myChart = this.$echarts.init(this.$refs.leftCenterEcharts);
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
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
        type: "value",
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: "category",
        data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
      },
      series: [
        {
          name: "2011",
          type: "bar",
          data: [18203, 23489, 29034, 104970, 131744, 630230],
        },
        {
          name: "2012",
          type: "bar",
          data: [19325, 23438, 31000, 121594, 134141, 681807],
        },
      ],
    });
  },
};
</script>

<style scoped lang="scss">
.left-center-box {
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