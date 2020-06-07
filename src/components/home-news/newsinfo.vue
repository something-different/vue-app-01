<template>
  <div class="newsinfo_content">
      <!--标题-->
    <h3 class="title">{{obj.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>{{ obj.time | formatTime}}</span>
      <span>{{obj.check}}</span>
    </p>

    <div class="line" style="border: 0.5px solid #ccc;"></div>
    <!-- 内容 -->
    <loadfile :getpath="path"></loadfile>
    <!-- 评论子组件 -->
    <conment :getid="id"></conment>
  </div>
</template>
 
 <script>
 import subconment from "../sub-component/subconment.vue"
 import subloadfile from '../sub-component/subloadfile.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      obj: {},
      infocontent:{},
      path:'',
    };
  },
  created() {
    this.getpath();
    this.getinfo();
  },
  methods: {
    getinfo() {
      this.axios
        .get("/api/newsinfo/" + this.id)
        .then(response => {
          this.obj = response.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getpath(){
      this.path='newsinfo/'+this.id
    }
  },
  components:{
      conment:subconment,
      loadfile:subloadfile
  }
};
</script>
 <style lang="scss">
.newsinfo_content {
  padding: 0 8px;
  .title {
    font-size: 22px;
    color: red;
    text-align: center;
  }
  .subtitle {
    font-size: 14px;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
  .content {
      img{
          width: 100%;
          height: 100%;
      }
  }
}
</style>