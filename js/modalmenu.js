
'use strict';
{
const dropen = document.getElementById('hamburger-button');
const drmenu = document.getElementById('Drawer-menu');
const border1 = document.getElementById('burger-border1');
const border2 = document.getElementById('burger-border2');
const border3 = document.getElementById('burger-border3');

const drcontent1 = document.getElementById('dr-content1');
const drcontent2 = document.getElementById('dr-content2');
const drcontent3 = document.getElementById('dr-content3');
const drcontent4 = document.getElementById('dr-content4');


dropen.addEventListener('click', function () {
	if (dropen.classList.contains('switch-dr') == false ) {
		//1.位置を少し下にずらす//
		drcontent1.classList.add('dr-saup');
		drcontent2.classList.add('dr-saup');
		drcontent3.classList.add('dr-saup');
		drcontent4.classList.add('dr-saup');
		//2.時間差、アニメーション時間を設定//
		drcontent1.classList.add('dr-delay1');
		drcontent2.classList.add('dr-delay2');
		drcontent3.classList.add('dr-delay3');
		drcontent4.classList.add('dr-delay4');
		drcontent1.classList.add('tr-duration-05s');
		drcontent2.classList.add('tr-duration-05s');
		drcontent3.classList.add('tr-duration-05s');
		drcontent4.classList.add('tr-duration-05s');
		//※ここでウェイトがほしい//
		setTimeout(function(){
			//3.透明度と位置の設定のクラスを削除しメニューが開かれる//
			dropen.classList.add('switch-dr');
			drmenu.classList.remove('dr-hidden');
			drcontent1.classList.remove('dr-saup');
			drcontent2.classList.remove('dr-saup');
			drcontent3.classList.remove('dr-saup');
			drcontent4.classList.remove('dr-saup');
			drcontent1.classList.remove('opacity-0');
			drcontent2.classList.remove('opacity-0');
			drcontent3.classList.remove('opacity-0');
			drcontent4.classList.remove('opacity-0');
			border1.classList.add('burger-border1');
			border2.classList.add('burger-border2');
			border3.classList.add('burger-border3');
		}, 10);
	}
	else {
		//1.時間差の設定を削除//
		drcontent1.classList.remove('dr-delay1');
		drcontent2.classList.remove('dr-delay2');
		drcontent3.classList.remove('dr-delay3');
		drcontent4.classList.remove('dr-delay4');
		//2.フェードアウト//
		dropen.classList.remove('switch-dr');
		drmenu.classList.add('dr-hidden');
		drcontent1.classList.add('opacity-0');
		drcontent2.classList.add('opacity-0');
		drcontent3.classList.add('opacity-0');
		drcontent4.classList.add('opacity-0');
		border1.classList.remove('burger-border1');
		border2.classList.remove('burger-border2');
		border3.classList.remove('burger-border3');
		drcontent1.classList.remove('dr-delay1');
		drcontent2.classList.remove('dr-delay2');
		drcontent3.classList.remove('dr-delay3');
		drcontent4.classList.remove('dr-delay4');
		setTimeout(function(){
			//3.アニメーション時間の設定を削除//
			drcontent1.classList.remove('tr-duration-05s');
			drcontent2.classList.remove('tr-duration-05s');
			drcontent3.classList.remove('tr-duration-05s');
			drcontent4.classList.remove('tr-duration-05s');
		}, 200);
	}
});
}

