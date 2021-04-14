<template>
    <div class="suprice">
        suprice
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
            changeactive:'footerActive/setActive'
        })
    },
    created() {
        
    },
    mounted() {
        this.changeactive(2)
        
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
