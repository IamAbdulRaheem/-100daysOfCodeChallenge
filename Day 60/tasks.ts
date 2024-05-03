// Task 1: is else required
function checkAge(age:number){
    if (age>18) {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkAge(25));
// will function work differently if  (else) is removed
function check_age(age:number){
    if (age>18) {
        return true;
    }
    return false;
}
console.log(check_age(10));  // If we use else or not both give the same output


// Task 2: Rewrite the function using "?" or "OR || "
function CheckAge(age:number){
   return age>18? true:false
}
console.log(CheckAge(20));  // true

function checkAgeWithOR(age:number){
  return age>18 || false;
}
console.log(checkAgeWithOR(10));  // false


// Task 3: function min(a,b)

function min(a:number,b:number){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}
console.log(min(2,5));
console.log(min(3,-1));
console.log(min(1,1));


// Task 4: function power(x,n)
function pow(num1:number, num2:number){
    return num1**num2;
}
console.log(pow(3,2));   // 9
console.log(pow(3,3));   // 27

