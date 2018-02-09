async function configureServiceWorker() {
    const scriptUri =new URL('service_worker_binary.js', window.location).toString();
    const scope = new URL('./', window.location.toString()).toString();
    const serviceWorker =
        await navigator.serviceWorker.register(scriptUri, {scope})
            .then((registration) => {
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



async function main() {
  await configureServiceWorker();

  while(true) {}
}

main();
