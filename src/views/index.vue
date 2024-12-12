<!--
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-09-27 11:05:42
 * @LastEditTime: 2024-12-12 10:59:43
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\views\index.vue
 * @Description: 
-->
<template>
	<div class="main">
		<div class="left">
				<ul class="menu">
					<li :class="{active: demoIndex === 1}" @click="menu1">1</li>
					<li :class="{active: demoIndex === 2}" @click="menu2">2</li>
				</ul>
		</div>
		<div class="right">
			<div class="bottom">
				<div v-if="demoIndex === 1">
					1111
				</div>
				<div v-else-if="demoIndex === 2">
					css3 animation样式应用
					<div class="box"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components:{
		},
		mounted () {
		},
		computed: {
			demoIndex () {
				return this.$store.state.activeTab
			}
		},
		methods: {
			menu1 () {
				this.$store.commit('setActiveTab', 1)
			},
			menu2 () {
				this.$store.commit('setActiveTab', 2)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.left{
		width: 100px;
		margin-right: 20px;
		border: 1px solid #ccc;
	}

	.right{
		width: 800px;
	}

	.left, .right{
		height: 500px;
		background-color: #f5f5f5;
	}

	.menu {
		width: 100%;
		li {
			width: 100%;
			height: 50px;
			list-style:none;
			line-height: 50px;
			cursor: pointer;
			text-align: center;
			border-bottom: 1px solid #ccc;
		}
		.active {
			background-color: rgb(197, 188, 188);
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.box {
		height: 100px;
		width: 100px;
		border: 15px solid #f08d8d;
		animation: changebox 1s ease-in-out 0s infinite alternate running forwards;
		&:hover {
			animation-play-state: paused;
		}
	}

	@keyframes changebox {
		10% {
			background: rgb(240, 141, 141);
		}
		50% {
			width: 80px;
			background: rgb(141, 159, 240);	
		}
		70% {
			border: 15px solid rgb(241, 241, 139);
		}
		100% {
			width: 150px;
			height: 150px;
			background: rgb(141, 240, 162);
		}
	}
	
</style>