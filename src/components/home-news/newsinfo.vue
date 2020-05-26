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
    <div class="content" v-html="infocontent"></div>
    <!-- 评论子组件 -->
    <conment :getid="this.id"></conment>
  </div>
</template>
 
 <script>
 import subconment from "../sub-component/subconment.vue"

export default {
  data() {
    return {
      id: this.$route.params.id,
      obj: {},
      infocontent:{},
    };
  },
  created() {
    this.getinfo();
    this.getinfocontent();
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
    getinfocontent() {
      this.infocontent=this.loadtxt("../../../txt/"+this.id+".txt");
    },
    //加载本地文件
    loadtxt(name) {
      let xhr = new XMLHttpRequest(),
      okStatus = document.location.protocol === "file:" ? 0 : 200;
      xhr.open("GET", name, false);
      xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
      xhr.send(null);
      return xhr.status === okStatus ? xhr.responseText : null;
    }
  },
  components:{
      conment:subconment
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