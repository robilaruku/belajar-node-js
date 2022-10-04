import fs from 'fs'
import zlib from 'zlib'

const source = fs.readFileSync("./basic/zlib-compress.mjs")
const result = zlib.gzipSync(source)

fs.writeFileSync("./basic/zlib-compress.mjs.txt", result)