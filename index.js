console.log('1 - Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.')
function exercicio1() {
    const vet = [1,2,3,4,5];
    return console.log('1 => ',vet);
}
exercicio1()
console.log(' ');

//----------------------------------------------------------------------------------------

console.log('2 - Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.');
function exercicio2(){
    const vet = [0,1,2,3,4,5,6,7,8,9];
    return console.log('2 => ', vet.reverse())
}
exercicio2()
console.log(' ');

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
console.log(' ');

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
        if(i % 2 === 0) {
            pares.push(i);
        }else {
            impar.push(i);
        }
        num.push(i);
    }
    return console.log('5 => \n', ['todos => ',num, 'pares => ',pares, 'impar => ',impar]);
}
exercicio5();
console.log(' ');

//----------------------------------------------------------------------------------------
console.log('6 - Faça um Programa que peça as quatro notas de 2 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.');
function exercicio6() {
    const notasFinal = [];
    const n1 = 0;
    const n2 = 0;
    const n3 = 0;
    const n4 = 9;
    notasFinal.push(n1)
    notasFinal.push(n2)
    notasFinal.push(n3)
    notasFinal.push(n4)
    const somaNotas = notasFinal.reduce((a,b) => {
        return a+b;
    });
    const media = somaNotas/notasFinal.length;
    if(media > 7){
        return console.log('6 => ', media);
    }else {
        return console.log('6 => Media menor que 7');
    }
}
exercicio6();
console.log(' ');

//----------------------------------------------------------------------------------------
console.log('7 - Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.');
function exercicio7() {
    const vetor = [2,2,2,2,2];
    const soma = vetor.reduce((a,b) => {
        return a + b;
    });
    const multiplicação = vetor.reduce((a,b) => {
        return a * b;
    });
    return console.log('7 => ', [
        'vetor => ', vetor,
        'soma => ', soma,
        'multiplicacao => ', multiplicação
    ]);
}

exercicio7()
console.log(' ');

//----------------------------------------------------------------------------------------
//console.log('8 - Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.');

//----------------------------------------------------------------------------------------
console.log('9 - Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor.');
function exercicio9() {
    const A = [2,3,4,5,6,7,8,9,10,11];
    const B = [];
    for(let i = 0; i <= A.length; i++){
        B.push(Math.pow(A[i], 2));
    }
    return console.log('9 => ', B)
}
exercicio9();
console.log(' ');

//----------------------------------------------------------------------------------------
console.log('10 - ');