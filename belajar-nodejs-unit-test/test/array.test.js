test('array', () => {
    const names = ['Robi', 'Laruku', 'Laravel']
    expect(names).toEqual(['Robi', 'Laruku', 'Laravel'])
    expect(names).toContain('Robi')
});

test('array object', () => {
    const persons = [
        {
            name : 'Robi'
        },
        {
            name: 'Budi'
        },
    ]

    expect(persons).toContainEqual({
        name: 'Robi'
    })
});