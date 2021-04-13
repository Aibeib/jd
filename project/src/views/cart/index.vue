<template>
    <div class="cart">
        购物车
    </div>
</template>
<script>

import { mapMutations } from 'vuex'
export default {
    
    components: {},
    data() {
        
        return {
            
        };
    },
    methods: {
        ...mapMutations({
            changeactive: 'footerActive/setActive'
        })
    },
    created() {
      this.changeactive(3)
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
</style>
