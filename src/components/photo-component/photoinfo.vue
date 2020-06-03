<template>
    <div class="photoinfo">
        <h2>{{photoinfo.title}}</h2>
        <div class="subtitle">
            <span>发表时间：{{photoinfo.add_time | formatTime}}</span>
            <span>点击量：{{photoinfo.click}}</span>
        </div>
        <div class="line" style="border: 0.5px solid #ccc;"></div>
        <!--这是缩略图部分-->
        <vue-preview :slides="imglist" @close="handleClose" class="imgpreview"></vue-preview> 
        <!--这是内容部分-->
        <div class="content">{{photoinfo.content_url}}</div>
        
        <!--评论部分-->
        <conment :getid="this.id"></conment>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import subconment from '../sub-component/subconment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            photoinfo:{},
            imglist: [],
        }
    },
    created(){
        this.getphotoinfo();
        this.getimgpreview();
    },
    methods:{
        getphotoinfo(){
            this.axios.get('/api/getimginfo/'+this.id)
            .then(response=>{
                if(response.data.data){
                    this.photoinfo=response.data.data;
                    console.log(response.data.data);
                }else{
                    Toast("这里没有详细情况哦~");
                    let timer=setTimeout(()=>{
                        this.$router.go(-1);
                    },5000)
                }
            })
            .catch(err=>{
                Toast("something err")
            })
        },
        getimgpreview(){
            this.axios.get('/api/getpreview/'+this.id)
            .then(response=>{
                this.imglist=response.data.data;
                this.imglist.forEach(element => {
                    element.w=1000;
                    element.h=800;
                    element.src=element.src;
                    element.msrc=element.src;
                });
                console.log(this.imglist);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    components:{
        conment:subconment
    }
}
</script>
<style lang="scss">
.photoinfo{
    h2{
        font-size: 18px;
        text-align: center;
        color: red;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
    .imgpreview{
        height: 220px;
        figure{
            float: left;
            padding: 5px 0;
            margin: 2.5px;
            padding-top: 10px;
            a{
                img{
                    width: 120px;
                }
            }
        }
    }
    .content{
        font-size: 14px;
        line-height: 30px
    }
}
</style>