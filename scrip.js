




//------------------------------------------------nastavení------------------------------------------------

let nastaveni = document.querySelector(".nastaveni");
let close = document.querySelector(".nastaveni");
let menu = document.querySelector(".menu");

btn.addEventListener("click", function(){
    menu.classList.add("menu--open");
});

close.addEventListener("click", function(){
    menu.classList.remove("menu--open")
});


/*UI pro nastavení může být schované v panelu Nastavení (tlačítko/ikona „Nastavení“ otevře/zavře panel).
Klik na Uložit zapíše posun a zobrazí vlastní alert (ne alert()), např. pruh/bublinu v horní části.
Alert má text (např. „Nastavení uloženo: +90 min“) a automaticky zmizí po 2–3 s (přes setTimeout) s krátkou fade-out animací v CSS.*/

//------------------------------------------------nastavení------------------------------------------------