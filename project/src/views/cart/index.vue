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

    <div class="addressInf">
      <van-cell is-link @click="showPopup" v-model="carmodel"
        ><van-icon name="location-o" size="18" /><span>{{
          carmodel
        }}</span></van-cell
      >
      <van-popup v-model="show" position="bottom">
        <van-area
          :area-list="areaList"
          :columns-num="3"
          ref="myArea"
          title="编辑地址"
          @change="onChange"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </van-popup>
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
import { isLogined } from "../../utils/util"; //引入封装的方法（判断登录）

import { serverUrl } from "../../utils/common";
import { get } from "../../utils/request";
// import { reqCartlist } from "../../api/cart";
import { Toast } from "vant";
// yarn add @vant/area-data;

import { areaList } from "@vant/area-data";

export default {
  components: {},
  data() {
    return {
      num: "1",
      obj: [],
      radio: "1",

      // 城市
      areaList,
      show: false,
      carmodel: "北京市",
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
    // 返回
    onClickLeft() {
      this.$router.go(-1);
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

    showPopup() {
      this.show = true;
    },
    //value=0改变省，1改变市，2改变区
    onChange(picker) {
      let val = picker.getValues();
      console.log(val); //查看打印
      let areaName = "";
      for (var i = 0; i < val.length; i++) {
        areaName = areaName + (i == 0 ? "" : "") + val[i].name;
      }
      this.carmodel = areaName;
    },
    //确定选择城市
    onConfirm(val) {
      console.log(val[0].name + "," + val[1].name + "," + val[2].name);
      this.show = false; //关闭弹框
    },
    //取消选中城市
    onCancel() {
      this.show = false;
      this.$refs.myArea.reset(); // 重置城市列表
    },
  },
  created() {
    this.cartlist();

    if (isLogined()) {
      //如果登录
      console.log("已登录");
    } else {
      Toast.fail("请登录"); //vant 文档组件
      // this.$router.replace("/login");
    }
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

/*地址样式*/
.van-icon-location-o {
  vertical-align: middle;
  padding-right: 5px;
}
.van-popup--bottom {
  border-radius: 15px 15px 0 0 !important;
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
