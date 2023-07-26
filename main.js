const validateInputs = () => {
  const numericInputs = [
    { inputId: "people", errorMsgId: "people-error" },
    { inputId: "nights", errorMsgId: "nights-error" },
    { inputId: "flights", errorMsgId: "flights-error" },
    { inputId: "transport", errorMsgId: "transport-error" },
    { inputId: "hotel", errorMsgId: "hotel-error" },
    { inputId: "food", errorMsgId: "food-error" },
    { inputId: "visa", errorMsgId: "visa-error" },
    { inputId: "internet", errorMsgId: "internet-error" },
    { inputId: "attractions", errorMsgId: "attractions-error" },
    { inputId: "souvenirs", errorMsgId: "souvenirs-error" },
  ];

  let isValid = true;

  for (const inputConfig of numericInputs) {
    const input = document.querySelector(`#${inputConfig.inputId}`);
    const value = Number(input.value);
    const errorLabel = document.querySelector(`#${inputConfig.errorMsgId}`);

    if (inputConfig.inputId === "people") {
      if (value < 1) {
        isValid = false;
        errorLabel.textContent = "Value must be at least 1 !";
        input.classList.add("error-input");
      } else {
        errorLabel.textContent = "";
        input.classList.remove("error-input");
      }
    } else {
      if (value < 0) {
        isValid = false;
        errorLabel.textContent = "Value cannot be less than 0.";
        input.classList.add("error-input");
      } else {
        errorLabel.textContent = "";
        input.classList.remove("error-input");
      }
    }
  }

  return isValid;
};

const totalPrice = () => {
  if (!validateInputs()) {
    return;
  }

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
  const inclu = document.querySelector("ul");

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

    fl.innerHTML = "Flights" + " " + "-" + " " + flights;
    ho.innerHTML = "Hotel" + " " + "-" + " " + (hotel / people).toFixed();
    fo.innerHTML = "Food" + " " + "-" + " " + food * (nights + 1);
    tr.innerHTML = "Transport" + " " + "-" + " " + transport;
    vi.innerHTML = "Visa" + " " + "-" + " " + visa;
    inter.innerHTML = "Internet" + " " + "-" + " " + internet;
    atrr.innerHTML = "Attractions" + " " + "-" + " " + attractions;
    sou.innerHTML = "Souvenirs" + " " + "-" + " " + souvenirs;

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.classList.add("reset-button");
    resetBtn.addEventListener("click", resetInputs);

    inclu.appendChild(resetBtn);

    inclu.classList.add("disc");
  }, 4000);
};

const resetInputs = () => {
  window.location.reload();
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", totalPrice);

const flyStart = document.querySelector(".round");
const fly = document.querySelector(".circle");
const land = document.querySelector(".circle-two");
const begin = document.querySelector(".begin");

const journey = () => {
  if (!validateInputs()) {
    return;
  }
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
