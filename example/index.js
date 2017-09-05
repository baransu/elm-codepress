const app = Elm.Main.embed(document.getElementById('root'));
const worker = Elm.Worker.worker();

worker.ports.compiled.subscribe(app.ports.compiled.send);
app.ports.compile.subscribe(worker.ports.compile.send);
app.ports.batchCompile.subscribe(list =>
  list.forEach(worker.ports.compile.send)
);
