(async () => {
  let count = window.count || 0;
  for (let i = 0; i < 20; ++i) {
    const pre = document.createElement('pre');
    pre.textContent = `line ${count++}`;
    document.body.appendChild(pre);
  }

  // document.body.onclick = function() {
  //   for (let i = 0; i < 20; ++i) {
  //     const pre = document.createElement('pre');
  //     pre.textContent = `line ${count++}`;
  //     document.body.appendChild(pre);
  //   }
  // };

  window.count = count;
  // await new Promise(resolve => setTimeout(resolve, 1000));

})();
