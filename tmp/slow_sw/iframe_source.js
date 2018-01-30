let step = 'initializing';
async function configureServiceWorker() {
    const scriptUri =new URL('service_worker_binary.js', window.location).toString();
    const scope = new URL('./', window.location.toString()).toString();
    const serviceWorker =
        await navigator.serviceWorker.register(scriptUri, {scope})
            .then((registration) => {
              step = 'waiting for controller';
              // Wait for the service worker to become active.
              return new Promise((resolve, reject) => {
                if (window.navigator.serviceWorker.controller) {
                  resolve(window.navigator.serviceWorker.controller);
                  return;
                }
                const handler = () => {
                  // Wait for the service worker to start controlling this
                  // page, meaning it's intercepting all fetch requests.
                  if (window.navigator.serviceWorker.controller) {
                    navigator.serviceWorker.removeEventListener(
                        'controllerchange', handler);
                    resolve(window.navigator.serviceWorker.controller);
                  }
                };
                navigator.serviceWorker.addEventListener(
                    'controllerchange', handler);
              });
            });
  }

async function main(msg) {
  // try {
    const swPromise = configureServiceWorker();
    let timer = 0;
    const timeout = new Promise((resolve, reject) => {
      timer = setTimeout(() => {
        reject("Service worker timed out on step " + step);
      }, 10000);
    });
    swPromise.then(() => {
      clearTimeout(timer);
    });
    try {
      await Promise.race([swPromise, timeout]);
    } catch(e) {
      msg.data.port.postMessage({
        error: `iframe content error ${e}`,
      });
    }
    msg.data.port.postMessage({
      loaded: true,
    });
}

main(window.config);
