<template>
  <div class="crumbsNav-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang='scss' scoped>
.crumbsNav-container {
  width: 88vw;
  height: 3%;
background: rgba(51,65,134,.9);
// opacity: 0.72;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 10px;
}
</style>
<style lang='scss' >
.crumbsNav-container {
  .el-breadcrumb{
    color: #fff;
    .el-breadcrumb-item{
    color: #fff;
    }
  }
  .el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link{
    font-size: 14px!important;
    color:#fff!important;
  }
  .el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover{
    color:#fff!important;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: #fff!important;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color: #fff!important;
  }
}
</style>