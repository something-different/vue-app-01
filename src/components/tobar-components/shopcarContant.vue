<template>
    <div>
        <div class="goodtable">
            <div class="shopcarlist" v-for="(item , i) in goodcarlist" :key="i">
            <div class="left">
                <mt-switch 
                v-model="$store.getters.getselect[item.id]"
                @change="selectchange(item.id,$store.getters.getselect[item.id])"
                ></mt-switch>
            </div>
            <div class="middle">
                <img :src="item.img" alt="">
            </div>
            <div class="right">
                <h3>{{item.title}}</h3> 
                <div class="info">
                    <span class="price">￥{{item.price}}</span>
                    <numberbox :value="item.count" :id="item.id" @getcount='getcount' @getshopcarid='getshopcarid'></numberbox>
                    <a href="" class="del" @click.prevent="delitem(item.id,i)">删除</a>
                </div>
            </div>
            </div>
        </div>
        <div class="settlement">
            <div class="settlementinfo">
                <h3>总计</h3>
                <span class="goodsinfo">
                    已勾选商品
                    <span>{{$store.getters.getgoodcountsum}}</span>
                    ，总价：
                    <span>￥{{$store.getters.getgoodpricesum}}</span>
                </span>
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
            itemid:null,
            itemcount:null,
            sumnum:0,
            sumprice:0,
            sumarr:new Map(),
        }
    },
    created(){
        //this.getsum();
    },
    watch:{
        itemcount:function(newval,oldval){
            this.updatestore();
        }
    },
    methods:{
        //获取子节点传来的count值
        getcount(num){
            //console.log('count'+num);
            this.itemcount=num;
        },
        //获取子节点传来的id值
        getshopcarid(num){
            //console.log('id'+num);
            this.itemid=num;
        },
        //更新store中的数据
        updatestore(){
            var obj={
                id:this.itemid,
                count:this.itemcount,
            }
            this.$store.commit('updategoodinfo',obj);
        },
        //删除按钮
        delitem(id,i){//id删除的是store中的数据，i删除goodlist中数据
            this.$store.commit('delgoodinfo',id);
            this.goodcarlist.splice(i,1);
        },
        //改变item选中状态
        selectchange(id,selectflag){
            this.$store.commit('selgoodinfo',{id,selectflag});
        }
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