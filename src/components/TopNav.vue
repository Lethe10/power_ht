<template>
  <div class="topnav-container">
    <div class="topnav-logo"></div>
    <div class="topnav-right">
      <img src="../assets/images/TopNav/search.png" alt="" />
      <img src="../assets/images/TopNav/notation.png" alt="" />
      <img src="../assets/images/TopNav/person.png" alt="" />
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="tuichu">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavStatus: true,
    };
  },
  mounted() {},
  methods: {
    demo() {
      this.isNavStatus = !this.isNavStatus;
      this.$emitter.emit("changeNavWdith", this.isNavStatus);
      if (this.isNavStatus) {
        this.$refs.topNav.style.width = 85 + "vw";
      } else {
        this.$refs.topNav.style.width = 98 + "vw";
      }
    },
    tuichu(){
      console.log(1111)
      this.$cookie.remove('token');
          this.$emitter.emit("signOut",true)

    }
  },
};
</script>

<style lang='scss' scoped>
.topnav-container {
  width: 100vw;
  height: 5%;
  background: rgba(51, 65, 134);
  box-sizing: border-box;
  padding: 0 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topnav-logo {
    width: 10%;
    height: 100%;
    // background: #000;
  }
  .topnav-right {
    width: 6%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
<style lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>