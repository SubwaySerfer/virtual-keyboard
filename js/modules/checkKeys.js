import specialSymbols from '../langs/specialSymbols.js';
import { otherKeys } from './otherKeys.js';

function checkKeys(content, textArea) {
  content.addEventListener('click', () => {
    if (specialSymbols.includes(event.target.textContent.toUpperCase())) {
      // console.log(event.target.textContent.toUpperCase());
      otherKeys(event.target.textContent.toUpperCase(), textArea);
    } else {
      textArea.textContent += event.target.textContent;
      // console.log(event.target.textContent);
    }
  });

  window.addEventListener('keyup', () => {
    if (specialSymbols.includes(event.key.toUpperCase())) {
      // console.log(event.target.textContent.toUpperCase());
      otherKeys(event.key.toUpperCase(), textArea);
    } else {
      // console.log(textArea.textContent);
      textArea.textContent += event.key;
      // console.log(event.key);
    }
    // console.log(event.key);
  });
}

export { checkKeys };
