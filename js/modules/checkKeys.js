import specialSymbols from '../langs/specialSymbols.js';
import { otherKeys } from './otherKeys.js';

function checkKeys(content, textArea) {
  content.addEventListener('click', () => {
    if (specialSymbols.includes(event.target.textContent.toUpperCase())) {
      otherKeys(event.target.textContent.toUpperCase(), textArea);
      //TODO: нужно поменять синтаксис. пока что убирает клики по ul так
    } else if (event.target.textContent.length > 20) {
    } else {
      textArea.textContent += event.target.textContent;
    }
  });

  window.addEventListener('keyup', () => {
    if (specialSymbols.includes(event.key.toUpperCase())) {
      otherKeys(event.key.toUpperCase(), textArea);
    } else {
      textArea.textContent += event.key;
    }
  });
}

export { checkKeys };
