'use strict';
{
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
		// 0にいるスライド２が1に移動　1にいるスライド３が2に移動　2にいるスライド１が3に移動
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
				// 0にいるスライド３が1に移動　1にいるスライド１が2に移動　2にいるスライド２が3に移動
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
				// 0にいるスライド１が1に移動　1にいるスライド２が2に移動　2にいるスライド３が3に移動
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
							// 0にいるスライド３が1に移動　1にいるスライド１が2に移動　2にいるスライド２が3に移動
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

}

