
function simbol(test) {
    return test.length % 2 === 0 ? true : false
}

console.log(simbol("[)(]"))

// examples:
//     -   `({[]})` => true
//     -   `([][]{})`=> true
//     -   `({)(]){[}` => false
//     -   `[)(]` => false