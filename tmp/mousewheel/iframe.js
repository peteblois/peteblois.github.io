let wheelEvents = 0;
const report = document.createElement('div');
report.textContent = `${wheelEvents} wheel events.`;
document.body.appendChild(report);

window.addEventListener('mousewheel', (e) => {
  ++wheelEvents;
  report.textContent = `${wheelEvents} wheel events.`;
});
