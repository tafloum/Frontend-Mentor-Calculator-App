
// Const variables

const displayOuput = document.querySelector(".display");
const input = document.querySelectorAll("button");
const bodyEliBackgroundColor = document.querySelector('.body');
const themes = document.querySelector('.switch-button');
const themeToggler = document.querySelector('#themes');
const calculatorTitle = document.querySelector('.cal-title');
const inputSection = document.querySelector('.input');
const inputButton = document.querySelectorAll('.input-button');
const clearButton = document.querySelectorAll('.clear-button');
const equalButton = document.querySelector('.equal');

input.forEach(key=>{

    key.addEventListener("click",calculate);  
});


function calculate(){
    let buttonText = this.innerText;
    let operatorsButton = "./*-+";
    
    if(buttonText == 'RESET'){
        displayOuput.textContent = '';
        return;   
    }else if(buttonText == "DEL"){
        displayOuput.textContent = displayOuput.textContent.slice(0,displayOuput.textContent.length-1);
        return;
    }else if(buttonText == "="){
        displayOuput.innerText = eval(displayOuput.innerText);
        return; 
    }else{
        displayOuput.textContent += buttonText;
        return;
    }
}


// Themes Toggler Function

themes.addEventListener('click', (event) => {
    event.preventDefault();

    switchToggler();
    
})

// Switch Toggler Function
function switchToggler(){
    if(document.querySelector('.themeOne-toggler')){
        themes.classList.remove('switchButBackColorOne');
        themes.classList.add('switchButBackColorTwo');
        themeToggler.classList.remove('themeOne-toggler');
        themeToggler.classList.add('themeTwo-toggler');
        bodyEliBackgroundColor.classList.remove("themeOneBody");
        bodyEliBackgroundColor.classList.add("themeTwoBody");
        calculatorTitle.classList.remove("theme1CalTitle");
        calculatorTitle.classList.add("theme2CalTitle");
        displayOuput.classList.remove("themeOneDisplay");
        displayOuput.classList.add("themeTwoDisplay");
        inputSection.classList.remove("themeOneInputColor");
        inputSection.classList.add("themeTwoInputColor");
        equalButton.classList.remove("themeOneEqual");
        equalButton.classList.add("themeTwoEqual");
        clearButton.forEach(key =>{
            key.classList.remove("themeOneClearButton");
            key.classList.add("themeTwoClearButton");  
        })
        inputButton.forEach(key =>{
            key.classList.remove("themeOneButSha");
            key.classList.add("themeTwoButSha");
        })
        
    }else if(document.querySelector('.themeTwo-toggler')){
        themes.classList.remove('switchButBackColorTwo');
        themes.classList.add('switchButBackColorThree');
        themeToggler.classList.remove('themeTwo-toggler');
        themeToggler.classList.add('themeThree-toggler');
        bodyEliBackgroundColor.classList.remove("themeTwoBody");
        bodyEliBackgroundColor.classList.add("themeThreeBody");
        calculatorTitle.classList.remove("theme2CalTitle");
        calculatorTitle.classList.add("theme3CalTitle");
        displayOuput.classList.remove("themeTwoDisplay");
        displayOuput.classList.add("themeThreeDisplay");
        inputSection.classList.remove("themeTwoInputColor");
        inputSection.classList.add("themeThreeInputColor");
        equalButton.classList.remove("themeTwoEqual");
        equalButton.classList.add("themeThreeEqual");
        clearButton.forEach(key =>{
            key.classList.remove("themeTwoClearButton");
            key.classList.add("themeThreeClearButton");  
        })
        inputButton.forEach(key =>{
            key.classList.remove("themeTwoButSha");
            key.classList.add("themeThreeButSha");
        })
    }else if(document.querySelector('.themeThree-toggler')){
        themes.classList.remove('switchButBackColorThree');
        themes.classList.add('switchButBackColorOne');
        themeToggler.classList.remove('themeThree-toggler');
        themeToggler.classList.add('themeOne-toggler');
        bodyEliBackgroundColor.classList.remove("themeThreeBody");
        bodyEliBackgroundColor.classList.add("themeOneBody");
        calculatorTitle.classList.remove("theme3CalTitle");
        calculatorTitle.classList.add("theme1CalTitle");
        displayOuput.classList.remove("themeThreeDisplay");
        displayOuput.classList.add("themeOneDisplay");
        inputSection.classList.remove("themeThreeInputColor");
        inputSection.classList.add("themeOneInputColor");
        equalButton.classList.remove("themeThreeEqual");
        equalButton.classList.add("themeOneEqual");
        clearButton.forEach(key =>{
            key.classList.remove("themeThreeClearButton");
            key.classList.add("themeOneClearButton");  
        })
        inputButton.forEach(key =>{
            key.classList.remove("themeThreeButSha");
            key.classList.add("themeOneButSha");
        })
    }
}







