let inp = document.querySelector(".calc > input");

inp.addEventListener("keydown", function(e) {
  const allowed = ["0","1","2","3","4","5","6","7","8","9",".","Backspace","ArrowLeft","ArrowRight","Delete","Tab"];
  if (!allowed.includes(e.key)) {
    e.preventDefault();
  }
});

let num1 = "";
let num2 = "";
let sign = "";

let flag = 0;

function para(e) {
  let num = e.target.innerText;
  if (isNaN(num) && num !== ".") return;
  inp.value = inp.value + num;

  if (flag == 0) {
    num1 = num1 + num;
  } else {
    num2 = num2 + num;
  }
}

function op(operator) {

  if (num1 === "") return;

    if (num2 !== "") {
    let number1 = Number(num1);
    let number2 = Number(num2);

    if (sign == "+") num1 = String(number1 + number2);
    else if (sign == "-") num1 = String(number1 - number2);
    else if (sign == "*") num1 = String(number1 * number2);
    else if (sign == "/") num1 = String(number1 / number2);

    num2 = "";
  }

  sign = operator;

  flag = 1;

  inp.value = inp.value + operator;
}

function Equal() {
  let result = document.querySelector(".result");

  let number1 = Number(num1);
  let number2 = Number(num2);

  if (sign == "+") {
    result.innerHTML = number1 + number2;
  } else if (sign == "-") {
    result.innerHTML = number1 - number2;
  } else if (sign == "*") {
    result.innerHTML = number1 * number2;
  } else if (sign == "/") {
    result.innerHTML = number1 / number2;
  }
  num1 = String(result.innerHTML);
  num2 = "";
  sign = "";
  flag = 0;
}

function clearAll() {
  let result = document.querySelector(".result");
  inp.value = "";
  result.innerHTML = "";
  num1 = "";
  num2 = "";
  sign = "";
  flag = 0;
}

function toggleSign() {
  if (flag == 0 && num1 !== "") {
    num1 = String(Number(num1) * -1);
    inp.value = num1;
  } else if (flag == 1 && num2 !== "") {
    num2 = String(Number(num2) * -1);
    inp.value = num1 + sign + num2;
  }
}

function percent() {
  if (flag == 0 && num1 !== "") {
    num1 = String(Number(num1) / 100);
    inp.value = num1;
  } else if (flag == 1 && num2 !== "") {
    num2 = String(Number(num2) / 100);
    inp.value = num1 + sign + num2;
  }
}