const slider = document.querySelector("#slider");
const canvas = document.querySelector("#canvas");

slider.addEventListener("input", handleInputSlider);

const ctx = canvas.getContext("2d");
const images = [];

for (let i = 1; i <= 36; i++) {
  // const number = i < 10 ? `0${i}` : i; -> Lo de abajo es lo mismo
  const number = i.toString().padStart(2, "00");
  const url = `https://images.stockx.com/360/Air-Jordan-4-Retro-A-Ma-Maniere-Violet-Ore/Images/Air-Jordan-4-Retro-A-Ma-Maniere-Violet-Ore/Lv2/img${number}.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1668672999&h=384&q=57`;

  const image = new Image();
  image.src = url;

  image.addEventListener("load", () => {
    images[i] = image;

    if (i === 1) loadImage(i);
  });
}

function loadImage(index) {
  ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}

function handleInputSlider() {
  console.log(this.value);

  loadImage(this.value);
}
