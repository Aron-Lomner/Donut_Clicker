var gameState = {
  donuts: 0,
  clicker: {
    count: 0,
    price: 10,
  },
  multiplier: {
    count: 0,
    price: 10,
  }
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
    playSound("assets/cha-ching.mp3");
  } else {
    const text = document.getElementById("not_enough");
    text.style.opacity = 1;
    setTimeout(() => {
      text.style.opacity = 0;
    }, 1000);
  }
}
function update() {
  clickerCount.innerText = `${gameState.clicker.count.toFixed(2)} clickers`;
  multiplyCount.innerText = `${gameState.multiplier.count.toFixed(
    2
  )} multipliers`;
  donutCount.innerText = `${gameState.donuts.toFixed(2)} donuts`;
  buyClickBtn.querySelector(
    "p"
  ).innerText = `Price: ${gameState.clicker.price.toFixed(2)} 🍩`;
  buyMultiplierBtn.querySelector(
    "p"
  ).innerText = `Price: ${gameState.multiplier.price.toFixed(2)} 🍩`;
}

function autoClick() {
  updateDonutCount(gameState.clicker.count);
  setTimeout(() => {
    autoClick();
  }, 1000);
}

function playSound(soundPath) {
  audio = new Audio(soundPath);
  audio.play();
}
autoClick();

donut.onclick = () => {
  playSound("assets/mouse_click.mp3");
  updateDonutCount(1);
};
buyClickBtn.onclick = () => buy(gameState.clicker);
buyMultiplierBtn.onclick = () => buy(gameState.multiplier);
