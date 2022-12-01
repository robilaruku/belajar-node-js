import { callMe, MyException } from "../src/exception";

test('exception', () => {
    expect(() => callMe("Robi")).toThrow();
    expect(() => callMe("Robi")).toThrow(MyException);
    expect(() => callMe("Robi")).toThrow("Ups my execption happends");
});