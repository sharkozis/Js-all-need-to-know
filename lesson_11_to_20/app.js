//les-11-Boolean
var b3 = Boolean(true)
var b4 = Boolean(false)
// console.log(b3,b4);

//les-12-null & undefined
var abc
var xyz = null

// console.log(abc)
// console.log(xyz)

//les-13-conversion of data type
var a = '1000';
var b = 10;
var c = true;
// in here we are going to convert string as a number, number as a string and also boolean as a string with constructor function of js. [note that the color of string defined as white in terminal and rest are define as yellow by default] 

// console.log(Number(a));
// console.log(b.toString());
// console.log(c.toString());

// les-14-hexadecimal & Octal 
var hex = 0xff;
var oct = 0114;
// console.log(hex,oct);
// [note that to make an hex number we need to add 0x before the number and for octal we will have to add 0 before the number]

//les-15-Js Comparison Operator
var l = 10;
var h = 20;
/*
console.log(l == h) // for match both value
console.log(l != h) // for not matching both value 
console.log(l > h ) // for higher value
console.log(l < h ) // for lower value
console.log(l >= h) // greater than or equal
console.log(l <= h) // less than or equal
console.log(l === h) // for checking both value and types of data are same
console.log(l !== h) // for checking both value and types of data are not same

*/
//les-16-statement

var number = 10 + (30/5)*5;
// any workable line or code is define as a statement in js

//les-17-js Math Function
// console.log(Math.E)
// console.log(Math.PI)
var n = 5.2343
// console.log(Math.abs(n))
// console.log(Math.floor(n))
// console.log(Math.ceil(n))
// console.log(Math.round(n))
// console.log(Math.max(200,400,600,800))
// console.log(Math.min(200,300,400))
// console.log(Math.pow(2 , 3))
// console.log(Math.sqrt(9))
// console.log(Math.round(Math.random()*50+1))


//les-18-date function in js

var date = new Date();
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleString())
// console.log(date.getDate())
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())


// function compareValue(a,b){
//     if(typeof a == typeof b){
//         console.log('both same')
//     }
//     else{
//         console.log('both not same')
//     }
// }

// const result = compareValue(11,12)
// console.log(result);




function randCompare(rand,highNum){
    const rand = Math.round(Math.random()*3+1);
    const highNum = 2;
    if(rand > highNum){
        console.log('rand is bigger')
    }
    else{
        console.log('highNum is bigger')
    }

    return randCompare;
}



