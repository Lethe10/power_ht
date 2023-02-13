<template>
  <div class="left-center-box">
    <div class="box-title">
      <div class="box-title-icon"></div>
      <p class="box-title-txt">这里是标题</p>
    </div>
    <div class="right-center-echarts" ref="rightCenterEcharts"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let dataAxis = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
    // prettier-ignore
    let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    let yMax = 500;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }
    var myChart = this.$echarts.init(this.$refs.rightCenterEcharts);
    // 绘制图表
    myChart.setOption({
      grid: {
        top: "1%",
        left: "0%",
        right: "0%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          color: "#fff",
        },
        splitLine: { show: false },

        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        z: 10,
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#999",
        },
      },
      dataZoom: [
        {
          type: "inside",
        },
      ],
      series: [
        {
          type: "bar",
          showBackground: true,
          itemStyle: {
            color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.5, color: "#188df0" },
              { offset: 1, color: "#188df0" },
            ]),
          },
          emphasis: {
            itemStyle: {
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#2378f7" },
                { offset: 0.7, color: "#2378f7" },
                { offset: 1, color: "#83bff6" },
              ]),
            },
          },
          data: data,
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
  .right-center-echarts {
    width: 100%;
    height: 90%;
  }
}
</style>