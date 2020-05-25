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
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">人物</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">9</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
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
.mint-header.is-fixed {height: 50px;font-size: 18px;}
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

</style>