window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //creando variable audio que toma todoslos valores
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing'); //Agregando la clase para efecto
});

const keys = document.querySelectorAll('.key');

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
