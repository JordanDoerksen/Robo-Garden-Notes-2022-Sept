// 8 + 5
// function add(num1 = 8, num2 = 5){
    // return num1+num2;
// }

// let number = add();
// console.log(number);

// let welcomeMessage = "Hello, World!!!";
// console.log(welcomeMessage.toUpperCase())
// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log();
// });

// ()=>{
//     console.log('test')
// }

// factorial
// 5! = 5*4*3*2*1 = 120

// 4!
// 4 * 3!
// 3 * 2!
// 2 * 1!
// 1
debugger;
function fact(n){
    if (n > 1){
        return n * fact(n-1);
    }else{
        return 1;
    }
}

console.log(fact(4))