<template>
  <div class="home">
    <Header>
      <div class="box">
        <div class="wraper1">
          <span>
            <van-icon
              name="wap-nav"
              size="30"
              color="white"
              @click="goClassify"
            />
          </span>
          <div class="sousuo">
            <span class="hanzi">JD</span><span class="fuhao">|</span>
            <span
              ><van-search
                @focus="goSousuo()"
                v-model="value"
                placeholder="请输入搜索关键词"
              />
            </span>
          </div>
          <span class="login1" @click="goLogin">登录</span>
        </div>
      </div>
    </Header>
    <div class="contant">
      <div class="box1">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="red">
          <van-swipe-item v-for="banner in banners" :key="banner._id">
            <img :src="banner.coverImg" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="box2">
        <div class="show-img">
          <a href="">
            <img
              src="//m.360buyimg.com/mobilecms/jfs/t1/168391/37/17039/33457/606d6139E67500611/6fa1dac287340983.gif"
              alt=""
            />
          </a>
        </div>
        <div class="show-img">
          <a href="">
            <img
              src="//m.360buyimg.com/mobilecms/jfs/t1/175129/37/2722/48998/606e9850E0972e686/91e9156f24b0bf30.gif"
              alt=""
            />
          </a>
        </div>
        <div class="show-img">
          <a href="">
            <img
              src="//m.360buyimg.com/mobilecms/jfs/t1/171616/40/2405/34357/606d61fbEa325c253/ce813509b478cb3a.gif"
              alt=""
            />
          </a>
        </div>
      </div>

      <div class="box3">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
          <van-swipe-item>
            <div class="wraper3">
              <ul>
                <li v-for="(item, index) in iconImg" :key="index">
                  <a href="">
                    <img :src="item.src" alt="" />
                    <p>{{ item.title }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="wraper3">
              <ul>
                <li v-for="(item, index) in iconImg1" :key="index">
                  <a href="">
                    <img :src="item.src" alt="" />
                    <p>{{ item.title }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="box4">
        <h3>来电好货 &nbsp;&nbsp; &nbsp; &nbsp; 国潮风尚</h3>

        <div class="wraper4">
          <figure>
            <p>正品直郵</p>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/122304/6/4867/26484/5ee73aa3E8a601402/04d440839b734589.png!q70.jpg.dpg"
              alt=""
            />
          </figure>
          <figure>
            <p>3C大放价</p>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/146350/29/713/33082/5ee73d9fE1ae995ad/0ec365679efbf615.png!q70.jpg.dpg"
              alt=""
            />
          </figure>
          <figure>
            <p>国货正当时</p>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/121172/17/1584/29106/5ebd1637Ec4c82232/aa56520b3ab276be.png!q70.jpg.dpg"
              alt=""
            />
          </figure>
          <figure>
            <p>都是你爱的</p>
            <img
              src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/141856/19/761/28886/5ee73fa2E4401ba28/9386324f55097e7b.jpg!q70.jpg.dpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div class="box5">
        <div class="wraper5">
          <h4>京东秒杀</h4>
          <span>20点场</span>
          <a href=""><span>更多秒杀</span> <span>&gt;</span></a>
        </div>
        <div class="wraper6">
          <dl>
            <dt>
              <img
                src="//img11.360buyimg.com/n7/s150x150_jfs/t1/165797/1/15822/97237/60645ff1E7f416808/8ac46637164195d1.jpg.dpg"
                alt=""
              />
            </dt>
            <dd>
              <p>￥33.1</p>
              <del>￥44.9</del>
            </dd>
          </dl>
          <dl>
            <dt>
              <img
                src="//img11.360buyimg.com/n7/s150x150_jfs/t1/171639/11/3495/162571/6073bf04E17b67db3/0cf127ccb71b565b.jpg.dpg"
                alt=""
              />
            </dt>
            <dd>
              <p>￥269</p>
              <del>￥299</del>
            </dd>
          </dl>
          <dl>
            <dt>
              <img
                src="//img11.360buyimg.com/n7/s150x150_jfs/t1/162543/17/16457/53872/606d568aE00c0583c/2a2ae374eba18dc2.jpg.dpg"
                alt=""
              />
            </dt>
            <dd>
              <p>￥238</p>
              <del>￥265</del>
            </dd>
          </dl>
          <dl>
            <dt>
              <img
                src="//img11.360buyimg.com/n7/s150x150_jfs/t1/176599/27/2363/58106/606d1dcaE7eb68805/418c4013921ceff6.png"
                alt=""
              />
            </dt>
            <dd>
              <p>￥32.8</p>
              <del>￥80</del>
            </dd>
          </dl>
          <dl>
            <dt>
              <img
                src="//img11.360buyimg.com/n7/s150x150_jfs/t1/170510/32/17340/128627/60704566Edb504d6f/2376415c9dc1a3b4.jpg.dpg"
                alt=""
              />
            </dt>
            <dd>
              <p>￥169</p>
              <del>￥299</del>
            </dd>
          </dl>
          <dl>
            <dt>
              <img
                src="//img11.360buyimg.com/n7/s150x150_jfs/t1/171023/38/9452/115284/6040b553Eb0b33265/136c36cfa70516b2.jpg.dpg"
                alt=""
              />
            </dt>
            <dd>
              <p>￥33</p>
              <del>￥36.8</del>
            </dd>
          </dl>
        </div>
      </div>

      <div class="box6">
        <div class="bigBox">
          <a href="">
            <dl>
              <dt>
                <h3>学霸进阶</h3>
                <p>今日事今日毕</p>
              </dt>
              <dd>
                <img
                  src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/140497/22/8768/92583/5f644d48Ec5f5271f/836d6cc020db5120.jpg!q70.jpg.dpg"
                  alt=""
                />
                <img
                  src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/114022/9/9487/819189/5eda0447Ed5cce2ef/dc08b675667de462.jpg!q70.jpg.dpg"
                  alt=""
                />
              </dd>
            </dl>
          </a>
          <a href="">
            <dl>
              <dt>
                <h3>小小少年</h3>
                <p>带上心爱的装备去上学</p>
              </dt>
              <dd>
                <img
                  src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/123916/27/8181/153949/5f1fa3ddEf6463aea/c06f519baf47fe80.jpg!q70.jpg.dpg"
                  alt=""
                />
                <img
                  src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/123916/27/8181/153949/5f1fa3ddEf6463aea/c06f519baf47fe80.jpg!q70.jpg.dpg"
                  alt=""
                />
              </dd>
            </dl>
          </a>
        </div>
        <div class="bigBox2">
          <a href="">
            <dl>
              <dt>
                <h3>音乐时光</h3>
                <p>文娱滋养</p>
              </dt>
              <dd>
                <img
                  src="//m.360buyimg.com/mobilecms/11706/ab64a190-7010-4313-819e-91b3ccbc1395.jpg!q70.jpg"
                  alt=""
                />
              </dd>
            </dl>
          </a>
          <a href="">
            <dl>
              <dt>
                <h3>亲子共读</h3>
                <p>最美陪伴</p>
              </dt>
              <dd>
                <img
                  src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/136962/11/1224/660408/5ed70be0Ef88de6f7/1368e0c551c90e8c.jpg!q70.jpg.dpg"
                  alt=""
                />
              </dd>
            </dl>
          </a>
          <a href="">
            <dl>
              <dt>
                <h3>潮流双肩</h3>
                <p>潮流双肩包</p>
              </dt>
              <dd>
                <img
                  src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/143363/21/5894/564609/5f3df5bcEf9c50ab7/130808ec5406576e.jpg!q70.jpg.dpg"
                  alt=""
                />
              </dd>
            </dl>
          </a>
          <a href="">
            <dl>
              <dt>
                <h3>程序猿</h3>
                <p>装备必须牛</p>
              </dt>
              <dd>
                <img
                  src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/133292/21/12884/35002/5f8d5de2E930b2ef3/e217fcd319e7afea.jpg!q70.jpg.dpg"
                  alt=""
                />
              </dd>
            </dl>
          </a>
        </div>
      </div>
      <div class="box7">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="big">
            <dl
              v-for="item in list"
              :key="item._id"
              @click="godetail(item._id)"
            >
              <dt><img :src="item.coverImg" alt="" /></dt>
              <dd>
                <p>
                  <span>京东超市</span>
                  {{ item.descriptions }}
                </p>
              </dd>
              <div class="small">
                <span>￥{{ item.price }}</span>
                <span>满减</span>
                <span>看相似</span>
              </div>
            </dl>
          </div>
        </van-list>
      </div>
    </div>
    <div class="box8">
      <div class="parents">
        <div class="children1">
          <ul>
            <li @click="goLogin">登录</li>
            <li @click="goReg">注册</li>
            <li>客户服务</li>
            <li @click="backTop">返回顶部</li>
          </ul>
        </div>
        <div class="children2">
          <img
            src="//m.360buyimg.com/mobilecms/jfs/t16423/186/2517573622/5186/75a541f7/5ab1c0deN947bdcba.png"
            alt=""
          />
          <img
            src="//m.360buyimg.com/mobilecms/jfs/t18550/294/898388074/6574/3a8c5413/5ab0b8e9Ne9c48331.png"
            alt=""
          />
          <img
            src="//m.360buyimg.com/mobilecms/jfs/t14581/218/2689195961/4696/203b872a/5ab1c0f2N51c3f1bb.png"
            alt=""
          />
        </div>
        <div class="children3">
          <p>Copyright © 2004-2020 京东JD.com 版权所有</p>
        </div>
      </div>
    </div>
    <div class="scrollTop" v-show="flag_scroll" @click="backTop">
      <van-icon name="back-top" size="40" color="gray" />
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import Header from "../../components/header";
import axios from "axios";
import { serveUrl } from "../../utils/common";
import img1 from "../../assets/icon-img/1.png";
import img2 from "../../assets/icon-img/2.png";
import img3 from "../../assets/icon-img/3.png";
import img4 from "../../assets/icon-img/4.png";
import img5 from "../../assets/icon-img/5.png";
import img6 from "../../assets/icon-img/6.png";
import img7 from "../../assets/icon-img/7.png";
import img8 from "../../assets/icon-img/8.png";
import img9 from "../../assets/icon-img/9.png";
import img10 from "../../assets/icon-img/10.png";
import img11 from "../../assets/icon-img/11.png";
import img12 from "../../assets/icon-img/12.png";
import img13 from "../../assets/icon-img/13.png";
import img14 from "../../assets/icon-img/14.png";
import img15 from "../../assets/icon-img/15.png";
import img16 from "../../assets/icon-img/16.png";
import img17 from "../../assets/icon-img/17.png";
import img18 from "../../assets/icon-img/18.png";
import img19 from "../../assets/icon-img/19.png";
import img20 from "../../assets/icon-img/20.png";

export default {
  components: {
    Header,
  },
  data() {
    return {
      flag_scroll: false,
      scroll: 0,
      list: [],
      loading: false,
      finished: false,
      page: 1,
      value: "",
      banners: [],
      iconImg: [
        { src: img1, title: "京东超市" },
        { src: img2, title: "数码电器" },
        { src: img3, title: "京东服饰" },
        { src: img4, title: "京东生鲜" },
        { src: img5, title: "京东到家" },
        { src: img6, title: "充值缴费" },
        { src: img7, title: "9.9元拼" },
        { src: img8, title: "领券" },
        { src: img9, title: "领金贴" },
        { src: img10, title: "PLUS会员" },
      ],
      iconImg1: [
        { src: img11, title: "京东国际" },
        { src: img12, title: "京东拍卖" },
        { src: img13, title: "唯品会" },
        { src: img14, title: "玩3C" },
        { src: img15, title: "沃尔玛" },
        { src: img16, title: "美妆馆" },
        { src: img17, title: "京东旅行" },
        { src: img18, title: "拍买二手" },
        { src: img19, title: "物流查询" },
        { src: img20, title: "全部" },
      ],
    };
  },
  methods: {
    ...mapMutations({
      changeactive: "footerActive/setActive",
    }),
    goSousuo() {
      this.$router.push("/sousuo");
    },
    goClassify() {
      this.$router.push("/classify");
    },
    goLogin() {
      this.$router.push("/login");
    },
    goReg() {
      this.$router.push("/reg");
    },
    getLunbo() {
      axios.get(`${serveUrl}/api/v1/products`).then((res) => {
        //console.log(res);
        if (res.status === 200) {
          this.banners = res.data.products;
        }
      });
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

    onLoad() {
      axios
        .get(`${serveUrl}/api/v1/products`, {
          params: { page: this.page },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            if (res.data.products < 10) {
              this.finished = true;
            }
            setTimeout(() => {
              this.loading = false;
              this.page++;

              this.list = this.list.concat(res.data.products);
            }, 1000);
          }
        });
    },
    godetail(id) {
      this.$router.push({
        path: "/detail",
        query: { id },
      });
    },
  },
  created() {
    this.getLunbo();
    this.changeactive(0);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  //如果页面有keep-adlve缓存功能，这个函数会触发
  activated() {},
};
</script>
<style scoped>
body,
html {
  background-color: #f3f3f3;
}
.home .contant {
  width: 96%;
  margin: 0 auto;
}
.box {
  width: 100%;
  /* height: 90px; */
  background: rgb(214, 7, 7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.wraper1 {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  background: rgb(214, 7, 7);
  padding-top: 10px;
}

.sousuo {
  width: 260px;
  height: 30px;
  background: #fff;
  border-radius: 15px;
  display: flex;
}

.hanzi {
  margin-left: 10px;
  font-size: 20px;
  color: red;
  font-weight: bolder;
  margin-top: 4px;
  margin-right: 6px;
}
.fuhao {
  margin-top: 8px;
}
.van-search {
  height: 30px;
  line-height: 30px;
  padding: 0;
}
.van-search__content {
  background-color: white;
}
.van-cell {
  line-height: 18px;
}

.login1 {
  font-size: 15px;
  color: white;
  margin-top: 7px;
}
.box1 {
  margin-top: 15px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #f5f9fa;
}

.van-swipe-item img {
  width: 380px;
  height: 240px;
  display: block;
}
.box2 {
  display: flex;
  background: #fff;
  margin-top: 10px;
}
.show-img {
  width: 33.33%;
}
.show-img img {
  width: 100%;
}
.box3 {
  margin-top: 10px;
}
.box3 .wraper3 ul {
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
.box3 ul li {
  width: 20%;
}
.box3 ul li img {
  width: 45px;
  height: 40px;
  margin-left: 10px;
}
.box3 ul li p {
  font-size: 12px;
  margin-left: 2px;
}
.box3 .wraper3 ul li {
  padding-bottom: 15px;
}
.box4 {
  background: #fff;
  margin-top: 10px;
}
.box4 h3 {
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  margin-top: 10px;
}
.box4 .wraper4 {
  display: flex;
  justify-content: space-around;
}
.box4 .wraper4 figure {
  margin-top: 10px;
}
.box4 .wraper4 figure img {
  width: 70px;
}
.box5 {
  margin-top: 10px;
  background: #fff;
}
.box5 .wraper6 {
  display: flex;
  justify-content: space-around;
}
.box5 .wraper6 img {
  width: 55px;
}
.box5 .wraper6 dd p {
  font-size: 14px;
  color: red;
  margin-left: 7px;
  margin-top: 8px;
  margin-bottom: 5px;
}
.box5 .wraper6 dd del {
  color: gray;
  margin-left: 10px;
}
.box6 {
  background: #fff;
}
.box6 .bigBox {
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
}

.box6 .bigBox dl dd {
  display: flex;
  justify-content: space-around;
}
.box6 .bigBox dl dd img {
  width: 70px;
  margin-left: 10px;
}
.box6 dl dt h3 {
  font-size: 18px;
  font-weight: bolder;
}
.box6 dl dt p {
  margin-top: 10px;
  margin-bottom: 10px;
}
.box6 .bigBox2 {
  display: flex;
  justify-content: space-around;
}
.box6 .bigBox2 dl dd img {
  width: 70px;
}

.box7 .big {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 6px;
  padding-bottom: 10px;
  border-bottom: solid 1px rgb(194, 191, 191);
}
.box7 .big dl {
  width: 48%;
  padding-bottom: 50px;
  margin-top: 5px;
  background: #fff;
}
.box7 .big dl img {
  width: 160px;
}
.box7 .big dl dd {
  display: flex;
  margin-top: 10px;
}
.box7 .big dl dd p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
}
.box7 .big dl dd span {
  font-size: 12px;
  background: red;
  color: #fff;
}
.box7 .big dl .small {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.box7 .big dl .small span:nth-child(1) {
  font-size: 16px;
  color: red;
  font-weight: bolder;
}
.box7 .big dl .small span:nth-child(2) {
  font-size: 12px;
  color: red;
  border: solid 1px red;
  margin-left: -30px;
}
.box7 .big dl .small span:nth-child(3) {
  font-size: 12px;
  color: gray;
  border-radius: 6px;
  margin-left: 5px;
  background: rgb(197, 201, 197);
}
.box8 {
  padding-bottom: 65px;
  border-top: solid 1px rgb(224, 223, 223);
  background: #fff;
}
.box8 .parents .children1 ul {
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
}
.box8 .parents .children1 ul li {
  flex: 1;
  text-align: center;
  font-size: 15px;
  border-right: solid 1px gray;
}
.box8 .parents .children1 ul li:nth-child(4) {
  border-right: none;
}
.box8 .parents .children2 {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: solid 1px rgb(196, 194, 194);
  border-bottom: solid 1px rgb(196, 194, 194);
}
.box8 .parents .children2 img {
  width: 80px;
}
.box8 .parents .children3 {
  margin-top: 10px;
  text-align: center;
}
.scrollTop {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: rgb(231, 229, 229);
  left: 327px;
  top: 500px;
}
</style>
