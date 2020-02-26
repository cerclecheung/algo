/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("hahahha", () => {
  it("blah", function() {
    const output = twoNumberSum([4, 6], 10).sort((a, b) => a - b);
    expect(output).to.deep.equal([4, 6]);
  });
});
