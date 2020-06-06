import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import homeContant from './components/tobar-components/homeContant.vue'
import memberContant from './components/tobar-components/memberContant.vue'
import shopcarContant from './components/tobar-components/shopcarContant.vue'
import searchContant from './components/tobar-components/searchContant.vue'
import newsList from './components/home-news/newsList.vue'
import newsinfo from './components/home-news/newsinfo.vue'
import photoList from './components/photo-component/photoList.vue'
import photoinfo from './components/photo-component/photoinfo.vue'
import goodList from './components/good-component/goodList.vue'
import goodinfo from './components/good-component/goodinfo.vue'
import gooddesc from './components/good-component/gooddesc.vue'
import goodcont from './components/good-component/goodcont.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:"/home"},
        {path:'/home',component:homeContant},
        {path:'/home/newsList',component:newsList},
        {path:'/home/newsinfo/:id',component:newsinfo},
        {path:'/home/photoList',component:photoList},
        {path:'/home/photoinfo/:id',component:photoinfo},
        {path:'/home/goodList',component:goodList},
        {path:'/home/goodinfo/:id',component:goodinfo,name:"goodinfo"},
        {path:'/home/gooddesc',component:gooddesc,name:"gooddesc"},
        {path:'/home/goodcont',component:goodcont,name:'goodcont'},

        {path:'/member',component:memberContant},
        {path:'/shopcar',component:shopcarContant},
        {path:'/search',component:searchContant},
        
    ],
    linkActiveClass:"mui-active",//点击的link高亮转为mui-active组件自带的类
})

export default router;