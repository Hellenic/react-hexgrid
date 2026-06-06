import { Hex } from "../../../src/models/Hex"

test("toString should return a stable coordinate key", () => {
  expect(new Hex(1, -2, 1).toString()).toBe("1,-2,1")
})
