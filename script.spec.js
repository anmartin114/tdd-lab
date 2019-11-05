const { translate } = require("./script");

describe("translate function", function() {
  it("starting with vowel", function() {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
  //   it("convert to lowercase", function() {
  //     let result = translate("HELLO");
  //     expect(result).toBe("hello");
  //   });
  it("starting with consonant", function() {
    let result = translate("hello");
    expect(result).toBe("ellohay");
  });

  it("two constants", function() {
    let result = translate("grant");
    expect(result).toBe("antgray");
  });
});
