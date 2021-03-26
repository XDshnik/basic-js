const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  let string = 'Unable to determine the time of year!';
  if (typeof(date) === "undefined" ) {
    string = 'Unable to determine the time of year!';
    return string;
  }
  if (!(date instanceof Date)) {
    return string;
  }
/* let month;
  try {
    month = date.getMonth();
  } catch (error) {
    console.log('error! ', date)
  }
  */
let month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) {
    string = 'winter';
  } else if (month >= 2 && month <= 4) {
      string = 'spring';
    } else if (month >= 5 && month <= 7) {
        string = 'summer';
      } else if (month >= 8 && month <= 10) {
          string = 'autumn';
        }
        console.log(string);
  return string;
}
