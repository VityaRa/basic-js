const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'string' && parseFloat(sampleActivity) > 0){
    let count = 0.693/HALF_LIFE_PERIOD;
    let ser = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity));
    let res = Math.ceil(ser/count);
        if (res < 0){
          return false;
        } else {
          return res;
        } 
  } else {
    return false;
  }
};
