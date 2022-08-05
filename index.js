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

import csv from 'csvtojson'
import fs from 'fs'
const csvFilePath = 'task1.csv'

csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
        fs.writeFileSync('task1.txt', JSON.stringify(jsonObj), (err) => {
            if (err) {
                throw err;
            }
        })
    })
    .catch(err => {
        console.log(err);
    })

