<template>
  <div class="suprice">
    <img src="../../assets/1111.png" alt="" />
    <h1>我吴桑最帅，有谁不服，站起来说话</h1>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      changeactive: "footerActive/setActive",
    }),
  },
  created() {},
  mounted() {
    this.changeactive(2);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style scoped>
img {
  width: 100%;
}
h1 {
  font-size: 80px;
  background-image: -webkit-linear-gradient(
    bottom,
    rgb(201, 115, 255),
    rgb(20, 11, 255)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
