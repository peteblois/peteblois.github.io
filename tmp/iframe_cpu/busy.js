document.body.textContent = 'The iframe has loaded, now spinning in Javascript.';

(async () => {
  // Let the text render.
  await new Promise((resolve) => setTimeout(resolve, 100));

  while (true) {
    await Promise.resolve();
    document.body.textContent += 'newline ';
  }
})();
