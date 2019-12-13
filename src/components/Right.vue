<template>
	<div>
		<div v-if="kk==1">
			<GoodList :goodId="1"></GoodList>
		</div>
		<div v-else-if="kk==2">
			<GoodList :goodId="2"></GoodList>
		</div>
		<div v-else-if="kk==3">
			<GoodList :goodId="3"></GoodList>
		</div>
		<div v-else-if="kk==4">
			<GoodList :goodId="4"></GoodList>
		</div>
		<div v-else>
			<GoodList :goodId="0"></GoodList>
		</div>
	</div>
</template>

<script>
	import Msg from './msg.js'
	import GoodList from './goodsList.vue'
	export default{
		data() {
			return {
				kk:0
			}
		},
		mounted:function(){
			var _this = this
			// $on用于组件间接受传的值
			Msg.$on('val',function(m){
				_this.kk = m
			})
		},
		components:{
			GoodList
		}
	}
</script>

<style>
</style>