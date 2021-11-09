<template>
	<div>
		<MainTop />
		<MainNews />
		<MainGame />
		<MainIllust />
		<!--
		<div id="Top-il" class="tp-il-bg column-center">
			<img class="tp-il-img" src="https://3.bp.blogspot.com/-joXYE8YRH-w/VwIjIGpt9-I/AAAAAAAA5fM/jHtT9Wiwdtgas3DI6gSgxnb19CLZ4_gAw/w1200-h630-p-k-no-nu/internet_offline_offkai.png">
			<div class="tp-il-text m-top-1rem p-tb-05rem p-rl-2rem">
				<div class="space-around">
				</div>
				<p class="co-white">
					説明文
				</p>
				<p class="co-white">
					関連リンク
				</p>
			</div>
			<img class="bt-il-close m-top-1rem" src="../assets/img/bt-close.svg">
		</div>
		-->
		<MainProfile />
		<div class="dmy"></div>
	</div>
</template>

<script>
import MainIllust from '../components/Main_components/Main_Illust.vue'
import MainGame from '../components/Main_components/Main_Game.vue'
import MainNews from '../components/Main_components/Main_News.vue'
import MainTop from '../components/Main_components/Main_Top.vue'
import MainProfile from '../components/Main_components/Main_Profile.vue'


export default {
	name: 'Page_main',
	components: {
		MainIllust,
		MainGame,
		MainNews,
		MainTop,
		MainProfile,
	},
}
</script>