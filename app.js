const calc = {
    plus: function(a, b){
        return a + b
    },
    minus: function(a, b){
        return a - b
    },
    times: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    },
    power: function(a, b){
        return a ** b
    },
};

const plusResult = calc.plus(3, 5);
const minusResult = calc.minus(plusResult, 6);
console.log(minusResult)