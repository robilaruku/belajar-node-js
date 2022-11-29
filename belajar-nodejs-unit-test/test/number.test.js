test('numbers', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3) // hasil lebih dari 3
    expect(value).toBeGreaterThanOrEqual(4) // lebih besar atau sama 

    expect(value).toBeLessThan(5) // kurang dari
    expect(value).toBeLessThanOrEqual(4) // kurang dari atau sama

    expect(value).toBe(4)
});