//------------------------------------------------nastavení------------------------------------------------

let nastaveni = document.querySelector(".nastaveni");
let menu = document.querySelector(".menu");
let ulozit = document.querySelector(".ulozit");
let posunobjekt = document.querySelector(".posun");
let alertBox = document.querySelector(".oznameni");

let alertTimeout;
let posun = 0;

nastaveni.addEventListener("click", function() {
    menu.classList.toggle("menu--open");
});

ulozit.addEventListener("click", function() {
    posun = posunobjekt.value;

    let znamenko = "";
    if (posun > 0) {
        znamenko = "+";
    }

    alertBox.innerHTML = "Nastavení uloženo: " + znamenko + posun + " min";
    alertBox.classList.add("alert--show");

    clearTimeout(alertTimeout);
    alertTimeout = setTimeout(function() {
        alertBox.classList.remove("alert--show");
    }, 2500);
});

//------------------------------------------------nastavení------------------------------------------------