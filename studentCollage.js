"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collageFun = void 0;
var studentData_1 = require("./studentData");
var collageFun = function (_a) {
    var CollageId = _a.CollageId, CollageName = _a.CollageName, CollageCity = _a.CollageCity;
    return "{ CollageId : ".concat(CollageId, " ,  CollageName : ").concat(CollageName, " , CollageCity : ").concat(CollageCity, "}");
};
exports.collageFun = collageFun;
// const m={
//     studentData:studentData
// }
var fun = function (id) {
    studentData_1.studentData.map(function (value) {
        if (id === exports.collageFun.arguments) {
            console.log(value);
        }
    });
};
fun(2);
