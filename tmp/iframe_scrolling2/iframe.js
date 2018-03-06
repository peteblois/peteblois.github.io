(async () => {
  let count = window.count || 0;
  for (let i = 0; i < 200; ++i) {
    const pre = document.createElement('pre');
    pre.textContent = `line ${count++}`;
    if (i == 112) {
      pre.textContent = 'Try to select this line';
    }
    document.body.appendChild(pre);
  }

  document.scrollingElement.scrollTop = 3000;
})();
