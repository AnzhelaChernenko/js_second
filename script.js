/*Запросить у пользователя его возраст и определить, кем он является:
ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером
(60– ...).

let age = +prompt("Enter your year of birth","");
const year = 2019;

let calc = year-age;

if (calc>=0 && calc<=12){
    alert(`Dear your age is ${calc}, so you are child! `);
}else if (calc>12 && calc<=18){
    alert(`Dear your age is ${calc}, so you are teenager! `);
}else if(calc>18 && calc<=60){
    alert(`Dear your age is ${calc}, so you are adult! `);
}else if (calc>60 && calc<=110){
    alert(`Dear your age is ${calc}, so you are retiree! `);
}else if (calc>110){
    alert(`Your age is ${calc}. It's amazing!Keep it up!`);
}*/

/*Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
 который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let number = +prompt("Enter one number from 0 to 9", "");

switch (number) {
    case 0:
        document.write(`)`);
        break;
    case 1:
        document.write(`!`);
        break;
    case 2:
        document.write(`@`);
        break;
    case 3:
        document.write(`#`);
        break;
    case 4:
        document.write(`$`);
        break;
    case 5:
        document.write(`%`);
        break;
    case 6:
        document.write(`^`);
        break;
    case 7:
        document.write(`&`);
        break;
    case 8:
        document.write(`*`);
        break;
    case 9:
        document.write(`(`);
        break;
}*/
/*Запросить у пользователя трехзначное число и проверить, есть ли в
 нем одинаковые цифры.

let number = +prompt("Enter three numbers","");
let first = Math.floor(number/100);
let calcSecond = number-first*100;
let second = Math.floor(calcSecond/10);
let third = calcSecond-second*10;

if (first==second || second==third || third==first){
    alert(`There is 2 or more same numbers!`);
}else{
    alert("There are not same numbers, try again");
}

document.write(`You enter: ${number}`);*/

/*Запросить у пользователя год и проверить, високосный он или нет.
 Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let year = +prompt("Enter year, please", "");

if((year%4 ==0) && (year%100 != 0) || (year%400 ==0)){
alert(`високосний`);
}else {
    alert(`не вісокосній`);
}*/

/*Запросить у пользователя пятиразрядное число и определить, является
 ли оно палиндромом.

let number = prompt("Enter five numbers","");
let first = Math.floor(number/10000);

let calcSecond = number-first*10000;
let second = Math.floor(calcSecond/1000);

let calcThird = calcSecond-second*1000;
let third = Math.floor(calcThird/100);

let calcFourth = calcThird-third*100;
let fourth = Math.floor(calcFourth/10);

let fifth = calcFourth-fourth*10;

if(first==fifth && second==fourth){
    document.write(`Cool!You enter palindrome!`);
}else {
    alert(`Your number is not palindrome. Try again!`);
}*/

/*Написать конвертор валют. Пользователь вводит количество USD,
 выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и
  получает в ответ соответствующую сумму.

const dollarToEuro = 0.91;
const dollarToUan = 24.5;
const dollarToAzn = 1.7;

let dollar = +prompt("Enter dollars",0);

let eur = dollarToEuro*dollar;
let uan = dollarToUan*dollar;
let azn = dollarToAzn*dollar;

let askEur = confirm("Do you want to change money to EURO?");
if(askEur==true){
    document.write(`You receive:${eur} EUR `);
}else {
    alert(`Please, make choice! `);
}

let askUan = confirm("Do you want to change money to UAN?");
if(askUan==true){
    document.write(`You receive:${uan} UAN `);
}

let askAzn = confirm("Do you want to change money to AZN?");
if(askAzn==true){
    document.write(`You receive:${azn} AZN `);
}*/

/*Запросить у пользователя сумму покупки и вывести сумму к оплате
 со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%,
 от 500 и выше – 7%.

let totalPrice = +prompt("Enter total price", "");

const firstDiscount= totalPrice*3/100;
const secondDiscount= totalPrice*5/100;
const thirdDiscount= totalPrice*7/100;

let first = totalPrice-firstDiscount;
let second = totalPrice-secondDiscount;
let third = totalPrice-thirdDiscount;

if(totalPrice>=200 && totalPrice<300){
    document.write(`Your price is: ${first}`);
}else if(totalPrice>=300 && totalPrice<500){
    document.write(`Your price is: ${second}`);
}else if(totalPrice>=500){
    document.write(`Your price is: ${third}`);
}else {
    alert(`You have not enough purchase amount for receiving Discount! `);
}*/

/*Запросить у пользователя длину окружности и периметр квадрата.
Определить, может ли такая окружность поместиться в указанный квадрат.

let circle = +prompt("Enter length of circle","");
let square = +prompt("Enter length of square","");
const p = 3.1415;
let calc = p*square/4;



if (circle<=calc){
    alert(`The circle will fit in the square`);
}else {
    alert(`The circle will not fit in the square`);
}*/

/*Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта
ответа. За каждый правильный ответ начисляется 2 балла. После
вопросов выведите пользователю количество набранных баллов.

let result="";
let question=1;
let value1=0;
let value2=0;
let choice;
function check()
{
    for (question = 1; question <= 3; question++) {
        var q = document.forms['quiz'].elements['q'+question];
        for (let i = 0; i < q.length; i++) {
            if (q[i].checked) {
                choice = q[i].value;
            }
        }
        if (choice == "value1") {
            value1++;
        }
        if (choice == "value2") {
            value2++;
        }
    }
   if (value2 == 0) {
        alert(`Нет правильных ответов`);
    }
    else if (value2 == 1) {
        alert(`Один правильный ответ. Ваш бал: 2`);
   }
   else if (value2 == 2) {
       alert(`Два правильных ответа. Ваш бал: 4`);
    }
   else if (value2 == 3) {
        alert(`Все ответы верные. Ваш бал: 6`);
    }
    }*/

/*Запросить дату (день, месяц, год) и вывести следующую за ней дату.
Учтите возможность перехода на следующий месяц, год, а также високосный
год.

let date = +prompt("Enter date", '');

let start = "01";
let mart = "03";
let january = "01";
let month = prompt("Enter month", '');
let year = +prompt("Enter year", '');

if(date==28 && month==2 || month=="02" && year%4 ==0 && (year%100 != 0) || (year%400 ==0)){
    alert(`Tomorrow date is: ${++date}.${month}.${year}`);
}else if(date==29 && month==2 || month=="02" && year%4 ==0 && (year%100 != 0) || (year%400 ==0)){
    alert(`Tomorrow date is: ${start}.${mart}.${year}`);
}else if(date==31 && month==12){
    alert(`Tomorrow date is: ${start}.${january}.${++year}`);
}else if(date==30 && month==4|| month=="04"){
    alert(`Tomorrow date is: ${start}.may.${year}`);
}else if(date==30 && month==6|| month=="06"){
    alert(`Tomorrow date is: ${start}.july.${year}`);
}else if(date==30 && month==9|| month=="09") {
    alert(`Tomorrow date is: ${start}.october.${year}`);
}else if(date==30 && month==11) {
    alert(`Tomorrow date is: ${start}.December.${year}`);
}else {
    alert(`Tomorrow date is: ${++date}.${month}.${year}`);
}*/







































