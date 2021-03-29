const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof(sampleActivity) !== "string") {
    return false;
  } else{

  sampleActivity = parseFloat(sampleActivity);
 
  if (typeof(+sampleActivity) !== "number") {
    return false;
  } 
  let ln2 = 0.693147;
  let k = ln2 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / (+sampleActivity)) / k;
 
  if ( t === Infinity || isNaN(t) || t < 0 ) {
    return false
  } else {
    return Math.ceil(t);}
}};
