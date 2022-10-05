// // document.addEventListener('DOMContentLoaded', ()=>{

// //     document.getElementById('show-hide-div-example').style.display = "none";

// // });

// // Constant variable. Cannot change during runtime
// const GST = 0.05
// const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// // Var creates a globally scoped variable
// var totalItems = 4

// // Let scopes the variable to the current block
// // TLDR; Use let
// let currentCount = 8;


// for(var x = 0; x<100; x++){
//     console.log(x);
// }
// // Because we used var, x is global, and still exists here
// console.log(x);


// for(let y = 0; y<100; y++){
//     console.log(y);   
// }
// // Because we used var, x is global, and still exists here
// console.log(y);

// // Data Type
// let age = 12; //Number[int]
// let temperature = 28.4; //Number[float]
// let name = "Robo Garden"; //String


// let myCar = {
//     year:'2004',
//     make:'Audi',
//     model:'TT',
//     colour:'Yellow',
//     isElectric:false
// }



function convertToHex(){
    // RED :    0 - 255       | 0000 0000 - 1111 1111   | 00 - FF
    // GREEN :  0 - 255       | 0000 0000 - 1111 1111   | 00 - FF
    // BLUE :   0 - 255       | 0000 0000 - 1111 1111   | 00 - FF
    // Alpha :  0 - 1
    // 0,0,0 = Black #000000
    // 255,255,255 = White #FFFFFF
    // 255,0,0 = Red #FF0000

    // BIN (Base2) 0,1
    // DEC (Base10) 0,1,2,3,4,5,6,7,8,9
    // HEX (Base16) 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
    
    // Solution Pseudo code
    // Get red input
    let redInput = document.getElementById('red-input').value;
    // Get green input
    let greenInput = document.getElementById('green-input').value;
    // Get blue input
    let blueInput = document.getElementById('blue-input').value;

    // Convert red to int
    let redInt = parseInt(redInput);
    // Convert green to int
    let greenInt = parseInt(greenInput);
    // Convert blue to int
    let blueInt = parseInt(blueInput);

    // Convert red to hex
    let redHex = redInt.toString(16);
    // Convert green to hex
    let greenHex = greenInt.toString(16);
    // Convert blue to hex
    let blueHex = blueInt.toString(16);

    // Concat #+redhex+greenhex+bluehex
    let hexColour = "#"+redHex+greenHex+blueHex;

    // Set hex-output
    document.getElementById('hex-output').value = hexColour;
    document.getElementById('color-output-example').style.backgroundColor = hexColour;

    // Known Issues.
    // Only works for non zero colour channels

}