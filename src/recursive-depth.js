const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    console.log(arr);
    for (let i=0; i<arr.length; i++) {
          if (typeof arr[i] === 'object') {
            counter+=1;
            arr = arr.flat();
            console.log(arr);
          }
        
    }  
    console.log(counter);
    return counter;    
  }

};
