<template>
    <div class="footer">
        <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
            <van-tabbar-item  to="/home"><i class="iconfont icon-jingdong"></i> <p class="txts">首页</p></van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
            <van-tabbar-item  to="surprise"><i class="iconfont icon-niu"></i><p class="txts">京喜</p></van-tabbar-item>
            <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/mine" icon="friends-o">未登录</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    
    components: {},
    data() {
        
        return {
            active:0
        };
    },
    methods: {
        
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
<style scoped>
.van-hairline--top-bottom{
    background-color: #fff;
    box-shadow: 1px 1px 10px #bbb;
}
.icon-jingdong,.icon-niu{
    font-size: 23px;
    text-align: center;
    display: inline-block;
    margin-top: -5px;
    margin-bottom: 5px;
}
/* .txts{
    font-size: 12px!important;
    margin-top: 2px;
} */
.van-tabbar-item__text{
    font-size: 12px !important;
}
</style>