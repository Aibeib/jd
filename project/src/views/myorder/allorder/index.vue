<template>
    <div class="allorder">
        
       <div class="orderlist" v-for="item in 6" :key="item">
           <div class="shopTitle">
                
                <div class="shop">
                    <van-icon name="shop-o" />
                    <p>立米眼镜旗舰店</p>
                    <van-icon name="arrow" />
                </div>
                <div class="operate">
                    <div class="del">
                        <span>已完成</span>
                        <van-icon name="delete-o" />
                    </div>
                </div>
           </div>
            <div class="ordermessage">
                    <div class="orderimg">
                        <img src="https://img10.360buyimg.com/n2/jfs/t1/175497/23/2180/208298/606ae100E1f8c1cb5/80b98c5c0b890862.jpg" alt="">
                    </div>
                    <div class="orderdesc">
                        <p>{{desc}}</p>
                    </div>
                    <div class="num">
                        <em>X1</em>
                    </div>
            </div>
            <div class="pay clean">
                <div>
                    <span>实付 <em>￥398.00</em></span>
                </div>
            </div>
            <div class="btn">
                <div>
                    <button>评价晒单</button>
                    <button>再次购买</button>
                </div>
            </div>
          
       </div>
    </div>
</template>

<script>
export default {
    
    components: {},
    data() {
        
        return {
            desc:'你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'
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
.btn {
    width: 100%;
    margin-top: 10px;
}
.btn>div{
    display: flex;
    justify-content: flex-end;
}
.btn div button{
    border: 0;
    padding: 5px 15px;
    border-radius: 16px;
    background-color: #fff;
}
.btn div button:nth-child(1){
    border: 1px solid #ccc;
    color: #000;
    margin-right: 10px;
}
.btn div button:nth-child(2){
    border: 1px solid #f2270c;
    color: #f2270c;
}

.pay em{
    color: #000;
    font-size: 13px;
    font-weight: bold;
}
.pay{
    margin-top: 5px;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
}
.pay>div{
    float: right;
}
.operate span{
    font-size: 14px;
    color:#ccc;
    display: inline-block;
    border-right: 2px solid #eee;
    padding: 1px 10px;
    margin-right: 10px;
    
}
.operate {
    display: flex;
    align-items: center;
}
.num em{
    color:#666;
}
.orderdesc{
    width: 65%;
    margin: 0 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.orderdesc p{
    line-height: 18px;
    font-size: 14px;
    color: #333;
}
.ordermessage{
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.orderimg img{
    width: 70px;
    border-radius: 10px;
}

.del {
    overflow: hidden;
}
.del .van-icon-delete-o{
    top: 3px;
}
.allorder{
    background-color: #fafafa;
    padding: 0 10px;
    overflow: hidden;
    padding-bottom: 50px;
}
.shop p{
    font-size: 14px;margin: 0 5px;
}
.orderlist{
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 6px;
    margin-top: 10px;
    box-shadow: 1px 1px 10px #ccc;
}
.orderlist .van-icon{
    font-size: 18px;
    color: #bbb;
}
.orderlist
.shop{
    display: flex;
    align-items: center;
}
.shopTitle{
    display: flex;
    justify-content: space-between;
    
}
</style>