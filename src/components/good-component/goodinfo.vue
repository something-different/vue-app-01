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
            <div class="goodnum"></div>
            <mt-button type='primary' size='small'>立即购买</mt-button>
            <mt-button type='danger' size='small'>加入购物车</mt-button>
        </div>
        <!--这里是商品的基本信息-->
        <div class="goodinfo">
            <h3>商品参数</h3>
            <hr>
            <h5>商品货号：1234567</h5>
            <h5>库存情况：60件</h5>
            <h5>上架时间：2015-04-20 01：00：00</h5>
        </div>
    </div>
</template>
<script>
export default {
    
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

        }
        .old{

        }
    }
    .goodnum{

    }
}
.goodinfo{
    background-color: white;
    h3{

    }
    h5{

    }
}
</style>