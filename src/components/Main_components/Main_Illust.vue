<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition">
		<section id="Illust" class="section-2 sa">
			<h2 class="font-E3 text-center scroll-fadein index-anime"><span>three</span></h2>
			<div class="vertical-line center sa sa--up"></div>
			<div class="display-flex">
				<div class="width95">
					<div class="space-around sa sa--up">
						<div class="il-1 flex-lower-right hover-flash">
							<img class="bt-il-open m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
						</div>
						<div class="space-around-column">
							<div class="il-2 flex-lower-right hover-flash">
								<img class="bt-il-open-sm m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
							</div>
							<div class="il-3 flex-lower-right hover-flash">
								<img class="bt-il-open-sm m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
							</div>
						</div>
					</div>
					<div class="space-around m-top-2rem sa sa--up">
						<div class="space-around-column">
							<div class="il-2 flex-lower-right hover-flash">
								<img class="bt-il-open-sm m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
							</div>
							<div class="il-3 flex-lower-right hover-flash">
								<img class="bt-il-open-sm m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
							</div>
						</div>
						<div class="il-1 flex-lower-right hover-flash">
							<img class="bt-il-open m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
						</div>
					</div>
				</div>
				<div class="width5 sa sa--up">
					<p class="font-E3 vertical-text">Illust <span class="v-line">────────────────────────────────────────</span></p>
				</div>
			</div>
			<div class="content-core m-top-2rem sa sa--up">
				<a href="#" class="bt-typeA bt-typeA-border d-block center">
					<span class="bt-typeA-border-inner font-E1">View more ></span>
				</a>
			</div>
		</section>
	</v-lazy>
</template>

<script>
export default {
  name: 'MainIllust',
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
  },
}
</script>