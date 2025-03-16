let ColorInterval;
let header = document.getElementById("header-placeholder");
let mainTitle = null;

header.addEventListener("mouseenter", (e) => {
  if (mainTitle == null) {
    mainTitle = document.querySelector(".main-title");
    mainTitle.addEventListener("mouseenter", (e) => {
      ColorInterval = setInterval(colorfull, 50);
    });
    mainTitle.addEventListener("mouseleave", (e) => {
      clearInterval(ColorInterval);
    });
  }
});

const hueFromRGB = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let hue;
  if (max == min) {
    hue = 0;
  } else if (max == r) {
    hue = 60 * ((g - b) / (max - min));
  } else if (max == g) {
    hue = 60 * (2 + (b - r) / (max - min));
  } else if (max == b) {
    hue = 60 * (4 + (r - g) / (max - min));
  }
  return hue;
}

const colorfull = () => {
  let elm = document.querySelector("h1");
  let elmColor = window.getComputedStyle(elm).getPropertyValue("color");
  let [r, g, b] = elmColor.match(/\d+/g);
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  let hue = hueFromRGB(r, g, b);
  hue = (hue + 5) % 360;
  elm.style.color = `hsl(${hue}, 100%, 50%)`;
}

let rotateInterval;
let imageToRotate = document.querySelector(".rotate");
imageToRotate.style.transform = "rotate(0deg)";

imageToRotate.addEventListener("mouseenter", () => {
  rotateInterval = setInterval(rotation, 10);
});

imageToRotate.addEventListener("mouseleave", () => {
  clearInterval(rotateInterval);
});


const rotation = () => {
  const speedInput = Number(document
                    .getElementById("rotationSpeed")
                    .value);
  
  
  let currentAngle = Number(
    document.querySelector(".rotate")
    .style.transform.split("(")[1]
    .split("deg")[0]
  );
  currentAngle = (currentAngle + speedInput) % 360;
  imageToRotate.style.transform = `rotate(${currentAngle}deg)`;
  
};
