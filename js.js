

// -------Рекурсия------////
function getFibElementRec(x) {
    return x <= 1 ? x : getFibElementFor(x - 1) + getFibElementRec(x - 2);
}

// -------Цикл-------------//
function getFibElementFor(x) {
    let prev = 1,
        next = 1;
    for (let i = 3; i <= x; i++) {
        let last = prev + next;
        prev = next;
        next = last;
    }
    return next;
}


// -------Callback function ---///

function callbackFunc(x,number) {
    console.log(`The ${x} element of Fibonacci sequence is ${number}`)
}

// -------Управляющая функция-----////

function getFibElement(x, resCall) {
    let result = x > 20?getFibElementRec(x):getFibElementFor(x);
    //Пк чего то не тянет 100(
        resCall(x, result);
        console.log(getFibElement(x, resCall))
}

let i = 0
while (i < 20) {
    let numberRandom = Math.round(2 + Math.random() * (200 - 2))
    getFibElement(numberRandom, callbackFunc);
    i++
}