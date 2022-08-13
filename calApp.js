const output = document.querySelector(".display");
const input = document.querySelectorAll("button");
const reset = document.querySelector('.reset');


// Changing theme colors

const themes = document.querySelectorAll('.themes');
const themeOneColor = document.querySelector('#theme-one');
const themeTwoColor = document.querySelector('#theme-two');
const themeThreeColor = document.querySelector('#theme-three');

const bodyEliBackgroundColor = document.querySelector('body');
const calculatorTitle = document.querySelector('.cal-title');
const displayOuput = document.querySelector('.display');
const inputSection = document.querySelector('.input');
const inputButton = document.querySelectorAll('.input-button');
const clearButton = document.querySelectorAll('.clear-button');
const equalButton = document.querySelector('.equal');

input.forEach(key=>{

    key.addEventListener("click",calculate);  
});


function calculate(){
    let buttonText = this.innerText;
    let errorMessage = "./+-*=";
   
    if(buttonText == 'RESET'){
        output.textContent = '';
        return;
        
    }
    
    if(buttonText == "DEL"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }

    if(buttonText == "="){
        output.innerText = eval(output.innerText);
        output.style.animation = "big 0.5s ease-in-out";
        
    }
    
    else{
        output.textContent += buttonText;
        return;
    }

    
}







function themeToggler(){
    if (themes.value == '1') {
        bodyEliBackgroundColor.classList.remove(".themeThreeBody");
        bodyEliBackgroundColor.classList.add(".themeOneBody");
        calculatorTitle.classList.remove("theme3CalTitle");
        calculatorTitle.classList.add("theme1CalTitle");
        displayOuput.classList.remove(".themeThreeDisplay");
        displayOuput.classList.add(".themeOneDisplay");
        inputSection.classList.remove(".themeThreeInputColor");
        inputSection.classList.add(".themeOneInputColor");
        inputButton.classList.remove(".themeThreeButSha");
        inputButton.classList.add(".themeOneButSha");
        clearButton.classList.remove(".themeThreeClearButton");
        clearButton.classList.add(".themeOneClearButton");
        equalButton.classList.remove(".themeThreeEqual");
        equalButton.classList.add(".themeOneEqual");
        document.querySelector('#theme2').style.display = 'none';
        document.querySelector('#theme3').style.display = 'none';
    } else if (themes.value == '2') {
        bodyEliBackgroundColor.classList.remove(".themeOneBody");
        bodyEliBackgroundColor.classList.add(".themeTwoBody")
        calculatorTitle.classList.remove("theme1CalTitle");
        calculatorTitle.classList.add("theme2CalTitle");
        displayOuput.classList.remove(".themeOneDisplay");
        displayOuput.classList.add(".themeTwoDisplay");
        inputSection.classList.remove(".themeOneInputColor");
        inputSection.classList.add(".themeTwoInputColor");
        inputButton.classList.remove(".themeOneButSha");
        inputButton.classList.add(".themeTwoButSha");
        clearButton.classList.remove(".themeOneClearButton");
        clearButton.classList.add(".themeTwoClearButton");
        equalButton.classList.remove(".themeOneEqual");
        equalButton.classList.add(".themeTwoEqual");
        document.querySelector('#theme1').style.display = 'none';
        document.querySelector('#theme3').style.display = 'none';
    } else if (themes.value == '3'){
        bodyEliBackgroundColor.classList.remove(".themeTwoBody");
        bodyEliBackgroundColor.classList.add(".themeThreeBody");
        calculatorTitle.classList.remove("theme2CalTitle");
        calculatorTitle.classList.add("theme3CalTitle");
        displayOuput.classList.remove(".themeTwoDisplay");
        displayOuput.classList.add(".themeThreeDisplay");
        inputSection.classList.remove(".themeTwoInputColor");
        inputSection.classList.add(".themeThreeInputColor");
        inputButton.classList.remove(".themeTwoButSha");
        inputButton.classList.add(".themeThreeButSha");
        clearButton.classList.remove(".themeTwoClearButton");
        clearButton.classList.add(".themeThreeClearButton");
        equalButton.classList.remove(".themeTwoEqual");
        equalButton.classList.add(".themeThreeEqual");
        document.querySelector('#theme1').style.display = 'none';
        document.querySelector('#theme2').style.display = 'none';
    }
}