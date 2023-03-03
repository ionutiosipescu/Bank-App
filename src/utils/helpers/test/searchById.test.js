import { searchById } from "../helperFunctions/searchById";

describe("searchById", () => {
  const testArray = [
    { account_id: 1, name: "Alice" },
    { account_id: 2, name: "Bob" },
    { account_id: 3, name: "Charlie" },
  ];

  it("should return true if the array contains an object with the given id", () => {
    const result = searchById(2, testArray);
    expect(result).toBe(true);
  });

  it("should return false if the array does not contain an object with the given id", () => {
    const result = searchById(4, testArray);
    expect(result).toBe(false);
  });

  it("should return false if the array is empty", () => {
    const result = searchById(1, []);
    expect(result).toBe(false);
  });
});
