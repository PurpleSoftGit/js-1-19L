
//1
var student = "Женя";
console.log(student);
student = "Рачинский";
console.log(student);

или

var student = { name: 'Женя', lastname: "Рачинский" }
console.log(student.name,student.lastname)

//2
var name=prompt('Как тебя зовут то?');
alert('ДОБРО ПОЖАЛОВАТЬ '+name+'');

//3

confirm("Вы уверены что хотите загрузить эту страницу?");

//4

var r = '9' + 0;
    // 90 строковый
var r = 9 + '0';
    // 90 строковый
var r = 4 + 9;
    // 13 - числовой
var r = null + 7;
    // 7 - числовой
var r = '6' + null;
    // 6null - строковый

//5

console.log(+'9' + 9); // + перед скобками преобразовывает содержание скобок в числовой тип

//6

‘4’ == 4 // тру, сравнивает только по значению
‘4’ === 4 // тру, сравнивает по значению и по типу данных

//7

2/3 + 1 + 1/3 == 2;
//Не верное. Во первых: JS выполняет команды с лева на право. Во вторых: JS плоховатенько работает с дробными числами.
// 2/3 + 1=1.6666666666666665 - сказала консолька. а 1/3 + 1=1.3333333333333333. Если их добавить, целого числа не будет
// Если написать 2/3 + 1/3 + 1 == 2; все будет тру!

//8

var obj = {},
    r = 0;

obj.prop = 9;
r = obj.prop;
delete obj.prop; // удаляем проп из обжекта (теперь там undefined)

console.log(obj.prop, r);

ответ: undefined, 9 // r сохранил значение.prop перед удалением из obj. Но не передался через сам obj.
