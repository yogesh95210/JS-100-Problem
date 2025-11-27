// #101
//In JS typeof is only operator where we can use any undeclared varible 
console.log(typeof a) // give undefined only

// #102

// if we give refrence len for checking upper limit in for loop.
// inside for loop we pass len to optimize the code bcz on every itration its not good to check length
const data= new Array(10)
let len= data.length
for(let i=0; i<len;i++){
console.log(i)
}

// #103
// evaluation order is left to right
// Execution order:
// sum() → runs → returns 4 → ignored
// sq() → runs → returns 16 → returned
//So x becomes 16.

function sum(){
 return 2+2
}

function sq(){
    return 4*4
}

let x= (sum(),sq()) // by using "," we can evaluate the function
console.log(x) // 16 return karega



//#104

// Given below piece of code 

/*
 const obj= {name: "X"}
 delete obj.name
 obj?.name= "Y"
*/

// Now solve this optional chaing issue. for setting the name key as "Y"

// method 1 --> remove optional chaining 

// const obj= {name: "X"}
// delete obj.name
// obj.name= "Y"
// console.log(obj)

// method 2 --> if condition

const obj= {name: "X"}
delete obj.name  //  if we delete first then obj will be emplty and below in console it will give empty object
if(obj.name){
    obj.name= "Y"
}
console.log(obj)

// #105

//find problem in below question and fix
/*
let lifeSpan= {99:"inpresive"}  // here 99 will convert in string automatically
lifeSpan.100 = "xyz"   // cant give number as key
console.log(lifeSpan)
*/

// to fix

let lifeSpan= {99: "impresive"}
const key= 100
lifeSpan[key]= "xyz"   //   or we can directly pass lifeSpan[100] --> it will work
console.log(lifeSpan)

// #106

const arr= ["ab","cd","ef"]
const str= "abcdef"

const strMatch= str.includes("a")
const arrMatch= arr.includes("a")

console.log({strMatch,arrMatch})

//#107
 // total glitch in below question thats why i say javascript is a fummy language
console.log(false==[]) // ---> false=="" --> 0==0
console.log(false==![]) // ---> false == !(truthy value) --> false== false

//  == calls ToPrimitive → string conversion
//  ! calls ToBoolean → boolean conversion

//#108

console.log(222222222222222222)  // if 18 digit then give us 222222222222222200
console.log(22222222222222222)  // if 17 digit then give us 22222222222222224
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991 (16 digit Max for JS)  // Max EXACT integer = 2^53 - 1 = 9007199254740991

// #109

console.log("first");

(async function() {
    console.log("second")
    const x= await 5
    console.log("third")
})();

console.log("fourth")

//#110

console.log(-0==0)
console.log(-0===0)