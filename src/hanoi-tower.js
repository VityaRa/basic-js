module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let turns = 2 ** disksNumber -1;
  let seconds = Math.floor(turns / (turnsSpeed / 3600));
  const resultCalculate = {turns, seconds};
  return resultCalculate;
}