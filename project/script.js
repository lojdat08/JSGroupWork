let posun = Number(localStorage.getItem("posun")) || 0;

function startTime(){
let c=new Date();
c.setMinutes(c.getMinutes() + posun);
let h=c.getHours();
let m=c.getMinutes();
let s=c.getSeconds();
h = checkTime(h);
m = checkTime(m);
s = checkTime(s);
document.querySelector(".txt").innerHTML =  h + ":" + m + ":" + s;
document.querySelector(".datum").innerHTML = datum(c);
setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
function datum(t){
    let dny = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];
    let mesice = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"];
    return dny[t.getDay()] + " " + t.getDate() + ". " + mesice[t.getMonth()] + " " + t.getFullYear();
}
function nastavPosun(){
    posun = Number(document.querySelector("#posun").value);
    localStorage.setItem("posun", posun);
}
startTime();
