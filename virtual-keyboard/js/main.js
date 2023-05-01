/* eslint-disable import/extensions */
import { addKeys } from './modules/addKeys.js';
import { initKeyboard } from './modules/initKeyboard.js';
import { checkKeys } from './modules/checkKeys.js';
// const body = document.querySelector('body');

// body.insertAdjacentHTML(
//   'afterbegin',
//   '<div class="main-wrapper"><textarea class="main-txt">keyboard</textarea><div class="main-content"><ul class="content"></ul></div></div>'
// );

initKeyboard();
const content = document.querySelector('.content');
const textArea = document.querySelector('.main-txt');
addKeys(content);
// console.log(textArea);
checkKeys(content, textArea);
