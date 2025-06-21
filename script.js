let num=Math.floor(Math.random()*10)+1;
let guess=null;
while(num!==guess){
    guess=Number(prompt("Enter number"));
    if(num>guess){
        alert("too low");
    }
    else if(num<guess){
        alert("too high");
    }
}
alert("congrats")