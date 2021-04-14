<template>
  <div class="settlement">
    <div class="footer">
      <van-nav-bar title="确认订单" left-text="" left-arrow>
        <template #right>
          <van-icon name="ellipsis" size="32" />
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <div class="dz">
        <van-cell title="添加收货地址" is-link to="index" icon="location-o" />
      </div>
      <div class="xinxi">
        <van-cell
          title="新人特权免拼团购买
"
          icon="gem"
          value="支付后即可购买成功"
          center
        >
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon name="manager" class="search-icon" />
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style>
body,
html {
  background-color: gray;
}
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}
.van-nav-bar__content {
  padding: 6px 0;
}
.dz {
}
.xinxi {
}
.van-cell__title {
  font-size: 18px;
  font-weight: 700;
}
.van-icon {
  font-size: 18px;
}
</style>