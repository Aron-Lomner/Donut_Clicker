var gameState = {
  donuts: 0,
  clicker: {
    count: 0,
    price: 10,
  },
  multiplier: {
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
  gameState.donuts += clicks * (1 + 1.2 ** gameState.multiplier.count);
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
  clickerCount.innerText = `${gameState.clicker.count} clickers`;
  multiplyCount.innerText = `${gameState.multiplier.count} multipliers`;
  donutCount.innerText = `${gameState.donuts} donuts`;
}

donut.onclick = () => {
  updateDonutCount(1);
};
buyClickBtn.onclick = () => buy(gameState.clicker);
buyMultiplierBtn.onclick = () => buy(gameState.multiplier);
