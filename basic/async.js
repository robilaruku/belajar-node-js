function samplePromise() {
    return Promise.resolve("Robi")
}

async function run() {
    const name = await samplePromise()
    console.info(name)    
}

run()

