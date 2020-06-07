<!--只需要传递path路径就可以进行加载本地文件-->
<template>
    <div class="content" v-html="infocontent"></div>
</template>
<script>
export default {
    data(){
        return {
            infocontent:{},
        }
    },
    props:[
        'getpath'
    ],
    created(){
        this.getinfocontent();
    },
    methods:{
        getinfocontent() {
            this.infocontent=this.loadtxt("../../../txt/"+this.getpath+".txt");
        },
        loadtxt(name) {
            let xhr = new XMLHttpRequest(),
            okStatus = document.location.protocol === "file:" ? 0 : 200;
            xhr.open("GET", name, false);
            xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
            xhr.send(null);
            return xhr.status === okStatus ? xhr.responseText : null;
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
      img{
          width: 100%;
          height: 100%;
      }
  }
</style>