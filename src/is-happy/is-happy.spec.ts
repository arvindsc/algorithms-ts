import { isHappyNumber } from "./is-happy";
describe("isHappyNumber", () => {
  it("should verify a given number is a happy number", () => {
    let num = 12;
    expect(isHappyNumber(19)).toBe(true);
  });
});
