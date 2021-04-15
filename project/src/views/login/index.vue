<template>
  <div class="login">
    <div class="header">
      <van-nav-bar
        title="京东登录注册"
        left-text=""
        left-arrow
        @click-left="back"
      >
        <template #right> </template>
      </van-nav-bar>
    </div>
    <div class="contene">
      <van-cell-group>
        <van-field
          label=""
          placeholder="用户名/邮箱/手机号"
          v-model="phone"
          clearable
        />

        <van-field
          type="password"
          label=""
          v-show="downIcon"
          placeholder="请输入密码"
          @click-right-icon="eye"
          right-icon="closed-eye"
          v-model="password"
          error-message
          clearable
          @input="upclass"
        />
        <van-field
          type="text"
          label=""
          v-show="!downIcon"
          placeholder="请输入密码"
          @click-right-icon="eye"
          right-icon="eye"
          v-model="password"
          error-message
          clearable
          @input="upclass"
        />
      </van-cell-group>
      <button :class="active ? btn1active : btn1" @click="login">登录</button>
      <button class="btn2">一键登录</button>
      <p class="quick-btn">
        <span class="J_ping planBLogin">短信验证码登录</span
        ><span class="J_ping quickReg" @click="tz">手机快速注册</span>
      </p>
      <van-divider class="txt-otherLogin">其它登录方式</van-divider>
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
      <p class="policy_tip">
        未注册的手机号验证后将自动创建京东账号,登录即代表您已同意<span
          >京东隐私政策</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { setToken } from "../../utils/util";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      phone: "",
      password: "",
      downIcon: true,
      active: false,
      btn1: "btn1",
      btn1active: "btn1-active",
    };
  },
  methods: {
    //密码显示隐藏
    eye() {
      this.downIcon = !this.downIcon;
    },
    //登录请求
    login() {
      const userName = this.phone;
      const password = this.password;
      const that = this;
      this.$http
        .post("http://localhost:3009/api/v1/auth/login", {
          userName,
          password,
        })
        .then((res) => {
          console.log(res);
<<<<<<< HEAD
          setToken(res.data.token);
          this.$router.push("/");
=======
          if (res.status === 200) {
            setToken(res.data.token);
            Toast.loading({
              message: "加载中...",
              forbidClick: true,
              onOpened() {
                setTimeout(() => {
                  Toast.success("登录成功");
                  that.$router.push("/");
                }, 2000);
              },
            });
          }
>>>>>>> master
        });
    },
    //第一个输入框的长度为11位，密码大于6位
    upclass() {
      if (this.phone.length >= 1 && this.password.length >= 6) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
    tz() {
      this.$router.push("/reg");
    },
    back() {
      this.$router.go(-1);
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
  background-color: #ffbcb3;
  border-radius: 0.25rem;
  font-size: 0.16rem;
  color: #fff;
  -webkit-box-shadow: 0 0.1rem 20px 0 rgb(255 62 62 / 20%);
  box-shadow: 0 0.1rem 20px 0 rgb(255 62 62 / 20%);
  text-align: center;
  font-family: PingFangSC-Semibold;
  outline: none;
  border: none;
  pointer-events: none;
}
.btn1-active {
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
  margin-top: 0.1rem;
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
.van-cell {
  padding: 20px 16px;
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
  border-radius: 50px;
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