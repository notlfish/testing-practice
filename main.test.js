import { stringLength, stringReverse } from "./main";
import { jest } from "@jest/globals";

describe("stringLength", () => {
  test("returns the correct length of a string", () => {
    const str = "123456";
    const res = stringLength(str);
    expect(res).toEqual(6);
  });

  test("errors out for empty strings", () => {
    const empty = "";
    expect(() => {
      return stringLength(empty);
    }).toThrow("String length outside bounds");
  });

  test("errors out for empty strings", () => {
    // Arrange
    const longStr = "12345678910";
    expect(() => {
      return stringLength(longStr);
    }).toThrow("String length outside bounds");
  });
});

describe("reverseString", () => {});
