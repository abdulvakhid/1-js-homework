var userName = document.querySelector(".username");
var surName = document.querySelector(".surname");
var userAge = document.querySelector(".userage");
var userId = document.querySelector(".passportid");
var usermoneyUsd = document.querySelector(".moneyUsd");
var elBtn = document.querySelector(".checkbtn");


var domName = document.querySelector(".d-name");
var domSurname = document.querySelector(".d-surname");
var domAge = document.querySelector(".d-age");
var domPassportId = document.querySelector(".d-passportid");
var domMoney = document.querySelector(".d-money");

elBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    var domSum = 10950;

    
    var elName = userName.value;
    domName.textContent = elName;
    userName.value = "";
    
    var elSurname = surName.value;
    domSurname.textContent = elSurname;
    surName.value = "";
    
    var elAge = userAge.value;
    domAge.textContent = elAge;
    userAge.value = "";
    
    var elId = userId.value;
    domPassportId.textContent = elId;
    userId.value = "";

    
    var elMoney = usermoneyUsd.value;
    var elUsd = elMoney * domSum;
    domMoney.textContent = elUsd;
    usermoneyUsd.value = "";
   

})