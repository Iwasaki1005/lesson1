<template>
	<div>
		<p>ギャラリー機能</p>
		<div id="screen" class="gallaly-base">
			<!-- イラストのリスト 左上-->
			<div class="illust-list">
				<!-- サムネ部分 -->
				<div v-for="(column,index) in list" :key="column.title">
					<div class="illust-list-icon" @click="illustselect" v-bind:class="list[index].linkclass" v-show="list[index].active"></div>
				</div>
				<!-- 差分部分 -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['list', 'objects'],
	methods: {
		illustselect : function () {
			const screen = document.getElementById('screen');
			screen.classList.toggle("bgil-1");
		}
	}
}
</script>

<style>
.gallaly-base {
	width: 100%;
	min-height: 100vh;
	background-color: black;
}

.illust-list {
	background-color: pink;
	max-width: 20vw;
}

.illust-list-icon {
	border: solid 4px red;
	width: 10vw;
	height: 5vw;
	margin: 3vw 0;
}

.illust-list-icon-dif {
	border: solid 4px blue;
	width: 10vw;
	height: 5vw;
	margin: 3vw 0;
}
</style>