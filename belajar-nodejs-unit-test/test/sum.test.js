import { sum } from "../src/sum"

test("Test sum function", () => {
    const result = sum(1, 2);
    expect(result).toBe(3)
})