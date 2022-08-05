"use strict";

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// });
//
// const reverseString =(str) => {
//     return str.split("").reverse().join("");
// }
//
// rl.on('line', function(line){
//     console.log(reverseString(line));
// })
const csvFilePath = 'task1.csv';
(0, _csvtojson.default)().fromFile(csvFilePath).then(jsonObj => {
  console.log(jsonObj);

  _fs.default.writeFileSync('task1.txt', JSON.stringify(jsonObj), err => {
    if (err) {
      throw err;
    }
  });
}).catch(err => {
  console.log(err);
});