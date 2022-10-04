import { Console } from 'console'
import fs from 'fs'

const file = fs.createWriteStream("./basic/application.log")

const log = new Console({
    stdout: file,
    stderr: file,
})

log.info("Hellow World")
log.error("Hellow World")

const person = {
    firstName : "Robi",
    lastName : "Dream"
}

log.table(person)