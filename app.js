var button = document.querySelector("#btn");
var output = document.querySelector(".output");

const start =["I'm sorry but ","Please forgive me ","Beg you thousand pardons ","I apologize , however ","I'm never usually like this ","You're never going to believe this..","Guess what happened?!!? ","Holy shit!! Get this..","So I was minding my own buisness and booom!..","The most unbelievable thing just happened..","I could'nt be more apologetic but...","Sorry,I'm late,..","I could'nt go because..","I could'nt help it,","This is terrible excuse but..","This is going to sound crazyy but..","Holy Moses!!..","My bad..","I swear it wasnt my fault..","I lost track of time because..","I feel terrible but..","Dont blame me.."];


const mid =["Godzilla ","a handicapped gentleman ","a triceratops named Penelope ","the inventor of slanket ","the director koi mil gya ","the little asian kid from Indiana Jones ","a man with 6 fingers on his right hand "];

const end=["gave me a bruise!","tried to kill me.","died right in front of me","ate my homework","stole my bicycle","stole my identity","broke into my house","punctured my bike","made me play cricket in shoes filled with cheese and macroni","made me watch Race 3.","kept telling me knock knock jokes"]

// console.log(start);
// console.log(mid);
// console.log(end);

// console.log(start[Math.floor(Math.random() * 11)]);

function createExcuse(){
    var excuse = start[Math.floor(Math.random() * 21)]+mid[Math.floor(Math.random() * 6)]+end[Math.floor(Math.random() * 10)];
    // console.log(excuse);
    output.innerHTML=excuse;
}

button.addEventListener('click',createExcuse);