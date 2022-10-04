import util from 'util'

const firstName = "Robi"
const lastName = "Laruku"

console.info(`Hello ${firstName} ${lastName}`)
console.info(util.format("Hello %s %s", firstName, lastName)) 

const person = {
    firstName: "Robi",
    lastName : "Dream"
}

console.info(`Person : ${JSON.stringify(person)}`)
console.info(util.format("Person : %j", person))