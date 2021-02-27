
exports.min = function min (array) {
  let arr = [].concat(array);

  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let minNumber = Math.min(...arr);
    return minNumber
  }
}

exports.max = function max (array) {
  let arr = [].concat(array);

  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let maxNumber = Math.max(...arr);
    return maxNumber
  }
}

exports.avg = function avg (array) {

  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let sum = 0;
    let count = 0;
  
    array.forEach(function (item) {
      sum += item;
      count++;
    });
    
    return sum / count;
  }
}
