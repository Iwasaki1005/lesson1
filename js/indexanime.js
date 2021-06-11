const newsindex = document.getElementById('news-index')
const newsspan = document.getElementById('news-span')
const dmybt = document.getElementById('dmy-bt')


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