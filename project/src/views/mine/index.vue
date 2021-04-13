<template>
    <div class="mine">
        我的
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
        this.changeactive(4)
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
