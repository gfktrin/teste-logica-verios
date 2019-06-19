function vendingMachine(changeAmount, availableCoins) {
  availableCoins = availableCoins.reverse();
  let coinsToReturn = [0,0,0,0,0,0];
  const valuesToTest = [1,0.5,0.25,0.10,0.05,0.01];

  for (let i = 0; i < availableCoins.length; i++) {
    while (changeAmount > valuesToTest[i]-0.01) {
      coinsToReturn[i]++;
      changeAmount-=valuesToTest[i];
      availableCoins[i]--;
      if (availableCoins[i] === 0) {
        break;
      }
    }
  }
  return coinsToReturn.reverse();
}

console.log(vendingMachine(3.55, [20,13,2,22,1,14]));
