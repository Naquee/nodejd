// console.log("hello")

// const x = require("y") - cjs
const {add, sub, mul, div }=require("./calc")
console.log(add(2,3))
console.log(sub(5,3))
console.log(mul(2,3))
console.log(div(10,2))



const os = require("os")
console.log(os.version())



// const os = require("os")
// console.log(os.cpus())


// const os = require("os")
// console.log(os.cpus().length)


/// to read a file
//  const Read=require("fs")
//  const data=Read.readFileSync("./intro.txt", {encoding:"binary" })
//  console.log(data)

// const xyz=require("fs")
// const data=xyz.readFileSync("./intro.txt", {encoding:"utf-8" })
// console.log(data)


// const fs=require("fs")
// const data=fs.readFileSync("./calc.js", {encoding:"utf-8" })
// console.log(data)

const checkEven=require("is-even")
console.log(checkEven(0))




