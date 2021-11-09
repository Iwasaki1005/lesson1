<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="News" class="section">
			<h2 id="news-index" class="font-E3 text-center scroll-fadein index-anime"><span id="news-span" class="">News</span></h2>
			<div class="vertical-line center sa sa--up"></div>
			<div class="display-flex sa sa--up">
				<div class="news-window-container hover-flash">
					<div class="news-window-info">
						<p class="news-window-info-text co-white">
							2021.05.13<br>
							ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。
						</p>
						<div class="news-window-info-tag">
							<div class="newstag-dmy co-white font-E1">dmy</div>
							<div class="newstag-info co-white font-E1">info</div>
						</div>
					</div>
					<div class="news-window-img-container overflow-hidden content-core">
						<img class="" src="https://prtimes.jp/i/21973/169/ogp/d21973-169-576455-4.jpg">
					</div>
				</div>
				<div class="news-list-container">
					<div class="news-list-dia-position content-core">
						<div class="news-list-dia">
							<div class="news-dia1 hover-flash overflow-hidden">
								<div class="news-dia-img"></div>
							</div>
							<div class="news-dia2 hover-flash overflow-hidden">
								<div class="news-dia-img"></div>
							</div>
							<div class="news-dia3 hover-flash overflow-hidden">
								<div class="news-dia-img"></div>
							</div>
							<div class="news-dia4 hover-flash overflow-hidden">
								<div class="news-dia-img"></div>
							</div>
						</div>
					</div>
					<div class="news-list-button content-core">
						<a href="#" class="bt-typeA bt-typeA-border">
							<span class="bt-typeA-border-inner font-E1">View more ></span>
						</a>
					</div>
				</div>
			</div>
		</section>
	</v-lazy>
</template>

<script>
export default {
  name: 'MainNews',
  data: () => ({
      isActive: false,
  }),
  updated: function () {
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