<template>
  <div class="reg">
    <div class="header">
      <van-nav-bar title="京东登录注册" left-text="" left-arrow>
        <template #right> </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="nickname"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />

        <van-field name="uploader" label="选择头像">
          <template #input><van-uploader v-model="uploader" /> </template>
        </van-field>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >注册</van-button
          >
        </div>
      </van-form>
      <p class="quick-btn">
        <span class="J_ping planBLogin">短信验证码登录</span
        ><span class="J_ping quickReg">手机快速注册</span>
      </p>
      <van-divider class="txt-otherLogin">其它注册方式</van-divider>
      <div class="quick-type">
        <p>
          <span class="iconfont icon-qq"></span>
          <i>QQ</i>
        </p>
        <p>
          <span class="iconfont icon-weixin"></span>
          <i>微信</i>
        </p>
        <p>
          <span class="iconfont icon-apple"></span>
          <i>苹果</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from "../../utils/request";
import { serveUrl } from "../../utils/common";
import { setToken } from "../../utils/util";
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      uploader: [{ url: "" }],
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      post(`${serveUrl}${this._URL.login}`, {
        userName: "333",
        password: "111",
      }).then((res) => {
        console.log(res);
        setToken(res.token);
      });
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
.van-cell {
  padding: 20px 16px !important;
}
.van-cell {
  padding: 20px 16px !important;
}
.quick-btn {
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.14rem;
  margin-top: 0.3rem;
  overflow: hidden;
}
.planBLogin {
  float: left;
}
.quickReg {
  float: right;
}
.txt-otherLogin {
  color: rgba(0, 0, 0, 0.2);

  margin-top: 0.8rem;
  background: #fff;
  text-align: center;
}
.van-grid-item {
  border-radius: 50px !important;
}
.quick-type {
  width: 325px;
  height: 69px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}
.quick-type p {
  width: 50px;
  height: 50px;
}
.quick-type :nth-child(3) {
  background-color: #000;
  border-radius: 50%;
}
.quick-type span {
  font-size: 50px;
  display: block;
}
.quick-type :nth-child(1) span {
  color: #4a90e2;
}
.quick-type :nth-child(2) span {
  color: chartreuse;
}
.quick-type :nth-child(3) span {
  color: #fff;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
}
.quick-type i {
  display: block;
  margin-top: 15px;
}
.policy_tip {
  text-align: center;
  line-height: 0.2rem;
  font-size: 0.13rem;
  color: rgba(0, 0, 0, 0.3);
}
.policy_tip span {
  color: #4a90e2;
}
</style>