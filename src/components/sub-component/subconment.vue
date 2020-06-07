<!--只需要传递id就可以和后台进行交互展示评论-->
<template>
  <div class="cmt">
    <h3>发表评论</h3>
    <div class="line" style="border: 0.5px solid #ccc;margin-bottom:10px"></div>
    <textarea placeholder="请在这里输入你的评论内容~~（补药超过120个字啊）" maxlength="120" v-model="cmtmsg"></textarea>
    <mt-button type="primary" size="large" @click="putcmt">发表意见</mt-button>
    <div class="cmt-list" v-for="(item , i) in getCmtList" :key="i">
      <div class="cmt-title">第{{i+1}}楼&nbsp;&nbsp;&nbsp;用户：{{item.list_name}}&nbsp;&nbsp;&nbsp;发表时间：{{ item.list_time | formatTime}}</div>
      <div class="cmt-content">{{item.list_conment}}</div>
    </div>
    <mt-button type="danger" size="large" plain @click="loadmore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            pageIndex:1,
            getCmtList:[],
            cmtmsg:"",//textarea的内容
        }
    },
    props:[
        'getid'
    ],
    created(){
        this.getcms();
    },
    methods:{
        getcms(){
            this.axios
            .post("/api/cmt-list/" + this.getid+"?pageIndex="+this.pageIndex,{})
            .then(response => {
                this.getCmtList=this.getCmtList.concat(response.data.data.list);
                console.log(response.data.data.list);
            })
            .catch(err => {
                console.log(err);
            });
        },
        loadmore(){
          this.pageIndex++;
          this.getcms();
        },
        putcmt(){
          let putcurcmt={
            list_name:"匿名用户",
            list_time:Date.now(),
            list_conment:this.cmtmsg.trim(),
          }
          this.axios
          .post("/api/cmt-list/"+this.getid,putcurcmt)
          .then(response=>{
            this.getCmtList.unshift(putcurcmt);
            this.cmtmsg='';
            console.log(response.data.data.list);
          })
          .catch(err=>{
            Toast('评论失败~~~');
          })
        }
    }
};
</script>

<style lang="scss" scoped>
.cmt {
  h3 {
    font-size: 20px;
  }
  textarea {
    height: 110px;
    font-size: 14px;
  }
  .cmt-list {
      margin: 8px 0;
      font-size: 14px;
    .cmt-title {
        background-color: #CCC;
        line-height: 2em;
    }
    .cmt-content {
      background-color: white;
      line-height: 3em;
      text-indent: 2em;
    }
  }
}
</style>