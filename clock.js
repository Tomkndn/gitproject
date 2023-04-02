let a;
setInterval(() => {
a = new Date();
hours = a.getHours();
minute = a.getMinutes();
second = a.getSeconds();
am = a.getHours();
if (hours > 12) {
    hours -= 12;
} else if (hours == 0) {
    hours = 12;
}
if (hours < 10){
    hours = "0" + hours;
}
if (minute < 10 ){
    minute = "0" + minute;
}
if (second < 10 ){
    second = "0" + second;
}
if (am > 12){
    document.getElementById('ampm').innerHTML='PM';
}
hh = document.getElementById('hh');
mm = document.getElementById('mm');
ss = document.getElementById('ss');

hr_dot = document.querySelector('.hr_dot');
mn_dot = document.querySelector('.mn_dot');
sc_dot = document.querySelector('.sc_dot');

document.getElementById('hours').innerHTML=hours /*+ '<br><span>hours</span></br>';*/
document.getElementById('minute').innerHTML=minute;
document.getElementById('second').innerHTML=second;

hh.style.strokeDashoffset = 440 - (440 * hours) / 12;
mm.style.strokeDashoffset = 440 - (440 * minute) / 60;
ss.style.strokeDashoffset = 440 - (440 * second) / 60;

hr_dot.style.transform = `rotate(${hours * 30}deg)`;
mn_dot.style.transform = `rotate(${minute * 6}deg)`;
sc_dot.style.transform = `rotate(${second * 6}deg)`;

}, 1000);