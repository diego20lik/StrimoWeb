$(document).ready(() => {
  var countDownDate = new Date("jul 30, 2021 15:37:25").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var dt = "Day";
    var ht = "Hour";
    var mt = "Minute";
    var st = "Second";
    if (days != 1) dt = dt + "s";
    if (hours != 1) ht = ht + "s";
    if (minutes != 1) mt = mt + "s";
    if (seconds != 1) st = st + "s";
    document.getElementById(
      "demo"
    ).innerHTML = `<div><h4>${days}</h4> ${dt}</div> <div><h4>${hours}</h4> ${ht}</div> <div><h4>${minutes}</h4> ${mt}</div> <div><h4>${seconds}</h4> ${st}</div>`;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
});
