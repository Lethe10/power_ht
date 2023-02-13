<template>
  <div class="nav-container">
    <el-menu
      :default-active="defaultActive"
      background-color="rgba(51, 65, 134)"
      text-color="#fff"
      active-text-color="#fff"
      router
      :unique-opened="true"
    >
      <el-menu-item index="/">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/MianMonitor">
        <i class="el-icon-setting"></i>
        <span slot="title">监控</span>
      </el-menu-item>
      <el-menu-item index="/1">
        <i class="el-icon-setting"></i>
        <span slot="title">循环水泵系统</span>
      </el-menu-item>
      <el-menu-item index="/2">
        <i class="el-icon-setting"></i>
        <span slot="title">机房管道系统</span>
      </el-menu-item>
      <el-menu-item index="/3">
        <i class="el-icon-setting"></i>
        <span slot="title">冷却系统</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>末端系统</span>
        </template>
        <el-menu-item index="2">温度</el-menu-item>
        <el-menu-item index="3">压强</el-menu-item>
        <el-menu-item index="3">流量</el-menu-item>
        <el-menu-item index="3">控制</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>供暖系统</span>
        </template>
        <el-menu-item index="1-1">空气源热泵</el-menu-item>
        <el-menu-item index="1-2">燃气锅炉</el-menu-item>
        <el-menu-item index="1-2">水源热泵</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>后期管理系统</span>
        </template>
        <el-menu-item index="1-1">后勤管理运维平台</el-menu-item>
        <el-menu-item index="1-2">能源管理系统</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>综合监控系统</span>
        </template>
        <el-menu-item index="4-1">系统总览</el-menu-item>
        <el-menu-item index="4-2">变配电安全管理</el-menu-item>
        <el-menu-item index="4-2">中央空调安全管理</el-menu-item>
        <el-menu-item index="4-2">锅炉安全管理</el-menu-item>
        <el-menu-item index="4-2">告警管理</el-menu-item>
        <el-menu-item index="4-2">数据集成分析</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>保修巡检保养系统</span>
        </template>
        <el-menu-item index="5-1">保修管理</el-menu-item>
        <el-menu-item index="5-2">保养管理</el-menu-item>
        <el-menu-item index="5-2">巡检管理</el-menu-item>
        <el-menu-item index="5-2">人员KPI考核管理</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>物资管理系统</span>
        </template>
        <el-menu-item index="6-1">库存预警</el-menu-item>
        <el-menu-item index="6-2">物料消耗</el-menu-item>
        <el-menu-item index="6-2">物资台账</el-menu-item>
        <el-menu-item index="6-2">出入库管理</el-menu-item>
        <el-menu-item index="6-2">领用管理</el-menu-item>
        <el-menu-item index="/MainMaterialManagement"
          >控制机房位置</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "/",
    };
  },
  mounted() {
    this.$emitter.on("toMain", (router) => {
      console.log(1111)
        this.defaultActive = router;
    });
  },
  methods: {
    openNav(e) {
      console.log(e);
    },
  },
};
</script>

<style lang='scss' scoped>
.nav-container {
  width: 12vw;
  height: 100%;
  background: rgba(51, 65, 134);
  overflow: hidden;
}
</style>
<style lang='scss'>
.nav-container {
  .el-menu {
    border: 0;
  }
  .el-menu-item.is-active {
    // color: #00B1FF!important;
    background: #00b1ff !important;
  }
}
</style>