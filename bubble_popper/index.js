const bubbleSpawnCooldown = 1000;
const bubbleUpdateTimer = 10;

let score = 0;
let scoreElement = document.getElementById("score");

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

setInterval(() => {
  const radius = random(100, 500);
  const spawningPoint = random(0, window.innerWidth - radius);
  const windowHeight = window.innerHeight;
  const speed = random(3, 7);
  const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  const newBubble = document.createElement("div");
  newBubble.classList.add("bubble");
  newBubble.style.backgroundColor = color;
  newBubble.style.width = radius + "px";
  newBubble.style.height = radius + "px";
  newBubble.style.left = spawningPoint + "px";
  newBubble.style.top = windowHeight + "px";
  newBubble.style.transition = `top ${speed}s linear`;
  document.body.appendChild(newBubble);
  setTimeout(() => {
    newBubble.style.top = `-${radius}px`;
  }, 1);
  setTimeout(() => {
    newBubble.remove();
  }, speed * 1000);
}, bubbleSpawnCooldown);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("bubble")) {
    e.target.remove();
    score++;
    scoreElement.innerText = score;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("bubble")) {
    let popSound = new Audio(`./resources/bubble-pop-${random(1, 2)}.mp3`);

    popSound.play();
  }
});
