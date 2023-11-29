const clickPrice = 10;
const multiplierPrice = 10;
var gameState = {
  donuts: 0,
  clickers: 0,
  multipliers: 0,
};

const donut = document.getElementById("donut");
const donutCount = document.getElementById("donut_count");
const buyClickBtn = document.getElementById("buy_click_btn");
const buyMultiplierBtn = document.getElementById("buy_multiplier_btn");
const clickerCount = document.getElementById("clicker_count");
const multiplyCount = document.getElementById("mutiply_count");

function updateDonutCount(clicks) {
  gameState.donuts += clicks * (1 + 1.2 ** multipliers);
  donutCount.innerText = `${gameState.donuts} donuts`;
}
function buy(item) {
  if (item === click) {
  }
  if (gameState.donuts >= clickPrice) {
    gameState.clickers += 1;
    gameState.donuts -= clickPrice;
  } else {
    // notEnoughMonyAnimate()
  }
}

donut.onclick = () => {
  updateDonutCount(1);
};

buyClickBtn.onclick = buyClick("click");
