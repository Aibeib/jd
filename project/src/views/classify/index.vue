<template>
    <div class="classify">
        分类
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
        this.changeactive(1)
        console.log(this.$store.state.footerActive.active)
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