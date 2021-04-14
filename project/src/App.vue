<template>
  <div id="app">
    <div class="Router">
      <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <Footer v-if="$route.meta.isShow"></Footer>
  </div>
</template>
<script>
import Footer from "./components/footer";
export default {
  name: "App",
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
.Router {
  position: relative;
}
.Router > * {
  position: absolute;
  width: 100%;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;

  transition: all 1500ms;

  transition: all 500ms;

  transition: all 500ms;

  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
