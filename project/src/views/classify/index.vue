<template>
  <div class="classify">
    <div class="searchfor">
      <span @click="back">
        <van-icon name="arrow-left" size="30" class="left" color="#ccc" />
      </span>
      <van-search
        v-model="value"
        shape="round"
        background=""
        placeholder="请输入搜索关键词"
        class="search"
        @focus="tiao"
      />
    </div>
    <div class="box">
      <div class="navtit">
        <van-sidebar v-model="activeKey" class="nav" @change="add">
          <div v-for="(item, index) in arr" :key="index" class="too">
            <van-sidebar-item :title="item" />
          </div>
        </van-sidebar>
      </div>
    </div>
    <div class="sec">
      <div class="goods" v-if="activeKey === 0">
        <div class="tit">
          <p>热门分类</p>
          <a href="">排行榜 ></a>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p>{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 1">
        <div class="tit">
          <p>热门品牌</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in list1" :key="index">
            <van-image :src="items.imgUrl" />
            <p>{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
        <div class="tit">
          <p>手机通讯</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in list2" :key="index">
            <van-image :src="items.imgUrl" />
            <p>{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
        <div class="tit">
          <p>运营商</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in list3" :key="index">
            <van-image :src="items.imgUrl" />
            <p>{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
        <div class="tit">
          <p>手机配件</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in list4" :key="index">
            <van-image :src="items.imgUrl" />
            <p>{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 2">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in list5" :key="index">
            <van-image :src="items.imgUrl" />
            <p>{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 3">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 4">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 5">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 6">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 7">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 8">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 9">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 10">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 11">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 12">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 13">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 14">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 15">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 16">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 17">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 18">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 19">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 20">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 21">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 22">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 23">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 24">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 25">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 26">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 27">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 28">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 29">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 30">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 31">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 31">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 32">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 33">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 34">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 35">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 36">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 37">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="goods" v-if="activeKey === 38">
        <div class="tit">
          <p>热门分类</p>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(items, index) in lists" :key="index">
            <van-image :src="items.imgUrl" />
            <p class="pname">{{ items.gname }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: "",
      activeKey: 0,
      lists: [
        {
          imgUrl:
            "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
          gname: "空调",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg",
          gname: "冰箱",
        },
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",
          gname: "电脑",
        },
        {
          imgUrl:
            "https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          gname: "手机",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",
          gname: "全面屏手机",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",
          gname: "游戏手机",
        },
        {
          imgUrl:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/134182/23/366/16758/5eccb3caE2b8d0c6d/7ab40f9d9441a2a5.jpg",
          gname: "保健品",
        },
        {
          imgUrl:
            "https://img14.360buyimg.com/focus/s140x140_jfs/t1/114862/21/8081/13361/5ecb398fEc7c98869/4b4101d0acbf4ced.jpg",
          gname: "口罩",
        },
        {
          imgUrl:
            "https://img13.360buyimg.com/focus/s140x140_jfs/t1/136893/38/305/31308/5ecb84dcE410bc59a/36568e70a84f8807.jpg",
          gname: "驱蚊用品",
        },
        {
          imgUrl:
            "https://img13.360buyimg.com/focus/s140x140_jfs/t1/120301/21/3027/11815/5ecb80a8Ed94ec15d/c20f3541c5618e17.jpg",
          gname: "电磁炉",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t1/111738/8/8168/9785/5ecb40ccE19924aec/1a1a91827d0f07ba.jpg",
          gname: "电热水壶",
        },
        {
          imgUrl:
            "https://img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg",
          gname: "数据线",
        },
        {
          imgUrl:
            "https://img14.360buyimg.com/focus/s140x140_jfs/t1/131006/3/360/19831/5eccb047E2e95a92e/b425dc4923a20c15.jpg",
          gname: "图书",
        },
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",
          gname: "美妆护肤",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t1/104017/10/11956/27906/5e3e8936E54437217/e5905d3b63d5f6fb.jpg",
          gname: "除菌液",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t1/129461/33/2827/16392/5ecb3dd2E2d178436/c4cd36d661e91665.jpg",
          gname: "休闲食品",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t1/106781/8/11928/23561/5e3e833fE92c281f5/72b834ead18b6462.jpg",
          gname: "充电宝",
        },
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t1/96627/6/11719/15770/5e3e83b6E05b80eea/76b39555bc2d2a89.jpg",
          gname: "体温计",
        },
        {
          imgUrl:
            "https://img11.360buyimg.com/focus/s140x140_jfs/t1/97873/26/11984/16170/5e3e878eE3d6f29d8/820c61d6be7faf12.jpg",
          gname: "投影机",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg",
          gname: "游戏机",
        },
      ],
      list1: [
        {
          imgUrl:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
          gname: "小米",
        },
        {
          imgUrl:
            "https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
          gname: "华为",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
          gname: "荣耀",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
          gname: "苹果",
        },
        {
          imgUrl:
            "https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png",
          gname: "vivo",
        },
        {
          imgUrl:
            "https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png",
          gname: "oppo",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg",
          gname: "魅族",
        },
        {
          imgUrl:
            "https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png",
          gname: "三星",
        },
        {
          imgUrl:
            "https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg",
          gname: "一加",
        },
        {
          imgUrl:
            "https://img11.360buyimg.com/focus/s140x140_jfs/t1/108301/34/7712/3254/5e5f0de9E4ca2f4b5/c664966ee1d36d47.jpg",
          gname: "努比亚",
        },
      ],
      list2: [
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          gname: "老人机",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg",
          gname: "手机",
        },
        {
          imgUrl:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg",
          gname: "全面屏手机",
        },
        {
          imgUrl:
            "https://img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg",
          gname: "游戏手机",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg",
          gname: "拍照手机",
        },
        {
          imgUrl:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t13255/192/958298391/1687/5c7e3c53/5a169204Nd4aa27bb.jpg",
          gname: "对讲机",
        },
        {
          imgUrl:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t13246/188/925975876/8794/686dbb9c/5a1691e0N62f626e3.jpg",
          gname: "京东回收",
        },
        {
          imgUrl:
            "https://img13.360buyimg.com/focus/s140x140_jfs/t1/109596/11/7650/2742/5e5f1074E76a2364e/09b2b19f13691c60.jpg",
          gname: "女性手机",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t11644/236/2358207967/6141/e2d71825/5a169205N84a49a6a.jpg",
          gname: "京东维修",
        },
      ],
      list3: [
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t13309/121/902275259/3700/e9f22529/5a168e83Nb1a35aac.png",
          gname: "合约机",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t11515/106/2342900928/7913/5a606e3f/5a168e7eNdd5d0121.png",
          gname: "选号卡",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t14146/201/916948302/5272/8ae80f8e/5a168e78N78b24a8e.jpg",
          gname: "办套餐",
        },
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t1/86212/5/13882/10155/5e5f10b7E0130f150/75eef80d6e68bba2.jpg",
          gname: "京东营业",
        },
      ],
      list4: [
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg",
          gname: "数据线",
        },
        {
          imgUrl:
            "https://img14.360buyimg.com/focus/s140x140_jfs/t13657/281/912225045/5343/3109ae02/5a167b73Na69aae95.jpg",
          gname: "手机储存卡",
        },
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t1/107011/2/13826/4294/5e5f1150E2f5dd505/d9503871495a5a18.jpg",
          gname: "充电宝",
        },
        {
          imgUrl:
            "https://img11.360buyimg.com/focus/s140x140_jfs/t17548/288/1331085893/6458/52545456/5ac486c6N0c8a93dc.jpg",
          gname: "手机贴膜",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t17284/353/1280266808/3696/32c00915/5ac486ccN2d8031c1.jpg",
          gname: "手机耳机",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t18091/128/1346418266/3819/9dc8206c/5ac486d1Ncae5823b.jpg",
          gname: "蓝牙耳机",
        },
        {
          imgUrl:
            "https://img14.360buyimg.com/focus/s140x140_jfs/t19144/51/1301628112/4640/fbf9dfb6/5ac486d7N3afa8a3e.jpg",
          gname: "手机支架",
        },
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t19357/275/1266747041/8012/244ec91b/5ac486deN24e397cb.jpg",
          gname: "手机饰品",
        },
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t18796/230/1350793435/3980/3f19a427/5ac48749Nf95f399e.jpg",
          gname: "车载配件",
        },
      ],
      list5: [
        {
          imgUrl:
            "https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png",
          gname: "轻薄本",
        },
        {
          imgUrl:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png",
          gname: "游戏本",
        },
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg",
          gname: "机械键盘",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg",
          gname: "组装电脑",
        },
        {
          imgUrl:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg",
          gname: "移动硬盘",
        },
        {
          imgUrl:
            "https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg",
          gname: "显卡",
        },
        {
          imgUrl:
            "https://img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg",
          gname: "游戏台式机",
        },
        {
          imgUrl:
            "https://img13.360buyimg.com/focus/s140x140_jfs/t12526/166/988611883/3419/3c7507ac/5a17ba5dN8f6ffa5e.jpg",
          gname: "家用打印机",
        },
        {
          imgUrl:
            "https://img14.360buyimg.com/focus/s140x140_jfs/t1/98581/29/13884/5125/5e5f1d66E8357cf2e/7232090502f87411.jpg",
          gname: "吃鸡装备",
        },
      ],
      arr: [
        "热门推荐",
        "手机数码",
        "电脑办公",
        "家用电器",
        "计生情趣",
        "美妆护肤",
        "个护清洁",
        "汽车生活",
        "京东超市",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "母婴童装",
        "图书音像",
        "运动户外",
        "内衣配饰",
        "食品生鲜",
        "酒水饮料",
        "家具家装",
        "家居厨具",
        "箱包手袋",
        "钟表珠宝",
        "玩具乐器",
        "医药保健",
        "宠物生活",
        "礼品鲜花",
        "农资绿植",
        "生活旅行",
        "奢侈品",
        "京东国际",
        "艺术邮币",
        "二手商品",
        "特产馆",
        "京东金融",
        "国际名牌",
        "拍卖",
        "房产",
        "工业品",
      ],
    };
  },
  methods: {
    add(index) {
      console.log(index);
      // let num = index * 60;
      // let nav = document.querySelector(".navtit");
      // nav.style.transform = "translateY(-" + num + "px)";
    },
    back() {
      this.$router.go(-1);
    },
    tiao() {},
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
<style>
.classify {
}
.box {
  position: fixed;
  top: 54px;
  left: 0;
  overflow: scroll;
  height: 86%;
  /* margin-bottom: 20%; */
}
.sec {
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  overflow: scroll;
  margin-left: 20%;
  margin-top: 54px;
  height: 86%;
}
.classify .searchfor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  overflow: hidden;
  background: #fff;
}
.classify .searchfor .search {
  float: left;
  width: 90%;
}
.classify .searchfor span {
  float: left;
  margin-top: 10px;
}
.tit {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  box-sizing: border-box;
}
.tit p {
  font-weight: 600;
  font-size: 16px;
  line-height: 60px;
  text-align: center;
}
</style>