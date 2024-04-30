// => Type Conversions

// 1:String Conversion

// Converting boolean to string
let value= true;
console.log(typeof value);  // boolean
let valueConverted=String(value);  // converted to string
console.log(typeof valueConverted);  // string


// 2: Number Conversion

// Converting string to number
let str= "123";
console.log(typeof str);  // string
let number= Number(str);  // converted to number
console.log(typeof number);  // number

// Another example where string have no numbers in it and it show error
let age= Number("an arbitrary string insted of number");
console.log(age)   // NaN, conversion failed

// Convertng null to number
let nullToNumber= Number(null);  // null is converted to number
console.log(nullToNumber);  // output 0


// Converting undefined to number
let undefinedToNumber= Number(undefined);  // undefined is converted to number
console.log(undefinedToNumber)  // output NaN


// Converting boolean to number
let booleanToNumber= Number(true)  // boolean converted to number
console.log(booleanToNumber)   // output 1 in case of false it gives 0


// 3: Boolean Conversion: It give false for (null, undefined, 0, empty string and NaN) and true for all other values

let strToBoolean= Boolean("");  // converted to boolean
console.log(strToBoolean)   // output false becasue string is empty

let numToBoolean= Boolean(10);  // number converted to boolean
console.log(numToBoolean);  // output true and it will be false if we put 0

let undefinedToBoolean= Boolean(undefined) // undefined converted to boolean
console.log(undefinedToBoolean);  // output false




// => Operators: +, -, *, /, %, **

// Kinds

// 1: unary operator: They have single operand
let x=1;
x+= x;  // Here + is operator and 1 is operand
console.log(x);  // output 2


// 2: binary operator: They have two operand
let a= 1;
let b= 2;
console.log(a+b);


// 1: Remainder % : it is remainder of integar division of number1 by number2 
console.log(5%2)  // output 1
console.log(8%3)  // output 2


// 2: Exponention **: The exponention is a**b means a raises to the power of b
console.log(2**2)  // output 4
console.log(2**4)  // output 16
console.log(4** (1/2))  // output 2


// 3: String concatination with binary +
let string= "my" + "string";
console.log(string);  // it is concatinated and result is "mystring"


// other examples of string with numbers

console.log("1"+1)  // output 11 because string + number= string
console.log(2+2+"1") // output 2 + 2= 4 + "1"= 41
console.log("1"+2+2)  //output "1" + 2 = "12" + 2 = 122
// console.log('6' / '2')  Error because + support string in such a way 


// converting non-number operand into a number format by a shorter way
console.log(+true)  // output 1
console.log(+"")   // output 0
let apple= "2";
let oranges= "3";
console.log(+apple + +oranges)  // output 5 because it is converted to a number
console.log(Number(apple) + Number(oranges))  // longer variant with same output



// 4: Operator precedence: The operator with higher precedence executes first
console.log(2+1*2);  // output 4 because * have higher precedence than +
console.log((2+1)*2);  // output 6 because () have higher precedence than *



// 5: Assignment= return a value
let num1= 2;
let num2= 3;
let c= 3-(num1= num2 +1);
console.log(num1);  // output 4 
console.log(c)   // output -1
// code writing like that is not recommendable because it do not make code readable and cleaner


// 6: Chaining Assignments
a=b=c=2+2  // output 4 


// 7: Modify in place
let n= 2;
n+= 5;
n*= 2;
console.log(n)

// such operators have same precedent as normal assignments
let numm= 2;
numm*= 3+5;  // output 16 first 3+5 and than 8*2= 16


// 8: Increment / Decrement
let counter= 2;
counter++;  // work same as counter = counter+1 but it is shorter method
console.log(counter); // output 3
// 5++ Error: it can only be applied to a variable but not value 


// Post fix and pre fix
let count= 1;
let prefix= ++count;
console.log(prefix);  // 2  it returns the new value

let counte= 1;
let postFix= counte++;
console.log(postFix);  // 1 it returns the old value (prior to increment)

let counters= 0;
counters++;
++counters;
console.log(counters);  // 2


// 9: BitWise Operators: mostly used in cryptography
// AND( & )
// OR( | )
// XOR ( ^ )
// NOT ( ! )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL-RIGHT-SHIFT ( >>> )




