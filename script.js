// document.addEventListener('DOMContentLoaded', ()=>{

//     document.getElementById('show-hide-div-example').style.display = "none";

// });

// Constant variable. Cannot change during runtime
const GST = 0.05
const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Var creates a globally scoped variable
var totalItems = 4

// Let scopes the variable to the current block
// TLDR; Use let
let currentCount = 8;


for(var x = 0; x<100; x++){
    console.log(x);
}
// Because we used var, x is global, and still exists here
console.log(x);


for(let y = 0; y<100; y++){
    console.log(y);   
}
// Because we used var, x is global, and still exists here
console.log(y);

// Data Type
let age = 12; //Number[int]
let temperature = 28.4; //Number[float]
let name = "Robo Garden"; //String


let myCar = {
    year:'2004',
    make:'Audi',
    model:'TT',
    colour:'Yellow',
    isElectric:false
}