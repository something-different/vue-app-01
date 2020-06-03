<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipePic" :key="item.id">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		            <img src="../../image/icon/icon1.jpg">
		            <div class="mui-media-body">新闻资讯</div> </router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
		            <img src="../../image/icon/icon2.jpg"><span class="mui-badge icon-badge">5</span>
		            <div class="mui-media-body">图片分享</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodList">
		            <img src="../../image/icon/icon3.jpg">
		            <div class="mui-media-body">商品购买</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../image/icon/icon4.jpg">
		            <div class="mui-media-body">聊天</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../image/icon/icon5.jpg">
		            <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../image/icon/icon6.jpg">
		            <div class="mui-media-body">联系我们</div></a></li>
		</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            swipePic:[],
            
        }
    },
    created(){
        this.getSwipePic();
    },
    methods:{
        getSwipePic(){
           this.axios.get('/api/swipePic')
           .then((response)=>{
               this.swipePic=response.data.data;
           })
           .catch((error)=>{
               Toast("something wrong")
           })
        }
    }
}
</script>

<style lang='scss' scoped>
.mint-swipe{height: 200px;}
.mint-swipe{
    img{width: 100%;height: 100%;}
}
ul{
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .icon-badge{
        margin-top: -30px;
        background-color: palevioletred;
        color: wheat;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
</style>