
exports.min = function min (array) {
  let newArr = [0];
  
  let arr = newArr.concat(array);



  // if (array === undefined) {
  //   return 0;
  // } else if (array === []) {
  //   return 0;
  // }

  let minNumber = Math.min(...arr);
  return minNumber
}

exports.max = function max (array) {
  if (array === undefined) {
    return 0;
  } else if (array === []) {
    return 0;
  }

  let maxNumber = Math.max(...array);
  return maxNumber
}

exports.avg = function avg (array) {
  if (array === undefined) {
    return 0;
  } else if (array === []) {
    return 0;
  }
  
  let sum = 0;
  let count = 0;

  array.forEach(function (item) {
    sum += item;
    count++;
  });
  
  return sum / count;
}
