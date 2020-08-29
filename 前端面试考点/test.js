// let a = [1,2,3]
// let b = {c:1}
// let d = 0.1 + 0.2

// console.log(d)
// console.log(Array.prototype.isPrototypeOf(a))
// console.log(Object.prototype.toString.apply(b) === '[object Object]' )

// let num = new Number('123')
// console.log(num.valueOf()) // 123
// let str = new String('12df')
// console.log(str.valueOf()) // 12df
// let bool = new Boolean('f123')
// console.log(bool.valueOf()) // true

// let dt = new Date()
// console.log(dt.valueOf())

// console.log(Boolean.prototype.hasOwnProperty('toString')); // true

let num = new Number('123df')
console.log(num.toString())

let bool = new Boolean('')
let obj = new Object({})
console.log(bool.toString())
console.log(obj.toString())
console.log(Math.toString())
console.log(1+NaN)
console.log('abc'>'aab')