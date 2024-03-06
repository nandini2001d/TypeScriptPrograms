// transpilling typescript to javascript
//==>over browser is not uderstand the typescript so tsc complier complite typescript to javascript
//arrray in typescript => static typescript
var arr1 = [1, 4, 8];
var arr2 = [2, 'nandini', 9, 'kartik'];
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
var mainFuc = function (_a) {
    var stuName = _a.stuName, stuAge = _a.stuAge, stuAddress = _a.stuAddress, stuData = _a.stuData, stuFunction = _a.stuFunction, collageInterface = _a.collageInterface;
    return "".concat(stuData, " And ").concat(collageInterface);
};
var mainParam = {
    stuName: 'nandini',
    stuAge: 23,
    stuAddress: "nagpur",
    stuData: function () { return 'data'; },
    stuFunction: function (val1, val2) { return 8; },
    collageInterface: {
        rollNo: 1,
        collageName: 'jit',
        collageCity: "nagpur"
    }
};
var output = mainFuc(mainParam);
console.log('output : ', output);
