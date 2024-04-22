// Task 136: console.log() to debug and track value of variable

for (let index = 0; index < 4; index++) {
   console.log(`Iteration ${index}, i value:, i`);
}


// Task 137: Implementing try-catch block

try {
    throw new Error("Something went wrong!!!")
} catch (error) {
    console.log(error.message)
}

// Task 138: BreakPoints in browser developer tools

console.log("Before Breakpoint");
// set the break point on the following line using your browser developer tools
console.log("This line has a break point set on it in the browser developer tools");
console.log("After BreakPoint");