<template>
    <div>
        <!--这里是一个图片展示轮播图-->
        <div class="goodimg">
            <img src="https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/3547265549/O1CN01HVtVER1qrUKgej6o0_!!0-item_pic.jpg_230x230.jpg_.webp" alt="">
        </div>
        <!--这里是价格信息-->
        <div class="goodtitle">
            <h3>馒头社二次元动漫周边福袋抱枕等身蕾姆鬼灭之刃公主连结T恤衣服</h3>
            <hr>
            <div class="goodprice">
                <span class="old">市场价：￥2699</span>
                <span class="new">销售价：<span>￥2199</span></span>
            </div>
            <div class="goodnum">
                <span class="mui-content-padded">购买数量:</span> 
				<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
            </div>
            <div class="smallbutton">
                <mt-button type='primary' size='small'>立即购买</mt-button>
                <mt-button type='danger' size='small'>加入购物车</mt-button>
            </div>
        </div>
        <!--这里是商品的基本信息-->
        <div class="goodinfo">
            <h3>商品参数</h3>
            <hr>
            <h5>商品货号：1234567</h5>
            <h5>库存情况：60件</h5>
            <h5>上架时间：2015-04-20 01：00：00</h5>
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.getgoodnum();
    },
    methods:{
        getgoodnum(){
            var testBox=document.getElementById("test");
			testBox.addEventListener('change',function(){
				console.log(testBox.value);
			});
        }
    }
}
</script>
<style lang="scss" scoped>
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
    hr{
        box-sizing: content-box;
        height: 0;
        background-color: #CCC;
        margin: 0;
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
            .mint-button-text{
                font-weight: 0;
                line-height: 33px;
            }
        }
    }
}
.goodinfo{
    background-color: #fff;
    width: 94%;
    margin: 10px 3%;
    border: 1px solid #CCC;
    box-shadow: 0 0 7px #BBB;
    hr{
        background-color: #ccc;
        margin: 0;
    }
    h3{
        height: 30px;
        line-height: 30px;
    }
    h5{
        padding: 10px;
    }
}
</style>