<template>
    <div>
        <conment :getid='id'></conment>
    </div>
</template>
<script>
import subconment from '../sub-component/subconment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id+1
        }
    },
    components:{
        conment:subconment
    }
}
</script>
<style lang="scss" scoped>

</style>