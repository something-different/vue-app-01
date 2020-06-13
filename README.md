# 这是一个vue框架做的app的项目

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)


## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局（axios的使用）
[axios的使用](https://www.jianshu.com/p/f959366fadb8)

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 axios

```
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
```
2. 使用 axios 的 this.axios.get 获取数据

```
 this.axios.get('https://www.fastmock.site/mock/09de337c7891bec524e087a70c823086/vueApp/api/swipePic')
           .then((response)=>{
               this.swipePic=response.data.data;
           })
           .catch((error)=>{
               Toast("something wrong")
           })
```
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

这里注意此时的图片在经过webpack打包后可能src会变成object module,这是要对webpack.config.js进行改写
```
{test:/\.(jpg|png|gif|jpeg|bmp)$/,loader:'url-loader?',options:{esModule:false,limit:10240}},
```

## 点击新闻资讯进入

这里本来想用子路由但是发现套用子路由后无法显示内容（这里是全页面跳转，只有一个`<router-view>`）

```
{
            path:'/home',
            component:homeContant,
            children:[
                {path:'/newsList',component:newsList}
            ]
        },
```
原因如下，此时的`<router-view>`只是显示父路由的内容，不显示子路由内容
解决办法：
+ 创建一个新的vue组件显示子组件的`<router-view>`
+ 将子元素提升与父元素平级

## 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link,同时，在跳转的时候应该提供唯一的Id标识符
2. 创建新闻详情的组件页面  NewsInfo.vue
3. 在 路由模块中，将 新闻详情的 路由地址 和 组件页面对应起来
4. 时间过滤器
+ 安装moment.js `cnpm i moment -s` 
+ 导入moment `import moment from 'moment'`
+ 写时间过滤器
```
Vue.filter("format",function(dateStr,patten="YYYY-MM-DD HH:MM:SS"){
    moment(dateStr).format(patten);
})
```
+ 使用过滤器`{{item.time | format(YYYY-MM-DD)}}`或者`{{item.time | format}}`

Tips: moment.js是一个方便时间转换工具
## 实现 新闻详情 的 页面布局 和数据渲染

这里注意在使用v-html时添加内容样式会失效[失效原因](https://blog.csdn.net/xiaomajia029/article/details/99290671?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase)

解决办法：
1. 使用CSS选择器
```
.notes-cont >>> ul > li//使用>>>选择器

```
2. 加类名，删除scope

在显示内容的时候出现问题（没有后端）

1. 利用fastmock进行端口模拟（渲染title）
2. 利用FileReader进行本地文件读取（渲染content）

这里在渲染具体内容时出现问题：
+ 这里没办法直接在fastmock中写具体HTML文件，所以解决办法如下，将HTML文件存储在具体TXT文件中，通过XMLhttprequest对本地文件打开，具体代码如下：
```
loadtxt(name) {
      let xhr = new XMLHttpRequest(),
      okStatus = document.location.protocol === "file:" ? 0 : 200;
      xhr.open("GET", name, false);
      xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
      xhr.send(null);
      return xhr.status === okStatus ? xhr.responseText : null;
    }
```
这里在加载图片时，遇到返回403问题，这里是防止盗用图片的事情发生，这里要在HTML文档最前面加上
```
<meta name="referrer" content="no-referrer" />
```
+ 原因如下：由于referrer在传递时，会携带自己的地址被拦截，但通过设置之后隐藏自己的URL可以对于图片进行加载
## 单独封装一个 comment.vue 评论子组件
1. 先创建一个 单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的 页面中，先手动 导入 comment 组件
 + `import comment from './comment.vue'`
3. 在父组件中，使用 `components` 属性，将刚才导入 comment 组件，注册为自己的 子组件
4. 将注册子组件时候的，注册名称，以 标签形式，在页面中 引用即可

## 获取所有的评论数据显示到页面中
1. getComments
2. 注意组件间的传参问题[组件传参方式](https://www.cnblogs.com/aidixie/p/10385948.html)

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2. 点击加载更多，让 pageIndex++ , 然后重新调用 this.getComments() 方法重新获取最新一页的数据
3. 为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，应该让 老数据 调用 数组的 concat 方法，拼接上新数组

## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
4. 通过 vue-resource 发送一个请求，把评论内容提交给 服务器
5. 当发表评论OK后，重新刷新列表，以查看最新的评论
 + 如果调用 getComments 方法重新刷新评论列表的话，可能只能得到 最后一页的评论，前几页的评论获取不到
 + 换一种思路： 当评论成功后，在客户端，手动拼接出一个 最新的评论对象，然后 调用 数组的 unshift 方法， 把最新的评论，追加到  data 中 comments 的开头；这样，就能 完美实现刷新评论列表的需求；

## 改造图片分析 按钮为 路由的链接并显示对应的组件页面

## 绘制 图片列表 组件页面结构并美化样式
 1. 制作 顶部的滑动条
 2. 制作 底部的图片列表
### 制作顶部滑动条的坑们：
 1. 需要借助于 MUI 中的 tab-top-webview-main.html 
 2. 需要把 slider 区域的 mui-fullscreen 类去掉
 3. 滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下：
  + 导入 mui.js 
  + 调用官方提供的 方式 去初始化：
  ```
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```
 4. 我们在初始化 滑动条 的时候，导入的 mui.js ，但是，
 
 控制台报错： `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode`
  + 经过我们合理的推测，觉得，可能是 mui.js 中用到了 'caller', 'callee', and 'arguments' 东西，但是， webpack 打包好的 bundle.js 中，默认是启用严格模式的，所以，这两者冲突了；
  + 解决方案： 1. 把 mui.js 中的 非严格 模式的代码改掉；但是不现实； 2. 把 webpack 打包时候的严格模式禁用掉；
  + 最终，我们选择了 plan B  移除严格模式： 使用这个插件 babel-plugin-transform-remove-strict-mode

控制台报错：`[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See <URL>`
  + 这里是由于浏览器必须要在执行事件处理函数之后，才能知道有没有掉用过 preventDefault() ，这就导致了浏览器不能及时响应滚动，略有延迟
  + 解决办法：在style引入全局样式`touch-action: pan-y`;

 
 5. 刚进入 图片分享页面的时候， 滑动条无法正常工作， 经过我们认真的分析，发现， 如果要初始化 滑动条，必须要等 DOM 元素加载完毕，所以，我们把 初始化 滑动条 的代码，搬到了 mounted 生命周期函数中；
 6. 当 滑动条 调试OK后，发现， tabbar 无法正常工作了，这时候，我们需要把 每个 tabbar 按钮的 样式中  `mui-tab-item` 重新改一下名字；
 7. 获取所有分类，并渲染 分类列表；
 注意在对样式进行渲染的时候开始默认全部为选中状态`:class="['mui-control-item', item.id==0?'mui-active':'']"`

### 制作图片列表区域
1. 图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`
2. 根据`lazy-load`的使用文档，尝试使用
3. 渲染图片列表数据

### 实现了 图片列表的 懒加载改造和 样式美化

## 实现了 点击图片 跳转到 图片详情页面
1. 在改造 li 成 router-link 的时候，需要使用 tag 属性指定要渲染为 哪种元素
2. 如果没有详细信息，则弹出提示，然后回退
```
 Toast("这里没有详细情况哦~");
 let timer=setTimeout(()=>{
 this.$router.go(-1);
 },5000)
```

## 实现 详情页面的布局和美化，同时获取数据渲染页面

## 实现 图片详情中 缩略图的功能
1. 使用 插件 vue-preview 这个缩略图插件
2. 获取到所有的图片列表，然后使用 v-for 指令渲染数据
3. 注意： img标签上的class不能去掉
4. 注意： 每个 图片数据对象中，必须有 w(大图宽)  h（大图高） src(大图连接) msrc(小图连接) 属性 一般利用forEach进行添加
```
this.imglist=response.data.data;
                this.imglist.forEach(element => {
                    element.w=1000;
                    element.h=900;
                    element.src=element.src;
                    element.msrc=element.src;
                });
```
5. 使用CSS改变样式
> 注意这里要去掉`scope`，`figure`为缩略图列表，`img`定义小图属性

## 手机测试
> 方法：
>> 在同一WIFI环境中，手机可以连接电脑的IP
>> 打开自己的项目，在package.json中，在dev脚本中，添加--host指令，把当前电脑的WIFI IP地址设置为--host指令值
>> 手机打开网址

## 绘制 商品列表 页面基本结构并美化

1. 页面跳转（这里使用的导航对象跳转）
> tips：跳转的方式
>> route-link
>> `<a>`跳转
>> `window.location.href`进行编程式导航
>>> 在VUE中this.$route是路由【参数对象】，所有路由中的参数，params,query都属于它
>>> this.$router是一个路由【导航对象】，用它可以方便使用js代码实现路由跳转，前进后退(path和params互斥，所以要用name+params)
2. 由于没写后台操作，所以这里通过params进行title传递，通过打开本地文件，读取相关信息
3. 由于有两部分都要获取本地文件，直接抽离出来，得到获取本地文件的子组件——loadfile.vue


## 制作小球动画——加入购物车效果
模板
```
<transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
        <div class="ball" v-show="ballflag"></div>
</transition>


beforeEnter(el){

},
enter(el,done){
    el.offsetWidth;
    done();
},
afterEnter(el){

}，
```
1. 定位小球位置，实现点击按钮进行小球出现消失切换
2. 动态分析小球起点的XY值，和落点的XY值（domObj.getBoundingClientRect（）,返回的是top,left,bottom,rigth）
3. 相减得到小球移动距离

## 商品详细介绍页面
1. 渲染页面
2. 这里利用MUI的numberbox组件
3. 这里将numberbox组件抽离出来，成为子组件
4. 这里需要组件间的传值问题

> 子组件向父组件传值
>> 利用`this.$emit()`进行传值

>> 子组件代码如下：  
```
this.$emit('function',this.data)//这里function是父组件的绑定函数
```
>> 父组件代码如下：
```
<component @function="getnum"></component>
...
getnum(num){
    this.childnum=num;
}
```

> 父组件向子组件传值
>> 利用属性传值`props[]`

>> 父组件代码
```
<component :num='number'></component>
```
>> 子组件代码
```
props:[
    'num',
]
....
this.num
```

> 这里遇到一个问题，就是在渲染加入购物车的最大值时，`:data-numbox-max='goodinfo.good_titie_rest'`出错
>> 原因：由于goodinfo这个对象是通过axios异步获取得到，所以在页面渲染的时候，数据可能还没传过来，所以会得到undefined

>> 无法得知什么时候获取到数据

>> 解决办法：使用属性监听解决 watch————在axios之后，立即赋值给goodrest然后对goodrest进行watch监听

```
watch:{
    num:function(newval,oldval){

    }
}
```
## VUEX介绍
存储公共数据，存入一些公共数据，可供调用，不用通过父子组件，但是私有数据不用放到vuex中，私有数据放在 ：props和data中

vuex相当于是一个公共仓库[详细讲解vuex](https://vuex.vuejs.org/zh/installation.html)

1. 安装vuex`npm install vuex --save`
2. 导入包`import Vuex from 'vuex`
3. 注册vuex到vue中`Vue.use(Vuex)`
4. 创建实例
```
var store = new Vuex.Store({
    state:{//相当于data，用于存储数据
        count:0
    },
    mutations:{}
})
```
5. 在vue实例中注册
```
const vm =new Vue({
    ....
    store:store
    ....
})
```
6. 获取store数据，通过`this.$store.state.XXX`获取，只要挂载到vue实例中，其他的组件都可以使用 
7. 如果要调用store中的state的值，只能通过mutations提供的方法，才能操作对应数据，不能直接操作state中的数据,便于后续代码维护
```
....
mutations:{
    add(state){
        state.count++
    }
}//调用时通过this.$store.commit("方法名")
....
```
> mutation参数列表支持两参数，第一个为states状态，第二个为参数（单参数，对象，数组）
8. vuex 的getters属性，只负责对外提供数据，不负责修改数据，修改在mutations
```
getters:{
    getCount:(state)=>()=>{//第二个括号是需要传的参数
        return  "this is"+state.count
    }//类似于过滤器，没有修改数据，是在包装数据
    //类似于compute只要states发生变化，如果getter正好引用了这个数据，那么就会立即触发事件
}
```
> 总结：
>1. states中的数据不能直接修改，如果要修改，可以通过mutation进行修改
>2. 从states获取数据，通过`this.$store.state.XXX`获取
>3. 如果组件要修改数据，则要通过mutations提供的方法需要通过`this.$store.commit('func',args)`获取
>4. 如果store中的state上的数据，在对外提供的时候，需要做一层包装，那么推荐使用getters,此时可以通过`this.$store.getter.XXX`实现

## goodinfo界面中加入购物车和tobar的badge数值统一
这里使用了vuex
1. 在main.js中定义vue，定义数组shopcar
```
//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        shopcar:[],
    },
    mutations:{
    },
    getters:{
    }
```
2. 在goodinfo界面中，点击按钮加入对象（注意这里使用vuex的mutation）`this.$store.commit('addgood',shopobj);`然后在main.js中对addgood进行定义，判断是相同id则加count，否则直接push
3. 这里需要注意修改，此时的购物车只要一刷新本来购物车的物品就会消失，所以需要将数据添加到sessionStorage中，在开始赋值的时候进行getItem取值，赋值给shopcar
4. 修改tobar中的badge值，这里通过getter进行获取sumcount值`$store.getters.getallcount`

## 购物车界面
1. 渲染页面这里页面信息可以直接从sessioStorage获取
2. 保证商品count和之前的加入购物车的信息一致：将从sessioStorage获取的count值传值给子组件subnumberbox，设置value的值
3. 购物车界面可以继续添加物品，物品数量和tobar下标保持一致

   3.1 这里首先要获取用户点击不同的gooditem的id和count值，这里通过向子组件传递这两个值，再通过子组件传回来得到值（这里应该有更好的方法，但是此时的numberbox封装成子组件，导致无法直接获取，所以组件有优点也有缺点啊~~~）
   
   3.2 在获取了id 和count 值之后，可以重新更改store中的值（通过mutations）和sessionStorage的值
4. 保存单选框的状态
   
   4.1 获取item的selectflag 的值。这里通过store的getter的方法将flag暂存到数组中，然后通过id取出

   4.2 更新store的值，将id传过去`$store.getters.getselect[item.id]`

5. 实现删除按钮（这里将item.id和i同时传值过去，item.id 是删除store中的数据，i删除的是goodcarlist界面中的数据）
6. 实现结算功能（这里利用的是store.getters的方法，循环得到总数以及总价，返回相应结果）

## Apach的gizp压缩

## 尝试在手机上 去进行项目的预览和测试
1. 要保证自己的手机可以正常运行；
2. 要保证 手机 和 开发项目的电脑 处于同一个 WIFI 环境中，也就是说 手机 可以 访问到 电脑的 IP
3. 打开自己的 项目中 package.json 文件，在 dev 脚本中，添加一个 --host 指令， 把 当前 电脑的 WIFI IP地址， 设置为 --host 的指令值；
 + 如何查看自己电脑所处 WIFI 的IP呢， 在 cmd 终端中运行 `ipconfig` ， 查看 无线网的 ip 地址
