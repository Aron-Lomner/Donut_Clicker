var gameState = {
  donuts: 0,
  clickers: = {
    count: 0,
    price: 1
  },
  multipliers: = {
    count: 0,
    price: 1
  },
};

const donut = document.getElementById("donut");
const donutCount = document.getElementById("donut_count");
const buyClickBtn = document.getElementById("buy_click_btn");
const buyMultiplierBtn = document.getElementById("buy_multiplier_btn");
const clickerCount = document.getElementById("clicker_count");
const multiplyCount = document.getElementById("multiply_count");

function updateDonutCount(clicks) {
  gameState.donuts += clicks * (1 + 1.2 ** multipliers);
  donutCount.innerText = `${gameState.donuts} donuts`;
}
function buy(item) {
  if (gameState.donuts >= item.price) {
    gameState.clickers += 1;
    gameState.donuts -= clickPrice;
    item.price*=1.1;
  } else {
    // notEnoughMonyAnimate()
  }
}

donut.onclick = () => {
  updateDonutCount(1);
};

buyClickBtn.onclick = buyClick("click");
