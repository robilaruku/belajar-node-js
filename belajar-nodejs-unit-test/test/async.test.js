import { sayHelloAsync } from "../src/async";

test('test async function', async () => {
    const result = await sayHelloAsync("Robi")
    expect(result).toBe("Hello Robi")
});