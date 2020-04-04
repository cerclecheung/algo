function waterArea(heights) {
  let water = 0;
  const max = Math.max(...heights);
  const getWalls = height => {
    let wallAtLevel = [];
    heights.forEach((ele, idx) => {
      if (ele >= height) {
        wallAtLevel.push(idx);
      }
    });
    if (wallAtLevel.length <= 1) {
      return 0;
    } else {
      return (
        wallAtLevel[wallAtLevel.length - 1] -
        wallAtLevel[0] -
        wallAtLevel.length +
        1
      );
    }
  };
  for (let level = max; level >= 0; level--) {
    water = water + getWalls(level);
  }
  return water;

  // Write your code here.
}
