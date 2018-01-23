(async () => {
  let count = 0;
  for (let i = 0; i < 20; ++i) {
    const pre = document.createElement('pre');
    pre.textContent = `line ${count++}`;
    document.body.appendChild(pre);
  }

  await new Promise(resolve => setTimeout(resolve, 100));
  window.parent.postMessage({
    height: document.documentElement.scrollHeight,
  }, '*');

  document.body.onclick = function() {
    for (let i = 0; i < 20; ++i) {
      const pre = document.createElement('pre');
      pre.textContent = `line ${count++}`;
      document.body.appendChild(pre);
    }
  };
  // await new Promise(resolve => setTimeout(resolve, 1000));

})();
