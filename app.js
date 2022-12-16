function minusFive(potato) {
    console.log(potato - 5);
}

minusFive(5, 1, 2, 3, 4, 6, 8, 9);
// the brwoser takes only the first one of arguments

const calc = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    power: function(a, b) {
        console.log(a**b);
    },
}

calc.minus(5, 1);
calc.add(5, 1);
calc.divide(5, 1);
calc.power(5, 1);