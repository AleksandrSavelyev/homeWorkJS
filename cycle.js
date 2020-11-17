function sumEvenNum() {
    let count;
    let sum;
    for(let i = 1; i <= 99; i++) {
        if(i % 2 == 0) {
            count += 1;
            sum += i;
        }
    }
    return `четных чисел: ${count} сумма четных чисел: ${sum}`;
}
//console.log(sumEvenNum());

function checkPrimeNum(num) {
    for(let i = 2; i< num - 1; i++) {
        if(num % i === 0) {
            return "составное";
        } else {
            return "простое";
        }
    }
}
//console.log(checkPrimeNum(12));

function findeRoot(num) {

}

function calcFactorial(num) {
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result *=i;
    }
    return result;
}
//console.log(calcFactorial(10));

function calcSumGivNum(num) {
    let result = 0;
    while(num > 0) {
        result = result + (num % 10);
        num = Math.floor(num/10);
    }
    return result;
}
//console.log(calcSumGivNum(1234));

function reversNum(num) {
    let result = 0;
    while(num > 0) {
        result *= 10;
        result += (num % 10);
        num = Math.floor(num/10);
        console.log(result, num);
    }
    return result;
}
console.log(reversNum(123));