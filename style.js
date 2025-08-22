let bulb = document.getElementById("bulb");
let btn = document.getElementById("toggol");

btn.addEventListener("click", function () {
    bulb.classList.toggle("on"); // toggle ON/OFF


});

let bulb2 = document.getElementById("bulb2")
let btn2 = document.getElementById("toggol2")

btn2.addEventListener("click", function () {

    bulb2.classList.toggle("on2");
});
let bulb3 = document.getElementById("bulb3")
let btn3 = document.getElementById("toggol3")

btn3.addEventListener("click", function () {

    bulb3.classList.toggle("on3");
});

let btn4 = document.getElementById("btn4")
btn4.addEventListener("click", function () {
    bulb.classList.toggle("on");
    bulb2.classList.toggle("on2");
    bulb3.classList.toggle("on3");

});



