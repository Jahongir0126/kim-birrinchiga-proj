const walk_speed = 3.6;
const bicycle_speed = 20.1;
const car_speed = 70;
const airplane_speed = 800;


var myForm = document.querySelector(".myForm");
var myInput= document.querySelector(".masofa")
var walkEl = document.querySelector(".walk");
var bicycleEl = document.querySelector(".bicycle");
var carEl = document.querySelector(".car");
var airplaneEl = document.querySelector(".airplane");

function calculateTime(distance, speed){
    let natija =distance/speed;

    let soat = Math.floor(natija);
    natija=(natija-soat)*60;
    let minut = Math.floor(natija);
    natija = (natija-minut)*60;
    let sekund = Math.floor(natija);
    return `${soat} soat  ${minut} minut   ${sekund} sekund`
    // return soat;

}
 
myForm.addEventListener('submit', function (event){
    event.preventDefault();

    let masofa =myInput.value - 0;
    walkEl.textContent= calculateTime(masofa, walk_speed)
    bicycleEl.textContent= calculateTime(masofa, bicycle_speed)
    carEl.textContent= calculateTime(masofa, car_speed)
    airplaneEl.textContent= calculateTime(masofa, airplane_speed)


})
