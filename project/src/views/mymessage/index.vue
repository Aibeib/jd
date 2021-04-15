<template>
    <div class="updatemessage">
         <div class="header">
            <van-nav-bar title="账户设置" left-arrow>
                <template #right>
                    <van-icon name="ellipsis" />
                </template>
            </van-nav-bar>
        </div>
        <div class="manage">
            <div class="managetitle">
                <h3>管理我的账户</h3>
            </div>
            <div class="personalMessage">
                <ul>
                    <li>
                        <div class="icon1"></div>
                        <div class="icon2"></div>
                        <div class="icon3"></div>
                        <div class="icon4"></div>
                        <div class="nowlogin">
                            <span>当前登录</span>
                        </div>
                        <div class="message">
                            <div class="headimg">
                                <img src="https://img1.baidu.com/it/u=2357578666,3310426204&fm=26&fmt=auto&gp=0.jpg" alt="">
                            </div>
                            <div class="txt">
                                <p>jd_YoFBWVWbJunn</p>
                                <span>用户名:jd_YoFBWVWbJunn</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="address" @click="addresslist">
           <div class="addressleft">
               <h3>收货地址管理</h3>
           </div>
           <div class="addressright">
               <span>创建第一个收货地址</span>
               <van-icon name="arrow" />
           </div>
        </div>
        <div class="safe">
            <div class="account">
            <div class="accountleft">
                <h3>账户与安全</h3>
            </div>
            <div class="accountright" @click="editor">
                <span>密码/实名认证管理</span>
                <van-icon name="arrow" />
            </div>
            </div>
            <div class="paypassword">
                <div class="paypasswordleft">
                    <h3>京东支付密码</h3>
                </div>
                <div class="paypasswordright">
                    <span>去设置</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            
        </div>
        <div class="connect">
            <div class="services">
                <div class="serviceleft">
                    <h3>联系客服</h3>
                </div>
                <div class="serviceright">
                    <span>及时解答用户疑难</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="change">
                <div class="changeleft">
                    <h3>切换站点</h3>
                </div>
                <div class="changeright">
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="select">
                <div class="suggestion">
                    <van-icon name="records" />
                    <span>意见反馈</span>
                </div>
                <div class="jd">
                    <i class="iconfont icon-jingdong"></i>
                    <span>京东客户端</span>
                </div>
                <div class="quitlogin" @click="logout">
                    <van-icon name="contact" />
                    <span>退出登录</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { ShareSheet } from 'vant';
import { Toast } from 'vant';
import { removeToken } from '../../utils/util'
Vue.use(ShareSheet);
export default {
    
    components: {},
    data() {
        
        return {
           
        };
    },
    methods: {
        onSelect(option) {
        Toast(option.name);
            this.showShare = false;
        },
        addresslist(){
            this.$.push('areaList')
        },
        logout(){
            removeToken()
        },
        editor(){
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    beforeCreate() {}, 
    beforeMount() {},
    beforeUpdate() {}, 
    updated() {}, 
    beforeDestroy() {}, 
    destroyed() {}, 
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated() {}, 
    }
</script>
<style >
    .updatemessage .header .van-icon{
        color: #000!important;
        font-weight: bold;
    }
    .updatemessage .header .van-nav-bar .van-icon{
        color: #000!important;
    }
    .myorder .van-nav-bar .van-icon {
        color: #000 !important;
        font-weight: bold;
    }
    /* 底部 */
    .icon-jingdong{
        font-size: 18px;
        position: relative;
        top: 2px;
    }
    .select{
        display: flex;
        justify-content: space-around;
        margin-top: 15px;
        align-items: center;
    }
    .select span{
        font-size: 13px;
        color: #666;
        margin-left: 3px;
    }
    .select .van-icon{
        font-size: 18px;
        top: 5px;
        color: #666;
    }
    /* 中间栏 */
    .address,.account,.paypassword,.services,.change{
        display: flex;
        height: 40px;
        background-color: #fff;
        margin-top: 15px;
        border-radius: 10px;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }
    .account{
        border-radius: 0;
        padding: 0;
        margin: 0;
    }
    .addressright span,.accountright span,.paypasswordright span,.serviceright span,.changeright span{
        color: #999;
        font-size: 13px;
        margin-right: 10px;
    }

    .addressright .van-icon-arrow, .accountright .van-icon,.paypasswordright .van-icon-arrow,.serviceright .van-icon-arrow,.changeright .van-icon-arrow{
        color: #999;
        font-weight: bold;
        font-size: 14px;
        top: 2px;
    }
    .services{
        padding: 0;
        margin: 0;
        border-radius: 0;

    }
    .change{
        border-radius: 0;
        border-top: 1px solid #eee;
        padding: 0;
        margin: 0;
    }
    .connect{
        margin-top: 15px;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
    }
    .paypassword{
        margin: 0;
        border-top: 1px solid #eee;
        border-radius: 0;
        padding: 0;
    }
    .safe{
        padding: 10px;
        background-color: #fff;
        margin-top: 15px;
        border-radius: 10px;
    }
    /* 个人信息 */
    .mymessage .header .van-icon{
        color: #000 !important;
    }
    .message{
        display: flex;
        align-items: center;
    }
    .message .headimg{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 10px;
        overflow: hidden;
    }
    .headimg img{
        width: 50px;
    }
    .managetitle{
        margin-bottom: 15px;
    }
    .txt p{
        margin-bottom: 5px;
        font-size: 11px;
    }
    .txt span{
        color: #999;
    }

    .personalMessage{
        height: 90px;
        background-color: #fff;
        border-radius: 10px;
    }
    .personalMessage ul li{
        height: 60px;
        border: 1px solid #ff414e;
        padding: 20px 15px 10px;
        background: #fff9f9;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
    }
    .manage{ 
        padding: 20px 10px;
        padding-bottom: 20px;
        background-color: #fff;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    .icon1{
        height: 20px;
        width: 20px;
        position: absolute;
        bottom: 14px;
        right: 45px;
        width: 27px;
        height: 22px;
        background: url('../../../public/img/icon1.png') no-repeat;
        background-size: 27px 22px;
    }
    .icon2{
        position: absolute;
        bottom: 0;
        left: 4px;
        width: 25px;
        height: 15px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAbAgMAAABD8jTcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURf/AwEdwTP+8vHLlKlcAAAADdFJOU0cAFwxw2lwAAAA2SURBVBjTY2gKDeMEoQjV0AgFBobQEEYQCmANDWBA46GqDEUCAXTgIdkOcgzCZRg8VJWD1mUA6xFnhdDy+GsAAAAASUVORK5CYII=);
        background-size: 25px 15px;
    }
    .icon3{
        position: absolute;
        width: 52px;
        height: 52px;
        bottom: -22px;
        right: -23px;
        border-radius: 100%;
        background-color: #ffa9a9;
        opacity: .2;
    }
    .icon4{
        position: absolute;
        bottom: 9px;
        right: 18px;
        width: 13px;
        height: 13px;
        background: transparent;
        border-radius: 100%;
        border: 2px solid #ffa9a9;
        opacity: .2;
    }
    .nowlogin{
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 10px;
        background-color: #ffe4e4;
        color: #e2231a;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
</style>