// Set constant variable
const myAge = 47

// set variable earlyYears to 2 - this variable will change value
var earlyYears = 2

// earlyYears *10.5
earlyYears *= 10.5

// with earlyYears accounted for reduce the myAge by 2 - new variable laterYears

var laterYears = myAge - 2

// in one step multiply compute laterYears *4

laterYears *= 4

// sum earlyYears and laterYears as myAgeInDogYears

const myAgeInDogYears = earlyYears + laterYears

//name added as string, call built-in method .toLowerCase

var string = 'Joe'

var myName = string.toLowerCase()

// added sentence and replace with appropriate variables. myName is lower case intentionally.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
