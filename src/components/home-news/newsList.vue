<template>
  <div>
    <div class="mui-card" style="margin-bottom: 35px;">
      <ul class="mui-table-view" v-for="item in newsList" :key="item.id">
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" :src="item.img_url">
            <div class="mui-media-body">
              {{item.title}}
              <p class="mui-ellipsis">{{item.zhaiyao}}</p>
              <span>
                  <p>{{item.add_time | formatTime}}</p>
                  <p>点击量：{{item.checkNum}}</p>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNews();
    },
    methods: {
      getNews(){
          this.axios.get('/api/newsList')
           .then((response)=>{
               this.newsList=response.data.message
           })
           .catch((error)=>{
               Toast("something wrong")
           })
      }  
    },
};
</script>
<style lang="scss" scoped>
.mui-table-view .mui-media-object{max-width: 65px;}
.mui-table-view{
    li{
        border-bottom: 1px solid #CCC;
    }
    img{
        height: 65px;
        width: 65px;
        border-radius: 20%;
    }
    span{
        display: flex;
        justify-content: space-between;
        p{
            font-size: 12px;
            color: blue;
        }
    }
}
</style>