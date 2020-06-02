import $ from 'jquery'
import "./css/index.css"

import Vue from 'vue'

//导入mint-ui
import { Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);

import 'mint-ui/lib/style.css'

//导入bootstrap
import "bootstrap/dist/css/bootstrap.css"
//导入MUI
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'
//导入vue-preview
import VuePreview from'vue-preview'
Vue.use(VuePreview) 


//导入组件
import app from "./app.vue"

//导入路由
import router from './router.js'

//导入axios
import axios from 'axios'
import Qs from 'qs'
axios.defaults.baseURL="https://www.fastmock.site/mock/09de337c7891bec524e087a70c823086/vueApp"
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

//导入moment
import moment from 'moment'
//建立全局时间过滤器
Vue.filter("formatTime",function(dateStr,patten="YYYY-MM-DD HH:MM:SS"){
    return moment(dateStr).format(patten)
})

var vm = new Vue({
    el:"#app",
    data:{
    },
    render:function(creatElements){
        return creatElements(app);
    },//可简写为render:c=>c(login)创建的login.vue文件
    router,
})