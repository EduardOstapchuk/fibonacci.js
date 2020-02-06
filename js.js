// -------Рекурсия------////
const getFibElementRec = (index, prev = 0, last = 1) => {
    if (!index) return 0;
    return index - 2 > 1 ? getFibElementRec(index - 1, last, last + prev) : prev + last;
}



// -------Цикл-------------//
function getFibElementFor(index) {
    let prev = 1,
        next = 1;
    for (let i = 3; i <= index; i++) {
        let last = prev + next;
        prev = next;
        next = last;
    }
    return next;
}


// -------Callback function ---///

function callbackFunc(index,number) {
    console.log(`The ${index} element of Fibonacci sequence is ${number}`)
}

// -------Управляющая функция-----////

function getFibElement(index, resCall) {
    let result = index < 100?getFibElementRec(index):getFibElementFor(index);
        resCall(index, result);
}

let i = 0
while (i < 20) {
    let numberRandom = Math.round(2 + Math.random() * (200 - 2))
    getFibElement(numberRandom, callbackFunc)
    i++
}