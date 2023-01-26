import { add } from "./sample.js";

describe("Given add function", () => {
  describe("We have a+b", () => {
    test("1+1 should be 2", () => {
      const r = add(1, 1);
      expect(r).toEqual(2);
    });
  });
});
