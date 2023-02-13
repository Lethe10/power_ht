<template>
  <div class="monitor-container">
    <div class="monitor-container-left">
      <div class="monitor-container-left-title">
        <p class="icon"></p>
        设备展示 &emsp;&emsp;
        <i class="el-icon-plus" style="cursor: pointer" @click="addBoiler"></i>
      </div>
      <div class="monitor-container-left-content">
        <div
          class="left-content-item"
          v-for="(item, index) in boilerList"
          :key="index"
        >
          <div class="button" @click="showPrams(item.airId)">
            {{ item.title }}
          </div>
          <div class="left-content-item-box"></div>
        </div>
      </div>
    </div>
    <div class="monitor-container-right">
      <div class="monitor-container-right-top">
        <div class="monitor-container-left-title">
          <p class="icon"></p>
          设备数据
        </div>
        <div class="right-top-parameter-box">
          <div
            class="right-top-parameter-box-item"
            v-for="(item, index) in parameterList"
            :key="index"
          >
            <div class="icon">
              <img
                :src="item.iocnImg"
                alt=""
                @click="update(item.description)"
              />
            </div>
            <div class="content">
              <p :style="{ color: item.paramsColor }">{{ item.params }}</p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="monitor-container-right-bottom">
        <div class="monitor-container-left-title">
          <p class="icon"></p>
          实时信息
        </div>
        <div class="right-bottom-table-box">
          <el-table :data="tableData" stripe style="width: 100%" size="mini">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <el-dialog
      title="更改锅炉开关"
      :visible.sync="updateRunstatus"
      width="15%"
    >
      <p style="text-align: center">
        <el-button type="danger" @click="updateRunstatusFn('0000')"
          >关闭</el-button
        >
        <el-button type="primary" @click="updateRunstatusFn('0001')"
          >打开</el-button
        >
      </p>
    </el-dialog>
    <el-dialog
      title="设置温度"
      :visible.sync="updateInstalles"
      width="15%"
    >
      <p style="text-align: center">
        <el-input v-model="installes" placeholder="请输入温度" type="number"></el-input>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="updateInstalles = false">取 消</el-button>
        <el-button type="primary" @click="updateInstallesFn">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="新增锅炉"
      :visible.sync="addBoilerFlag"
      width="20%"
    >
      <p style="margin-bottom: 10px">
        <el-input v-model="addParameter.airId" placeholder="请输入设备编号"></el-input>
      </p>
      <p style="margin-bottom: 10px">
        <el-input v-model="addParameter.location" placeholder="请输入设备位置"></el-input>
      </p>
      <p style="margin-bottom: 10px">
        <el-input v-model="addParameter.eiName" placeholder="请输入设备名称"></el-input>
      </p>
      <p style="margin-bottom: 10px">
        <el-input v-model="addParameter.deptId" placeholder="请输入所属部门"></el-input>
      </p>
      <p style="margin-bottom: 10px">
        <el-input v-model="addParameter.installes" placeholder="请输入设置温度"></el-input>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addBoilerFlag = false">取 消</el-button>
        <el-button type="primary" @click="addBoilerFn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  demoApi,
  selectBoilerApi,
  newBoilerApi,
  updateinstallesApi,
  updaterunstatusApi,
} from "./../api/MainMaterialManagementApi.js";
import icon1 from "../assets/images/MainMaterialManagement/icon1.png";
import icon2 from "../assets/images/MainMaterialManagement/icon2.png";
import icon3 from "../assets/images/MainMaterialManagement/icon3.png";
import icon4 from "../assets/images/MainMaterialManagement/icon4.png";
import icon5 from "../assets/images/MainMaterialManagement/icon5.png";
import icon6 from "../assets/images/MainMaterialManagement/icon6.png";
import icon7 from "../assets/images/MainMaterialManagement/icon7.png";
import icon8 from "../assets/images/MainMaterialManagement/icon8.png";
import icon9 from "../assets/images/MainMaterialManagement/icon9.png";
export default {
  data() {
    return {
      airId: "01",
      remark: "45.5",
      boilerList: [
        {
          airId: "01",
          title: "锅炉1",
        },
        {
          airId: "02",
          title: "锅炉2",
        },
        {
          airId: "03",
          title: "锅炉3",
        },
        {
          airId: "04",
          title: "锅炉4",
        },
        {
          airId: "05",
          title: "锅炉5",
        },
        {
          airId: "06",
          title: "锅炉6",
        },
        {
          airId: "07",
          title: "锅炉7",
        },
        {
          airId: "08",
          title: "锅炉8",
        },
        {
          airId: "09",
          title: "锅炉9",
        },
        {
          airId: "10",
          title: "锅炉10",
        },
        {
          airId: "11",
          title: "锅炉11",
        },
      ],
      parameterList: [
        {
          params: "开机",
          paramsColor: "#00FFF2",
          description: "运行状态",
          iocnImg: icon1,
        },
        {
          params: "56.2",
          paramsColor: "#00B1FF",
          description: "出水温度",
          iocnImg: icon2,
        },
        {
          params: "43.5",
          paramsColor: "#FF8700",
          description: "回水温度",
          iocnImg: icon3,
        },
        {
          params: "34",
          paramsColor: "#00FFF2",
          description: "水压",
          iocnImg: icon4,
        },
        {
          params: "32",
          paramsColor: "#00B1FF",
          description: "烟气温度",
          iocnImg: icon5,
        },
        {
          params: "32",
          paramsColor: "#FF8700",
          description: "室外温度",
          iocnImg: icon6,
        },
        {
          params: "34",
          paramsColor: "#00FFF2",
          description: "锅炉功率",
          iocnImg: icon7,
        },
        {
          params: "54",
          paramsColor: "#00B1FF",
          description: "生活水温",
          iocnImg: icon8,
        },
        {
          params: "33",
          paramsColor: "#FF8700",
          description: "设置温度",
          iocnImg: icon9,
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
        },
      ],
      updateRunstatus: false,
      updateInstalles: false,
      installes: "",
      addBoilerFlag: false,
      addParameter: {
        airId: "",
        location: "",
        eiName: "",
        deptId: "",
        installes: "",
      },
    };
  },
  mounted() {
    this.showPrams(this.airId);
  },
  methods: {
    demo() {
      demoApi({
        airId: this.airId,
        remark: this.remark,
      }).then((res) => {
        console.log("MainMaterialManagementApiRes", res);
      });
    },
    showPrams(airId) {
      console.log(airId);
      this.airId = airId;
      let arr = [];
      selectBoilerApi({ airId: airId }).then((res) => {
        let {
          runstatus,
          hotwater,
          backwater,
          watergage,
          exhaustgas,
          outdoor,
          livewater,
          boilerpower,
          installes,
        } = res.data;
        arr.push(runstatus);
        arr.push(hotwater);
        arr.push(backwater);
        arr.push(watergage);
        arr.push(exhaustgas);
        arr.push(outdoor);
        arr.push(livewater);
        arr.push(boilerpower);
        arr.push(installes);
        this.parameterList.forEach((val, index) => {
          val.params = arr[index];
        });
        if (this.parameterList[0].params == "0000") {
          this.parameterList[0].params = "关机";
        } else {
          this.parameterList[0].params = "开机";
        }
      });
    },
    update(text) {
      console.log(text);
      if (text == "运行状态") {
        this.updateRunstatus = true;
      }
      if (text == "设置温度") {
        this.updateInstalles = true;
      }
    },
    //修改开关
    updateRunstatusFn(flag) {
      updaterunstatusApi({ airId: this.airId, runstatus: flag }).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: "操作成功",
            type: "success",
          });
          this.updateRunstatus = false;
        }
      });
    },
    //修改温度
    updateInstallesFn() {
      updateinstallesApi({ airId: this.airId, runstatus: Number(this.installes) }).then(
        (res) => {
          if (res.code == 200) {
            this.$message({
              message: "操作成功",
              type: "success",
            });
            this.updateInstalles = false;
            this.showPrams(this.airId);
          }
        }
      );
    },
    addBoiler() {
      this.addBoilerFlag = true;
    },
    addBoilerFn() {
      newBoilerApi(this.addParameter).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: "操作成功",
            type: "success",
          });
          this.addBoilerFlag = false;
          this.showPrams(this.airId);
        }
      });
    },
  },
};
</script>

