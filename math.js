var math = function (num1, num2, operator) {
    switch (operator) {
        case "add":
            return "addition is : ".concat(num1 + num2);
        case "sub":
            return (num1 - num2).toString();
        case "mul":
            var mul = num1 * num2;
            return mul + "";
        case "div":
            return (num1 % num2).toString();
        default:
            return "Operator Invalid";
    }
};
var main = function () {
    var output = math(8, 8, 'add1');
    console.log('output', output);
};
main();
