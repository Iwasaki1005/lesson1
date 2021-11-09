<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="Game" class="section sa sa--up">
			<h2 class="font-E3 text-center scroll-fadein index-anime"><span>hutatume</span></h2>
			<div class="vertical-line center sa sa--up"></div>
			<div class=" sa sa--up">
				<div class="display-flex">
					<div class="width10">
						<p class="font-E3 vertical-text center">Game <span class="v-line">────────────────────────────────────────</span></p>
					</div>
					<div class="width90">
						<div class="game-slideshow display-flex">
							<div id="game-slide1" class="game-slide slide-position1 overflow-hidden">
								<img class="game-slide img-zoom" src="https://clip.narinari.com/wp-content/uploads/2020/10/100_wakrariKV-724x1024.jpg">
							</div>
							<div id="game-slide2" class="game-slide slide-position2 overflow-hidden">
								<img class="game-slide img-zoom" src="https://i.pinimg.com/474x/d6/34/be/d634bed00056ea58fbf6ebfd1de74791.jpg">
							</div>
							<div id="game-slide3" class="game-slide slide-position0 overflow-hidden">
								<img class="game-slide img-zoom" src="https://lohas.nicoseiga.jp/thumb/9655794i?1568824268">
							</div>
						</div>
					</div>
				</div>
				<div class="display-flex">
					<div class="width10">
						<div class="content-core">
							<i id="slide-bt-back" class="fas fa-chevron-circle-left slide-arrow"></i>
							<i id="slide-bt-next" class="fas fa-chevron-circle-right slide-arrow"></i>
						</div>
					</div>
					<div class="width90">
						<span>テキストテキストテキストテキストテキスト</span>
					</div>
				</div>
			</div>
		</section>
	</v-lazy>
</template>

