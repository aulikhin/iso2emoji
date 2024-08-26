import { describe, it, expect } from "vitest";
import { getEmojiByCountryCode, type TAlpha2Code } from "../src";
import { COUNTRY_EMOJIES } from "../src/const";

describe("getEmojiByCountryCode", () => {
  it("should return the correct emoji for a valid country code", () => {
    expect(getEmojiByCountryCode("US")).toBe(COUNTRY_EMOJIES["US"]);
    expect(getEmojiByCountryCode("JP")).toBe(COUNTRY_EMOJIES["JP"]);
    expect(getEmojiByCountryCode("FR")).toBe(COUNTRY_EMOJIES["FR"]);
  });

  it("should return undefined for an invalid country code", () => {
    expect(getEmojiByCountryCode("ZZ" as TAlpha2Code)).toBeUndefined();
    expect(getEmojiByCountryCode("" as TAlpha2Code)).toBeUndefined();
    expect(getEmojiByCountryCode("XYZ" as TAlpha2Code)).toBeUndefined();
  });

  it("should return undefined for a lowercase country code", () => {
    expect(getEmojiByCountryCode("us" as TAlpha2Code)).toBeUndefined();
    expect(getEmojiByCountryCode("jp" as TAlpha2Code)).toBeUndefined();
  });

  it("should return undefined for a null or undefined input", () => {
    expect(
      getEmojiByCountryCode(null as unknown as TAlpha2Code)
    ).toBeUndefined();
    expect(
      getEmojiByCountryCode(undefined as unknown as TAlpha2Code)
    ).toBeUndefined();
  });

  it("should return undefined for a numeric input", () => {
    expect(
      getEmojiByCountryCode(123 as unknown as TAlpha2Code)
    ).toBeUndefined();
  });

  it("should return undefined for an empty object", () => {
    expect(getEmojiByCountryCode({} as TAlpha2Code)).toBeUndefined();
  });

  it("should correctly map all valid country codes to their respective emojis", () => {
    Object.keys(COUNTRY_EMOJIES).forEach((code) => {
      expect(getEmojiByCountryCode(code as TAlpha2Code)).toBe(
        COUNTRY_EMOJIES[code as TAlpha2Code]
      );
    });
  });
});
