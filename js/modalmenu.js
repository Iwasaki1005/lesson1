
'use strict';
{
const dropen = document.getElementById('hamburger-button');
const drmenu = document.getElementById('Drawer-menu');
const border1 = document.getElementById('burger-border1');
const border2 = document.getElementById('burger-border2');
const border3 = document.getElementById('burger-border3');

dropen.addEventListener('click', function () {
	if (dropen.classList.contains('switch-dr') == false ) {
		dropen.classList.add('switch-dr');
		drmenu.classList.remove('dr-hidden');
		border1.classList.add('burger-border1');
		border2.classList.add('burger-border2');
		border3.classList.add('burger-border3');
		}
	else {
		dropen.classList.remove('switch-dr');
		drmenu.classList.add('dr-hidden');
		border1.classList.remove('burger-border1');
		border2.classList.remove('burger-border2');
		border3.classList.remove('burger-border3');
	}
});
}
