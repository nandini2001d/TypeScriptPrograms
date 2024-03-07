"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentData = void 0;
var studentAddress_1 = require("./studentAddress");
var studentCollage_1 = require("./studentCollage");
exports.studentData = [
    {
        studentid: 1,
        studentName: "nandini",
        studentCollage: (0, studentCollage_1.collageFun)({ CollageId: 1, CollageName: "JIT", CollageCity: "Nagpur" }),
        studentAddress: (0, studentAddress_1.addressFunc)({ AddressId: 1, studentCity: "nagpur", studentPincode: 5678 })
    },
    {
        studentid: 2,
        studentName: "Akrtiti",
        studentCollage: (0, studentCollage_1.collageFun)({ CollageId: 2, CollageName: "KDK", CollageCity: "Nagpur" }),
        studentAddress: (0, studentAddress_1.addressFunc)({ AddressId: 2, studentCity: "pune", studentPincode: 7235 })
    },
    {
        studentid: 3,
        studentName: "Tripti",
        studentCollage: (0, studentCollage_1.collageFun)({ CollageId: 3, CollageName: "NIT", CollageCity: "Nagpur" }),
        studentAddress: (0, studentAddress_1.addressFunc)({ AddressId: 3, studentCity: "Akola", studentPincode: 2345 })
    },
    {
        studentid: 4,
        studentName: "Sruti",
        studentCollage: (0, studentCollage_1.collageFun)({ CollageId: 4, CollageName: "JDK", CollageCity: "Nagpur" }),
        studentAddress: (0, studentAddress_1.addressFunc)({ AddressId: 4, studentCity: "Amravti", studentPincode: 5668 })
    }
];
var get = function (id) {
    exports.studentData.map(function (value) {
        if (value.studentid === id) {
            console.log(value);
        }
    });
};
get(1);
//........................................................................................
//nodemon => using this it restart automatically when we make changes then save the file
//nodemon works in javascript 
//for install npm i nodmon -g  => command 
//imp
//in the package.jeson => we can edit as per we required command using npm
// "scripts": {
//     "start": "nodmon index.js";
//   },