<style scoped lang='scss'>
.monitor-container {
  width: 100%;
  height: 100%;
  background: url("../assets/images/MainMaterialManagement/bg.png");
  background-size: 100% 110%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;

  .monitor-container-left {
    width: 60%;
    height: 100%;

    .monitor-container-left-title {
      color: #fff;
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      .icon {
        width: 3px;
        height: 15px;
        margin-right: 10px;
        background: #00fff4;
      }
    }

    .monitor-container-left-content {
      width: 100%;
      height: 90%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .left-content-item {
        width: 25%;
        height: 20%;
        margin-right: 20px;
        display: flex;
        align-items: center;

        .button {
          width: 30%;
          height: 20%;
          margin-right: 20px;
          background: url("../assets/images/MainMaterialManagement/buttonbg.png");
          background-size: 100% 100%;
          color: #fff;
          text-align: center;
          line-height: 200%;
          cursor: pointer;
        }

        .left-content-item-box {
          width: 45%;
          height: 100%;
          background: #000;
          background: url("../assets/images/MainMaterialManagement/box.png");
          background-size: 100% 100%;
        }
      }
    }
  }

  .monitor-container-right {
    width: 40%;
    height: 100%;

    .monitor-container-right-top {
      width: 100%;
      height: 55%;
      background: url("../assets/images/MainMaterialManagement/leftbg.png");
      background-size: 100% 100%;
      overflow: hidden;

      .monitor-container-left-title {
        color: #fff;
        display: flex;
        align-items: center;
        margin-top: 10px;

        .icon {
          width: 3px;
          height: 15px;
          margin-left: 10px;
          margin-right: 10px;
          background: #00fff4;
        }
      }

      .right-top-parameter-box {
        width: 100%;
        height: 92%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        .right-top-parameter-box-item {
          width: 30%;
          height: 30%;
          margin-right: 10px;
          margin-left: 10px;
          display: flex;
          align-items: center;
          justify-content: center;

          .icon {
            width: 45%;
            height: 66%;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .content {
            width: 44%;
            height: 65%;

            p {
              text-align: center;
              color: #fff;
            }

            p:nth-child(1) {
              font-size: 30px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }

    .monitor-container-right-bottom {
      width: 100%;
      height: 43%;
      margin-top: 2%;
      background: url("../assets/images/MainMaterialManagement/leftbg.png");
      background-size: 100% 100%;
      overflow: hidden;

      .monitor-container-left-title {
        color: #fff;
        display: flex;
        align-items: center;
        margin-top: 10px;

        .icon {
          width: 3px;
          height: 15px;
          margin-left: 10px;
          margin-right: 10px;
          background: #00fff4;
        }
      }

      .right-bottom-table-box {
        width: calc(100% - 20px);
        margin-left: 10px;
        margin-top: 10px;
      }
    }
  }

  .delete {
    color: #fff;

    input {
      width: 150px;
    }
  }
}
</style>
<style lang="scss">
.monitor-container-right-bottom {
  // 表头
  .is-leaf,
  .el-table__cell {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    border: 0 !important;
    color: #01a8f5;
    background: #182f70 !important;
  }
  //单数行
  .el-table .el-table__row .el-table__cell {
    color: #fff;
    border: 0;
    background: #0b1c56 !important;
  }
  //双数行
  .el-table .el-table__row--striped .el-table__cell {
    background: #04114c !important;
  }
}
</style>