<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="headinf"
    >
      <template #left>
        <van-icon name="arrow-left" size="18" />
      </template>
      <template #right>
        <van-popover
          v-model="showPopover"
          trigger="click"
          :actions="actions"
          @select="infbuttons"
        >
          <template #reference>
            <van-button type="primary">
              <van-icon name="ellipsis" size="18"
            /></van-button>
          </template>
        </van-popover>
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
    <div class="noProduct" v-if="noProduct">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F06%2F07%2Fc7aa138a2c508a077398113345a3ac2a.jpg%21%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620959363&t=02830683c902817d8f599cee2759efae"
        alt=""
      />
    </div>
    <ul class="ul">
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
            <button @click="del(v._id)">
              <van-icon name="delete-o" size="18" />
            </button>
          </template>
        </van-card>
      </li>
      <van-submit-bar
        :price="zj * 100"
        button-text="提交订单"
        v-model="subdata"
        @submit="onSubmit(subdata)"
        v-show="havesubmit"
      >
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </ul>
    <div class="scrollTop" v-show="flag_scroll" @click="backTop">
      <van-icon name="arrow-up" size="40" color="gray" />
    </div>
  </div>
</template>

<script>
import { subOrder } from "../../api/cart"; //引入提交订单方法
import { getToken } from "../../utils/util"; //引入封装的方法（判断登录）
import { reqCartlist } from "../../api/cart";
import { delProduct } from "../../api/cart"; //引入删除购物车商品接口

// import { serveUrl } from "../../utils/common";
// import { get } from "../../utils/request";
import { Toast } from "vant";
// yarn add @vant/area-data;

import { areaList } from "@vant/area-data";

import Vue from "vue";
import { Dialog } from "vant";

// 全局注册
Vue.use(Dialog);

