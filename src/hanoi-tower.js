const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');

  let a = { turns: 0, seconds: 0};
  a.turns = Math.pow(2, disksNumber) - 1;
  a.seconds = Math.floor((a.turns * 3600) / turnsSpeed);
  return a;
};
