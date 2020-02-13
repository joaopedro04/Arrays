console.log('1 - Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.')
function exercicio1() {
    const vet = [1,2,3,4,5];
    return console.log('1 => ',vet);
}
exercicio1()

//----------------------------------------------------------------------------------------

console.log('2 - Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.');
function exercicio2(){
    const vet = [0,1,2,3,4,5,6,7,8,9];
    return console.log('2 => ', vet.reverse())
}
exercicio2()

//----------------------------------------------------------------------------------------

console.log('3 - Faça um Programa que leia 4 notas, mostre as notas e a média na tela');
function exercicio3() {
    const notas = [10, 5, 8, 9.5]
    const media = notas.reduce((total, num) => {
        return  total + num;
    });
    return console.log('3 => ', media/notas.length);
}
exercicio3();

//----------------------------------------------------------------------------------------
// console.log('4 - Faça um Programa que leia um vetor de 10 caracteres, e diga quantas vogal foram lidas. Imprima as vogal.');
// function exercicio4() {
// //     const resultado = [];
// //     const palavra = 'aximira';
// //     const consoantes = ['a', 'e', 'i', 'o', 'u'];
// //     for(let i = 0; i < palavra.length; i++) {
        
//     }
//     return console.log('4 => n consegui');
// // }
// exercicio4();
//----------------------------------------------------------------------------------------
console.log('5 - Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.');
function exercicio5() {
    const pares = [];
    const impar = [];
    const num = [];
    
    for(let i = 0; i <= 19; i++) {
        if(i % 2 === 0){
            pares.push(i);
        }else{
            impar.push(i);
        }
        num.push(i);
    }
    return console.log('5 => \n', ['todos => ',num, 'pares => ',pares, 'impar => ',impar]);
}
exercicio5();
