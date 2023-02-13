<template>
  <div class="select-model">
    <div class="select-model-title">
      <p class="select-model-title-text"></p>
    </div>
    <div class="select-model-content">
      <div class="model-content-left" @click="toLeft"></div>
      <div class="model-content-box">
        <div class="father-box" ref="fatherBox">
          <div class="son-box">
            <div
              class="model-box"
              v-for="(item, index) in modelList1"
              :key="index"
              @click='toMain(item.router)'
            >
              <img :src="item.imgSrc" alt="" />
              <p>{{ item.title }}</p>
              <div class="line"></div>
            </div>
          </div>
          <div class="son-box">
            <div
              class="model-box"
              v-for="(item, index) in modelList2"
              :key="index"
              @click='toMain(item.router)'
            >
              <img :src="item.imgSrc" alt="" />
              <p>{{ item.title }}</p>
              <div class="line"></div>
            </div>
          </div>
          <div class="son-box">
            <div
              class="model-box"
              v-for="(item, index) in modelList3"
              :key="index"
              @click='toMain(item.router)'
            >
              <img :src="item.imgSrc" alt="" />
              <p>{{ item.title }}</p>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="model-content-right" @click="toRight"></div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/images/SelectModel/img1.png";
import img2 from "../assets/images/SelectModel/img2.png";
import img3 from "../assets/images/SelectModel/img3.png";
import img4 from "../assets/images/SelectModel/img4.png";
import img5 from "../assets/images/SelectModel/img5.png";
import img6 from "../assets/images/SelectModel/img6.png";
import img7 from "../assets/images/SelectModel/img7.png";
import img8 from "../assets/images/SelectModel/img8.png";
import img9 from "../assets/images/SelectModel/img9.png";
import img10 from "../assets/images/SelectModel/img10.png";
import img11 from "../assets/images/SelectModel/img11.png";
export default {
  data() {
    return {
      boxIndex: 1,
      modelList1: [
        {
          router: "/",
          imgSrc: img1,
          title: "首页",
        },
        {
          router: "/MianMonitor",
          imgSrc: img2,
          title: "监控",
        },
        {
          router: "/",
          imgSrc: img3,
          title: "循环水泵系统",
        },
        {
          router: "/",
          imgSrc: img4,
          title: "机房管道系统",
        },
      ],
      modelList2: [
        {
          router: "/",
          imgSrc: img5,
          title: "冷却系统",
        },
        {
          router: "/",
          imgSrc: img6,
          title: "末端系统",
        },
        {
          router: "/",
          imgSrc: img7,
          title: "供暖系统",
        },
        {
          router: "/",
          imgSrc: img8,
          title: "后期管理系统",
        },
      ],
      modelList3: [
        {
          router: "/",
          imgSrc: img9,
          title: "综合监控系统",
        },
        {
          router: "/",
          imgSrc: img10,
          title: "保修巡检保养系统",
        },
        {
          router: "/MainMaterialManagement",
          imgSrc: img11,
          title: "物资管理系统",
        },
      ],
    };
  },
  methods: {
    toLeft() {
      if (this.boxIndex > 1) {
        this.$refs.fatherBox.style.transform = `translateX(${
          33.3 * (2 - this.boxIndex)
        }%)`;
        this.boxIndex--;
      }
    },
    toRight() {
      if (this.boxIndex <= 2) {
        this.$refs.fatherBox.style.transform = `translateX(${
          -33.3 * this.boxIndex
        }%)`;
        this.boxIndex++;
      }
    },
    toMain(router){
      console.log(router);
      this.$emitter.emit('toMain',router);
    }
  },
};
</script>

<style scoped lang="scss">
.select-model {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/SelectModel/bg.png");
  background-size: 100% 100%;
  .select-model-title {
    width: 100%;
    height: 10vh;
    background: url("../assets/images/SelectModel/titlebg.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .select-model-title-text {
      width: 60vh;
      height: 4vh;
      background: url("../assets/images/SelectModel/titletext.png");
      background-size: 100% 100%;
    }
  }
  .select-model-content {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .model-content-left {
      width: 50px;
      height: 200px;
      background: url("../assets/images/SelectModel/zuo.png");
      background-size: 100% 100%;
    }
    .model-content-box {
      width: 1600px;
      height: 800px;
      background: url("../assets/images/SelectModel/kuang.png");
      background-size: 100% 100%;
      overflow: hidden;
      .father-box {
        transition: all 1s;
        transform: translateX(0px);
        width: 300%;
        height: 100%;
        .son-box {
          float: left;
          width: 1600px;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-sizing: border-box;
          padding-left: 20px;
          padding-right: 20px;
          .model-box {
            transition: .5s all;
            cursor: pointer;
            width: 22%;
            margin-left: 8px;
            margin-right: 8px;
            height: 60%;
            background: url("../assets/images/SelectModel/modelbg.png");
            background-size: 100% 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            // align-items: none;
            img {
              width: 70%;
              height: 50%;
              margin-top: 40px;
            }
            p {
              margin-top: -40px;
              width: 100%;
              height: 20px;
              color: #fff;
              font-size: 28px;
              text-align: center;
            }
            .line {
              margin-top: -40px;
              width: 70%;
              height: 1%;
              background: url("../assets/images/SelectModel/line.png");
              background-size: 100% 100%;
            }
          }
          .model-box:hover{
            transform: scale(1.1);
          }
        }
      }
    }
    .model-content-right {
      width: 50px;
      height: 200px;
      background: url("../assets/images/SelectModel/you.png");
      background-size: 100% 100%;
    }
  }
}
</style>