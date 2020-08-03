var urlParams = new URLSearchParams(location.search);
var angka = urlParams.get('GMT');

var nama = urlParams.get('Name');
var ibukota = null;


function initCountry() {
    if (nama == "Indonesia") ibukota = "Jakarta (GMT+" + angka + ")";
    else if (nama == "China") ibukota = "Beijing (GMT+" + angka + ")";
    else if (nama == "Korea") ibukota = "Seoul (GMT+" + angka + ")";
    else if (nama == "Japan") ibukota = "Tokyo (GMT+" + angka + ")";
    else if (nama == "Singapore") ibukota = "Singapore (GMT+" + angka + ")";
    else if (nama == "Thailand") ibukota = "Bangkok (GMT+" + angka + ")";
    else if (nama == "Australia") ibukota = "Canberra (GMT+" + angka + ")";
    else if (nama == "Malaysia") ibukota = "Kuala Lumpur (GMT+" + angka + ")";
    else if (nama == "Laos") ibukota = "Vientiane (GMT+" + angka + ")";
    else {
        nama = "COUNTRY";
        ibukota = "GMT";
    }
}

function diff_to_GMT(dt) 
{ 
   return (Math.abs(dt.getTimezoneOffset() / 60));
}

dt = new Date(); 

let diferrence = diff_to_GMT(dt) - angka;
console.log(diferrence);
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sec = document.querySelector('#sec');

setInterval(() => {

    initCountry();

    let day = new Date();
    if (angka == 0) {
        angka = day.getHours();
    }
    

    let fixClock = (day.getHours() > 12 ? day.getHours() - 12 : day.getHours());
    let hh = (fixClock - diferrence) * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let ms = day.getMilliseconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)+(ss/60)}deg)`;
    sec.style.transform = `rotateZ(${(ss) + (ms / 1000)}deg)`;
    
    document.getElementById("name").value = nama;
    document.getElementById("desc").value = ibukota;
}) 