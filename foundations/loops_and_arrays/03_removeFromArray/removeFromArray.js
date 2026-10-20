const removeFromArray = function (arr, ...Args) {
  let newArr = [];
  for (let item of arr) {
    if (!Args.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
