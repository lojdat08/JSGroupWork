function startTime(){
let c=new Date();
let h=c.getHours();
let m=c.getMinutes();
let s=c.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.querySelector(".txt").innerHTML =  h + ":" + m + ":" + s;
setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
function Date(){
    let t=new Date();
    let year=
}
