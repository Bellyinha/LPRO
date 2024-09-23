// rest-operator-spread-operator.js
// ...

// rest operator
const somar = (...valores) => {
    return valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
};

console.log(somar(1, 2, 3)); // 6

console.log(somar([1, 2, 3])); // 01, 2, 3
console.log(somar(...[1, 2, 3])); // 6

const myArraya = [1, 2, 3, 4, 5];
console.log(somnar(myArraya)); // 01, 2, 3, 4, 5
console,log(somar(...myArraya)); // 15