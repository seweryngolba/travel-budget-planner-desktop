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

const totalPrice = () => {
  const people = Number(document.querySelector("#people").value);
  const nights = Number(document.querySelector("#nights").value);
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;
  const flights = Number(document.querySelector("#flights").value);
  const transport = Number(document.querySelector("#transport").value);
  const hotel = Number(document.querySelector("#hotel").value);
  const food = Number(document.querySelector("#food").value);
  const visa = Number(document.querySelector("#visa").value);
  const internet = Number(document.querySelector("#internet").value);
  const attractions = Number(document.querySelector("#attractions").value);
  const souvenirs = Number(document.querySelector("#souvenirs").value);
  const priceDescribtion = document.querySelector("h2");
  const fl = document.querySelector("#fl");
  const ho = document.querySelector("#ho");
  const fo = document.querySelector("#fo");
  const tr = document.querySelector("#tr");
  const vi = document.querySelector("#vi");
  const inter = document.querySelector("#inter");
  const atrr = document.querySelector("#atrr");
  const sou = document.querySelector("#sou");

  const sum = (
    flights +
    hotel / people +
    visa +
    transport +
    food * (nights + 1) +
    internet +
    souvenirs +
    attractions
  ).toFixed();

  setTimeout(() => {
    priceDescribtion.innerHTML =
      "A trip from:" +
      " " +
      from +
      " " +
      "to" +
      " " +
      to +
      " " +
      "will cost" +
      " " +
      sum +
      " " +
      "per person. Price includes:";

    fl.innerHTML = "Flights" + " " + flights;
    ho.innerHTML = "Hotel" + " " + hotel / people;
    fo.innerHTML = "Food" + " " + food * (nights + 1);
    tr.innerHTML = "Transport" + " " + transport;
    vi.innerHTML = "Visa" + " " + visa;
    inter.innerHTML = "Internet" + " " + internet;
    atrr.innerHTML = "Attractions" + " " + attractions;
    sou.innerHTML = "Souvenirs" + " " + souvenirs;
  }, 4000);
};

btn.addEventListener("click", totalPrice);
