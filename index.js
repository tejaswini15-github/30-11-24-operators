var a=10
var b=2
console.log('$ {a/b}')
console.log(a/b) // 5
console.log(a%b) // 0
console.log(a% b+2) // 2
console.log(b%a *3)
console.log(b++ %a ==0) // false
console.log(b) // 3
console.log(2%3 == b++)+10  // 2+10 = 12
console.log((2%3 == b++)+10)
console.log(0.1+0.2 == 0.3) //false  due to floating point numbers represents in computer , some decimal numbers cannot be represented by exactly in binary   0.1 value 0.00011001100110011 after adding 0.1+0.3 = 0.3000000000000004  not equal to 0.3 false
console.log(0.2+0.5 == 0.7) // true

// true && true   // true
// true && false // false
// false && true // false

console.log(true && true)
console.log(false && false)
console.log(true && false)
console.log(false && true)

//      ==   <=    <>    >=

console.log(10 == "10" && false) // false
console.log(10 >=1 && 1<=10) // true
console.log(3>1 && 10<10) // false

var gender="Female"
var age=21
console.log(gender == "Female" && age >=21) //true
console.log(gender == "female" && age >=21) // false
console.log(gender == "Female" && age < 21) // false
console.log(gender == "female" && age >=21) // false
console.log(gender == "Male" && age >=24) // false
console.log(gender == "MAle" && true) // false

//console.log(gender == "MAle" && true) output should come true

console.log(gender == "MAle"!== true)
console.log(gender == "MAle".toUpperCase() && true)


console.log(0 && 1) // 0
console.log(1 && 1) // 1
console.log(1 && 0)  // 0
console.log(0 && 0)  // 0
console.log("str" && null) // null
console.log(10 && -1) // -1
console.log(true && "0") // 0
console.log("0" && true) // true
console.log("non-empty" && []) // []

var a=10
var b=11
console.log(a == 10 && b++ == 11) // true
console.log(b)  // 12

var a=10
var b=11
console.log(a !=10 && ++b ==12) //  false
console.log(b)  // 11
// in AND left hand side false it does not check right side

console.log(b++ === false && ++a == 11) // false
console.log(b,a) // 12 10

var a=10
var b=11
console.log(b++ !== false && ++a == 11) // true
console.log(b,a) // 12 11

var a=10
var b=11
console.log(a++ ==a && b++ ==a && true) // false b value teminate and be 11 only 
console.log((true && 10 ==10) && true) // true
console.log(a,b) // 11 11


