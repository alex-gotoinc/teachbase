function MoneyBox() {
  let coinsCounter = 0;

  this.addCoin = () => coinsCounter++;
  this.getAmount = () => coinsCounter;
}

const box = new MoneyBox();

console.log(box.getAmount());
box.addCoin();
box.addCoin();
box.addCoin();
console.log(box.getAmount());