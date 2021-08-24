<template>
	<nav id="Gl-menu" class="gl-menu">
		<div class="gl-under content-core">
			<div id="hamburger-button" class="gl-burger">
				<span id="gl-burger-span1" class="gl-span1"></span>
				<span id="gl-burger-span2" class="gl-span2"></span>
				<span id="gl-burger-span3" class="gl-span3"></span>
			</div>
		</div>
		<div class="gl-index content-core">
			<div class="side-vertical font-E2"><span class="m-bottom-1rem">NANTOKAKANTOKA</span>OFFICIAL SITE</div>
		</div>
		<div class="gl-under content-core">
			<div class="tw-round content-core">
				<i class="fab fa-twitter"></i>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
  name: 'Glmenu',
   mounted: function() {
	const dropen = document.getElementById('hamburger-button');
const drmenu = document.getElementById('Drawer-menu');

const drcontent1 = document.getElementById('dr-content1');
const drcontent2 = document.getElementById('dr-content2');
const drcontent3 = document.getElementById('dr-content3');
const drcontent4 = document.getElementById('dr-content4');

const glspan1 = document.getElementById('gl-burger-span1');
const glspan2 = document.getElementById('gl-burger-span2');
const glspan3 = document.getElementById('gl-burger-span3');


dropen.addEventListener('click', function () {
	if (dropen.classList.contains('switch-dr') == false ) {
		//1.位置を少し下にずらす//
		drcontent1.classList.add('dr-saup');
		drcontent2.classList.add('dr-saup');
		drcontent3.classList.add('dr-saup');
		drcontent4.classList.add('dr-saup');
		//2.時間差、アニメーション時間を設定//
		drcontent1.classList.add('tr-delay-01s');
		drcontent2.classList.add('tr-delay-02s');
		drcontent3.classList.add('tr-delay-03s');
		drcontent4.classList.add('tr-delay-04s');
		drcontent1.classList.add('tr-duration-05s');
		drcontent2.classList.add('tr-duration-05s');
		drcontent3.classList.add('tr-duration-05s');
		drcontent4.classList.add('tr-duration-05s');
		//※ここでウェイトがほしい//
		setTimeout(function(){
			//3.透明度と位置の設定のクラスを削除しメニューが開かれる//
			dropen.classList.add('switch-dr');
			drmenu.classList.remove('dr-hidden');
			glspan1.classList.add('gl-span1-active');
			glspan2.classList.add('gl-span2-active');
			glspan3.classList.add('gl-span3-active');
			drcontent1.classList.remove('dr-saup');
			drcontent2.classList.remove('dr-saup');
			drcontent3.classList.remove('dr-saup');
			drcontent4.classList.remove('dr-saup');
			drcontent1.classList.remove('opacity-0');
			drcontent2.classList.remove('opacity-0');
			drcontent3.classList.remove('opacity-0');
			drcontent4.classList.remove('opacity-0');
		}, 10);
	}
	else {
		//1.時間差の設定を削除//
		drcontent1.classList.remove('tr-delay-01s');
		drcontent2.classList.remove('tr-delay-02s');
		drcontent3.classList.remove('tr-delay-03s');
		drcontent4.classList.remove('tr-delay-04s');
		//2.フェードアウト//
		dropen.classList.remove('switch-dr');
		drmenu.classList.add('dr-hidden');
		glspan1.classList.remove('gl-span1-active');
		glspan2.classList.remove('gl-span2-active');
		glspan3.classList.remove('gl-span3-active');
		drcontent1.classList.add('opacity-0');
		drcontent2.classList.add('opacity-0');
		drcontent3.classList.add('opacity-0');
		drcontent4.classList.add('opacity-0');
		drcontent1.classList.remove('tr-delay-01s');
		drcontent2.classList.remove('tr-delay-02s');
		drcontent3.classList.remove('tr-delay-03s');
		drcontent4.classList.remove('tr-delay-04s');
		setTimeout(function(){
			//3.アニメーション時間の設定を削除//
			drcontent1.classList.remove('tr-duration-05s');
			drcontent2.classList.remove('tr-duration-05s');
			drcontent3.classList.remove('tr-duration-05s');
			drcontent4.classList.remove('tr-duration-05s');
		}, 200);
	}
});

  },
}
</script>