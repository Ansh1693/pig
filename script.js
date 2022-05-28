'use strict';
//initialisiation

let score0el = document.getElementById('score--0');
let score1el = document.getElementById('score--1');
let player0el = document.querySelector('.player--0');
let player1el = document.querySelector('.player--1');
let current0el = document.querySelector('#current--0');
let current1el = document.querySelector('#current--1');
//let activeplayer = document.querySelector('.player--active');

let diceel = document.querySelector('.dice');
let btnnew = document.querySelector('.btn--new');
let btnroll = document.querySelector('.btn--roll');
let btnhold = document.querySelector('.btn--hold');

let scores, current, activeplayer, playing;
//let activeplayer = 0;

//starting

const init = function () {
  scores = [0, 0];
  current = 0;
  activeplayer = 0;
  playing = true;

  current0el.textContent = 0;
  current1el.textContent = 0;
  score0el.textContent = scores[0];
  score1el.textContent = scores[1];

  diceel.classList.add('hidden');
  player0el.classList.remove('player--winner');
  player1el.classList.remove('player--winner');
  player0el.classList.add('player--active');
  player1el.classList.remove('player--active');
};
init();

//playerswitch
const switchplayer = function () {
  current = 0;
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};

//game
btnroll.addEventListener('click', function () {
  if (playing) {
    const number = Math.trunc(Math.random() * 6) + 1;
    console.log(number);
    diceel.classList.remove('hidden');
    diceel.src = `dice-${number}.png`;

    //checking for 1
    if (number != 1) {
      current += number;
      document.getElementById(`current--${activeplayer}`).textContent = current;
    } else {
      switchplayer();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += current;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] > 100) {
      document.getElementById(`player--${activeplayer}`).add('player--winner');
      document
        .getElementById(`player--${activeplayer}`)
        .remove('player--active');
      playing = false;
      diceel.classList.add('hidden');
    } else {
      switchplayer();
    }
  }
});

btnnew.addEventListener('click', init);
