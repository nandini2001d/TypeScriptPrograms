

const math = (num1: number, num2: number, operator: String) : string => {

    switch (operator) {
        case "add":
            return `addition is : ${num1 + num2}`;
        case "sub":
            return (num1 - num2).toString();
        case "mul":
            const mul=num1 * num2;
            return mul+"";
        case "div":
            return (num1 % num2).toString();
        default:
            return "Operator Invalid";
    }

}


const main=()=>{
    const output=math(8,8,'add1');
     
   // output = output+12;   => using typescript this is not possible 
     
    console.log('output',output);
}

main();