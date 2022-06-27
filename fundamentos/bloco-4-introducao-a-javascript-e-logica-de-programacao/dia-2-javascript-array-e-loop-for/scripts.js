// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let index =0; index < numbers.length; index += 1) { console.log(numbers[index]);}

// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1) {soma += numbers[index]}
// console.log(soma);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1) {soma += numbers[index]}
// media = soma / numbers.length;
// console.log(media);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; 
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1) {soma += numbers[index]}
//  media = soma / numbers.length;
// if (media >20) {console.log("valor maior que 20");} else {console.log("valor menor ou igual a 20");}

// 5.🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o; 
// let maior_number = numbers[0];
// for (let index = 1; index < numbers.length; index +=1) { if (numbers[index] > maior_number) {maior_number = numbers[index]}}
// console.log( maior_number);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 
// let v_impar = 0;
// for (let index = 0; index < numbers.length; index +=1) {if (numbers[index] % 2 !== 0 ) {v_impar +=1}}

// if (v_impar === 0) {
//     console.log('nenhum valor ímpar encontrado');
//   } else {
//     console.log(v_impar);
//   }

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o; 
// let menor_number = numbers[0];
// for (let index = 1; index < numbers.length; index += 1) {if (numbers[index] < menor_number) {menor_number = numbers[index]}}
// console.log(menor_number);

// 8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; 

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}

// console.log(numeros);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. 

for (let index2 =0; index2 < numeros.length; index2 +=1) {console.log(numeros[index2] / 2);}

//Bonus



