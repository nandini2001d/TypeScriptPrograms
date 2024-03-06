
//4 operation add, sub, mul,div
//all should be 2 param and one return
//there should be 2 string variables
//there should be 2 number variables


interface mathFunc{
    string1:string,
    string2:string,
    num1:number,
    num2:number,
    add:(val1:number,val2:number)=>number,
    sub:(val1:number,val2:number)=>number,
    mul:(val1:number,val2:number)=>number,
    div:(val1:number,val2:number)=>number,
}


const mainFunc=(
    {
          string1,
          string2,
          num1,
          num2,
          add,
          sub,
          mul,
          div
    }:mathFunc
)=>{
    return `concanite = ${string1+string2+num1+num2} add function = ${add(7,9)}`;
}


const mainparams={

    string1:'',
    string2:'',
    num1:0,
    num2:0,
    add:(val1:number,val2:number)=>{return val1+val2},
    sub:(val1:number,val2:number)=>{return val1-val2},
    mul:(val1:number,val2:number)=>{return val1*val2},
    div:(val1:number,val2:number)=>{return val1/val2}
}

const value=mainFunc(mainparams);
console.log(value);