import { findObjectByString } from "../helperFunctions/findObject";

describe("findObjectByString", () => {
  const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  it("returns undefined if the array is falsy", () => {
    expect(findObjectByString("John", null, "name")).toBeUndefined();
  });

  it("returns undefined if the string to compare is not in the objects", () => {
    expect(findObjectByString("John", arr, "age")).toBeUndefined();
  });

  it("returns undefined if the string is not found in the array", () => {
    expect(findObjectByString("Alice", arr, "name")).toBeUndefined();
  });

  it("returns the object that has the matching string in the specified property", () => {
    expect(findObjectByString("Jane", arr, "name")).toEqual({
      id: 2,
      name: "Jane",
    });
  });

  it("returns the first object that matches the string, if there are multiple matches", () => {
    const arrWithDuplicates = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Bob" },
      { id: 4, name: "Jane" },
    ];
    expect(findObjectByString("Jane", arrWithDuplicates, "name")).toEqual({
      id: 2,
      name: "Jane",
    });
  });
});
