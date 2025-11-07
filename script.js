const buttons = document.querySelectorAll(".clickable-button");
const numOnScreen = document.querySelector(".number-on-screen");
let operand = Array(2).fill(null), operator = null, prevResult = null;
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
        operand[0] = null; operator = null; operand[1] = null;
    }
    else if (text == "+/-"){ // convert from positive to negative or vice versa
        if (operand[0] === null || operand[0] !== null && operator !== null && operand[1] === null) {
            if (operand[0] === null && prevResult != null){
                prevResult = prevResult[0] == "-" ? prevResult.slice(1) : "-" + prevResult; 
                operand[0] = prevResult; setText(); operand[0] = null;
                return;
            }
            else {
                alert("ERROR: no number entered");
            }
        }
        else {
            if (operand[0] !== null && operator === null){ // currently on first number
                operand[0] = operand[0][0] == "-" ? operand[0].slice(1) : "-" + operand[0];
            }
            else { // currently on second number
                operand[1] = operand[1][0] == "-" ? operand[1].slice(1) : "-" + operand[1];
            }
        }
    }
    else if (/^[0-9]$/.test(text)){ // digit from 0-9
        if (operator === null){ // working on operand[0]
            addCharacterToNumber(text, true, 0);
        }
        else { // working on operand[1]
            addCharacterToNumber(text, true, 1);
        }
    }
    else if (text == "."){ // decimal point
        if (operator === null) addCharacterToNumber(text, false, 0);
        else addCharacterToNumber(text, false, 1);
    }
    else if (text == "%" || text == "÷" || text == "x" || text == "-" || text == "+"){ // operator
        if (operand[0] === null){
            if (prevResult === null){
                alert("ERROR: You cannot enter an operator without first entering a number");
            }
            else {
                operand[0] = prevResult; operator = text;
            }
        }
        else if (operator !== null) {
            alert("ERROR: You have already entered an operator");
        }
        else {
            operator = text;
        }
    }
    else if (text == "="){ // evaluate
        if (operand[0] === null || operator === null || operand[1] === null){
            alert("ERROR: You did not input two operators with one operand in between");
        }
        else {
            operand[0] = Number(operand[0]); operand[1] = Number(operand[1]);
            if (operator == "%") {
                if (operand[1] == 0){
                    alert("ERROR: Cannot mod by 0. Clearing data.");
                    operand[0] = null; operator = null; operand[1] = null;
                }
                operand[0] = operand[0] % operand[1]; operator = null; operand[1] = null;
            }
            else if (operator == "÷"){
                if (operand[1] == 0){
                    alert("ERROR: Cannot divide by 0. Clearing data.");
                    operand[0] = null; operator = null; operand[1] = null;
                }
                operand[0] = operand[0] / operand[1]; operator = null; operand[1] = null;
            }
            else if (operator == "x"){
                operand[0] = operand[0] * operand[1]; operator = null; operand[1] = null;
            }
            else if (operator == "-"){
                operand[0] = operand[0] - operand[1]; operator = null; operand[1] = null;
            }
            else if (operator == "+"){
                operand[0] = operand[0] + operand[1]; operator = null; operand[1] = null;
            }
            operand[0] = operand[0].toString();
            setText();
            prevResult = operand[0]; operand[0] = null; operator = null; operand[1] = null;
            return;
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
    if (operand[0] !== null) {
        result += operand[0];
    }
    if (operator !== null){
        result += " " + operator + " ";
    }
    if (operand[1] != null) {
        result += operand[1];
    }
    numOnScreen.innerText = result;
}

function addCharacterToNumber(char, isDigit, index){ // c - character, isDigit - true iff character is a digit from 0-9, index - chooses between operand[0] and operand[1]
    if (operand[index] !== null && operand[index].length >= 9) {
        alert("ERROR: Your number cannot be more than 9 characters long");
    }
    else {
        if (isDigit){
            if (operand[index] === null || operand[index][0] == "0" && operand[index].length == 1) {
                operand[index] = char;
            }
            else {
                operand[index] += char;
            }
        }
        else { // decimal point '.' character
            if (operand[index] !== null && operand[index].includes('.')){
                alert("ERROR: You already have a decimal point in your number");
            }
            else {
                if (operand[index] === null){
                    operand[index] = "0.";
                }
                else {
                    operand[index] += ".";
                }
            }
        }
        prevResult = null;
    }
}