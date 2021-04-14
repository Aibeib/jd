<template>
  <div class="sousuo">
    <div class="header">
      <span class="left" @click="goBack">
        <van-icon name="arrow-left" size="25" />
      </span>
      <van-search
        v-model="value"
        background="#fff"
        shape="round"
        placeholder="黄金手链"
      />
      <span class="right">
        <button>搜索</button>
      </span>
    </div>
    <div class="master">
      <div class="naver">
        <h3>热门搜索</h3>
        <p >隐藏</p>
      </div>
      <div class="aside">
        <ul>
          <li v-for="(list, index) in lists" :key="index">{{ list.title }}</li>
        </ul>
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
      lists: [
        { title: "无限扩音器" },
        { title: "车载收音机" },
        { title: "毛巾" },
        { title: "摄像头高清" },
        { title: "儿童遥控飞机" },
        { title: "打印机色带" },
        { title: "多美鲜黄油" },
        { title: "尼龙双肩包" },
        { title: "电子秤" },
        { title: "遛狗绳" },
        { title: "燃气灶挂炉" },
        { title: "无损播放器" },
      ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    goBack() {
      window.history.back(-1);
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>
.sousuo {
  background: #fff;
}
.header {
  display: flex;
  justify-content: space-around;
}
.left {
  margin-top: 15px;
}
.right button {
  background: red;
  border-radius: 5px;
  color: aliceblue;
  border: none;
  padding: 4px 5px;
  font-size: 17px;
  margin-top: 10px;
}
.master {
  padding-top: 25px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-top: solid 1px blue;
}
.naver {
  display: flex;
  justify-content: space-between;
}
.naver h3 {
  font-size: 15px;
  margin-left: 12px;
}
.naver p {
  font-size: 15px;
  color: gray;
  margin-right: 12px;
}
.aside {
  margin-top: 10px;
}
.aside ul {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.aside ul li {
  /* width: 80px; */
  font-size: 13px;
  color: rgb(75, 73, 73);
  padding: 5px;
  margin-left: 10px;
  text-align: center;
  background: rgb(241, 239, 239);
  margin-top: 10px;
  padding: 3px 3px;
}
</style>