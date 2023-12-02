function verificarNumero(num1, num2) {
   var soma = num1 + num2;
   var output = 'Os números ' + num1 + ' e ' +  num2;


if (num1 === num2) {
    output += ' são iguais e a soma entre ele é: ' + soma;
}else {
    output += ' não são iguais e a sua soma é: ' + soma;
}

if (soma > 10 && soma < 20) {
    output += ' e é maior que 10 e menor que 20';
} else if (soma <= 10) {
   output += ' e é menor que 10'; 
}else {
    output += ' e é maior que 20';
}

return output;
}

console.log(verificarNumero(2, 23));