//if condition

var high = 100
var low = 20
if(high>low){
    // console.log('high is high')
}

// else condition

var high = 25
var low = 20
if(high<low){
    // console.log('high is low')
}else{
    // console.log('high is high')
}


//else if
var high = 100
var mid = 760
var low = 20
if(high > mid && high > low){
    // console.log('high is high')
}
else if(mid > high && mid > low){
    // console.log('mid is high')
}
else{
    // console.log('low is high')
}

// switch case

var date = new Date()
var today = date.getDay()
switch(today){
   
    case 0:
        // console.log('today is sunday')
    break
    case 1:
        // console.log('today is monday')
    break
    case 2:
        // console.log('today is tuesday')
    break
    case 3:
        // console.log('today is wednesday')
    break
    case 4:
        // console.log('today is thursday')
    break
    case 5:
        // console.log('today is friday')
    break
    case 6:
        // console.log('today is saturday')
    break
    // default:console.log('not a valid input')
}

//logical operator

var x = 100
var y = 30
var z = 20

if(x > y && x > z ){
    // console.log('x is greater than all number')
}

if(y > x || y > z){
    // console.log('y is greater than any one of them')
}
if(x!=y){
    // console.log('not equal')
}

//ternary operator
const n = 10;
const result = n % 2 === 0 ? 'Even' : 'Odd'
// so here basically the thing is condition first. then if condition is true then print even and if condition is false than print odd. its an and operator
// console.log(result)

// Or shorthand 
const myName = ''
const fullName = myName || 'iqqi'
// here the thing is true and false. as we know that an empty string is considered as a false. so here we are checking or operator. so if name true then print myName either name false than print iqqi
console.log(fullName)

// and shorthand

const isOk = true;
// as we know that the and operator give output when the result is absolute true.so as we keep the variable value as true thats why its returned true and printed our expected code
isOk && console.log('everything is ok')