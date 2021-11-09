<template>
	<div>
		<!-- ここからギャラリー機能 -->
		<div class="align-center m-bottom-05rem">
			<p class="fs-0_8rem co-brown m-right-05rem">ナントカコンテンツを非表示にする</p>
			<input type="checkbox" v-model='rating' @click="ratingswitch" class="Ga-checkbox">
		</div>
		<div class="align-center">
			<p class="fs-0_8rem co-brown m-right-1rem">タグ一覧</p>
			<button @click="tagallremove" class="bt-alloff">All OFF</button>
		</div>
		<div class="display-flex m-top-05rem">
			<div v-if="activetag.includes('男の子')" class="tag-on" @click="removetagOtokonoko">男の子</div>
			<div v-else class="tag-off" @click="addtagOtokonoko">男の子</div>

			<div v-if="activetag.includes('女の子')" class="tag-on" @click="removetagOnnanoko">女の子</div>
			<div v-else class="tag-off" @click="addtagOnnanoko">女の子</div>

			<div v-if="activetag.includes('複数人')" class="tag-on" @click="removetagHukusuunim">複数人</div>	
			<div v-else class="tag-off" @click="addtagHukusuunim">複数人</div>

			<div v-if="activetag.includes('ヤンキー')" class="tag-on" @click="removetagYanky">ヤンキー</div>
			<div v-else class="tag-off" @click="addtagYanky">ヤンキー</div>
		</div>

		<transition-group name="illustrations" style="display: flex; flex-wrap: wrap;">
			<div v-for="(column,index) in list" :key="column.title">
				<transition name="illustrations">
					<div class="illust-div" v-bind:class="list[index].linkclass" v-show="list[index].active"></div>
				</transition>
			</div>
		</transition-group>
		
		<!-- データを参照したパターン(没) -->
		<!-- <transition-group name="illustrations" style="display: flex; flex-wrap: wrap;">
			<div key="1" v-if="activetag.includes('ヤンキー')"></div>
			<div key="2" v-else class="illust-div bgil-1"></div>

			<div key="3" v-if="activetag.includes('女の子')"></div>
			<div key="4" v-else class="illust-div bgil-2"></div>

			<div key="5" v-if="activetag.includes('男の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="6" v-else class="illust-div bgil-3"></div>

			<div key="7" v-if="activetag.includes('男の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="8" v-else-if="check"></div>
			<div key="8" v-else class="illust-div bgil-4"></div>

			<div key="9" v-if="activetag.includes('男の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="10" v-else class="illust-div bgil-5"></div>

			<div key="11" v-if="activetag.includes('男の子') || activetag.includes('ヤンキー')"></div>
			<div key="12" v-else class="illust-div bgil-6"></div>

			<div key="13" v-if="activetag.includes('女の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="14" v-else class="illust-div bgil-7"></div>
		</transition-group> -->
	</div>
</template>

