<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="Profile-main" class="section">
			<h2 class="font-E3 text-center scroll-fadein index-anime"><span>profile</span></h2>
			<div class="vertical-line center sa sa--up"></div>
			<div class="pm-flame center sa sa--up">
				<div class="pm-buttons display-flex m-left-05rem">
					<img class="pm-bt" src="../../assets/img/icon_mail.svg">
					<img class="pm-bt" src="../../assets/img/icon_twitter.svg">
					<img class="pm-bt" src="../../assets/img/icon_pixiv.svg">
				</div>
				<div class="pm-name">
					<p class="lh-120 fs-1_2rem co-white">教和出操舵</p>
					<p class="lh-120 fs-0_8rem m-left-1rem co-white">└ GACHA-CYUDOKUSYA:KYOUWA DESOUDA</p>
				</div>
				<div id="twitter-color" class="p-twitter-box pm-tw">
					<a class="twitter-timeline" data-width="100%" data-height="100%" data-theme="light" data-chrome=”noheader,transparent,nofooter,noborders,noscrollbar” href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a> <!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
				</div>
			</div>
		</section>
	</v-lazy>
</template>

<style scoped>
.pm-flame {
	width: 50vw;
	height: 29.48vw;
	background-image: url(../../assets/img/profile_flame.svg);
	display: grid;
	grid-template-rows: 4.5% 12% auto 4.5%;
	grid-template-columns: 3% 38% auto 3%;
}
</style>

<script>
export default {
  name: 'MainProfile',
  data: () => ({
      isActive: false,
  }),
  updated: function () {
		/*--------------------------------------------------------------------------
		 *
		 * scrollanime_js.js
		 *
		 *
		--------------------------------------------------------------------------*/
		/* ************************************************************************************* */
		/* スクロールして、画面の下と要素の位置の差が300pxになったら、要素にshowクラスを追加する */
		/* ************************************************************************************* */

		// Webページ内の class="sa" の要素を複数検出
		var scrollAnimationElm = document.querySelectorAll('.sa');

		// 要素を表示すべきかどうかを判定する関数（メソッド）を定義
		var scrollAnimationFunc = function () {
			// 判定の基準になる縦幅を300pxとして定義
			var triggerMargin = 300;
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


		/*--------------------------------------------------------------------------
		 *
		 * indexanime.js
		 *
		 *
		--------------------------------------------------------------------------*/
		var indexanimeelm = document.querySelectorAll('.index-anime');

		var indexanimationfunc = function () {
			var triggerMargin = 300;
			for (var i = 0; i < indexanimeelm.length; i++) {
				if (window.innerHeight > indexanimeelm[i].getBoundingClientRect().top + triggerMargin) {
					indexanimeelm[i].classList.add('-visible');
				}
			}
		}
		window.addEventListener('load', indexanimationfunc);
		window.addEventListener('scroll', indexanimationfunc);

		/*--------------------------------------------------------------------------
		 *
		 * tweet
		 *
		 *
		--------------------------------------------------------------------------*/
		let tweetScript = document.createElement('script')
		tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
		document.head.appendChild(tweetScript)
  },
}
</script>