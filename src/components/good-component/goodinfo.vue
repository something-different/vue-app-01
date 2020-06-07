<template>
    <div>
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>
        <!--这里是一个图片展示轮播图-->
        <div class="goodimg">
            <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item , i) in goodinfoimg" :key="i">
                <img :src="item">
            </mt-swipe-item>
        </mt-swipe>
        </div>
        <!--这里是价格信息-->
        <div class="goodtitle">
            <h3>{{goodinfo.good_name}}</h3>
            <hr>
            <div class="goodprice">
                <span class="old">市场价：￥{{goodinfo.good_price_old}}</span>
                <span class="new">销售价：<span>￥{{goodinfo.good_price_new}}</span></span>
            </div>
            <div class="goodnum">
                <span class="mui-content-padded">购买数量:</span> 
				<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' >
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
            </div>
            <div class="smallbutton">
                <mt-button type='primary' size='small'>立即购买</mt-button>
                <mt-button type='danger' size='small' @click="balltrans">加入购物车</mt-button>
            </div>
        </div>
        <!--这里是商品的基本信息-->
        <div class="goodinfo">
            <h3>商品参数</h3>
            <hr>
            <h5>商品货号：{{goodinfo.good_title_num}}</h5>
            <h5>库存情况：{{goodinfo.good_titie_rest}}件</h5>
            <h5>上架时间：{{goodinfo.good_title_time | formatTime}}</h5>
            <hr>
            <mt-button type='primary' size='large' plain @click="goDesc(goodinfo.good_name,id)" >图文介绍</mt-button>
            <mt-button type='danger' size='large' plain @click="goCont(id)">商品评论</mt-button>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            id:this.$route.params.id,
            goodinfo:{},
            goodinfoimg:[],
            ballflag:false,
            ballleft:null,
            balltop:null,
        }
    },
    created(){
        this.getgoodinfo();
    },
    methods:{
        getgoodinfo(){
            this.axios.get('/api/goodinfo/'+this.id)
            .then(response=>{
                if(response.data.data){
                    this.goodinfo=response.data.data;
                    this.goodinfoimg=response.data.data.img_url;
                }else{
                    Toast("这里没有详细信息哦~~~~");
                    let timer=setTimeout(function(){
                        this.$router.go(-1);
                    },5000);
                }
            })
            .catch(err=>{
                console.log(err);
            })
        },
        balltrans(){
            this.ballflag=!this.ballflag;
        },
        goDesc(title,id){
            this.$router.push({name:'gooddesc',params:{title,id}});
        },
        goCont(id){
            this.$router.push({name:'goodcont',params:{id}});
        },
        beforeEnter(el){
            el.style.transform='translate(0 , 0)';
        },
        enter(el,done){
            el.offsetWidth;
            //定位小球位置
            const ballposition = this.$refs.ball.getBoundingClientRect();
            const shopbadge=document.getElementById("shopbadge");
            const shopbadgeposition = shopbadge.getBoundingClientRect();
            const xdistance=shopbadgeposition.left-ballposition.left;
            const ydistance=shopbadgeposition.top-ballposition.top;
            el.style.transform='translate('+xdistance+'px, '+ydistance+'px)';
            el.style.transition='all 1s ease'
            done();
        },
        afterEnter(el){
             //改变会标数值
            const shopbadge=document.getElementById("shopbadge");
            shopbadge.innerText=parseInt(shopbadge.innerText)+1;
            this.ballflag=!this.ballflag;
        }
    }
}
</script>
<style lang="scss" scoped>
.ball{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 403px;
    left: 160px;
}
.mint-swipe{height: 200px;}
.mint-swipe{
    img{width: 100%;height: 100%;}
}
hr{
        box-sizing: content-box;
        height: 0;
        background-color: #CCC;
        margin: 0;
    }
.goodimg{
    background-color: #fff;
    width: 94%;
    margin: 0px 3%;
    margin-top: -9px;
    box-shadow: 0 0 7px;
    border: 1px solid #CCC;
    img{
        width: 100%;
    }
}
.goodtitle{
    background-color: #fff;
    width: 94%;
    margin: 0px 3%;
    margin-top: 15px;
    box-shadow: 0 0 7px #BBB;
    border: 1px solid #CCC;
    h3{
        font-size: 16px;
        line-height: 25px;
        padding-top: 10px;
        font-weight: bold;
        padding: 10px 10px;
    }
    
    .goodprice{
        font-size: 14px;
        color: gray;
        padding: 10px;
        .new{
            margin-left: 10px;
            span{
                font-weight: bold;
                color: red;
                font-size: 16px;
            }
        }
        .old{
            text-decoration: line-through;
        }
    }
    .goodnum{
        margin: 5px 0px;
        span{

        }
        div{
            .mui-numbox{
                margin-top: -7px;
            }
        }
    }
    .smallbutton{
        button{
            margin: 15px 10px;
            margin-bottom: 20px;
        }
        .mint-button-text{
            font-weight: 0 !important;
            line-height: 33px !important;
        }
    }
}
.goodinfo{
    background-color: #fff;
    width: 94%;
    height: 310px;
    margin: 10px 3%;
    border: 1px solid #CCC;
    box-shadow: 0 0 7px #BBB;
    h3{
        height: 35px;
        line-height: 35px;
        padding: 0px 10px;
        font-size: 18px;
        font-weight: bold;
    }
    h5{
        padding: 10px;
    }
    button{
        margin: 15px 3%;
        width: 94%;
    }
    .mint-button-text{
        font-weight: normal;
    }
}
</style>