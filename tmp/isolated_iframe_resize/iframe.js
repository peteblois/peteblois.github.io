(async () => {
  document.body.style.margin = '0';
  document.body.style.background = 'white';
  document.body.style.padding = '7px 0 10px 5px';

  const pre = document.createElement('pre');
  pre.textContent = 'hi\nhi\nhi\nhi\nhi\n';
  document.body.appendChild(pre);
})();
