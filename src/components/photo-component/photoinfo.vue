<template>
    <div>
        <h3>title</h3>
        <div class="subtitle">
            <span>发表时间：2020-6-1</span>
            <span>点击量：0</span>
        </div>
        <div class="line" style="border: 0.5px solid #ccc;"></div>
        <!--这是缩略图部分-->
        <!--这是内容部分-->
        <div class="content" ></div>
        
        <!--评论部分-->
        <conment :getid="this.id"></conment>
    </div>
</template>
<script>
import subconment from '../sub-component/subconment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
        }
    },
    created(){

    },
    methods:{

    },
    components:{
        conment:subconment
    }
}
</script>
<style lang="scss" scoped>

</style>