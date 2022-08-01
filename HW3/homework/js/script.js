// 1 задание
var num = 1 ;
console.log(num);

var number = 88888888888n;
console.log(number);

var firstName = "Julia";
console.log(firstName);

var val = true;
console.log(val);

var nameJulia ;
console.log(nameJulia)

var age = null ;
console.log(age);

var id = Symbol("id");
console.log(id);

var user = {
   name: "Julia",
   age: 23
};
console.log(user);

// 2 задание 

var size = 45;
   size=50 ;
console.log(size);

let str=" Привет , друг";
   str="Пока , друг";
console.log(str);

const str1 = "Как дела ?";
console.log(str1);

// 3 задание
{
   let str = '123'
   console.log(Number(str))
   console.log(+str)
   console.log(Boolean(str))
   console.log(!!str)

   let num = 123
   console.log(String(num))
   console.log(Boolean(num))
   console.log(!!num)

   let bool = false
   console.log(String(bool))
   console.log(Number(bool))

   let nullValue = null
   console.log(Number(nullValue))
   console.log(+nullValue)
   console.log(Boolean(nullValue))
   console.log(!!nullValue)

   let undefinedValue = undefined
   console.log(Number(undefinedValue))
   console.log(+undefinedValue)
   console.log(Boolean(undefinedValue))
   console.log(!!undefinedValue)
}


// 4 задание

var additionStr = firstName+firstName;
console.log(additionStr);

var additionStr2 = firstName+num ;
console.log(additionStr2);

var additionStr3 = firstName+val;
console.log(additionStr3);

var additionStr4 = firstName+nameJulia;
console.log(additionStr4);

var additionStr5 = firstName+age;
console.log(additionStr5);

var additionStr7= firstName+user;
console.log(additionStr7);

var additionStr8 = firstName+number;
console.log(additionStr8);
// ================================================================== 
var additionNum = num+firstName;
console.log(additionNum);

var additionNum2 = num+num ;
console.log(additionNum2);

var additionNum3 = num+val;
console.log(additionNum3);

var additionNum4 = num+nameJulia;
console.log(additionNum4);

var additionNum5 = num+age;
console.log(additionNum5);

var additionNum7= num+user;
console.log(additionNum7);

// 5 задание

var minusStr = firstName-firstName;
console.log(minusStr);

var minusStr2 = firstName-num ;
console.log(minusStr2);

var minusStr3 = firstName-val;
console.log(minusStr3);

var minusStr4 = firstName-nameJulia;
console.log(minusStr4);

var minusStr5 = firstName-age;
console.log(minusStr5);

var minusStr7= firstName-user;
console.log(minusStr7);
// ================================================================== 
var minusNum = num-firstName;
console.log(additionNum);

var minusNum2 = num-num ;
console.log(minusNum2);

var minusNum3 = num-val;
console.log(minusNum3);

var minusNum4 = num-nameJulia;
console.log(minusNum4);

var minusNum5 = num-age;
console.log(minusNum5);

var minusNum7= num-user;
console.log(minusNum7);

//6 задание

let userName = prompt("Укажите ваш логин");
let pass = ''
if (userName === 'kykold') {
   pass = prompt('Укажите пароль ');
   }
if (pass === '1234asdQQ') {
   alert('Добро пожаловать ');
      }
else{
      alert("Ошибка входа");
}

//7 задание

const currentYear = 2022

const userAge = prompt('Введите свой год рождения')
if(!userAge){
 console.log('Введите возраст!')
}else if(currentYear - userAge >= 16){
   alert('Добро пожаловать')
} else {
   alert('Приходите когда подростете.')
}

//8 задание

const allowance = 100;

const expirience = prompt('Укажите свой стаж работы')

alert(`Ваша надбавка состовляет ${allowance * expirience} грн.`)

//9 задание

const day = +prompt('Введите порядковый номер дня недели.')

if(day === 1){
   console.log('Понедельник')
} else if(day === 2){
   console.log('Вторник')
} else if(day === 3){
   console.log('Среда')
}else if(day === 4){
   console.log('Четверг')
}else if(day === 5){
   console.log('Пятница')
}else if(day === 6){
   console.log('Суббота')
}else if(day === 7){
   console.log('Воскресенье')
} else{
   console.log('Не корректое число')
}

switch(day){
   case(1): {
      console.log('Понедельник')
      break;
   }
   case(2): {
      console.log('Вторник')
      break;
   }
   case(3): {
      console.log('Среда')
      break;
   }
   case(4): {
      console.log('Четверг')
      break;
   }
   case(5): {
      console.log('Пятница')
      break;
   }
   case(6): {
      console.log('Суббота')
      break;
   }
   case(7): {
      console.log('Воскресенье')
      break;
   }
   default: console.log('Не корректное число')
}

day === 1
? console.log('Понедельник')
: day === 2
? console.log('Вторник') 
: day === 3
? console.log('Среда')
: day === 4
?console.log('Четверг')
:day === 5
?console.log('Пятница')
: day === 6
? console.log('Суббота')
: day === 7
?console.log('Воскресенье')
: console.log('Некорректное значение')

// 10 задание

const someNum = +prompt('Введите число')

if(someNum > 0){
   alert(1)
} else if(someNum < 0){
   alert(-1)
}else if(someNum === 0){
   alert(0)
}else{
   alert('Не коректное число')
}

//Задание 11

someNum>0
?alert(1)
:someNum < 0
?alert(-1)
:someNum === 0
? alert(0)
:alert('Не коректное число')


//12 задание

const home = +prompt('Введите номер квартиры')

if(home >=1 && home <= 20){
   alert('Вы живете в 1 подъезде')
} else if(home >=21 && home <= 48){
   alert('Вы живете в 2 подъезде')
} else if(home >=49 && home <= 90){
   alert('Вы живете в 3 подъезде')
} else {
   alert('Не коректное значение')
}

//13 задание

const browser = prompt('Введите название браузера')

if(browser === 'Edge'){
   alert("You've got the Edge!")
} else if(browser === 'Chrome' 
|| browser === 'Firefox'
|| browser === 'Safari'
|| browser === 'Opera'){
   alert('Okay we support these browsers too')
} else {
   alert( 'We hope that this page looks ok!' );
}

//14 задание

const randNum = +prompt('Введите число между 0 и 3')

switch(randNum){
   case(0): {
      alert('Вы ввели число 0');
      break;
   }
   case(1): {
      alert('Вы ввели число 1');
      break
   }
   case(2):
   case(3): {
      alert('Вы ввели число 2, а может и 3');
      break
   }
   
}