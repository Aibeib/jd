<template>
  <div class="searchFor">
    <div class="Router">
      <van-search
        v-model="value"
        shape="round"
        background=""
        placeholder="请输入搜索关键词"
        class="search"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang='css' scoped>
</style>