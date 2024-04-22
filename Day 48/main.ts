// Task 142: Creating a promise

const helloPromise= new Promise<string>((resolve)=>{
    setTimeout(() => {
        resolve("Hello World!")
    }, 2000);
});
helloPromise.then((message)=>console.log(message));


// Task 143: .then() and .catch()

const conditionalPromise= new Promise<string>((resolve, reject)=>{
    const success= Math.random()>0.5;
    if (success) {
        resolve("Success!");
    }
    else{
        reject(new Error("Failure!"));
    }
});
conditionalPromise.then((result)=>console.log(result));   // Handles successfull resolution
conditionalPromise.catch((error)=>console.log(error.message));  // Handles rejection


// Task 143: .promiseAll()

const promise1= Promise.resolve(3);
const promise2= 42;
const promise3= new Promise<string>((resolve)=>{
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
})