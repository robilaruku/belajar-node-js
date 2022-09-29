const buffer = Buffer.from("robi laruku", "utf-8")

console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from("cm9iaSBsYXJ1a3U=", "base64")

console.info(bufferBase64.toString('utf-8'))