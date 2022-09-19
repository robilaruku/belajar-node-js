function samplePromise() {
    return Promise.resolve("Robi")
}

const name = await samplePromise()
console.info(name)   
