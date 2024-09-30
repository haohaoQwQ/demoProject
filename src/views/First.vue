<!--
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-09-27 11:05:42
 * @LastEditTime: 2024-09-29 17:30:45
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\views\First.vue
 * @Description: 
-->
<template>
	<div class="main">
		<div class="left">
			<Left></Left>
		</div>
		<div class="right">
			<div class="bottom">
				<Right></Right>
			</div>
		</div>
	</div>
</template>

<script>
	import Left from '../components/Left.vue'
	import Right from '../components/Right.vue'
	export default{
		components:{
			Left,
			Right
		}
	}
</script>

<style>
	*{
		padding: 0;	
		margin: 0;
	}
	.main{
		width: 1200px;
		margin: 20px auto;
	}
	.left{
		width: 100px;
		float: left;
		margin-right: 10px;
	}
	.right{
		width: 1000px;
		float: right;
		margin-left: 10px;
	}
	.top img{
		height: 230px;
		width: 1000px;
	}
	.left, .right{
		background-color: #f5f5f5;
		height: 500px;
	}
	
</style>