function otherKeys(elem, textArea) {
  // console.log(elem);
  switch (elem) {
    case 'SPACE':
      // console.log('space');
      textArea.textContent += ' ';
      break;
    case 'ENTER':
      console.log('enter');
      textArea.textContent += '\n';
      break;
    case 'BACKSPACE':
    case 'DEL':
      textArea.textContent = textArea.textContent.slice(0, -1);
      break;
    case 'TAB':
      textArea.textContent += '\t';
    default:
      console.log('Sorry');
  }
}

export { otherKeys };
