<template>
  <div class="login">
    <div class="header">
      <van-nav-bar title="京东登录注册" left-text="" left-arrow>
        <template #right> </template>
      </van-nav-bar>
    </div>
    <div class="contene">
      <van-cell-group>
        <van-field label="" placeholder="用户名/邮箱/手机号" v-model="phone" />

        <van-field
          type="password"
          label=""
          v-show="downIcon"
          placeholder="请输入密码"
          @click-right-icon="eye"
          right-icon="closed-eye"
          v-model="password"
          error-message
        />
        <van-field
          type="text"
          label="密码"
          v-show="!downIcon"
          placeholder="请输入密码"
          @click-right-icon="eye"
          right-icon="eye"
          v-model="password"
          error-message
        />
      </van-cell-group>
      <button class="btn1" @click="login">登录</button>
      <button class="btn2">一键登录</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { phone: "", password: "", downIcon: true };
  },
  methods: {
    //点击图标看密码
    /*  changeSeen() {
      this.type = this.seen ? "password" : "text";
      this.seen = !this.seen;
    }, */
    eye() {
      this.downIcon = !this.downIcon;
    },
    login() {
      const userName = this.phone;
      const password = this.password;
      this.$http
        .post("http://localhost:3009/api/v1/auth/login", {
          userName,
          password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
        });
    },
  },
  created() {
    this.login();
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
<style >
html {
  font-size: 100px;
}
.Router {
  width: 325px;
  margin: 0 auto;
}
.header {
  width: 325px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  padding: 0 12px;
  background: #fff;
  margin: 0 auto;
}
.icon {
  float: left;
  line-height: 44px;
}
.center {
  text-align: center;
  font-size: 17px;
}
.van-nav-bar .van-icon {
  color: #000 !important;
  font-size: 17px;
}
.btn1 {
  margin-top: 0.5rem;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  display: block;
  background-color: #f10000;
  border-radius: 0.25rem;
  font-size: 0.16rem;
  color: #fff;
  -webkit-box-shadow: 0 0.1rem 20px 0 rgb(255 62 62 / 20%);
  box-shadow: 0 0.1rem 20px 0 rgb(255 62 62 / 20%);
  text-align: center;
  font-family: PingFangSC-Semibold;
  outline: none;
  border: none;
}
.btn2 {
  margin-top: 0.5rem;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  display: block;
  background-color: #efefef;
  border-radius: 0.25rem;
  font-size: 0.16rem;
  color: #f10000;
  -webkit-box-shadow: 0 0.1rem 20px 0 rgb(255 62 62 / 20%);
  box-shadow: 0 0.1rem 20px 0 rgb(255 62 62 / 20%);
  text-align: center;
  font-family: PingFangSC-Semibold;
  border: 1px solid #ff2000;
}
</style>