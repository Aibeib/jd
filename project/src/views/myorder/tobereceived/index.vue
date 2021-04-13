<template>
    <div class="received">
         <div class="none">
           <div >
               <img src="https://img12.360buyimg.com/img/s220x220_jfs/t1/109425/11/5810/36261/5e413d09E382bfa26/d29c1a60c5f03453.png" alt="">
               <p>你暂时没有相关订单</p>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    
    components: {},
    data() {
        
        return {
            
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
.received{
    padding-top: 100px;
}
.none div{
    
    top: 50%;
    width: 100%;
    text-align: center;
    margin:  0 auto;
}
.none div p{
    font-size: 14px ;
    margin-top: 10px;
    color: #999;
}
.none div img{
    width: 150px;
    margin: 0 auto;
}
</style>