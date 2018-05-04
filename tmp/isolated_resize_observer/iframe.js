(async () => {
  document.body.style.padding = '0';
  document.body.style.margin = '0';

  window.parent.postMessage({
      height: 0,
    }, '*');

  const observer = new ResizeObserver((entries) => {
    console.log(`Requesting resize to ${document.scrollingElement.scrollHeight}`);
    window.parent.postMessage({
      height: document.scrollingElement.scrollHeight,
    }, '*');
  });
  observer.observe(document.body);


  while (true) {
    const e = document.createElement('pre');
    e.textContent = 'This is a row.';
    document.body.appendChild(e);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})();
