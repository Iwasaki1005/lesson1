
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
		dropen.classList.add('switch-dr');
		drmenu.classList.remove('dr-hidden');
		drcontent1.classList.remove('dr-saup');
		drcontent2.classList.remove('dr-saup');
		drcontent3.classList.remove('dr-saup');
		drcontent4.classList.remove('dr-saup');
		border1.classList.add('burger-border1');
		border2.classList.add('burger-border2');
		border3.classList.add('burger-border3');
		}
	else {
		dropen.classList.remove('switch-dr');
		drmenu.classList.add('dr-hidden');
		drcontent1.classList.remove('dr-delay1');
		drcontent2.classList.remove('dr-delay2');
		drcontent3.classList.remove('dr-delay3');
		drcontent4.classList.remove('dr-delay4');
		drcontent1.classList.add('dr-saup');
		drcontent2.classList.add('dr-saup');
		drcontent3.classList.add('dr-saup');
		drcontent4.classList.add('dr-saup');
		drcontent1.classList.add('dr-delay1');
		drcontent2.classList.add('dr-delay2');
		drcontent3.classList.add('dr-delay3');
		drcontent4.classList.add('dr-delay4');
		border1.classList.remove('burger-border1');
		border2.classList.remove('burger-border2');
		border3.classList.remove('burger-border3');
	}
});
}
