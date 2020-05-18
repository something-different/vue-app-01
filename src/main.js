import $ from 'jquery'

import "./css/index.css"

import "bootstrap/dist/css/bootstrap.css"

import Vue from 'vue'

import login from "./login.vue"//导入组件

import router from './router.js'

console.log("123");

var vm = new Vue({
    el:"#app",
    data:{
    },
    render:function(creatElements){
        return creatElements(login);
    },//可简写为render:c=>c(login)创建的login.vue文件
    router,
})