<template>
	<div>
		<div class="title">热门推荐</div>
		<ul class="menu">
			<li @click="menu1">动漫</li>
			<li @click="menu2">明星</li>
			<li>火影</li>
			<li>火影</li>
			<li>火影</li>
			<li>火影</li>
			<li>火影</li>
			<li>火影</li>
			<li>火影</li>
			<li>火影</li>
			<li>火影</li>
		</ul>
	</div>
</template>

<script>
	import Msg from './msg.js'
	export default{
		methods: {
			menu1: function() {
				// $emit用于组件间的传值
				Msg.$emit("val","1");
			},
			menu2: function() {
				Msg.$emit("val","2");
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