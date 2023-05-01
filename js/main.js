/* eslint-disable import/extensions */
// import * as line1 from './langs/ruLang.js';
import { addKeys } from './modules/addKeys.js';

const body = document.querySelector('body');

body.insertAdjacentHTML(
  'afterbegin',
  '<div class="main-wrapper"><textarea class="main-txt">keyboard</textarea><div class="main-content"><ul class="content"></ul></div></div>'
);
const content = document.querySelector('.content');
// console.log(content);
addKeys(content);
// line1.default.forEach((el) => console.log(el));

// console.log(line1.default);
