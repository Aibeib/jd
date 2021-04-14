<template>
  <div class="detail">
    <div class="header">
      <van-icon name="arrow-left" @click="onClickLeft" class="left" />
      <van-swipe @change="onChange">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/{{ images.length }}
          </div>
        </template>
      </van-swipe>
      <van-icon name="more-o" @click="onClickRight" class="right" />
      <div class="header-bottom">
        <div class="box">
          <div style="padding-left: 20px">
            <span style="font-size: 15px; color: red">￥</span>
            <span style="font-size: 25px; color: red">{{
              products.price
            }}</span>
          </div>
          <div class="bottom-right" style="padding-right: 20px">
            <div style="margin-right: 10px">
              <van-icon name="cash-back-record" style="font-size: 25px" />
              <p>降价提醒</p>
            </div>
            <div>
              <van-icon name="like-o" style="font-size: 25px" />
              <p>收藏</p>
            </div>
          </div>
        </div>
        <div
          class="box1"
          style="padding-left: 20px; padding-right: 20px; padding-top: 10px"
        >
          <a href="" style="font-size: 16px; font-weight: 900">{{
            products.name
          }}</a>
          <p style="margin-top: 15px; font-size: 13px; line-height: 17px">
            【超值低价】5000mAh大电量，大屏幕大音量，人脸解锁【升级18W快充+线性扬声器，推荐】
            <a href="" style="color: red; text-decoration: underline">查看</a>
          </p>
        </div>
        <div style="margin-top: 15px">
          <van-cell @click="show = true" style="background: pink">
            <div style="color: red">
              <van-icon name="diamond-o" style="margin-right: 5px" />
              <span style="color: red">放心购365天原厂维修.免举证退换货</span>
            </div>

            <van-icon name="ellipsis" />
          </van-cell>
          <van-action-sheet v-model="show" title="放心购">
            <div class="body">
              <p style="font-size: 12px; line-height: 15px">
                本页面服务内容，与客户会员等级、信用等级等多维度因素相关，具体可享受的服务以客户申请售后时页面展示的信息为准。
              </p>
              <ul style="margin-bottom: 130px">
                <li style="margin-bottom: 30px">
                  <div class="title">365天原厂维修</div>
                  <div class="content">
                    商品出现故障，京东提供上门取送、检测和维修。
                  </div>
                </li>
                <li>
                  <div class="title">免举证退换货</div>
                  <div class="content">
                    15天内性能故障，京东提供原厂授权的检测服务。
                  </div>
                </li>
              </ul>
              <van-button round type="danger info" size="large" @click="del"
                >确定</van-button
              >
            </div>
          </van-action-sheet>
          <!-- <van-action-sheet
            v-model="show"
            :actions="actions"
            cancel-text="取消"
            description="这是一段描述信息"
            close-on-click-action
          /> -->
        </div>
      </div>
    </div>
    <div class="youhui">
      <div style="">
        <van-cell @click="find = true" class="news">
          <h3 style="font-weight: 900">优惠</h3>
          <ul>
            <li>
              <span style="color: red">赠品</span>
              <span style="border: none">购买立享1件赠品 (赠完为止)</span>
            </li>
            <li>
              <span style="color: red">满额返券</span>
              <span style="border: none"
                >购母婴玩具食品医药清洁个护生鲜...</span
              >
            </li>
            <li>
              <span style="color: red">免费领</span>
              <span style="color: red">优惠套装</span>
            </li>
          </ul>
          <van-icon name="ellipsis" />
        </van-cell>
        <!-- <van-action-sheet v-model="show" /> -->
        <div>
          <van-action-sheet v-model="find" title="优惠">
            <div class="content">
              <h3 style="font-size: 16px">促销</h3>
              <ul>
                <li>
                  <span
                    style="color: red; margin-right: 10px; margin-top: -65px"
                    >赠品</span
                  >
                  <div>
                    <p style="margin-bottom: 10px">
                      购买立享1件赠品 (赠完为止)
                    </p>
                    <p>
                      腾讯大王卡 首月免月租
                      全年360G近200款APP专属免流【小米专属】（需签收后7日内按提示完成信息上传）
                    </p>
                  </div>
                  <van-icon name="arrow" />
                </li>
                <li>
                  <span style="color: red">满额返券</span>
                  <div>
                    <p style="margin-left: 5px">
                      购母婴玩具食品医药清洁个护生鲜电脑数码家电酒水图书等部分自营商品满1元返券包
                    </p>
                  </div>
                  <van-icon name="arrow" />
                </li>
                <li>
                  <span style="color: red">免费领</span>
                  <div>
                    <p>体验卡免费领，超大流量任性用</p>
                  </div>
                  <van-icon name="arrow" />
                </li>
                <li>
                  <span style="color: red">优惠套装</span>
                  <div>
                    <p style="margin-left: 5px">该商品共有四款优惠套装</p>
                  </div>
                  <van-icon name="arrow" />
                </li>
              </ul>
            </div>
          </van-action-sheet>
        </div>
      </div>
    </div>
    <div class="adress">
      <div>
        <div class="sku-container">
          <van-sku
            v-model="showBase"
            :sku="skuData.sku"
            :goods="skuData.goods_info"
            :goods-id="skuData.goods_id"
            :hide-stock="skuData.sku.hide_stock"
            :quota="skuData.quota"
            :quota-used="skuData.quota_used"
            :initial-sku="initialSku"
            reset-stepper-on-hide
            reset-selected-sku-on-hide
            disable-stepper-input
            :close-on-click-overlay="closeOnClickOverlay"
            :custom-sku-validator="customSkuValidator"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
          >
          </van-sku>
          <!-- <van-button block type="primary" @click="showBase = true">
            xxxx
          </van-button> -->
          <van-cell @click="showBase = true" class="kind">
            <h3 style="font-weight: 900">已选</h3>
            <div style="width: 80%; padding: 0 5px">
              <p style="font-size: 9px">
                本商品支持京东保障服务、京东服务+，点击可选服务
              </p>
            </div>
            <van-icon name="ellipsis" />
          </van-cell>
        </div>
      </div>
      <div class="live" style="margin-top: 30px">
        <van-cell @click="showPopup" v-model="showAddr" class="yunshu">
          <h3 style="font-weight: 900">送至</h3>
          <div style="width: 80%">
            <p class="showAddr">{{ showAddr }}</p>
            <div style="display: flex">
              <img
                src="//img12.360buyimg.com/img/s140x26_jfs/t1/128364/22/14770/4290/5f866980Ed74419a4/f0af8ad84c0601bc.png"
                style="width: 60px; height: 15px"
              />
              <span>现货23:00前下单，预计后天送达</span>
            </div>
          </div>
          <van-icon name="ellipsis" />
        </van-cell>
        <van-popup
          v-model="show2"
          position="bottom"
          :style="{ height: '50%', padding: '16px' }"
        >
          <van-area
            :area-list="areaList"
            :columns-placeholder="['请选择', '请选择', '请选择']"
            value="110000"
            title="选择地址"
            @change="changeAddr"
            @confirm="chooseThis"
          />
        </van-popup>
      </div>
      <div class="wig" style="padding-bottom: 70px; padding-top: 20px">
        <span
          style="
            font-weight: 900;
            font-size: 16px;
            margin-left: 15px;
            margin-right: 10px;
          "
          >重量</span
        >
        <span>0.401kg</span>
      </div>
      <!-- <div>
        <img src="" alt="" />
      </div> -->
      <div>
        <van-goods-action>
          <van-goods-action-icon icon="shop-o" text="店铺" badge="0" />
          <van-goods-action-icon icon="chat-o" text="客服" dot />
          <van-goods-action-icon icon="cart-o" text="购物车" badge="0" />

          <van-goods-action-button
            type="warning"
            text="加入购物车"
            @cilck="gocart"
          />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
      </div>
    </div>
  </div>
