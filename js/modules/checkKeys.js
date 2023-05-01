import specialSymbols from '../langs/specialSymbols.js';

function checkKeys(content, textArea) {
  content.addEventListener('click', () => {
    if (specialSymbols.includes(event.target.textContent.toUpperCase())) {
      console.log(event.target);
    } else {
      textArea.textContent += event.target.textContent;
      console.log(event.target.textContent);
    }
  });
}

export { checkKeys };
