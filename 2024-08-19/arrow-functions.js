// arrow functions
//anonymous functions

// ES5
var multiplicar = function(x, y) {
    return x * y;
}

// ES6 (versão atual)
const multiplicar = (x, y) => {
    return x * y;
}

// é ´possível omitir as chaves e a palavra-chave return caso a função tenha apenas uma única instrução (linha).
const multiplicar = (x, y) => x * y;