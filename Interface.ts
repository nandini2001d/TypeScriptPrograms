 
 // transpilling typescript to javascript
 //==>over browser is not uderstand the typescript so tsc complier complite typescript to javascript

 interface collageInterface{

    rollNo:number,
    collageName:String,
    collageCity:string

 }

 
 interface studentInterface{

    stuName:string,
    stuAge:number,
    stuAddress:string,

    stuData:()=>string
    
    stuFunction:(val1:number,val2:number)=>number

    collageInterface:collageInterface

 }


 //arrray in typescript => static typescript
 const arr1:number[]=[1,4,8];
 const arr2:(number|string)[]=[2,'nandini',9,'kartik'];


//  class student implements studentInterface{

//      stuName="nandini";
//      stuAge=23;
//      stuAddress= "nagpur";
//      stuData=() => `${this.stuName} ${this.stuAge}`;
//      collageInterface: collageInterface={
//          rollNo:1,
//          collageName: 'jit',
//          collageCity: "nagpur"
//      }
//      stuFunction=(val1: number, val2: number) => {return 12};
    
//  }

//  const stuobj=new student;
//  console.log(stuobj.collageInterface);



//instend of class we used the function 


const mainFuc=({
    stuName,
    stuAge,
    stuAddress,
    stuData,
    stuFunction,
    collageInterface
}:studentInterface)=>{
       
       return `${stuData} And ${collageInterface}`;
}

const mainParam={
    
    stuName:'nandini',
    stuAge:23,
    stuAddress:"nagpur",
    stuData:()=>{return'data'},
    stuFunction:(val1:number,val2:number)=>{return 8},
    collageInterface:{
        rollNo:1,
        collageName: 'jit',
        collageCity: "nagpur"
    }
};

const output=mainFuc(mainParam);
console.log('output : ',output)