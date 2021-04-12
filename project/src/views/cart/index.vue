<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <van-icon name="arrow-left" size="18" />
      </template>
      <template #right>
        <van-icon name="ellipsis" size="18" />
      </template>
    </van-nav-bar>

    <van-button type="primary" text="北京市" @click="show = true" />
    <van-overlay :show="show" @click="show = false">
      <van-area
        title="请选择地址"
        :area-list="areaList"
        class="wrapper block"
        @click.stop
      />
    </van-overlay>

    <van-card
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">￥</van-tag>
        <van-tag plain type="danger">1999.00</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">-</van-button>
        <input type="text" size="mini" />
        <van-button size="mini">+</van-button>
        <van-button size="mini">删除</van-button>
      </template>
    </van-card>
  </div>
</template>
<script>
import { Toast } from "vant";
// import { Area } from "vant";

// yarn add @vant/area-data;
import { areaList } from "@vant/area-data";

export default {
  components: {},
  data() {
    return {
      areaList,
      show: false,
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
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
.van-nav-bar .van-icon {
  color: #333 !important;
}
.van-nav-bar .van-icon-arrow-left {
  font-size: 20px !important;
}
.van-nav-bar .van-icon-ellipsis {
  font-size: 28px !important;
}
.van-nav-bar__arrow {
  margin-right: 4px;
  font-size: 24px;
}

element.style {
  font-size: 28px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  margin-bottom: 0px;
  width: 100%;
  height: 70%;
  background-color: #fff;
}
</style>
