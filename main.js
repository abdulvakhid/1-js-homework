// var userName = document.querySelector(".username");
// var surName = document.querySelector(".surname");
// var userAge = document.querySelector(".userage");
// var userId = document.querySelector(".passportid");
// var usermoneyUsd = document.querySelector(".moneyUsd");
// var elBtn = document.querySelector(".checkbtn");


// var domName = document.querySelector(".d-name");
// var domSurname = document.querySelector(".d-surname");
// var domAge = document.querySelector(".d-age");
// var domPassportId = document.querySelector(".d-passportid");
// var domMoney = document.querySelector(".d-money");

// elBtn.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     var domSum = 10950;

    
//     var elName = userName.value;
//     domName.textContent = elName;
//     userName.value = "";
    
//     var elSurname = surName.value;
//     domSurname.textContent = elSurname;
//     surName.value = "";
    
//     var elAge = userAge.value;
//     domAge.textContent = elAge;
//     userAge.value = "";
    
//     var elId = userId.value;
//     domPassportId.textContent = elId;
//     userId.value = "";

    
//     var elMoney = usermoneyUsd.value;
//     var elUsd = elMoney * domSum;
//     domMoney.textContent = elUsd;
//     usermoneyUsd.value = "";
// })


var Money = +prompt("Qancha pulingiz bor?");
var Ticket = 500;
var Hotel = 250;
var Museum = 120;

var Dollar = 10950;
var Euro = 12220;

var sumDollar = (Ticket+Hotel) * Dollar;
var sumEuro = Museum * Euro;

var elspan = document.querySelector(".js-span");
var result = sumDollar + sumEuro;

if (Money > result) {
    elspan.textContent = ("Oq yo'l");
} else {
    elspan.textContent = ("UYDA QOL")
}