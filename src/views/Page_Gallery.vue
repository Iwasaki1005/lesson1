<template>
	<section id="Gallery" class="section">
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>Gallery</span></h2>
		<div class="vertical-line center sa sa--up"></div>
		<!-- ここからgalleryページ作成 -->
		<p> ここからギャラリー機能 </p>
		<GalleryGallerymodal :list="list"/>
		<p> ここまでギャラリー機能 </p>
		<div class="bt-typeA bt-typeA-border d-block center m-bottom-2rem">
			<span class="bt-typeA-border-inner font-E1">PDF Download</span>
		</div>
		<!-- ここからイラスト一覧 -->
		<GalleryIllustrations :list="list"/>
	</section>
</template>

<script>
import GalleryIllustrations from '../components/Gallery_components/Gallery_illustrations.vue'
import GalleryGallerymodal from '../components/Gallery_components/Gallery_gallerymodal.vue'


export default {
	name: 'Page_Gallery',
	components: {
		GalleryIllustrations,
		GalleryGallerymodal,
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
	data: () => ({
		breadcrumbs: [
			{
				text: 'Home',
				disabled: false,
				to: '/',
			},
			{
				text: 'Gallery',
				disabled: false,
				href: '',
			},
		],
		list : [
			{title:"イラスト1 男の子 女の子 複数人", linkclass:["bgil-1"], differenceses:[], tag:["男の子", "女の子","複数人", "rating=a"], active: true,},
			{title:"イラスト2 男の子 ヤンキー 複数人", linkclass:["bgil-2"], differenceses:[], tag:["男の子", "ヤンキー","複数人", "rating=a"], active: true,},
			{title:"イラスト3 女の子", linkclass:["bgil-3"], differenceses:["bgil-3-2"], tag:["女の子", "rating=a"], active: true,},
			{title:"イラスト4 女の子 !特殊", linkclass:["bgil-4"], differenceses:[], tag:["女の子", "rating=r18"], active: true,},
			{title:"イラスト5 女の子", linkclass:["bgil-5"], differenceses:["bgil-5-2","bgil-5-3"], tag:["女の子", "rating=a"], active: true,},
			{title:"イラスト6 女の子 複数人", linkclass:["bgil-6"], differenceses:[], tag:["女の子","複数人", "rating=a"], active: true,},
			{title:"イラスト7 男の子", linkclass:["bgil-7"], differenceses:[], tag:["男の子", "rating=a"], active: true,},
		],
	}),
}
</script>

<style>
input[type="checkbox"] {
	position: relative;
	width: 2.24vw;
	height: 1.12vw;
	-webkit-appearance: none;
	background: linear-gradient(0deg, #fafafa00, #fafafa00);
	outline: none;
	border-radius: 1.12vw;
	box-shadow: 0 0 0 0.12vw #e7b06c, inset 0 0 0 #e7b06c;
}

input:checked[type="checkbox"] {
	background: linear-gradient(0deg, #e7b06c, #e7b06c);
	background-color: #e7b06c;
}

input[type="checkbox"]:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 1.12vw;
	height: 1.12vw;
	background: linear-gradient(0deg, #fafafa, #fafafa);
	border-radius: 0.56vw;
	box-shadow: 0 0 0 0.1vw #e7b06c;
	transform: scale(.98, .96);
	transition: .5s;
}

input:checked[type="checkbox"]:before {
	left: 1.12vw;
}

input[type="checkbox"]:after {
	content: '';
	position: absolute;
	top: calc(50% - 0.12vw);
	left: 0.6vw;
	width: 0.3vw;
	height: 0.3vw;
	background: linear-gradient(0deg, #9b9b9b, #9b9b9b);
	border-radius: 50%;
	transition: .5s;
}

input:checked[type="checkbox"]:after {
	background: #e7b06c;
	left: 1.72vw;
	box-shadow: 0 0 1.2vw #f3cd9e, 0 0 2vw #f3cd9e,
}
</style>