(async () => {
  document.body.style.margin = '0';
  document.body.style.background = 'white';
  document.body.style.padding = '7px 0 10px 5px';

  const input = document.createElement('input');
  document.body.appendChild(input);
  input.focus();

  await new Promise(resolve => setTimeout(resolve, 1000));
  window.parent.postMessage({
      blur: true,
    }, '*');
})();
