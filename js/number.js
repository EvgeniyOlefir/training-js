// Number.parseInt(), parseFloat()

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);

// console.log("elementWidth: ", elementWidth);

// let elementHeight = "387.54px";
// elementHeight = Number.parseFloat(elementHeight);

// console.log("elementHight: ", elementHeight);

// let salary = 1300.16472;
// salary = Number(salary.toFixed(3));
// // salary = Number(salary);
// console.log(salary);

// const base = 2;
// const power = 5;

// // const result = Math.pow(base, power);

// console.log(base ** power);

// // Попросить ввести число и сохранить в переменную
// let base = prompt("Давай число");
// base = Number(base);

// console.log(base);

// // Попросить ввести степень и сохранить в переменную

// let power = prompt("Давай степень");
// power - Number(power);

// console.log(power);

// // Возвести введенные данные в степень и вывести
// const result = base ** power;

// console.log(result);

//Math.random() * (max - min) + min
const max = 50;
const min = 30;

const result = Math.round(Math.random() * (max - min) + min);

console.log(result);
