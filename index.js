function vendingMachine(changeAmount, availableCoins) {
  let coinsToReturn = [0,0,0,0,0,0];

  for (let i = 0; i < availableCoins.length; i++) {
    while (changeAmount > 0.9) {
      coinsToReturn[0]++;
      changeAmount--;
      availableCoins[0]--;
      if (availableCoins[0] === 0) {
        break;
      }
    }
    while (changeAmount > 0.49) {
      coinsToReturn[1]++;
      changeAmount -= 0.50;
      availableCoins[1]--;
      if (availableCoins[1] === 0) {
        break;
      }
    }
    while (changeAmount > 0.24) {
      coinsToReturn[2]++;
      changeAmount -= 0.25;
      availableCoins[2]--;
      if (availableCoins[2] === 0) {
        break;
      }
    }
    while (changeAmount > 0.09) {
      coinsToReturn[3]++;
      changeAmount -= 0.10;
      availableCoins[3]--;
      if (availableCoins[3] === 0) {
        break;
      }
    }
    while (changeAmount > 0.04) {
      coinsToReturn[4]++;
      changeAmount -= 0.5;
      availableCoins[4]--;
      if (availableCoins[4] === 0) {
        break;
      }
    }
    while (changeAmount > 0) {
      coinsToReturn[5]++;
      changeAmount -= 0.01;
      availableCoins[5]--;
      if (availableCoins[5] === 0) {
        break;
      }
    }
  }
  return coinsToReturn;
}

console.log(vendingMachine(3.55, [14,1,22,2,13,20]));