export default {
  components: {},
  data() {
    return {
      // 气泡显示
      showPopover: false,
      actions: [
        { text: "首页", icon: "shop-o" },
        { text: "分类", icon: "apps-o" },
        { text: "京喜", icon: "youzan-shield" },
        { text: "我的", icon: "friends-o" },
      ],

      num: "1",
      obj: [],
      radio: "1",

      havesubmit: true,
      active: 3, //底部导航

      // 城市
      areaList,
      show: false,
      carmodel: "北京市",

      noProduct: false,
      flag_scroll: false,
      scroll: 0,
      subdata: {
        receiver: "", // 收货人
        regions: "", // 收货的省市区县
        address: "", // 收货地址
        orderDetails: [
          // {
          //   quantity: "", // 数量
          //   product: "", // 商品id
          //   price: "", // 商品单价
          // },
        ],
      },
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
    infbuttons(action, index) {
      switch (index) {
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/classify");
          break;
        case 2:
          this.$router.push("/surprise");
          break;
        case 3:
          this.$router.push("/mine");
          break;
        default:
          break;
      }

      console.log(action);
      console.log(index);
    },
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      // Toast("按钮");
    },
    change(n) {
      console.log(n);
    },

    // 请求数据
    async cartlist() {
      const result = await reqCartlist();
      console.log(result);
      this.obj = result.data;
      console.log(this.products);
      // console.log(this.obj.length);//判断购物车是否有商品
      if (this.obj.length == 0) {
        this.noProduct = true;
        this.havesubmit = false; //提交按钮是否显示
      } else {
        this.noProduct = false;
        this.havesubmit = true;
      }
      // let arr = this.obj.filter((item) => item.checked == true);
      // if (arr.length == 0) {
      //   this.havesubmit = false;
      // } else {
      //   this.havesubmit = true;
      // }
    },

    //    提交订单 ！！！！！！！！
    async onSubmit(subdata) {
      const arr = this.obj.filter((item) => item.checked == true);

      console.log(arr);
      arr.forEach((item, i) => {
        console.log("选中的商品", item, i);
        // console.log(item.product._id);
        // console.log(item.product.quantity);
        // console.log(item.product.price);
        this.subdata.orderDetails.push({
          quantity: item.product.quantity,
          product: item.product._id,
          price: item.product.price,
        });
        // console.log(this.subdata.orderDetails);
      });
      this.subdata.receiver = getToken();
      console.log(this.carmodel);
      this.subdata.regions = this.carmodel;
      this.subdata.address = this.carmodel;
      console.log(this.subdata);

      if (arr.length == 0) {
        Toast.fail({
          message: "请添加商品",
          // 跳转
          forbidClick: true,
          loadingType: "spinner",
        });
      } else {
        let res = await subOrder(subdata);
        console.log(res);
        console.log(res.data.code == "success");
        if (res.data.code == "success") {
          Toast.success({
            message: "提交成功",
            // 跳转
            forbidClick: true,
            loadingType: "spinner",
          });
          this.$router.push("/settlement"); //跳转到订单详情页
        } else {
          Toast.fail({
            message: "提交失败",
            // 跳转
            forbidClick: true,
            loadingType: "spinner",
          });
        }
      }
    },

    // 删除商品按钮
    async del(id) {
      // on confirm
      const result = await delProduct(id);
      console.log(result);
      this.cartlist();
      console.log("删除成功");

      // console.log(this);
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

    //返回顶部

    backTop() {
      document.documentElement.scrollTop = 0;
    },

    //滑动超过200时显示按钮
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      //console.log(document.documentElement.scrollTop);
      if (scrollTop > 200) {
        this.flag_scroll = true;
      } else {
        this.flag_scroll = false;
      }
    },
  },

  created() {
    // let arr = this.obj.filter((item) => item.checked == true);
    // if (arr.length == 0) {
    //   this.havesubmit = false;
    // } else {
    //   this.havesubmit = true;
    // }
    console.log(this.$router);
    console.log(this.$route);
    this.$router.push("/cart");

    console.log(getToken());
    if (getToken()) {
      //如果登录
      console.log(getToken());
      console.log("已登录");
      this.cartlist();
    } else {
      Toast.fail("请登录"); //vant 文档组件
      // this.$router.replace("/login");
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cart {
  min-height: 667px;
  background-color: #f6f6f6 !important;
}
.ul {
  width: 100%;
  margin-bottom: 100px;
}
.li {
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 10px;
  overflow: hidden;
}
/* 导航选项 */
.van-popover--light {
  z-index: 2111;
  position: absolute;
  left: 300px !important;
  top: 45px;
  margin: 0px;
}

.van-card {
  position: relative;
  box-sizing: border-box;
  padding: 8px 16px !important;
  color: #323233;
  font-size: 12px;
  background-color: #fff;
}
.van-checkbox {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -15px;
  z-index: 1;
}

/*地址样式*/
.van-cell__value--alone {
  height: 40px;
  line-height: 40px;
  color: #323233;
  text-align: left;
}
.van-cell__right-icon {
  height: 40px;
  line-height: 40px;
  margin-left: 4px;
  color: #969799;
}
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
/* 价格 */
.van-card__price {
  display: inline-block;
  color: red;
  font-weight: 500;
  font-size: 12px;
}
.van-card[data-v-7698a586] {
  position: relative;
  box-sizing: border-box;
  padding: 8px 16px 8px 24px !important;
  color: #323233;
  font-size: 12px;
  background-color: #fff;
}
.cart {
  background-color: #f2f2f2;
  /* background-color: black; */
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
.van-checkbox__icon--checked {
  z-index: -1;
}
.van-submit-bar {
  z-index: 1000;
}
/* 删除按钮 */
.van-stepper {
  font-size: 0;
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  margin-right: 15px;
  vertical-align: middle;
  /* float: right; */
}
.van-card__footer button {
  width: 25px;
  height: 25px;
  border: none;
  background-color: #f2f3f5;
  border-radius: 3px;
  color: inherit;
  font: inherit;
  float: right;
}
.noProduct img {
  width: 100%;
}
/* 回顶部 */
.scrollTop {
  position: fixed;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  background: rgb(231, 229, 229);
  left: 361px;
  top: 498px;
}
.scrollTop .van-icon {
  font-size: 28px !important;
  line-height: 36px;
}
</style>
