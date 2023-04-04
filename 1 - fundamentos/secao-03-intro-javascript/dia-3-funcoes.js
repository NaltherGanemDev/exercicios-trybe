function calculo(num1, num2) {
    let soma = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;

    return [soma, sub, mult];
}
console.log(calculo(8, 2));