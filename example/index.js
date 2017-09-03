let worker;
let app = Elm.Main.embed(document.getElementById('root'));

setUpWorker();

window.onerror = (errorMsg, url, lineNumber) => {
  setTimeout(() => {
    setUpWorker();
    const split = errorMsg.split('The message provided by the code author is:');
    if (split.length == 2) {
      document.getElementById('error-dialog').innerText = split[1];
    }
  }, 30);
  return false;
};

window.onkeydown = () => {
  document.getElementById('error-dialog').innerText = '';
};

function setUpWorker() {
  worker = null;
  worker = Elm.Worker.worker();
  worker.ports.compiled.subscribe(app.ports.compiled.send);
  app.ports.compile.unsubscribe();
  app.ports.compile.subscribe(worker.ports.compile.send);
  app.ports.batchCompile.unsubscribe();
  app.ports.batchCompile.subscribe(list =>
    list.forEach(worker.ports.compile.send)
  );
}
