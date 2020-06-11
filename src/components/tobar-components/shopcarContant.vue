<template>
    <div>
        <div class="goodtable">
            <div class="shopcarlist" v-for="(item , i) in goodcarlist" :key="i">
            <div class="left">
                <mt-switch v-model="value" @change="getsum(item.id,value,item.count,item.price)"></mt-switch>
            </div>
            <div class="middle">
                <img :src="item.img" alt="">
            </div>
            <div class="right">
                <h3>{{item.title}}</h3> 
                <div class="info">
                    <span class="price">￥{{item.price}}</span>
                    <numberbox :value="item.count" :id="item.id" @getcount='getcount' ref="numberboxid"></numberbox>
                    <a href="" class="del">删除</a>
                </div>
            </div>
            </div>
        </div>
        <div class="settlement">
            <div class="settlementinfo">
                <h3>总计</h3>
                <span class="goodsinfo">已勾选商品<span>{{sumnum}}</span>，总价：<span>￥{{sumprice}}</span></span>
            </div>
            <div class="button">
                <mt-button size='normal' type='danger'>去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import subnumberboxVue from '../sub-component/subnumberbox.vue'
export default {
    data(){
        return {
            goodcarlist:JSON.parse(sessionStorage.getItem("shopcar")),
            sumnum:0,
            sumprice:0,
            sumarr:new Map(),
        }
    },
    created(){
        //this.getsum();
    },
    methods:{
        getcount(num){
            console.log(num,this.$refs.numberboxid);
            //this.$store.commit('update',shopobj);
        }
        // getsum(id,value,count,price){
        //     if(value){
        //         var obj={
        //             count:count,
        //             price:price
        //         }
        //         this.sumarr.set(id,obj);
        //     }else{
        //         this.sumarr.delete(id);
        //     }
        //     for(var item of this.sumarr.entries()){
        //         this.sumnum+=item[1].count;
        //         this.sumprice+=parseInt(item[1].price);
        //     }
        // }
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
    margin-bottom: 4px;
    .left{
        margin: 0px 8px;
    }
    .middle{
        width: 105px;
        img{
            width: 100%;
        }
    }
    .right{
        margin-left: 8px;
        h3{
            font-size: 14px;
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
        }
        .button{
            margin-right: 20px;
        }
    }
</style>