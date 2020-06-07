<template>
    <div>
        <!--header-->
        <mt-header fixed title="鬼灭之刃"></mt-header>
        <!--middle-->
		<transition>
			<router-view></router-view>
		</transition>
        <!--footer-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lsy" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lsy" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">人物</span>
			</router-link>
			<router-link class="mui-tab-item-lsy" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="shopbadge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lsy" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.mint-header.is-fixed {height: 50px;font-size: 18px;z-index: 99;}
div{padding-top: 30px;overflow-x: hidden;padding-bottom: 30px;}

.v-enter
{
	opacity: 0;
	transform: translate(100%);
}
.v-leave-to {
	opacity: 0;
	transform: translate(-100%);
	position: absolute;
}
.v-enter-active,.v-leave-active
{
	transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item-lsy .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-lsy.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-lsy {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-lsy .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>