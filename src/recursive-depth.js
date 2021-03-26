const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr ) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let array = [1, 2, 3, [4, 5]];
    for (let i = 0; i < array.length; i++) {
      if (typeof(array[i]) === 'object') {
        console.log('Theres an object')
      }
    }
  }
};
