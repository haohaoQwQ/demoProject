<!--
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-09-27 11:05:42
 * @LastEditTime: 2024-09-30 15:27:16
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\components\Right.vue
 * @Description: 
-->
<template>
	<div>
		<div v-if="tabIndex === 1">
			1111
		</div>
		<div v-else-if="tabIndex === 2">
			2222
		</div>
	</div>
</template>

<script>
import GoodList from './goodsList.vue'
export default {
	components:{
		GoodList
	},
	data() {
		return {
		}
	},
	computed: {
		tabIndex () {
			return this.$store.state.activeTab
		}
	},
	mounted () {
		
	},
	
}
</script>

<style>
</style>