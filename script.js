const buttons = document.querySelectorAll(".clickable-button");
const err = document.querySelector(".error-mssg-label");

buttons.forEach(function(button){
    button.addEventListener("click", onButtonClick);
    button.addEventListener("mouseenter", onButtonEnter);
    button.addEventListener("mouseleave", onButtonLeave);
});

function onButtonClick(e){
    const button = e.target;
    const text = e.target.innerText;
    if (text == "AC"){ // clear screen
        
    }
    else if (text == "+/-"){ // convert from positive to negative or vice versa

    }
    else if (/^[0-9]$/.test(text)){ // digit from 0-9

    }
    else if (text == "%" || text == "÷" || text == "x" || text == "-"){ // operator

    }
    else if (text == "="){ // evaluate

    }
}

function onButtonEnter(e){
    toggleGlow(e);
}

function onButtonLeave(e){
    toggleGlow(e);
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