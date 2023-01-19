console.log(`TASK#1`);


for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2) {
        console.log(`${i} - нечетное число`);
    } else {
        console.log(`${i} - четное число`);
    }
}


console.log(`TASK#2`);
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);



console.log(`TASK#3`);
let min = 1;
let max = 10;
let l = 5;

const arrayRandom = [];
for (let i = 0; i < l; i++) {
    arrayRandom.push(randomInteger(min, max));
}
console.log(arrayRandom);

let sum = 0;
let number = 3;


for (let i = 0; i < l; i++) {
    let element = arrayRandom[i];
    sum += element;
}
console.log(sum);
let minValue = arrayRandom[0];
for (let i = 0; i < l; i++) {
    if (arrayRandom[i] < minValue) {
        minValue = arrayRandom[i];
    }
}
console.log(minValue);


const digitInArray = function(arrayRandom, number) {
    for (let i = 0; i < l; i++) {
        if (arrayRandom[i] == number) {
            return console.log('В этом массиве  есть цифра "3"');

        }
    }
    for (var i = 0; i < l; i++) {
        if (arrayRandom[i] != number) {
            return console.log('В этом массиве нет цифры "3"');
        }

    }
}
digitInArray(arrayRandom, number);

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


console.log(`TASK#4`);
for (let i = 0; i < 20; i++) {
    let x = '';
    for (var j = 0; j <= i; j++) {
        x += 'x';
    }
    console.log(x);
}