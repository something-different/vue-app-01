<template>
    <div class="newsinfo_content">
        <h3 class="title">{{obj.title}}</h3>
        <p class="subtitle">
            <span>{{obj.time}}</span>
            <span>{{obj.check}}</span>
        </p>

        <div class="line"></div>
        
        <div class="content"></div>
    </div>
</template>
 
 <script>
 export default {
     data() {
         return {
             id:this.$route.params.id,
             obj:{}
         }
     },
     created(){
         this.getinfo();
         this.getinfocontent();
     },
     methods:{
         getinfo(){
             this.axios.get('/api/newsinfo/'+this.id)
             .then((response)=>{
                 this.obj=response.data.data;
             })
             .catch((err)=>{
                 console.log(err);
             })
         },
         getinfocontent(){
             var reader = new FileReader();
             reader.readAsText("../../../infocontent/2.txt",'utf-8');
             reader.onload=()=>{
                 console.log(reader.result);
             }
         }
     },
 }
 </script>
 <style lang="scss">
 .newsinfo_content{
     padding:0 8px;
     .title{
         font-size: 22px;
         color: red;
         text-align: center;
     }
     .subtitle{
         font-size: 14px;
         color: blue;
         display: flex;
         justify-content: space-between;
     }
     .line{border: 0.5px solid #CCC;}
     .content{}
 }
 </style>