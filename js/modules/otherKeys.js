function otherKeys(elem, textArea) {
  // console.log(elem);
  switch (elem) {
    case 'SPACE':
      textArea.textContent += ' ';
      break;
    case 'ENTER':
      textArea.textContent += '\n';
      break;
    case 'BACKSPACE':
    case 'DEL':
      textArea.textContent = textArea.textContent.slice(0, -1);
      break;
    case 'TAB':
      textArea.textContent += '\t';
      break;
    // case 'UP':
    //   textArea.textContent += '&uarr';
    default:
      '';
  }
}

export { otherKeys };
