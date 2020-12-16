import { reactFunc } from './reactf.js';
import { anima } from './anima.js';

document.querySelector('#sel-names').addEventListener('change', reactFunc);
// document.querySelector('#sel-names').addEventListener('mousemove', ev => console.log(ev));
document.querySelector('#inp-name').addEventListener('input', reactFunc);
[...document.querySelectorAll('#sel-names option')]
    .forEach(opt => opt.addEventListener('mousemove', ev => console.log(ev)));


const elements = {
    dots1 : '⠁⠂⠄⡀⢀⠠⠐⠈',
    dots2 : '⣾⣽⣻⢿⡿⣟⣯⣷',
    arrow : '▶▼◀▲'
};
setInterval(anima, 1000, { str : elements.arrow, point : 0 });