const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, seconds] = timeCode.split(':').map(function (str) {
      return parseFloat(str);
    });
    return mins * 60 + seconds;
  })
  .reduce((total, second) => total + second);

let secodnsLeft = seconds;
const hoursVideo = Math.floor(secodnsLeft / 3600);
secodnsLeft = secodnsLeft % 3600;

const minVideo = Math.floor(secodnsLeft / 60);
secodnsLeft = secodnsLeft % 60;

console.log(hoursVideo, minVideo, secodnsLeft);
