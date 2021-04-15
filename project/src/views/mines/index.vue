<template>
  <div class="mines">
    <div class="header">
      <van-nav-bar title="我的京东" left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" />
        </template>
      </van-nav-bar>
    </div>
    <div class="personMessage clean">
      <div class="per">
        <div class="personal">
          <div class="headerImg">
            <img src="../../../public/img/header.jpg" alt="" />
          </div>
          <div class="personalTxt">
            <div class="personName">
              <p>{{nickName}}</p>
            </div>
            <div class="littlejd">
              <span>京享值</span>
              <span>小白信用69.7 <van-icon name="arrow" /></span>
            </div>
            <!-- url(https://img12.360buyimg.com/img/s300x60_jfs/t1/113596/13/13099/22116/5f1a4bddEb7f1a190/8581e1b9765e15ff.png) no-repeat scroll 0 0/cover -->
          </div>
        </div>
        <div class="set" @click="tomymessage">
          <van-icon name="setting-o" />
        </div>
      </div>
      <div class="myProduct-message">
        <div v-for="item in mylist" :key="item.id">
          <span>{{ item.num }}</span>
          <p>{{ item.title }}</p>
        </div>
      </div>
      <!-- 会员优惠券 -->
      <div class="member">
        <div class="memner-title">
          <div class="plus"></div>
          <div class="shu"></div>
          <div class="member-txt">
            <p>每月5张运费劵</p>
          </div>
        </div>
        <div class="immediately">
          <button class="look">立即查看<i class="snajiao"></i></button>
        </div>
      </div>
      <div class="myoperate">
        <van-grid :border="false">
          <van-grid-item icon="credit-pay" text="待付款" @click="obligation" />
          <van-grid-item
            icon="send-gift-o"
            text="待收货"
            @click="tobereceived"
          />
          <van-grid-item icon="cash-on-deliver" text="售后/退换" />
          <van-grid-item
            icon="balance-list-o"
            color="#FFA500"
            text="全部订单"
            @click="allorder"
          />
        </van-grid>
      </div>
    </div>
    <div class="content">
      <div class="myproperty">
        <van-grid :border="false" :column-num="5">
          <van-grid-item>
            <div class="my">
              <span>0</span>
              <p>优惠券</p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div class="my">
              <span>2,000</span>
              <p>白条额度</p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div class="my">
              <span>292</span>
              <p>京豆</p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div class="my">
              <span>0</span>
              <p>红包</p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-grid-item icon="paid" text="文字" />
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 工具与服务 -->
      <div class="tool">
        <div class="tool-title">
          <h3>工具与服务</h3>
        </div>
        <div class="tool-list">
          <div
            class="service"
            v-for="item in imglist"
            :key="item.id"
            @click="toPath(item.path)"
          >
            <img :src="item.url" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <!-- 为你推荐 -->
      <div class="productlist">
        <div class="recomm_mod_title">
          <span class="recomm_mod_title_text">为你推荐</span>
        </div>
        <div class="product_list">
          <div
            class="product-list"
            v-for="(item, index) in productlis"
            :key="index"
            @click="todetail(item._id)"
          >
            <div class="product-img">
              <img :src="item.coverImg" alt="" />
            </div>
            <div class="product-desc">
              <p>
                {{ item.descriptions }}
              </p>
              <span
                >￥ <em>{{ item.price }}</em>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <div class="backHead" ref="top" style="display: none">
      <a href="###"><van-icon name="back-top" /></a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Skeleton } from "vant";
import { get } from "../../utils/request";

import { Grid, GridItem } from "vant";
import { mapMutations } from "vuex";

Vue.use(Grid);
Vue.use(GridItem);

Vue.use(Skeleton);

