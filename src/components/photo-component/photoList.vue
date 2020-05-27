<template>
  <div>
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="item in photoCatalog" :key="item.id">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
  </div>
</template>
<script>
import mui from "../../lib/MUI/js/mui.min.js"
export default {
    data(){
        return {
            photoCatalog:[],
        }
    },
    created(){
        this.getPhotoCatalog();
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
</style>