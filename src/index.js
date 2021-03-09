
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix === 'undefined' || matrix.length === 0) {
    return [];
  }

  let arr = [];

  matrix.forEach((item, i) => {
    if(i % 2 === 0) {
      item.sort(function(a, b) { return a - b; });
    }
    else {
      item.sort(function(a, b) { return b - a; });
    }
  });

  arr = matrix.flat();

  return arr;
}
