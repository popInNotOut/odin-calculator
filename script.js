const buttons = document.querySelectorAll(".clickable-button");
const numOnScreen = document.querySelector(".number-on-screen");
let operand1 = null, operator = null, operand2 = null;
setText();

buttons.forEach(function(button){
    button.addEventListener("click", onButtonClick);
    button.addEventListener("pointerenter", onButtonEnter);
    button.addEventListener("pointerleave", onButtonLeave);
});

function onButtonClick(e){
    const button = e.target;
    const text = e.target.innerText;
    if (text == "AC"){ // clear screen
        operand1 = null; operator = null; operand2 = null;
    }
    else if (text == "+/-"){ // convert from positive to negative or vice versa
        
    }
    else if (/^[0-9]$/.test(text)){ // digit from 0-9

    }
    else if (text == "."){ // decimal point

    }
    else if (text == "%"){

    }
    else if (text == "÷"){

    }
    else if (text == "x"){

    }
    else if (text == "-"){

    }
    else if (text == "+"){

    }
    else if (text == "="){ // evaluate
        if (operand1 === null || operator === null || operand2 === null){
            alert("ERROR: You did not input two operators with one operand in between");
        }
        else {
            if (operator == "%") {
                if (operand2 == 0){
                    alert("ERROR: Cannot mod by 0. Clearing data.");
                    operand1 = null; operator = null; operand2 = null;
                }
                operand1 = operand1 % operand2; operator = null; operand2 = null;
            }
            else if (operator == "÷"){
                if (operand2 == 0){
                    alert("ERROR: Cannot divide by 0. Clearing data.");
                    operand1 = null; operator = null; operand2 = null;
                }
                operand1 = operand1 / operand2; operator = null; operand2 = null;
            }
            else if (operator == "x"){
                operand1 = operand1 * operand2; operator = null; operand2 = null;
            }
            else if (operator == "-"){
                operand1 = operand1 - operand2; operator = null; operand2 = null;
            }
            else if (operator == "+"){
                operand1 = operand1 + operand2; operator = null; operand2 = null;
            }
        }
    }
    setText();
}

function onButtonEnter(e){
    if (e.target.style.boxshadow === "" || e.target.style.boxshadow === undefined) toggleGlow(e);
}

function onButtonLeave(e){
    if (e.target.style.boxShadow !== "") toggleGlow(e);
}

function toggleGlow(e) {
  const button = e.target;
  const isGlowing = button.style.boxShadow !== "";

  if (isGlowing) {
    button.style.boxShadow = "";
  } else {
    button.style.boxShadow = "inset 0 0 20px 4px rgba(0, 0, 0, 1)";
  }
}

function setText(){
    let result = "";
    if (operand1 !== null) {
        result += operand1;
    }
    if (operator !== null){
        result += " " + operator + " ";
    }
    if (operand2 != null) {
        result += operand2;
    }
    numOnScreen.innerText = result;
}