let birthYear = document.getElementById("birthYear");
let ageBtn = document.getElementById("ageBtn");
let ageResult = document.getElementById("ageResult");
let clear = document.getElementById("clear");
ageBtn.addEventListener("click",age);
clear.addEventListener("click",clean);
function age(){
    let birthYearValue = birthYear.value;
    let currentYear = new Date().getFullYear(); 
    let ageRightNow = currentYear-Number(birthYearValue);
    if( birthYearValue === "" ){
        ageResult.innerText = "Please enter an year..";
    }
    else if(isNaN(birthYearValue)){
        ageResult.innerText = "Please enter an year";
    }
    else if(ageRightNow < 0){
        ageResult.innerText = "You are inputing wrong year";
    }
    else if(ageRightNow > 125){
        ageResult.innerText=" Hey u oldiee...\n The oldest person alive is 123 years old.. and u are older then them??"
    }
    else{
        ageResult.innerText = " You are " + ageRightNow + " years old ! ";
    }
}
function clean(){
    ageResult.innerText="";
    birthYear.value="";
}
