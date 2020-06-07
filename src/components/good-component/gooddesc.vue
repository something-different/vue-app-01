<template>
    <div class="gooddesc">
        <h3>{{title}}</h3>
        <hr>
        <loadfile :getpath="this.path"></loadfile>
    </div>
</template>
<script>
import subloadfile from '../sub-component/subloadfile.vue'
export default {
   data(){
       return {
           title:this.$route.params.title,
           id:this.$route.params.id,
           path:''
       }
   },
    created(){
        this.getpath();
    },
    methods:{
        getpath(){
            this.path='goodinfo/'+this.id;
        }
    },
    components:{
        loadfile:subloadfile
    }
}
</script>
<style lang="scss">
.gooddesc{
.content {
      p{
          .content-picture{
              width: 375px;
            }
      }
  }
}
</style>