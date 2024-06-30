/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/
let firstEl = "";
let secondEl = "";
let operator = "";
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const theButtonVal = event.target.innerText;

    if (theButtonVal >= "0" && theButtonVal <= "9") {
      // if(! operator && ! secondEl)
      // operation order firstEl => if true  (operator) and false secondEl and false == then this is the first elem
      if (!operator) {
        // ope = true and ! make it false so iff it is not true thats mean its not pressed so the pressed is the first number

        firstEl += theButtonVal;
        display.innerHTML = firstEl;
      } else {
        secondEl += theButtonVal;
        display.innerHTML = secondEl;
      }
    } else if (
      theButtonVal === "+" ||theButtonVal === "-" ||theButtonVal === "*" ||theButtonVal === "/") {
      if (firstEl && !operator) {
        operator = theButtonVal;
      }
    } else if (theButtonVal === "=") {
      if (firstEl && secondEl && operator) {
        let result;
        const num1 = parseFloat(firstEl);
        const num2 = parseFloat(secondEl);

        if (operator === "+") {
          result = num1 +num2;
        }  else if (operator === "-") {
          result = num1 -num2;
        } else if (operator === "*") {
          result = num1 * num2;
        }   else if (operator === "/") {
          result = num1 /num2;
        }
        display.innerHTML = result;

        firstEl = result;
        secondEl = "";
        operator = "";
      }
    }
    // else if(theButtonVal === "C"){
    //    if(firstEl && secondEl && operator!==''){
    //     firstEl = '';
    //     secondEl ='';
    //     operator ='';
    //    }
    //   display.innerHTML = "";
    // }
    else if (theButtonVal === "C") {
      firstEl = "";
      secondEl = "";
       operator = "";

       display.innerHTML = "";
    }
  });
});
