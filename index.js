const output = document.querySelector('#output')
const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const sum = document.querySelector('.sum')
const clear = document.querySelector('.clear')

let temp = 0
let operatorSymbol = ""

number.forEach(function (button) {
  button.addEventListener('click', function () {
    output.value += button.innerText
  })
})

operator.forEach(function (button) {
  button.addEventListener('click', function () {
    temp = parseInt(output.value)
    operatorSymbol = button.innerText
    output.value = ""
  })
});

sum.addEventListener('click', function () {
  switch (operatorSymbol) {
    case "+":
      output.value = temp + parseInt(output.value)
    case "*":
      output.value = temp * parseInt(output.value)
    case "/":
      output.value = temp / parseInt(output.value)
    case "-":
      output.value = temp - parseInt(output.value)
  }

  temp = 0
  operatorSymbol = ""
})

clear.addEventListener('click', function () {
  temp = ""
  operatorSymbol = ""
  output.value = ""
})
