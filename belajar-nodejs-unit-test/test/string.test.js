test('string', () => {
    let value = "Robi Laruku"

    expect(value).toBe("Robi Laruku")
    expect(value).toEqual("Robi Laruku")
    expect(value).toMatch(/Robi/) //expect Regex string
});