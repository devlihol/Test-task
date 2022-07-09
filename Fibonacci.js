function fibonacci(num) {
    let a = 1,
        b = 1;

    for (let i = 3; i <= num; i++) {
        let c = a + b;
            a = b;
            b = c;
    }
    return b;
}
// Выводим в консоль необходимое число из последовательности Фибоначи
console.log(fibonacci(9));