import $ from 'jquery'
import "./css/index.css"

import Vue from 'vue'

//使用vue-dev
Vue.config.devtools = true;
//导入mint-ui
import { Header,Swipe,SwipeItem,Button,Lazyload,Switch} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);
Vue.component(Switch.name, Switch);

import 'mint-ui/lib/style.css'

//导入bootstrap
import "bootstrap/dist/css/bootstrap.css"
//导入MUI
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'
//导入vue-preview
import VuePreview from'vue-preview'
Vue.use(VuePreview) 

//导入路由
import router from './router.js'
//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex);
var shopcar=JSON.parse(sessionStorage.getItem("shopcar")) || [];
const store=new Vuex.Store({
    state:{
        shopcar:shopcar,
        //对象内容应该是{id：商品id,title:商品title，count：商品数量，price：商品单价，selected：商品选择状态}
    },
    mutations:{
        addgood(state,goodinfo){
            var flag=false;
            //有的话更新count
            state.shopcar.some(item=>{
                if(item.id==goodinfo.id){
                    item.count+=parseInt(goodinfo.count);
                    flag=true;
                    return true;
                }
            })
            //没有的话push进去
            if(!flag){
                state.shopcar.push(goodinfo);
            }
            //暂时暂存到SessionStorage中
            sessionStorage.setItem("shopcar",JSON.stringify(state.shopcar));
        },
        updategoodinfo(state,goodinfo){
            //购物车的数据同步
            
        }
    },
    getters:{
        getallcount:(state)=>{
            var c=0;
            state.shopcar.forEach(item=>{
                c+=item.count;
            });
            return c;
        }
    }
})

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

//导入组件
import app from "./app.vue"

var vm = new Vue({
    el:"#app",
    data:{
    },
    render:function(creatElements){
        return creatElements(app);
    },//可简写为render:c=>c(login)创建的login.vue文件
    router,
    store,
})