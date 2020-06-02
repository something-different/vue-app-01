<template>
  <div class="photoList">
      <!--头部导航栏-->
    <div id="slider" class="mui-slider">
		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="(item , i) in photoCatalog" :key="i" @click="getPhoto(i)">
					{{item.title}}
				</a>
			</div>
		</div>
	</div>

    <!-- 底部图片懒加载 -->
    <ul>
        <router-link  v-for="( item , i ) in photoList" :key="i" :to="'/home/photoinfo/'+item.id" tag="li">
            <img class="photo" v-lazy="item.img_url">
            <div class="info">
                <div class="titile">{{item.title}}</div>
                <div class="content">{{item.zhaiyao}}</div>
            </div>
        </router-link>
    </ul>

  </div>
</template>
<script>
import mui from "../../lib/MUI/js/mui.min.js"
export default {
    data(){
        return {
            photoCatalog:[],
            photoList:[],
        }
    },
    created(){
        this.getPhotoCatalog();
        this.getPhoto(0);
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getPhotoCatalog(){
            this.axios.get('/api/getPhotoCatalog')
            .then(response=>{
                response.data.data.unshift({id:0,title:"全部"});
                this.photoCatalog=response.data.data;
            })
            .catch(err=>{
                console.log(err);
            })
        },
        getPhoto(phtotoid){
            this.axios.get('/api/getImg/'+phtotoid)
            .then(response=>{
                console.log(phtotoid);
                this.photoList=response.data.data;
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
};
</script>
<style lang="scss" scoped>
*{
    touch-action: pan-y
}
.mui-scroll{
    a{
        text-decoration: none;
    }
}
.photoList{
    ul{
        padding: 0;
        margin: 0;
        li{
            list-style: none;
            margin-bottom: 10px;
            background-color: #CCC; 
            position: relative;
            img[lazy=loading] {
                width: 375px;
                height: 300px;
             }
             .photo{
                width: 375px;
                border-radius: 5%;
             }
             .info{
                color: white;
                position: absolute;
                bottom: 0;
                border-radius: 5%;
                max-height: 65px;
                background: rgba(0,0,0,0.4);
                padding: 0 15px;
                 .title{
                     font-size: 16px;
                 }
                 .content{
                     font-size: 14px;
                 }
             }
        }
    }
}
</style>