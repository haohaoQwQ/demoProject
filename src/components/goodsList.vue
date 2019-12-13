<template>
	<div name="show">
		<ul class="goodList">
			<li v-for="(good, index) in list" :key="index">
				<img :src="good.img" style="width: 250px; height: 200px;"/>
				<p>{{good.goodName}}</p>
			</li>
		</ul>
	</div>
</template>

<style>
	.goodList li{
		width: 250px;
		height: 230px;
		list-style: none;
		float: left;
		color: red;
	}
</style>

<script>
	export default{
		name: "show",
		data() {
			var _this = this;
			var url = "";
			if(_this.goodId == 1) {
				url = "json/anime.json";
			}else if(_this.goodId == 2) {
				url = "json/star.json";
			}else{
					url = "json/anime.json";
				}
			this.$http.get(url).then(function(res){
				_this.list = res.data;
			})
			return{
				list:[]
			}
		},
		props: {
			goodId: Number
		},
		watch: {
			goodId(){
				var _this = this;
				var url = "";
				if(_this.goodId == 1) {
					url = "json/anime.json";
				}else if(_this.goodId == 2) {
					url = "json/star.json";
				}
				this.$http.get(url).then(function(res){
				_this.list = res.data;
			})
			return{
				list:[]
			}
		}
	 	}
	}
</script>

