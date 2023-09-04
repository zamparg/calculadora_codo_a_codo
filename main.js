//numbers
const numbers = [
  document.getElementById("n1"),
  document.getElementById("n2"),
  document.getElementById("n3"),
  document.getElementById("n4"),
  document.getElementById("n5"),
  document.getElementById("n6"),
  document.getElementById("n7"),
  document.getElementById("n8"),
  document.getElementById("n9"),
  document.getElementById("n0"),
  document.getElementById("npoint"),
];

// Operators

const operators = [
  document.getElementById("op_mult"),
  document.getElementById("op_div"),
  document.getElementById("op_sum"),
  document.getElementById("op_rest"),
  document.getElementById("op_exp"),
];

const del = document.getElementById("del")
const ac = document.getElementById("ac")
const equal = document.getElementById("equal")

// Screen
const screen = document.getElementById("screen");

//Declaraciones 
let memory;
let number_on_screen = 0;
let operator_on = null

// EVENTOS NUMEROS
numbers.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (element.innerText == "." && !number_on_screen.includes(".")) {
      number_on_screen += element.innerText;
    }
    if (element.innerText != ".") {
      number_on_screen += element.innerText;
    }

    if (
      number_on_screen.startsWith("0") &&
      number_on_screen.length > 1 &&
      number_on_screen[1] != "."
    ) {
      let str = number_on_screen.replace(/^./, "");
      number_on_screen = str;
    }

    screen.innerText = number_on_screen;
  });
});

//EVENTOS OPERADORES 
operators.forEach(operator =>{
    operator.addEventListener('click', (e)=>{
        operator_on = operator.value
        memory=number_on_screen
        number_on_screen=0
    })
})



console.log(del);
console.log(del.value);

del.addEventListener("click", () => {
    number_on_screen=screen.innerText
    if(number_on_screen.length==1){
        screen.innerText=0
        number_on_screen=0
    }else{
        const number_on_screenDel = number_on_screen.toString().slice(0, -1)
        screen.innerText=number_on_screenDel
        number_on_screen=number_on_screenDel
    }
  });

ac.addEventListener("click", () => {
  number_on_screen = 0;
  screen.innerText = number_on_screen;
});


equal.addEventListener("click", () => {
    if(operator_on!=null){
    let result =eval(`${parseFloat(memory)} ${operator_on} ${parseFloat(number_on_screen)}`);
    screen.innerText = result
    memory=result
    number_on_screen = result
operator_on=null}
  });
  