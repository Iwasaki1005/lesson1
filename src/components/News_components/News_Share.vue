<template>
	<div class="column-center m-top-2rem">
		<p class="co-brown">- Share This News -</p>
		<div class="m-top-05rem">
			<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-via="vuejs" data-hashtags="ハッシュタグ名" data-related="tkcpail34,vuejs" data-show-count="false"></a>
			<!--<SvganimateTwitter />-->
		</div>
	</div>
</template>

<script> 
//import SvganimateTwitter from '../Svganimate_twitter.vue'

export default {
	name: 'News_Share',
	components: {
		//SvganimateTwitter,
	},
	mounted: function () {
		/*--------------------------------------------------------------------------
		 *
		 * tweet
		 *
		 *
		--------------------------------------------------------------------------*/
		let sharetweet = document.createElement('script')
		sharetweet.setAttribute('src', 'https://platform.twitter.com/widgets.js')
		document.head.appendChild(sharetweet)
  },
}
</script>

<style>
.twitter-share-button {
	position: relative;
	z-index: 10;
}

.tw-bt-posi-bt {
	position: absolute;
	z-index: 8;
}

.btn {
	height: 4vw!important;
	width: 4vw!important;
}
</style>