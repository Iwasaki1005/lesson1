'use strict';
{
const gameslide1 = document.getElementById('game-slide1')
const gameslide2 = document.getElementById('game-slide2')
const gameslide3 = document.getElementById('game-slide3')

const slidebtnext = document.getElementById('slide-bt-next')

var parameter_slidestate = 0;


slidebtnext.addEventListener('click', function () {
	parameter_slidestate = parameter_slidestate + 1;
	if (parameter_slidestate == 1) {
		gameslide1.classList.remove('slide-position1');
		gameslide1.classList.add('slide-position3');
		gameslide2.classList.remove('slide-position2');
		gameslide2.classList.add('slide-position1');
		gameslide3.classList.remove('slide-position3');
		gameslide3.classList.add('slide-position2');
		console.log('parameter_slidestate = 1')
	}	else {
			if (parameter_slidestate == 2) {
				gameslide1.classList.remove('slide-position3');
				gameslide1.classList.add('slide-position2');
				gameslide2.classList.remove('slide-position1');
				gameslide2.classList.add('slide-position3');
				gameslide3.classList.remove('slide-position2');
				gameslide3.classList.add('slide-position1');
				console.log('parameter_slidestate = 2')
			}	else {
					if (parameter_slidestate == 3) {
						gameslide1.classList.remove('slide-position2');
						gameslide1.classList.add('slide-position1');
						gameslide2.classList.remove('slide-position3');
						gameslide2.classList.add('slide-position2');
						gameslide3.classList.remove('slide-position1');
						gameslide3.classList.add('slide-position3');
						parameter_slidestate = 0 ;
						console.log('parameter_slidestate = 3')
					}
			}
		}
});

}

