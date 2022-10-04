import { threadId, parentPort } from "worker_threads"

parentPort.addListener('message', (message) => {
    for (let index = 0; index < message; index++) {
        console.info(`Thread-${threadId} send message ${index}`)      
        parentPort.postMessage(index)
    }

    parentPort.close()
})