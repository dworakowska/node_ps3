// // const utils = require('./utils')
// const lodash = require('lodash');

// const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

// const funcResult = lodash.uniq(someArray);


// console.log(someArray);
// console.log(funcResult);


// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];

// console.log(lodash.difference(tabA, tabB));
// console.log(lodash.difference(tabB, tabA));

// const _ = require('lodash');
// let array = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];


// console.log(_.max(array));
// console.log(_.min(array));
// console.log('abc   s sssss  sdasdaddfdfdffdf ');



function addCallback(result) {
    console.log
    fs.writeFile('wynik.txt', wynik, function () {
        console.log('plik został zapisany!!');
        fs.readFile('wynik.txt', 'utf-8', function (data));
        console.log(data);
    });
});
});




const argv = require('yargs').argv
const calc = require('./math');



const operator = argv.operator;
const a = argv.a;
const b = argv.b;

function addCallback(result) {
    console.log(result)
}
switch (operator) {
    case '+':
        calc.add(a, b, addCallback);
        break;
    // case '-':
    //     ccalc.sub(a, b, addCallback);
    //     break;
}
