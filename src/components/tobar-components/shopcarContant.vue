<template>
    <div>
        <div class="goodtable">
            <div class="shopcarlist" v-for="(item , i) in goodcarlist" :key="i">
            <div class="left">
                <mt-switch v-model="value"></mt-switch>
            </div>
            <div class="middle">
                <img :src="item.img" alt="">
            </div>
            <div class="right">
                <h3>{{item.title}}</h3>
                <div class="info">
                    <span class="price">￥{{item.price}}</span>
                    <numberbox></numberbox>
                    <a href="" class="del">删除</a>
                </div>
            </div>
            </div>
        </div>
        <div class="settlement">
            <div class="settlementinfo">
                <h3>总计</h3>
                <span class="goodsinfo">已勾选商品<span>0</span>，总价：<span>￥0</span></span>
            </div>
            <mt-button size='normal' type='danger'>去结算</mt-button>
        </div>
    </div>
</template>
<script>
import subnumberboxVue from '../sub-component/subnumberbox.vue'
export default {
    data(){
        return {
            goodcarlist:JSON.parse(sessionStorage.getItem("shopcar"))
        }
    },
    created(){
        
    },
    methods:{
        
    },
    components:{
        numberbox:subnumberboxVue
    }
}
</script>
<style lang="scss" scoped>
.goodtable{
    margin-bottom: 145px;
}
.shopcarlist{
    background-color: white;
    display: flex;
    align-items: center;
    border: 1px solid #CCC;
    width: 96%;
    margin: 0px 2%;
    box-shadow: 0 0 7px #BBB;
    height: 105px;
    .left{
        margin: 0px 8px;
    }
    .middle{
        width: 67px;
        img{
            width: 100%;
        }
    }
    .right{
        margin-left: 8px;
        h3{
            font-size: 16px;
            font-weight: bold;
        }
        .info{
            font-size: 14px;
            .price{
                color: red;
                font-weight: bold;
            }
            .del{

            }
        }
    }
}
.settlement{
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #ccc;
        width: 100%;
        box-shadow: 0 0 7px #bbb;
        height: 90px;
        position: fixed;
        bottom: 50px;
        .settlementinfo{
            color: gray;
            margin: 0px 15px;
            font-size: 14px;
            h3{
                font-size: 16px;
                margin-bottom: 10px;
            }
            .goodsinfo{
                span{
                    color: red;
                    font-weight: bold;
                    font-size: 18px;
                }
            }
            button{
                margin-right: 20px;
            }
        }
    }
</style>