describe("twoNumberSum", () => {
  it("Test Case #1", function() {
    const output = twoNumberSum([4, 6], 10).sort((a, b) => a - b);
    expect(output).toEqual([4, 6]);
  });

  it("Test Case #2", function() {
    const output = twoNumberSum([4, 6, 1], 5).sort((a, b) => a - b);
    expect(output).toEqual([1, 4]);
  });

  it("Test Case #3", function() {
    const output = twoNumberSum([4, 6, 1, -3], 3).sort((a, b) => a - b);
    expect(output).toEqual([-3, 6]);
  });

  it("Test Case #4", function() {
    const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10).sort(
      (a, b) => a - b
    );
    expect(output).toEqual([-1, 11]);
  });

  it("Test Case #5", function() {
    const output = twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17).sort(
      (a, b) => a - b
    );
    expect(output).toEqual([8, 9]);
  });

  it("Test Case #6", function() {
    const output = twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18).sort(
      (a, b) => a - b
    );
    expect(output).toEqual([3, 15]);
  });

  it("Test Case #7", function() {
    const output = twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5).sort(
      (a, b) => a - b
    );
    expect(output).toEqual([-5, 0]);
  });

  it("Test Case #8", function() {
    const output = twoNumberSum(
      [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
      163
    ).sort((a, b) => a - b);
    expect(output).toEqual([-47, 210]);
  });

  it("Test Case #9", function() {
    const output = twoNumberSum(
      [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
      164
    ).sort((a, b) => a - b);
    expect(output).toEqual([]);
  });

  it("Test Case #10", function() {
    const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15).sort(
      (a, b) => a - b
    );
    expect(output).toEqual([]);
  });
});
