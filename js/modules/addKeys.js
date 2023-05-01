import * as line1 from '../langs/ruLang.js';

function addKeys(container) {
  // console.log(container);
  line1.default.forEach((el) => {
    // const liLetter = document.createElement('li');
    // liLetter.textContent = el;
    // container.appendChild(liLetter);
    container.insertAdjacentHTML(
      'beforeend',
      `<li class="content-keys">${el}</li>`
    );
  });
}

export { addKeys };
