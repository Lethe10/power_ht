<template>
  <div class="mainindex-container">
    <LeftTopBox/>
    <CenterTopBox/>
    <RightTopBox/>
    <LeftCenterBox/>
    <CenterCenterBox/>
    <RightCenterBox/>
    <LeftBottomBox/>
    <CenterBottomBox/>
    <RightBottomBox/>
  </div>
</template>

<script>
import LeftTopBox from '../components/MainIndex/left-top.vue'
import CenterTopBox from '../components/MainIndex/center-top.vue'
import RightTopBox from '../components/MainIndex/right-top.vue'
import LeftCenterBox from '../components/MainIndex/left-center.vue'
import CenterCenterBox from '../components/MainIndex/center-center.vue'
import RightCenterBox from '../components/MainIndex/right-center.vue'
import LeftBottomBox from '../components/MainIndex/left-bottom.vue'
import CenterBottomBox from '../components/MainIndex/center-bottom.vue'
import RightBottomBox from '../components/MainIndex/right-bottom.vue'
export default {
  components:{
    LeftTopBox,
    LeftCenterBox,
    CenterTopBox,
    CenterCenterBox,
    RightTopBox,
    RightCenterBox,
    LeftBottomBox,
    CenterBottomBox,
    RightBottomBox
  }
}
</script>

<style lang='scss'>
.mainindex-container{
  width: 100%;
  height: 100%;
  background: url('../assets/images/MainIndex/indexBg.png');
  background-size: 100% 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  // align-items: center;
  justify-content: center;
}
</style>