<template>
  <div class="header">
    <slot name="left"></slot>
    <slot></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
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
.header {
  height: 44px;
  line-height: 44px;
  text-align: center;
  padding: 0 12px;
  background-color: aqua;
}
</style>