</template>

<script>
import skuData from "../../data";
import { Toast } from "vant";
import { areaList } from "../../list";
// import { reqProductDetail } from "../../api/product";
export default {
  components: {},
  data() {
    return {
      obj: {},
      show2: false, //是否显示弹出层
      detailAddress: "", //绑定详细地址输入框
      areaList: areaList, //可选地址数据列表
      showAddr: "天津河西区挂甲寺街道", //显示校区地址
      resAddr: "", //传给后端的位置信息

      images: [
        "https://img0.baidu.com/it/u=1060316738,1765304713&fm=26&fmt=auto&gp=0.jpg",
        "https://img0.baidu.com/it/u=2134477487,160184881&fm=26&fmt=auto&gp=0.jpg",
      ],
      current: 0,
      products: {
        name:
          "Redmi 9A 5000mAh大电量 大屏幕大字体大音量 1300万AI相机 八核处理器 人脸解锁 4GB+64GB 砂石黑 游戏智能手机 小米 红米",
        price: "789.00",
      },
      show: false,
      find: false,
      show1: false,
      skuData: skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: "30349",
        s2: "1193",
        selectedNum: 3,
      },
      customSkuValidator: () => "lalla",
    };
  },
  methods: {
    // async getDetail(id) {
    //   const res = await reqProductDetail(id);
    //   console.log(res);
    //   if (res.status == 200) {
    //     this.obj = res.products;
    //   }
    // },
    gocart() {
      // this.$router.push('/cart')
    },
    onClickLeft() {
      console.log(11);
    },
    onClickRight() {
      console.log(22);
    },
    onChange(index) {
      this.current = index;
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    onCancel() {
      Toast("取消");
    },
    del() {
      this.show = false;
    },
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },

    onAddCartClicked(data) {
      this.$toast("add cart:" + JSON.stringify(data));
    },

    //地区选择
    changeAddr(picker) {
      //value=0改变省，1改变市，2改变区
      let val = picker.getValues();
      this.resAddr = val;
    },
    //选好地址后点击确定
    chooseThis() {
      this.show2 = false;
      //选中地址成功后回显
      this.showAddr =
        this.resAddr[0].name +
        "-" +
        this.resAddr[1].name +
        "-" +
        this.resAddr[2].name;
      // console.log(this.resAddr, "即将传给后端的省市区信息");
    },
    showPopup() {
      this.show2 = true;
    },
  },
  created() {
    // const id = this.$route.params.id;
    // this.getDetail(id);
  },
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
.sku-container .kind {
  display: flex;
  justify-content: space-between;
}
/* .sku-container {

  border-bottom: 1px solid transparent;

  border-color: rgba(151, 151, 151, 0.9);
} */
.live .yunshu {
  display: flex;
  justify-content: space-around;
}
.sku-container {
  padding: 0 15px;
}
.youhui .news {
  border-radius: 20px;
  margin-top: 15px;
}
.content ul li p {
  font-size: 13px;
}
.content ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}
.content ul li span {
  /* width: 15%; */
  flex-shrink: 1;
  font-size: 13px;
  color: red;
  border: solid 1px red;
}
.content ul li > div {
  width: 80%;
}
.content ul li > div p {
  line-height: 18px;
}
.van-cell__value ul li span {
  margin-left: 5px;
  border: solid 1px red;
}
.van-cell__value {
  display: flex;
  justify-content: space-between;
}
.youhui {
  background: rgba(220, 220, 220, 0.5);
  overflow: hidden;
  padding-bottom: 15px;
}
.youhui .content {
  padding: 16px 16px 100px;
}
.body ul {
  margin-top: 20px;
}
.body ul li .title {
  color: red;
  font-size: 15px;
}
.van-notice-bar__wrap {
  display: block;
  width: 100%;
}
.body {
  padding: 16px 16px 0 16px;
}
/* .header {
  display: flex;
  justify-content: space-around;
  position: relative;
} */
.header img {
  width: 100%;
  height: 400px;
}
.header .left {
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 30px;
  color: white;
  z-index: 100;
}
.header .right {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
  color: white;
}
.custom-indicator {
  text-align: center;
  width: 30px;
  height: 18px;
  color: white;
  position: absolute;
  right: 0;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 18px 0 0 18px;
}
.header .header-bottom .box {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
}
.header-bottom .bottom-right {
  display: flex;
  text-align: center;
}
</style>