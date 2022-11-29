test("test toBe", () => {
    const name = "Robi"
    const hello = `Hello ${name}`

    expect(hello).toBe("Hello Robi")
})

test("test toEqual", () => {
    let person = { id: "robi" }
    Object.assign(person, { name: "Robi" })

    expect(person).toEqual({
        id: "robi",
        name: "Robi",
    })
})