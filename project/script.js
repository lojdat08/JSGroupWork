var posun = 0;

function startTime() {
  let c = new Date();
  c.setMinutes(Number(c.getMinutes()) + Number(posun));
  let h = c.getHours();
  let m = c.getMinutes();
  let s = c.getSeconds();
  h = String(h).padStart(2, 0);
  m = String(m).padStart(2, 0);
  s = String(s).padStart(2, 0);
  document.querySelector(".timerTxt").innerHTML = h + ":" + m + ":" + s;
  document.querySelector(".datum").innerHTML = datum(c);
  setTimeout(startTime, 1000);
}

function datum(t) {
  let dny = [
    "neděle",
    "pondělí",
    "úterý",
    "středa",
    "čtvrtek",
    "pátek",
    "sobota",
  ];
  let mesice = [
    "ledna",
    "února",
    "března",
    "dubna",
    "května",
    "června",
    "července",
    "srpna",
    "září",
    "října",
    "listopadu",
    "prosince",
  ];
  return (
    dny[t.getDay()] +
    " " +
    t.getDate() +
    ". " +
    mesice[t.getMonth()] +
    " " +
    t.getFullYear()
  );
}

//------------------------------------------------nastavení------------------------------------------------

const nastaveni = document.querySelector(".nastaveni");
const menu = document.querySelector(".menu");
const ulozit = document.querySelector(".ulozit");
const posunobjekt = document.querySelector(".posun");
const alertBox = document.querySelector(".oznameni");

var alertTimeout;

nastaveni.addEventListener("click", function () {
  menu.classList.toggle("menu--open");
});

ulozit.addEventListener("click", function () {
  posun = posunobjekt.value;

  if (posun === "") return;

  let znamenko = "";
  if (posun > 0) {
    znamenko = "+";
  }

  alertBox.innerHTML = "Nastavení uloženo: " + znamenko + posun + " min";
  alertBox.classList.add("alert--show");

  clearTimeout(alertTimeout);
  alertTimeout = setTimeout(function () {
    alertBox.classList.remove("alert--show");
  }, 2500);
});

//------------------------------------------------nastavení------------------------------------------------

startTime();
