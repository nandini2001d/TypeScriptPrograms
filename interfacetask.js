//4 operation add, sub, mul,div
//all should be 2 param and one return
//there should be 2 string variables
//there should be 2 number variables
var mainFunc = function (_a) {
    var string1 = _a.string1, string2 = _a.string2, num1 = _a.num1, num2 = _a.num2, add = _a.add, sub = _a.sub, mul = _a.mul, div = _a.div;
    return "concanite = ".concat(string1 + string2 + num1 + num2, " add = ").concat(add(7, 9));
};
var mainparams = {
    string1: '',
    string2: '',
    num1: 0,
    num2: 0,
    add: function (val1, val2) { return val1 + val2; },
    sub: function (val1, val2) { return val1 - val2; },
    mul: function (val1, val2) { return val1 * val2; },
    div: function (val1, val2) { return val1 / val2; }
};
var value = mainFunc(mainparams);
console.log(value);
