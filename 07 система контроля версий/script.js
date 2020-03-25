'use strict'; //Используем новую версию 6



// существует 7 типов данных 

/* var number = 7;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null; //Когда чего то в коде не существует 
undefined; //Когда что то существует без значения
var obj = {}; //коллекцая данных в котором может содержаться все типы данных

//infinity - выдает когда мат операция не подлежит никакой логики
console.log(4 / 0);
console.log('string' * 9);

let persone = {
    name: "Jhon",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone["age"]);

let arr = ['plum', 'orange.jpg', 'apple'];
console.log(arr[2]); */

// alert("hello world"); простое уведомление
/* let answer = confirm("Are you ready?"); //Уведомление с правом выбора
console.log(answer); */

// let answer = prompt("Если ли вам 18?", "Да"); /* 1 задает вопрос, 2 дефолтное значение в окне */
// console.log(answer);
// console.log(typeof(answer));

// var arr = [123, 313, 241];
// console.log(typeof(arr));

/* console.log("arr" + " - object"); //Если сложить строку и число будет строка
console.log(4 + " - object");

// let answer = prompt("Что вы хотите?", "18");
let answer = +prompt("Что вы хотите?", "18");
//Если ставить плюс перед выражением то она из string превратится в number тип
console.log(answer);
console.log(typeof(answer)); */

let incr = 10,
    descr = 10;

incr++;
descr--;
console.log(incr + ' ' + descr);
//Префиксная форма возвращает нам значение уже измененное
//Постфиксная возвращает не измененное но потом изменяет

console.log(5 % 2); //остаток от деления 
console.log("2" === 2);
// == сравнивает значения, === сравнивает типы данных

let isChecked = true;
let isClose = false;
console.log(isChecked && isClose);
console.log(!isChecked || isClose);
// && - и
// || - или
//! - инверсия