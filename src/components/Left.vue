<!--
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-09-27 11:05:42
 * @LastEditTime: 2024-09-29 17:25:08
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\components\Left.vue
 * @Description: 
-->
<template>
	<div>
		<div class="title">热门推荐</div>
		<ul class="menu">
			<li @click="menu1">动漫</li>
			<li @click="menu2">明星</li>
		</ul>
	</div>
</template>

<script>
	export default{
		methods: {
			menu1 () {
				this.$store.state.activeTab = 1
			},
			menu2 () {
				this.$store.state.activeTab = 2
			},
		}
	}
</script>

<style>
	.title{
		width:100px;
		color: red;
	}
	.menu li{
		list-style:none;
		height: 50px;
		margin-bottom: 2px;
		background-color: white;
		line-height: 50px;
		cursor: pointer;
	} 
</style>