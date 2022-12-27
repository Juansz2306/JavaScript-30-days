const secondsHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secodsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secodsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDregrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDregrees}deg)`;

  const hour = now.getHours();
  const hourDregrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDregrees}deg)`;
}

setInterval(setDate, 1000);