Vue.use(NavBar);
export default {
  components: {},
  data() {
    return {
      nickName:'',
      mylist: [
        { title: "商品收藏", num: 0, id: 101 },
        { title: "店铺收藏", num: 1, id: 102 },
        { title: "我的足迹", num: 8, id: 103 },
      ],
      imglist: [
        {
          url:
            "http://img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp",
          title: "客户服务",
          path: "",
          id: 1,
        },
        {
          url:
            "https://img12.360buyimg.com/img/s70x70_jfs/t1/143427/38/5400/4413/5f350384Edba4458b/bfcb210d2110a7d8.png.webp",
          title: "我的预约",
          path: "",
          id: 2,
        },
        {
          url:
            "https://img12.360buyimg.com/img/s70x70_jfs/t1/138657/15/5351/5178/5f3504ceE3707cfd0/bc8ff48c8edcc5b1.png.webp",
          title: "我的问答",
          path: "",
          id: 3,
        },
        {
          url:
            "https://img12.360buyimg.com/img/s70x70_jfs/t1/112188/32/14787/4956/5f3509edE376c2ddb/d716c6822cafa2b6.png.webp",
          title: "闲置换钱",
          path: "",
          id: 4,
        },
        {
          url:
            "https://img12.360buyimg.com/img/s70x70_jfs/t1/126073/34/9502/6741/5f350800Ee00c0d35/43485badf62439e9.png.webp",
          title: "高价回收",
          path: "",
        },
        {
          url:
            "https://img12.360buyimg.com/img/s72x72_jfs/t1/116298/31/20078/7059/5f84162fE19dfc541/2a00f0157c5128a2.png.webp",
          title: "定期购",
          path: "",
        },
      ],
      productlis: [],
      scroll_top: 0,
      flag: false,
    };
  },
  methods: {
    // 获取商品列表
    async getproductlist() {
      const result = await get("/api/v1/products");
      console.log(result);
      this.productlis = result.data.products;
      console.log(this.productlis);
    },
    // 点击服务跳转路由

    toPath(path) {
      console.log(path);
    },
    // 切换底部导航
    ...mapMutations({
      changeactive: "footerActive/setActive",
    }),
    ...mapMutations({
      changeMysec: "footerActive/changeMysec",
    }),
    allorder() {
      this.$router.push("/myorder");
      this.changeMysec(0);
    },
    obligation() {
      this.$router.push("/myorder");
      this.changeMysec(1);
    },
    tobereceived() {
      this.$router.push("/myorder");
      this.changeMysec(2);
    },
    // 跳转到我的信息
    tomymessage() {
      this.$router.push("/mymessage");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    // 跳转详情
    todetail(id) {
      this.$router.push({
        path: "/detail",
        query: { id },
      });
    },
  },
  created() {
    this.changeactive(4);
    this.getproductlist();
    this.nickName = localStorage.getItem('nickname')
  },
  mounted() {
    // 获取滚动条的高度
    //  window.addEventListener('scroll', () => {
    //     if (document.documentElement && document.documentElement.scrollTop) {
    //         this.scroll_top = document.documentElement.scrollTop;
    //     }
    //     else if (document.body) {
    //         this.scroll_top = document.body.scrollTop;
    //     }
    //     // console.log(this.scroll_top)
    //     let back = document.querySelector('.backHead')
    //     if(this.scroll_top > 150){
    //         back.style.display = 'block'
    //     } else {
    //         back.style.display = 'none'
    //     }
    //     // console.log(this.flag)
    //  })
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
<style>
/* 回到顶部 */
.backHead {
  position: fixed;
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, 0.5);
  bottom: 60px;
  right: 0;
  font-size: 30px;
  text-align: center;
  line-height: 50px;
  border-top-left-radius: 5px;
  font-weight: normal;
}
.backHead .van-icon {
  color: #fff !important;
}
/* 为你推荐开始 */
.product-desc {
  margin-top: 10px;
  width: 100%;
}
.product-desc p {
  line-height: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 5px;
}
.product-desc span {
  color: #e93b3d;
}
.product-desc span em {
  font-size: 16px;
}
.product_list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product_list .product-list:nth-child(even) {
  border-right: 0;
}
.product-img img {
  width: 100%;
}
.product-list {
  width: 50%;
  box-sizing: border-box;
  background-color: #fff;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px;
  border-radius: 10px;
}
/* display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden; */
.recomm_mod_title {
  position: relative;
  margin: 15px 0;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 12px;
  color: #999;
}
.productlist {
  padding: 0 10px;
}
.recomm_mod_title:after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #ccc;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  left: 10px;
  right: 10px;
  top: 50%;
}
.recomm_mod_title .recomm_mod_title_text {
  z-index: 2;
  position: relative;
  padding: 0 15px;
  background-color: #f7f7f7;
}
.recomm_mod_title {
  position: relative;
  margin: 15px 0;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 12px;
  color: #999;
}
.recomm_mod_title .recomm_mod_title_text:after,
.recomm_mod_title .recomm_mod_title_text:before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.recomm_mod_title .recomm_mod_title_text:before {
  left: 0;
}
.recomm_mod_title .recomm_mod_title_text:after,
.recomm_mod_title .recomm_mod_title_text:before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.recomm_mod_title .recomm_mod_title_text:after {
  right: 0;
}

/* 服务列表 */
.tool-title {
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 3px 0 13px 0;
  margin-bottom: 10px;
}
.tool-title h3 {
  margin-left: 10px;
  font-weight: bold;
}
.service {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  margin-bottom: 15px;
}
.service img {
  width: 40px;
  margin-bottom: 10px;
}

.tool {
  margin-top: 15px;

  background-color: #fff;
  padding: 15px 0 0 0;

  border-radius: 15px;
}
.tool-list {
  display: flex;
  flex-wrap: wrap;
}
/* 白条额度部分 */
.my {
  height: 66%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.my span {
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
}
.my p {
  color: #646566;
}
.myproperty .van-icon-paid {
  color: tomato !important;
}
.myproperty {
  margin-top: 90px;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
}
.myproperty .van-grid-item__content {
  padding: 10px 8px;
}

.content {
  background-color: #f7f7f7;
  overflow: hidden;
  padding-bottom: 100px;
}
/* 待付款等操作 */
.myoperate {
  position: absolute;
  width: 100%;
  left: 0;
  border-radius: 15px;
  overflow: hidden;
}
.myoperate .van-icon-balance-list-o {
  color: tomato !important;
}
/* 会员优惠券 */
.member {
  height: 50px;
  margin-top: 20px;
  background: url(https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png)
    no-repeat 0 0;
  background-size: cover;
  box-sizing: border-box;
  border-top-right-radius: 13px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.memner-title {
  display: flex;
  align-items: center;
}
.plus {
  width: 57px;
  height: 12px;
  background: url(https://img12.360buyimg.com/img/s113x21_jfs/t1/132167/33/1122/2973/5ed5c74bE41e02c41/5ae83d09fff874cb.png)
    no-repeat 50%;
  background-size: 100% 100%;
}
.member-txt {
  height: 50px;
}
.member-txt p {
  line-height: 50px;
  color: #ffe678;
}
.shu {
  width: 1px;
  height: 15px;
  background: #ffe678;
  margin: 0 10px;
}
.snajiao {
  height: 0;
  width: 0;
  display: inline-block;
  border-top: 3px solid transparent;
  border-left: 3px solid #000;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
  margin-left: 5px;
  margin-bottom: 1px;
}
.look {
  border: 0;
  border-radius: 20px;
  outline: none;
  background: #ffe678;
}
/* 个人信息 */
.header .van-icon {
  color: #333;
}
.personMessage {
  background: url(https://img12.360buyimg.com/img/s1500x886_jfs/t1/115726/22/13102/240974/5f18fb83Ee40e230b/d4f2a67087fd443a.png)
    no-repeat scroll 0 0 / cover;
  overflow: hidden;
  padding-top: 10px;
  padding: 10px 20px;
}
.headerImg img {
  width: 60px;
  border-radius: 50%;
}
.personal {
  display: flex;
  align-items: center;
}
.personalTxt {
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
}
.personalTxt .littlejd {
  font-size: 12px;
  margin-top: 10px;
}
.littlejd .van-icon {
  color: #fff !important;
}
.littlejd span {
  display: inline-block;
  padding: 3px 5px;
  background: rgba(0, 0, 0, 0.3);
  margin-right: 5px;
  border-radius: 20px;
}
.per {
  display: flex;
  justify-content: space-between;
}
.set {
  margin-top: 10px;
  font-size: 18px;
  color: #fff !important;
}
.set .van-icon {
  color: #fff !important;
}
.myProduct-message {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  color: #fff;
  position: relative;
}
.myProduct-message span {
  font-weight: bold;
  font-size: 13px;
}
.myProduct-message p {
  margin-top: 10px;
}
</style>
