var modal = document.getElementById("myModal");

var btn = document.getElementById("contact-btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let scrollContainer = document.querySelector(".image-slider");

// console.log(scrollContainer);

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

const images = document.querySelectorAll(".image");
// console.log(images);
const imgLen = images.length;
// console.log(imgLen);

const dot = document.querySelector(".dot");

for (let i = 0; i < imgLen / 2 - 1; i++) {
  const divEle = document.createElement("div");
  divEle.className = "button";
  dot.appendChild(divEle);
}
const buttons = document.querySelectorAll(".button");
buttons[0].style.background = "#FF3147";
let c = 0;

const resetBgBtn = () => {
  buttons.forEach((b) => {
    b.style.background = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    console.log("c", c);
    console.log("i", i);
    resetBgBtn();
    if (c <= i) {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += i * 900;
      c = i;
      button.style.background = "#FF3147";
    } else if (c > i) {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= (imgLen - i) * 900;
      c = i;
      button.style.background = "#FF3147";
    }
  });
});

function changeImage(imageSrc) {
  document.getElementById("mainImage").src = imageSrc;
}

let iniDiv = document.getElementById("iniDiv");
iniDiv.style.background = "#FF3147";
iniDiv.style.color = "white";

function changeColor(clickedElement) {
  clickedElement.style.backgroundColor = "#FF3147";
  clickedElement.style.color = "white";

  const foodMenus = document.querySelectorAll(".food-menu");
  foodMenus.forEach((menu) => {
    if (menu !== clickedElement) {
      menu.style.backgroundColor = "";
      menu.style.color = "black";
    }
  });
}
