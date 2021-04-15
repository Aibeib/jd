<template>
    <div class="myorder">
        <div class="">
           <van-nav-bar title="我的订单" left-text="" left-arrow @click-left="onClickLeft" >
                <template #right>
                    <van-icon name="ellipsis" size="18" />
                </template>
            </van-nav-bar>
        </div>
          <div class="search">
            <van-search
            v-model="value"
            shape="round"
            background="#fff"
            placeholder="搜索我的订单"
            />
        </div>
        <div class="mycontent">
            <div class="titletag">
                <van-tabs v-model="$store.state.footerActive.mysec" @click="changetag" :title-active-color="'#f2270c'">
                    <van-tab title="全部"></van-tab>
                    <van-tab title="待付款"></van-tab>
                    <van-tab title="待收货"></van-tab>
                    <van-tab title="已完成"></van-tab>
                </van-tabs>
            </div>
            <div class="xia">
                <van-dropdown-menu>
                    <van-dropdown-item :options="option1" />
                </van-dropdown-menu>
            </div>
        </div>
        <div>
            <Allorder v-if="$store.state.footerActive.mysec==0"></Allorder>
            <Obligation v-if="$store.state.footerActive.mysec==1"></Obligation>
            <Tobereceived v-if="$store.state.footerActive.mysec==2"></Tobereceived>
            <Finshed v-if="$store.state.footerActive.mysec==3"></Finshed>
        </div>
    </div>
</template>

<script>
    import Allorder from './allorder'
    import Obligation from './obligation'
    import Tobereceived from './tobereceived'
    import Finshed from './finshed'
    import Vue from 'vue'
    import { mapMutations } from 'vuex'
    import { Tab, Tabs } from 'vant';

    Vue.use(Tab);
    Vue.use(Tabs)
export default {
    components: {Allorder,Obligation,Tobereceived,Finshed},
    data() {
        return {
            active: 0,
            value:'',
            mycontent:[
                {title:'全部订单',name:''},
                {title:'待付款',name:''},
                {title:'待收货',name:''},
                {title:'已完成',name:''},
                {title:'',name:'arrow-up'},
            ],
            value1: 0,
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
                { text: '活动商品', value: 3 },
                { text: '活动商品', value: 4 },
                { text: '活动商品', value: 5 },
                { text: '活动商品', value: 6 },
                { text: '活动商品', value: 7 },
            ],
          
        };
    },
    methods: {
        ...mapMutations({
              changemyrouter:'footerActive/changeMysec'
          }),
      changetag(index){
          this.changemyrouter(index)
          console.log(index)
      },
      onClickLeft(){
          console.log(1111)
          this.$router.go(-1)
      }
    },
    created() {
        console.log(this.$route.query.id)
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
<style>
body{
    
    background-color: #fafafa;
}
.titletag{
    width: 80%;
}
.xia{
    width: 20%;
    box-sizing: border-box;
    border-left: 1px solid #eee;
    height: 30px;
    margin-top: 5px;
}
.xia .van-dropdown-menu__bar{
    height: 30px;
    box-shadow: none;
    line-height: 30px;
    padding: 6px;
    margin-top: -4px;
    text-align: center;
}
.van-dropdown-menu__title::after{
    right: 10px;
}
.mycontent{
    display: flex;
}
.myorder .van-tabs__content{
    width: 30px;
}
.van-icon-ellipsis{
    color: #000;
    font-weight: bold;
}
.myorder .van-nav-bar .van-icon{
    color: #000 !important;
    font-weight: bold;
}
.myorder .van-popup {
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;
    flex-wrap: wrap;
    padding-left: 7px;
}
.myorder .van-popup .van-cell{
    background-color: #ccc;
    width: 30%;
    border-radius: 20px;
    right: 5px;
    padding: 5px 10px;
    text-align: center;margin-right: 10px;
    margin-bottom: 10px;
}
.myorder .van-popup .van-cell:nth-of-type(3n){
    margin-right: 0;
}
</style>