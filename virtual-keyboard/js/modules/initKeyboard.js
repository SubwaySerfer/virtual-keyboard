function initKeyboard() {
  const body = document.querySelector('body');

  body.insertAdjacentHTML(
    'afterbegin',
    '<div class="main-wrapper"><textarea class="main-txt">keyboard</textarea><div class="main-content"><ul class="content"></ul></div></div>',
  );
}

export { initKeyboard };
