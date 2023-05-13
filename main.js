const btn = document.querySelector("#btn");
const flyStart = document.querySelector(".round");
const fly = document.querySelector(".circle");
const land = document.querySelector(".circle-two");
const begin = document.querySelector(".begin");

const journey = () => {
  begin.style.display = "none";
  flyStart.style.display = "flex";
  setTimeout(() => {
    flyStart.style.display = "none";
    fly.style.display = "flex";
    fly.style.animation = "jet 2s ease 1 reverse, travel 2s linear 1";
    setTimeout(() => {
      fly.style.display = "none";
      land.style.display = "flex";
      btn.innerHTML = "DONE";
    }, 2000);
  }, 2000);
  btn.removeEventListener("click", journey);
};

btn.addEventListener("click", journey);
