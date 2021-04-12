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
        <van-popover v-model="showPopover" trigger="click" :actions="actions">
          <template #reference>
            <van-icon name="ellipsis" size="18" />
          </template>
        </van-popover>
      </template>
    </van-nav-bar>

    <div class="addressInf">
      <van-button type="primary" text="北京市" @click="show = true" />
      <van-overlay :show="show" @click="show = false">
        <van-area
          title="请选择地址"
          :area-list="areaList"
          class="wrapper block"
          @click.stop
        />
      </van-overlay>
    </div>
    <ul>
      <li v-for="v in obj" :key="v._id" class="li">
        <van-checkbox v-model="v.checked"></van-checkbox>
        <van-card
          class="box"
          :num="v.quantity"
          :price="v.product.price"
          :desc="v.product.descriptions"
          :title="v.product.name"
          :thumb="v.product.coverImg"
        >
          <template #footer>
            <van-stepper
              v-model="v.quantity"
              integer
              @change="change"
              input-width="25px"
              button-size="25px"
            />
          </template>
        </van-card>
      </li>
      <van-submit-bar :price="zj * 100" button-text="提交订单">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </ul>
  </div>
</template>

<script>
import { serverUrl } from "../../utils/common";
import { get } from "../../utils/request";

// import { reqCartlist } from "../../api/cart";
import { Toast } from "vant";
// yarn add @vant/area-data;
// import { Area } from "vant";
import { areaList } from "@vant/area-data";

export default {
  components: {},
  data() {
    return {
      num: "1",
      obj: [],
      radio: "1",

      areaList,
      show: false,
      showPopover: false,
      actions: [
        { text: "选项一", icon: "add-o" },
        { text: "选项二", icon: "music-o" },
        { text: "选项三", icon: "more-o" },
      ],
    };
  },
  computed: {
    checked: {
      // set设置选中状态
      set(flag) {
        return this.obj.forEach((item) => (item.checked = flag));
      },
      get() {
        // 调用get方法
        return (
          this.obj.length ==
          this.obj.filter((item) => item.checked == true).length
        );
      },
    },
    zj() {
      return this.obj
        .filter((v) => {
          return v.checked;
        })
        .reduce(function (per, cur) {
          return per + cur.product.price * cur.quantity;
        }, 0);
    },
  },
  watch: {},

  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    change(n) {
      console.log(n);
    },
    cartlist() {
      get(`${serverUrl}/api/v1/shop_carts`).then((res) => {
        console.log(res);
        this.obj = res;
        console.log(this.obj);
      });
    },
  },
  created() {
    this.cartlist();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.li {
  position: relative;
}
.van-checkbox {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -15px;
  z-index: 999;
}

/* 底边距50px */
.cart .van-submit-bar {
  margin-bottom: 50px;
}

.cart {
  background-color: #f2f2f2;
}
.van-nav-bar .van-icon {
  color: #333 !important;
}
.van-nav-bar .van-icon-arrow-left {
  font-size: 20px !important;
}
.van-nav-bar .van-icon-ellipsis {
  font-size: 28px !important;
}
.van-overlay >>> .van-picker__toolbar {
  padding: 0 30px !important;
}
.addressInf {
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  border-radius: 0 0 10px 10px;
}
.van-button--primary {
  color: #333;
  background-color: #fff;
  border: none;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
