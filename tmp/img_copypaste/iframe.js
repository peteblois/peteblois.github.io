function drawImage(color) {
  const canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL();

  const img = document.createElement('img');
  img.src = data;
  document.body.appendChild(img);
}

drawImage('red');
drawImage('blue');
drawImage('green');
drawImage('yellow');
drawImage('orange');
drawImage('purple');
drawImage('magenta');
drawImage('cyan');
