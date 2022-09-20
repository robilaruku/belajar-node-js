import fs from 'fs/promises'

const buffer = await fs.readFile("./basic/file-system.mjs")

console.info(buffer.toString())

await fs.writeFile("./basic/tmp.txt", "Hello NodeJS")