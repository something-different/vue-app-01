<template>
    <div>
        <div class="goodlist">
            <div class="gooditem" v-for="(item , i) in goodlist" :key="i">
                <router-link :to="'/home/goodinfo/'+item.id">
                <img :src="item.img_url" alt="">
                <h3>{{item.title}}</h3>
                <div class="bottom">
                    <div class="price">
                        <span class="new">￥{{item.new_price}}</span>
                        <span class="old">￥{{item.old_price}}</span>
                    </div>
                    <div class="content">
                        <span class="status">{{item.status}}</span>
                        <span class="num">{{item.num}}</span>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
        <mt-button type="danger" plain size='large' @click="loadmore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            pageIndex:1,
            goodlist:[],
        }
    },
    created() {
        this.getgoodlist();
    },
    methods:{
        getgoodlist(){
            this.axios.get('/api/goodlist/'+this.pageIndex)
            .then(response=>{
                if(response.data.data.length!=0){
                    this.goodlist=this.goodlist.concat(response.data.data);
                }else{
                    Toast('没有更多了~~')
                }
            })
            .catch(err=>{
                console.log(err);
            })
        },
        loadmore(){
            this.pageIndex++;
            this.getgoodlist();
        }
    }
}
</script>
<style lang="scss" scoped>
.goodlist{
    display: flex;
    flex-wrap: wrap;
    padding: 0px 4px;
    padding-bottom: 15px;
    justify-content: space-between;
    .gooditem{
        width: 49%;
        border: 1px solid #CCC;
        box-shadow: 0 0 7px #CCC;
        font-size: 14px;
        color: grey;
        background-color: white;
        margin-top: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            width: 100%;
            min-height: 178px;
        }
        h3{
            font-size: 16px;
            color: black;
            font-weight: bold;
        }
        .bottom{
                background-color: #eee;
                padding: 3px 5px;
                margin: 2px 2px;
            .price{
                margin: 6px 0px;
            .new{
                font-size: 18px;
                color: red;
            }
            .old{
                    text-decoration: line-through;
                    display: inline-block;
                    margin-left: 5px;
            }
        }
        .content{
            display: flex;
            justify-content: space-between;
            .status{

            }
            .num{

            }
        }
        }
    }
}

</style>