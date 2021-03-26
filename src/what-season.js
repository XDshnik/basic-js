const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined || date === null) {
    if (date && typeof date.getMonth !== 'function') {
      throw new Error();
    }
    return 'Unable to determine the time of year!';
  }
  
  const month = date.getMonth();
  if (typeof month !== 'number') {
    return 'Unable to determine the time of year!'
  }
  
    if (date.getDate() !== new Date(date.toString()).getDate()) {
      throw new Error();
  }
  
  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  }
  if (month >= 2 && month <= 4) {
    return 'spring';
  } 
  if (month >= 5 && month <= 7) {
    return 'summer';
  } 
  if (month >= 8 && month <= 10) {
    return 'autumn';
  }
}
