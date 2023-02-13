<template>
  <div id="app">
    <LoginView v-show="isLogin" />
    <SelectModel v-if="isSelectModel" />
    <div v-show="isMain">
      <TopNav />
      <div class="bottom-main">
        <div class="bottom-main-left">
          <PublicNav />
        </div>
        <div class="bottom-main-right">
          <CrumbsNav />
          <PublicMain />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginView from "./view/LoginView.vue";
import SelectModel from "../src/view/SelectModel.vue";
import PublicNav from "./components/PublicNav.vue";
import TopNav from "./components/TopNav.vue";
import CrumbsNav from "./components/CrumbsNav.vue";
import PublicMain from "./components/PublicMain.vue";
export default {
  name: "App",
  components: {
    LoginView,
    SelectModel,
    PublicNav,
    TopNav,
    CrumbsNav,
    PublicMain,
  },
  data() {
    return {
      isLogin: true,
      isSelectModel: false,
      isMain: false,
      isRouterActiveAlive: true,
    };
  },
  created() {
    if (this.$cookie.get("token")) {
      this.isLogin = false;
      this.isSelectModel = true;
    } else {
      //false 直接进入首页
      //npm run build
      this.isLogin = true;
      this.isSelectModel = false;
    }
  },
  mounted() {
    this.$emitter.on("toLogin", (flag) => {
      console.log(flag);
      this.isLogin = flag;
      this.isSelectModel = true;
    });
    this.$emitter.on("toMain", (router) => {
      this.$router.push(router);
      this.isSelectModel = false;
      this.isMain = true;
    });
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {},
};
</script>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
}
#app {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  .bottom-main {
    width: 100vw;
    height: 95%;
    display: flex;
    .bottom-main-left {
      width: 2vw;
      height: 100%;
    }
    .bottom-main-left {
      width: 88vw;
      height: 100%;
    }
  }
}
</style>
