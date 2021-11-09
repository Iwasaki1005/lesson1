<template>
	<div>
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<div class="NW-container">
			<div class="align-center">
				<p class="m-right-05rem">2021.02.02</p>
				<div class="newstag-dmy co-white font-E1">dmy</div>
				<div class="newstag-info co-white font-E1">info</div>
			</div>
			<h3 class="m-bottom-2rem">2021年(仮)のテストニュースです。</h3>
			<p>
				Facebook、TwitterなどのSNSに記事をシェアしてもらうのに必要なのが「シェアボタン」です。サービスごとにURLやパラメータが異なるため、オリジナルでシェアボタンを作成する場合はそれぞれ設定しなければなりません。
			</p>
			<NewsShare />
		</div>
		<div class="content-core m-top-2rem">
			<div class="bt-typeA bt-typeA-border d-block center">
				<span class="bt-typeA-border-inner font-E1">← Next</span>
			</div>
			<div class="bt-typeA bt-typeA-border d-block center">
				<span class="bt-typeA-border-inner font-E1">Prev →</span>
			</div>
		</div>
		<router-link id="homeopen" to="/news">
			<div class="content-core">
				<div class="bt-typeA bt-typeA-border d-block center">
					<span class="bt-typeA-border-inner font-E1">Back To List ></span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
import NewsShare from './News_Share.vue'

export default {
	name: 'News_20210202dmy',
	components: {
		NewsShare,
	},
	data () {
		return {
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
			exact: true,
		},
		{
			text: 'News',
			disabled: false,
			to: '/news',
			exact: true,
		},
		{
			text: '2021年(仮)のテストニュースです。',
			disabled: true,
			to: '',
		},
		],
		}
	},
	mounted: function() {
		/*--------------------------------------------------------------------------
		 *
		 * scrollanime_js.js (300pxの部分を30vhに変更)
		 *
		 *
		--------------------------------------------------------------------------*/
		/* ************************************************************************************* */
		/* スクロールして、画面の下と要素の位置の差が300pxになったら、要素にshowクラスを追加する */
		/* ************************************************************************************* */

		// Webページ内の class="sa" の要素を複数検出
		var scrollAnimationElm = document.querySelectorAll('.sa');

		var vh30 = (screen.height * 0.4)

		// 要素を表示すべきかどうかを判定する関数（メソッド）を定義
		var scrollAnimationFunc = function () {
			// 判定の基準になる縦幅を300pxとして定義
			var triggerMargin = vh30;
			// 検出した class="sa" の要素の数だけループ
			// scrollAnimationElm.length は検出した要素の総数を指す
			for (var i = 0; i < scrollAnimationElm.length; i++) {
				// 「ウィンドウの内部の高さが (対象の要素の高さ＋300px) より大きい」となった場合
				if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
					// 対象の要素のclassに「show」を追加する
					scrollAnimationElm[i].classList.add('show');
				}
			}
			// メソッド終了
		}

		// ウィンドウに対して「読み込み」または「スクロール」が行われた際、定義していたメソッドを実行するように設定
		window.addEventListener('load', scrollAnimationFunc);
		window.addEventListener('scroll', scrollAnimationFunc);

		// querySelectorAllについて
		// https://developer.mozilla.org/ja/docs/Web/API/Document/querySelectorAll
		// getBoundingClientRectについて
		// https://developer.mozilla.org/ja/docs/Web/API/Element/getBoundingClientRect
		// window.innerHeightについて
		// https://developer.mozilla.org/ja/docs/Web/API/Window/innerHeight
	},
}
</script>

<style>
.NW-container {
	width: 80%;
	padding: 8vh 6vw;
	margin: 5vh auto;
	background-color: #fafafa;
	box-shadow: 0 0 0.5vw #ddd;
}
</style>