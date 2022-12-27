const pressed = [];
const secretCode = 'juan';

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('I find');
    // cornify_add();
  }
});

// http://www.cornify.com/js/cornify.js
