// Task #1

// Boolean(Number(`10`)) + 1 ; --- ответ 2
// ‘sub ’ + Number(false); --- ответ sub 0
// 16  *  ‘      91    ‘ --- ответ 1456
// true-70 ---   ответ -69
// Number(1 + String(1)) + 1 --- ответ 12



// Task #2

let secInMinute = 60
let minInHour = 60;
let userHour;

do{
    userHour = Number(prompt('Введите количество часов', ''));
    if ( isNaN(userHour) ){
        alert('Введите число');
    }

} while( isNaN(userHour) );


let spelling;

if(userHour === 1){

    spelling = 'час';

}else if(userHour > 1 && userHour <= 4){

    spelling = 'часа';

}else if(userHour >= 5 || userHour === 0){

    spelling = 'часов';

}

let secInHour = userHour * minInHour * secInMinute;

alert(`${userHour} ${spelling} в секундах = ${secInHour} секунд`);



// Task #3

let num = 1;

num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;

alert(num);


location.reload();