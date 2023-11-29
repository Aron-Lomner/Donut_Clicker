var gameState = {
  donuts: 0,
<<<<<<< HEAD
  clickers: {
=======
  clicker: {
>>>>>>> de385b6f5d75c04a826241c595cdb636e271a049
    count: 0,
    price: 10,
  },
<<<<<<< HEAD
  multipliers: {
=======
  multiplier: {
>>>>>>> de385b6f5d75c04a826241c595cdb636e271a049
    count: 0,
    price: 10,
  },
};

const donut = document.getElementById("donut");
const donutCount = document.getElementById("donut_count");
const buyClickBtn = document.getElementById("buy_click_btn");
const buyMultiplierBtn = document.getElementById("buy_multiplier_btn");
const clickerCount = document.getElementById("clicker_count");
const multiplyCount = document.getElementById("multiply_count");

function updateDonutCount(clicks) {
  gameState.donuts += clicks * 1.2 ** gameState.multiplier.count;
  update();
}

function buy(item) {
  if (item.price <= gameState.donuts) {
    item.count += 1;
    gameState.donuts -= item.price;
    item.price *= 1.1;
    update();
  } else {
    // notEnoughMonyAnimate()
  }
}

function update() {
  clickerCount.innerText = `${gameState.clicker.count.toFixed(2)} clickers`;
  multiplyCount.innerText = `${gameState.multiplier.count.toFixed(
    2
  )} multipliers`;
  donutCount.innerText = `${gameState.donuts.toFixed(2)} donuts`;
}

function autoClick() {
  updateDonutCount(gameState.clicker.count);
  setTimeout(() => {
    autoClick();
  }, 1000);
}
autoClick();

donut.onclick = () => {
  updateDonutCount(1);
};
buyClickBtn.onclick = () => buy(gameState.clicker);
buyMultiplierBtn.onclick = () => buy(gameState.multiplier);
