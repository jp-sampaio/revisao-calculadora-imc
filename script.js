function currentTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart("2", 0);
  const minutes = date.getMinutes().toString().padStart("2", 0);
  const time = document.querySelector(".conections .hours")
  
  return time.textContent = `${hours}:${minutes}`;
}

currentTime()
setInterval(currentTime ,1000);

const masculine = document.querySelector(".gender .masculine");
const feminine = document.querySelector(".gender .feminine");

masculine.addEventListener("click", () => {
  let gender = document.querySelector(".result-gender"); 
  gender.textContent = "Homem"
});

feminine.addEventListener("click", () => {
  let gender = document.querySelector(".result-gender");
  gender.textContent = "Mulher";
});

const screenOne = document.querySelector(".screen-one");
const screenTwo = document.querySelector(".screen-two");

const calcButton = document.querySelectorAll("footer button");

calcButton.forEach( button => {
  button.addEventListener("click", () => {
  toggleScreen()

  if(screenOne.classList.contains("hide")) {
    const resultValue = document.querySelector(".result .value");
    let resultNivel = document.querySelector(".result .level");
    const resultMessage = document.querySelector(".result .message");
    
    resultValue.textContent = calculatorIMC(height.value, weight.textContent).toFixed(2);

    if (calculatorIMC(height.value, weight.textContent).toFixed(2) < 18.5) {
      resultNivel.textContent = "Abaixo do Peso";
      resultMessage.textContent =
        "Você está abaixo do peso, melhor pensar em como melhorar a sua alimentação.";
      return resultNivel, resultMessage;
    }
    
    else if (
      calculatorIMC(height.value, weight.textContent).toFixed(2) >= 18.5 &&
      calculatorIMC(height.value, weight.textContent).toFixed(2) < 25
      ) {
      resultNivel.textContent = "Peso Normal";
      resultMessage.textContent =
        "Parabéns você está com o peso ideal, continue assim!.";
      return resultNivel, resultMessage;
    } 
    
    else if (
      calculatorIMC(height.value, weight.textContent).toFixed(2) >= 25 &&
      calculatorIMC(height.value, weight.textContent).toFixed(2) < 30
      ) {
      resultNivel.textContent = "Acima do Peso";
      resultMessage.textContent =
        "Você está Acima do Peso, melhor pensar em como melhorar a sua alimentação!";
      return resultNivel, resultMessage;
    } 
    
    else if (
      calculatorIMC(height.value, weight.textContent).toFixed(2) >= 30 &&
      calculatorIMC(height.value, weight.textContent).toFixed(2) < 35
    ) 
    {
      resultNivel.textContent = "Obesidade Nível 1";
      resultMessage.textContent =
        "Você está com obesidade 1, melhor pensar em como melhorar a sua alimentação urgente!";
      return resultNivel, resultMessage;
    }

    else {
      resultNivel.textContent = "Obesidade Nível 2 ou mais";
      resultMessage.textContent =
        "Você está com obesidade 2 ou mais, melhor pensar em como melhorar a sua alimentação urgentemente!";
      return resultNivel, resultMessage;
    }
  }
  })
})

let height = document.getElementById("height");
let weight = document.querySelector(".weight p");
let numberCm = document.querySelector(".cm-number");
let age = document.querySelector(".age p");
let btnPlusOne = document.querySelector(".plus-one");
let btnPlusTwo = document.querySelector(".plus-two");
let btnMinusOne = document.querySelector(".minus-one");
let btnMinusTwo = document.querySelector(".minus-two");

btnPlusOne.addEventListener("click", () => {
  Number(++weight.textContent);
});

btnMinusOne.addEventListener("click", () => {
  Number(--weight.textContent);
});

btnPlusTwo.onclick = () => {
  let displayAge = document.querySelector(".result-age");
  displayAge.textContent = ` Idade: ${Number(++age.textContent)}`;
};

btnMinusTwo.onclick = () => {
  let displayAge = document.querySelector(".result-age");
  displayAge.textContent = ` Idade: ${Number(--age.textContent)}`;
}

height.addEventListener("input", (event) => {
  numberCm.textContent = event.target.value;
  calculatorIMC(event.target.value, weight.textContent)
});

function calculatorIMC(height, weight) {
  const calculation = Number(weight) / ((Number(height) / 100) ** 2);
  return calculation;
}

function toggleScreen() {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
}