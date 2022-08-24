
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
const theme1 = document.querySelector("#theme1");
const theme2 = document.querySelector("#theme2");
const theme3 = document.querySelector("#theme3");

input.forEach(key => {

    key.addEventListener("click", calculate);
});


function calculate() {
    let buttonText = this.innerText;

    if (buttonText == 'RESET') {
        displayOuput.textContent = '';
        return;
    } else if (buttonText == "DEL") {
        displayOuput.textContent = displayOuput.textContent.slice(0, displayOuput.textContent.length - 1);
        return;
    } else if (buttonText == "=") {
        displayOuput.innerText = eval(displayOuput.innerText);
        return;
    } else {
        displayOuput.textContent += buttonText;
        return;
    }
}


// Adding Eventlistners To Theme labels 

localStorage.setItem('switchThemeNumber', 0);


theme1.addEventListener('click', () => {
    localStorage.setItem('switchThemeNumber', 1);
    switchToggler();
});
theme2.addEventListener('click', () => {
    localStorage.setItem('switchThemeNumber', 2);
    switchToggler();
});
theme3.addEventListener('click', () => {
    localStorage.setItem('switchThemeNumber', 3);
    switchToggler();
});

// Function To Clear Switch Themes

function clearSwitchThemeDOM() {
    //Remove theme 1 
    themes.classList.remove('switchButBackColorOne');
    themeToggler.classList.remove('themeOne-toggler');
    bodyEliBackgroundColor.classList.remove("themeOneBody");
    calculatorTitle.classList.remove("theme1CalTitle");
    displayOuput.classList.remove("themeOneDisplay");
    inputSection.classList.remove("themeOneInputColor");
    equalButton.classList.remove("themeOneEqual");
    clearButton.forEach(key => {
        key.classList.remove("themeOneClearButton");
    })
    inputButton.forEach(key => {
        key.classList.remove("themeOneButSha");
    })


    //Remove theme 2 
    themes.classList.remove('switchButBackColorTwo');
    themeToggler.classList.remove('themeTwo-toggler');
    bodyEliBackgroundColor.classList.remove("themeTwoBody");
    calculatorTitle.classList.remove("theme2CalTitle");
    displayOuput.classList.remove("themeTwoDisplay");
    inputSection.classList.remove("themeTwoInputColor");
    equalButton.classList.remove("themeTwoEqual");
    clearButton.forEach(key => {
        key.classList.remove("themeTwoClearButton");
    })
    inputButton.forEach(key => {
        key.classList.remove("themeTwoButSha");
    })

    //Remove theme 3
    themes.classList.remove('switchButBackColorThree');
    themeToggler.classList.remove('themeThree-toggler');
    bodyEliBackgroundColor.classList.remove("themeThreeBody");
    calculatorTitle.classList.remove("theme3CalTitle");
    displayOuput.classList.remove("themeThreeDisplay");
    inputSection.classList.remove("themeThreeInputColor");
    equalButton.classList.remove("themeThreeEqual");
    clearButton.forEach(key => {
        key.classList.remove("themeThreeClearButton");
    })
    inputButton.forEach(key => {
        key.classList.remove("themeThreeButSha");
    })

}


// Switch Toggler Function
function switchToggler() {
    let switchThemeNumber = localStorage.getItem('switchThemeNumber');
    clearSwitchThemeDOM();

    switch (switchThemeNumber) {

        case '1': {

            themes.classList.add('switchButBackColorOne');
            themeToggler.classList.add('themeOne-toggler');
            bodyEliBackgroundColor.classList.add("themeOneBody");
            calculatorTitle.classList.add("theme1CalTitle");
            displayOuput.classList.add("themeOneDisplay");
            inputSection.classList.add("themeOneInputColor");
            equalButton.classList.add("themeOneEqual");
            clearButton.forEach(key => {
                key.classList.add("themeOneClearButton");
            })
            inputButton.forEach(key => {
                key.classList.add("themeOneButSha");
            })
            break;
        }

        case '2': {
            themes.classList.add('switchButBackColorTwo');
            themeToggler.classList.add('themeTwo-toggler');
            bodyEliBackgroundColor.classList.add("themeTwoBody");
            calculatorTitle.classList.add("theme2CalTitle");
            displayOuput.classList.add("themeTwoDisplay");
            inputSection.classList.add("themeTwoInputColor");
            equalButton.classList.add("themeTwoEqual");
            clearButton.forEach(key => {
                key.classList.add("themeTwoClearButton");
            })
            inputButton.forEach(key => {
                key.classList.add("themeTwoButSha");
            })
            break;
        }

        case '3': {
            themes.classList.add('switchButBackColorThree');
            themeToggler.classList.add('themeThree-toggler');
            bodyEliBackgroundColor.classList.add("themeThreeBody");
            calculatorTitle.classList.add("theme3CalTitle");
            displayOuput.classList.add("themeThreeDisplay");
            inputSection.classList.add("themeThreeInputColor");
            equalButton.classList.add("themeThreeEqual");
            clearButton.forEach(key => {
                key.classList.add("themeThreeClearButton");
            })
            inputButton.forEach(key => {
                key.classList.add("themeThreeButSha");
            })
            break;
        }

    }

}








