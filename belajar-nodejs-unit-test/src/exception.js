export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Robi") {
        throw new MyException("Ups my execption happends")
    } else {
        return "OK"
    }
}