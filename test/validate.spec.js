const expect = require("chai").expect;
const validate = require("../validate").validate;

var body = null;

describe("Default validation tests", () => {
    it ('Validate Hello World', () => {
        let response = validate(body);
        expect(response.code).to.equal(200)
    });
});