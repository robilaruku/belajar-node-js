import cluster from 'cluster'
import os from 'os'
import process from 'process'
import http from 'http'

if (cluster.isPrimary) {
    // jalankan worker 
    console.info(`Primary : ${process.pid}`)
    for (let index = 0; index < os.cpus().length; index++) {
        cluster.fork()
    }

    cluster.addListener("exit", (worker) => {
        console.info(`Worker-${worker.id} is exit`)
        cluster.fork()
    })
}

if (cluster.isWorker) {
    console.info(`Worker : ${process.pid}`)

    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`)
        response.end();
        process.exit();
    })

    server.listen(3000)
}