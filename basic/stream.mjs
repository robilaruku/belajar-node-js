import fs from 'fs'

const writer = fs.createWriteStream('./basic/target.log')

writer.write("wkwk\n")
writer.write("wkwkwkwkw\n")
writer.write("wkwkwkwkwwkwkwk\n")

writer.end()

const reader = fs.createReadStream('./basic/target.log')
reader.addListener("data", (data) => {
    console.info(data.toString())
})