// существует 7 типов данных 

var number = 7;
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
console.log(arr[2]);