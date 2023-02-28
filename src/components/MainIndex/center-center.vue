<template>
  <div class="center-center-box">
    <div class="box-title">
      <div class="box-title-icon"></div>
      <p class="box-title-txt">这里是标题</p>
    </div>
    <div class="left-center-echarts" ref="CenterCenterEcharts"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var myChart = this.$echarts.init(this.$refs.CenterCenterEcharts);
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        textStyle: {
          color: "#fff",
        },
      },
      grid: {
        top: "5%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        splitLine: { show: false },

        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        // type: "value",
        splitLine: { show: false },
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [234, 189, 345, 234, 345, 234, 555],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [458, 521, 976, 1024, 290, 18, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 269, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 768, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [245, 32, 901, 934, 1290, 1330, 1320],
        },
      ],
    });
  },
};
</script>

<style scoped lang="scss">
.center-center-box {
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