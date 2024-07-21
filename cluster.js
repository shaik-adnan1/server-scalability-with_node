const cluster = require('cluster');

if(cluster.isMaster) {
    const workers = require("os").cpus().length;
    workers.map((worker, i, _) => {
        cluster.fork();
    })
    cluster.on("online", (worker) => {
        console.log(`Worker started wit a PID  of ${worker.process.pid}`);
    })

    // this fires when a worker dies
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker died with a pid of: ${worker.process.pid}`);
        cluster.fork();
    });
}