<script>
export default {
  name: 'MainGame',
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

		/*--------------------------------------------------------------------------
		 *
		 * game-slide.js
		 *
		 *
		--------------------------------------------------------------------------*/
		const gameslide1 = document.getElementById('game-slide1')
		const gameslide2 = document.getElementById('game-slide2')
		const gameslide3 = document.getElementById('game-slide3')

		const slidebtnext = document.getElementById('slide-bt-next')
		const slidebtback = document.getElementById('slide-bt-back')

		var parameter_slidestate = 1;

		const autoslide = () => {
			parameter_slidestate = parameter_slidestate +1;
			if (parameter_slidestate == 2) {
				gameslide3.classList.add('opacity-0');
				gameslide3.classList.remove('slide-position0');
				gameslide3.classList.add('slide-position3');
				setTimeout(function(){
					gameslide3.classList.remove('opacity-0');
				}, 10);
				setTimeout(function(){
					slidebtnext.classList.add('isdisable');
					slidebtback.classList.add('isdisable');
					gameslide1.classList.add('tr-duration-1s');
					gameslide2.classList.add('tr-duration-1s');
					gameslide3.classList.add('tr-duration-1s');
					gameslide1.classList.remove('slide-position1');
					gameslide1.classList.add('slide-position0');
					gameslide2.classList.remove('slide-position2');
					gameslide2.classList.add('slide-position1');
					gameslide3.classList.remove('slide-position3');
					gameslide3.classList.add('slide-position2');
				}, 20);
				setTimeout(function(){
					gameslide1.classList.remove('tr-duration-1s');
					gameslide2.classList.remove('tr-duration-1s');
					gameslide3.classList.remove('tr-duration-1s');
					slidebtnext.classList.remove('isdisable');
					slidebtback.classList.remove('isdisable');
				}, 1050);
				console.log('parameter_slidestate = 2')
			}	else {
					if (parameter_slidestate == 3) {
						gameslide1.classList.add('opacity-0');
						gameslide1.classList.remove('slide-position0');
						gameslide1.classList.add('slide-position3');
						setTimeout(function(){
							gameslide1.classList.remove('opacity-0');
						}, 10);
						setTimeout(function(){
							slidebtnext.classList.add('isdisable');
							slidebtback.classList.add('isdisable');
							gameslide1.classList.add('tr-duration-1s');
							gameslide2.classList.add('tr-duration-1s');
							gameslide3.classList.add('tr-duration-1s');
							gameslide1.classList.remove('slide-position3');
							gameslide1.classList.add('slide-position2');
							gameslide2.classList.remove('slide-position1');
							gameslide2.classList.add('slide-position0');
							gameslide3.classList.remove('slide-position2');
							gameslide3.classList.add('slide-position1');
						}, 20);
						setTimeout(function(){
							gameslide1.classList.remove('tr-duration-1s');
							gameslide2.classList.remove('tr-duration-1s');
							gameslide3.classList.remove('tr-duration-1s');
							slidebtnext.classList.remove('isdisable');
							slidebtback.classList.remove('isdisable');
						}, 1050);
						console.log('parameter_slidestate = 3')
					}	else {
							if (parameter_slidestate == 4) {
								gameslide2.classList.add('opacity-0');
								gameslide2.classList.remove('slide-position0');
								gameslide2.classList.add('slide-position3');
								setTimeout(function(){
									gameslide2.classList.remove('opacity-0');
								}, 10);
								setTimeout(function(){
									slidebtnext.classList.add('isdisable');
									slidebtback.classList.add('isdisable');
									gameslide1.classList.add('tr-duration-1s');
									gameslide2.classList.add('tr-duration-1s');
									gameslide3.classList.add('tr-duration-1s');
									gameslide1.classList.remove('slide-position2');
									gameslide1.classList.add('slide-position1');
									gameslide2.classList.remove('slide-position3');
									gameslide2.classList.add('slide-position2');
									gameslide3.classList.remove('slide-position1');
									gameslide3.classList.add('slide-position0');
								}, 20);
								setTimeout(function(){
									gameslide1.classList.remove('tr-duration-1s');
									gameslide2.classList.remove('tr-duration-1s');
									gameslide3.classList.remove('tr-duration-1s');
									slidebtnext.classList.remove('isdisable');
									slidebtback.classList.remove('isdisable');
								}, 1050);
								parameter_slidestate = 1 ;
								console.log('parameter_slidestate = 1')
							}
					}
				}
		}
		let interval_id = setInterval(autoslide, 5000);
		console.log('inteval_id =', interval_id)

		slidebtnext.addEventListener('click', function () {
			parameter_slidestate = parameter_slidestate +1;
			clearInterval(interval_id);
			interval_id = setInterval(autoslide, 5000);
			console.log('inteval_id =', interval_id)
			if (parameter_slidestate == 2) {
				gameslide3.classList.add('opacity-0');
				gameslide3.classList.remove('slide-position0');
				gameslide3.classList.add('slide-position3');
				setTimeout(function(){
					gameslide3.classList.remove('opacity-0');
				}, 10);
				setTimeout(function(){
					slidebtnext.classList.add('isdisable');
					slidebtback.classList.add('isdisable');
					gameslide1.classList.add('tr-duration-1s');
					gameslide2.classList.add('tr-duration-1s');
					gameslide3.classList.add('tr-duration-1s');
					gameslide1.classList.remove('slide-position1');
					gameslide1.classList.add('slide-position0');
					gameslide2.classList.remove('slide-position2');
					gameslide2.classList.add('slide-position1');
					gameslide3.classList.remove('slide-position3');
					gameslide3.classList.add('slide-position2');
				}, 20);
				setTimeout(function(){
					gameslide1.classList.remove('tr-duration-1s');
					gameslide2.classList.remove('tr-duration-1s');
					gameslide3.classList.remove('tr-duration-1s');
					slidebtnext.classList.remove('isdisable');
					slidebtback.classList.remove('isdisable');
				}, 1050);
				console.log('parameter_slidestate = 2')
			}	else {
					if (parameter_slidestate == 3) {
						gameslide1.classList.add('opacity-0');
						gameslide1.classList.remove('slide-position0');
						gameslide1.classList.add('slide-position3');
						setTimeout(function(){
							gameslide1.classList.remove('opacity-0');
						}, 10);
						setTimeout(function(){
							slidebtnext.classList.add('isdisable');
							slidebtback.classList.add('isdisable');
							gameslide1.classList.add('tr-duration-1s');
							gameslide2.classList.add('tr-duration-1s');
							gameslide3.classList.add('tr-duration-1s');
							gameslide1.classList.remove('slide-position3');
							gameslide1.classList.add('slide-position2');
							gameslide2.classList.remove('slide-position1');
							gameslide2.classList.add('slide-position0');
							gameslide3.classList.remove('slide-position2');
							gameslide3.classList.add('slide-position1');
						}, 20);
						setTimeout(function(){
							gameslide1.classList.remove('tr-duration-1s');
							gameslide2.classList.remove('tr-duration-1s');
							gameslide3.classList.remove('tr-duration-1s');
							slidebtnext.classList.remove('isdisable');
							slidebtback.classList.remove('isdisable');
						}, 1050);
						console.log('parameter_slidestate = 3')
					}	else {
							if (parameter_slidestate == 4) {
								gameslide2.classList.add('opacity-0');
								gameslide2.classList.remove('slide-position0');
								gameslide2.classList.add('slide-position3');
								setTimeout(function(){
									gameslide2.classList.remove('opacity-0');
								}, 10);
								setTimeout(function(){
									slidebtnext.classList.add('isdisable');
									slidebtback.classList.add('isdisable');
									gameslide1.classList.add('tr-duration-1s');
									gameslide2.classList.add('tr-duration-1s');
									gameslide3.classList.add('tr-duration-1s');
									gameslide1.classList.remove('slide-position2');
									gameslide1.classList.add('slide-position1');
									gameslide2.classList.remove('slide-position3');
									gameslide2.classList.add('slide-position2');
									gameslide3.classList.remove('slide-position1');
									gameslide3.classList.add('slide-position0');
								}, 20);
								setTimeout(function(){
									gameslide1.classList.remove('tr-duration-1s');
									gameslide2.classList.remove('tr-duration-1s');
									gameslide3.classList.remove('tr-duration-1s');
									slidebtnext.classList.remove('isdisable');
									slidebtback.classList.remove('isdisable');
								}, 1050);
								parameter_slidestate = 1 ;
								console.log('parameter_slidestate = 1')
							}
					}
				}
		});

		slidebtback.addEventListener('click', function () {
			parameter_slidestate = parameter_slidestate -1;
			clearInterval(interval_id);
			interval_id = setInterval(autoslide, 5000);
			console.log('inteval_id =', interval_id)
			if (parameter_slidestate == 2) {
				// 0にいるスライド２が1に移動/1にいるスライド３が2に移動/2にいるスライド１が3に移動
				//その後、スライド1が0に瞬間移動
				slidebtnext.classList.add('isdisable');
				slidebtback.classList.add('isdisable');
				gameslide1.classList.add('tr-duration-1s');
				gameslide2.classList.add('tr-duration-1s');
				gameslide3.classList.add('tr-duration-1s');
				gameslide1.classList.remove('slide-position2');
				gameslide1.classList.add('slide-position3');
				gameslide2.classList.remove('slide-position0');
				gameslide2.classList.add('slide-position1');
				gameslide3.classList.remove('slide-position1');
				gameslide3.classList.add('slide-position2');
				setTimeout(function(){
					gameslide1.classList.add('opacity-0');
					gameslide1.classList.remove('slide-position3');
					gameslide1.classList.add('slide-position0');
				}, 1010);
				setTimeout(function(){
					gameslide1.classList.remove('opacity-0');
				}, 1020);
				setTimeout(function(){
					gameslide1.classList.remove('tr-duration-1s');
					gameslide2.classList.remove('tr-duration-1s');
					gameslide3.classList.remove('tr-duration-1s');
					slidebtnext.classList.remove('isdisable');
					slidebtback.classList.remove('isdisable');
				}, 1050);
				console.log('parameter_slidestate = 2')
			}	else {
					if (parameter_slidestate == 3) {
						// 0にいるスライド３が1に移動/1にいるスライド１が2に移動/2にいるスライド２が3に移動
						//その後、スライド2が0に瞬間移動
						slidebtnext.classList.add('isdisable');
						slidebtback.classList.add('isdisable');
						gameslide1.classList.add('tr-duration-1s');
						gameslide2.classList.add('tr-duration-1s');
						gameslide3.classList.add('tr-duration-1s');
						gameslide1.classList.remove('slide-position1');
						gameslide1.classList.add('slide-position2');
						gameslide2.classList.remove('slide-position2');
						gameslide2.classList.add('slide-position3');
						gameslide3.classList.remove('slide-position0');
						gameslide3.classList.add('slide-position1');
						setTimeout(function(){
							gameslide2.classList.add('opacity-0');
							gameslide2.classList.remove('slide-position3');
							gameslide2.classList.add('slide-position0');
						}, 1010);
						setTimeout(function(){
							gameslide2.classList.remove('opacity-0');
						}, 1020);
						setTimeout(function(){
							gameslide1.classList.remove('tr-duration-1s');
							gameslide2.classList.remove('tr-duration-1s');
							gameslide3.classList.remove('tr-duration-1s');
							slidebtnext.classList.remove('isdisable');
							slidebtback.classList.remove('isdisable');
						}, 1050);
						console.log('parameter_slidestate = 3')
					}	else {
							if (parameter_slidestate == 1) {
						// 0にいるスライド１が1に移動/1にいるスライド２が2に移動/2にいるスライド３が3に移動
						//その後、スライド３が0に瞬間移動
						slidebtnext.classList.add('isdisable');
						slidebtback.classList.add('isdisable');
						gameslide1.classList.add('tr-duration-1s');
						gameslide2.classList.add('tr-duration-1s');
						gameslide3.classList.add('tr-duration-1s');
						gameslide1.classList.remove('slide-position0');
						gameslide1.classList.add('slide-position1');
						gameslide2.classList.remove('slide-position1');
						gameslide2.classList.add('slide-position2');
						gameslide3.classList.remove('slide-position2');
						gameslide3.classList.add('slide-position3');
						setTimeout(function(){
							gameslide3.classList.add('opacity-0');
							gameslide3.classList.remove('slide-position3');
							gameslide3.classList.add('slide-position0');
						}, 1010);
						setTimeout(function(){
							gameslide3.classList.remove('opacity-0');
						}, 1020);
						setTimeout(function(){
							gameslide1.classList.remove('tr-duration-1s');
							gameslide2.classList.remove('tr-duration-1s');
							gameslide3.classList.remove('tr-duration-1s');
							slidebtnext.classList.remove('isdisable');
							slidebtback.classList.remove('isdisable');
						}, 1050);
								console.log('parameter_slidestate = 1')
							}	else {
								if (parameter_slidestate == 0) {
									// 0にいるスライド３が1に移動/1にいるスライド１が2に移動/2にいるスライド２が3に移動
									//その後、スライド2が0に瞬間移動
									slidebtnext.classList.add('isdisable');
									slidebtback.classList.add('isdisable');
									gameslide1.classList.add('tr-duration-1s');
									gameslide2.classList.add('tr-duration-1s');
									gameslide3.classList.add('tr-duration-1s');
									gameslide1.classList.remove('slide-position1');
									gameslide1.classList.add('slide-position2');
									gameslide2.classList.remove('slide-position2');
									gameslide2.classList.add('slide-position3');
									gameslide3.classList.remove('slide-position0');
									gameslide3.classList.remove('slide-position0');
									gameslide3.classList.add('slide-position1');
									setTimeout(function(){
										gameslide2.classList.add('opacity-0');
										gameslide2.classList.remove('slide-position3');
										gameslide2.classList.add('slide-position0');
									}, 1010);
									setTimeout(function(){
										gameslide2.classList.remove('opacity-0');
									}, 1020);
									setTimeout(function(){
										gameslide1.classList.remove('tr-duration-1s');
										gameslide2.classList.remove('tr-duration-1s');
										gameslide3.classList.remove('tr-duration-1s');
										slidebtnext.classList.remove('isdisable');
										slidebtback.classList.remove('isdisable');
									}, 1050);
									parameter_slidestate = 3;
									console.log('parameter_slidestate = 3')
								}
							}
					}
				}
		});
  },
}
</script>