<script>
export default {
  name: 'GalleryIllustrations',
  props: ['list', 'objects'],
  data: () => ({
     alltags: ["男の子", "女の子","複数人", "ヤンキー"],
     activetag: [],
     text: '',
     rating: false,
  }),
  methods: {
      addtagOtokonoko : function() {
        this.activetag.push('男の子')
		this.filter()
      },
      removetagOtokonoko : function() {
		let targettag = '男の子'
		let activetagcall = this.activetag
		let passindex = activetagcall.findIndex(element => element === targettag);
		this.activetag.splice( passindex, 1 );
		this.filter()
      },
      addtagOnnanoko : function() {
        this.activetag.push('女の子')
		this.filter()
      },
      removetagOnnanoko : function() {
		let targettag = '女の子'
		let activetagcall = this.activetag
		let passindex = activetagcall.findIndex(element => element === targettag);
		this.activetag.splice( passindex, 1 );
		this.filter()
      },
      addtagHukusuunim : function() {
        this.activetag.push('複数人')
		this.filter()
      },
      removetagHukusuunim : function() {
		let targettag = '複数人'
		let activetagcall = this.activetag
		let passindex = activetagcall.findIndex(element => element === targettag);
		this.activetag.splice( passindex, 1 );
		this.filter()
      },
      addtagYanky : function() {
        this.activetag.push('ヤンキー')
		this.filter()
      },
      removetagYanky : function() {
		let targettag = 'ヤンキー'
		let activetagcall = this.activetag
		let passindex = activetagcall.findIndex(element => element === targettag);
		this.activetag.splice( passindex, 1 );
		this.filter()
      },
      tagallactive : function() {
		this.activetag.splice(0, this.activetag.length)
		this.activetag.push('男の子')
		this.activetag.push('女の子')
		this.activetag.push('複数人')
		this.activetag.push('ヤンキー')
		this.filter()
      },
      tagallremove : function() {
        this.activetag.splice(0, this.activetag.length)
		this.filter()
      },
      filter : function () {
         //全写真の分だけforループで消すか否かの判定を行う
          for (let i = 0; i < this.list.length; i++) {
            //該当写真毎に行う処理//
            //☆Step1 activeになっているタグ一覧を確認
             const decisiontag = this.activetag;
             const certaintags = decisiontag.filter((n)=> {
				//☆Step2 該当する写真のタグをデータから取り込む
                const altertags = this.list[i].tag;
                  if(altertags.indexOf(n) == -1) {
                    return n;
                  }
                }
             );
             //☆ はずれタグが無い場合の処理
            if (typeof certaintags === "undefined" || certaintags.length === 0) {
              if (this.list[i].active == false) {
                this.list[i].active = true;
              }
            }
            else {
              this.list[i].active = false;
            }
          }
      },
      ratingswitch : function () {
        if (this.rating == false) {
			this.activetag.push('rating=a')
			this.filter()
		}
		else {
			let targettag = 'rating=a'
			let activetagcall = this.activetag
			let passindex = activetagcall.findIndex(element => element === targettag);
			this.activetag.splice( passindex, 1 );
			this.filter()
		}
      },
  },

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

<style>
.illust-div {
	width: 16vw;
	height: 16vw;
	border: 0.1vw solid #e7b06c;
	border-radius: 1vw;
	margin: 1vw;
}

.bgil-1 {
	background-image: url(../../uploads/illustrations/イラスト1、男の子、女の子、複数人.png);
	background-position: center;
}

.bgil-2 {
	background-image: url(../../uploads/illustrations/イラスト2、男の子、複数人、ヤンキー.png);
	background-position: center;
}

.bgil-3-2 {
	background-image: url(../../uploads/illustrations/イラスト3-2、女の子.png);
	background-position: center;
}

.bgil-3 {
	background-image: url(../../uploads/illustrations/イラスト3、女の子.png);
	background-position: center;
}

.bgil-4 {
	background-image: url(../../uploads/illustrations/イラスト4、女の子、特殊.png);
	background-position: center;
}

.bgil-5 {
	background-image: url(../../uploads/illustrations/イラスト5、女の子、男の子.png);
	background-position: center;
}

.bgil-5-2 {
	background-image: url(../../uploads/illustrations/イラスト5-2、女の子、男の子.png);
	background-position: center;
}

.bgil-5-3 {
	background-image: url(../../uploads/illustrations/イラスト5-3、女の子、男の子.png);
	background-position: center;
}

.bgil-6 {
	background-image: url(../../uploads/illustrations/イラスト６、女の子、複数人.png);
	background-position: center;
}

.bgil-7 {
	background-image: url(../../uploads/illustrations/イラスト７、男の子.png);
	background-position: center;
}


.bt-allon {
	background-color: #e7b06c;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	border-radius: 0.8vw;
	padding: 0.1vw 0.5vw;
	color: #fafafa;
}

.bt-alloff {
	background-color: #fafafa;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	border-radius: 0.8vw;
	padding: 0.1vw 0.5vw;
	color: #e7b06c;
}

.tag-on {
	background-color: #e7b06c;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	padding: 0.1vw 0.5vw;
	color: #fafafa;
	margin-right: 0.5rem
}

.tag-off {
	background-color: #fafafa;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	padding: 0.1vw 0.5vw;
	color: #e7b06c;
	margin-right: 0.5rem
}

.illustrations-enter-active {
  animation: illustrations-in .5s;
}

.illustrations-leave-to {
  opacity: 0;
}

@keyframes illustrations-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.illustrations-move {
  transition: transform 1s;
}

.illustrations-leave-active {
  position: absolute;
}
</style>