import * as line1 from '../langs/enLang.js';
import exception from '../langs/exception.js';

function addKeys(container) {
  // console.log(container);
  line1.default.forEach((el) => {
    if (exception.includes(el)) {
      console.log(el, 'icludes!');
      container.insertAdjacentHTML(
        'beforeend',
        `<li class="content-keys content-keys_except">${el}</li>`
      );
    } else {
      container.insertAdjacentHTML(
        'beforeend',
        `<li class="content-keys">${el}</li>`
      );
    }
    // const liLetter = document.createElement('li');
    // liLetter.textContent = el;
    // container.appendChild(liLetter);
  });
}
console.log(exception);

export { addKeys };
