function exe1() {
    console.clear();
    const array = [1,5,3,7,4,2,6];
    console.log('array = ', array);
    const newArray = array.sort();
    console.log('1 => ', newArray);
}

function exe2() {
    console.clear();
    const array = [1,5,3,7,4,2,6];
    console.log('array = ', array);
    const newArray = array.sort((a,b) => {
        return a - b;
    })
    console.log('2 => ', newArray); 
}

function exe3() {
    console.clear();
    const num = [];
    for(let i = 0; i <= 2; i++) {
        const numRandom = prompt(`Informe um numero da posição ${i+1}: `);
        num.push(numRandom)
    }
    alert(num)
    alert(num.reverse())
}

function exe4() {
    console.clear();
    const num = [];
    const lengthArray = prompt('informe o tamanho do array');
    for(let i = 1; i <= lengthArray; i++) {
        const numRandom = prompt(`Informe um numero da posição ${i}: `);
        num.push(numRandom)
    }
    alert(num)
    alert(num.reverse())
}


function exe5() {
    console.clear();
    const num = [];
    const lengthArray = prompt('informe o tamanho do array');
    for(let i = 1; i <= lengthArray; i++) {
        const numRandom = prompt(`Informe um numero da posição ${i}: `);
        num.push(numRandom)
    }
    alert(num)
    alert(num.sort())
    alert(num.reverse())
}