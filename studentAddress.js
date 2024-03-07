"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressFunc = void 0;
var addressFunc = function (_a) {
    var AddressId = _a.AddressId, studentCity = _a.studentCity, studentPincode = _a.studentPincode;
    return "{ Addressid : ".concat(AddressId, ", studentCity : ").concat(studentCity, " , studentPincode : ").concat(studentPincode, "}");
};
exports.addressFunc = addressFunc;
//--------------------------complicated way -----------------//
//      for(const key in studentData){
//         if(id === studentData[key].studentid ){
//                     for(const key2 in  studentData[key]) {
//                         for(const key1 in studentAddress){
//                             if (aid=== studentAddress[key1].Addressid) {
//                         for(const key3 in studentAddress[key1]){
//                          studentData[key].studentAddress=(studentAddress[key1])[key3];
//                         }
//                         const element =  (studentData[key])[key2];
//                         console.log(element);
//                         }
//         }
//     }
