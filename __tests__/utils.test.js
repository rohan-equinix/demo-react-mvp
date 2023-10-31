import { fizz_buzz, sum } from "../src/test.js";

describe("FizzBuzz", () => {
  it('3 should result in "fizz"', () => {
    expect(fizz_buzz([3])).toBe("fizz");
  });
});

describe("Sum fun", () => {
  it("5 should return", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
