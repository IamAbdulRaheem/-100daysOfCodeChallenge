// Task 148: .setTimeOut()
setTimeout(function () {
    console.log("This messege is shown after the delay of 2 seconds");
}, 2000);
// Task 149: Event Loop 
console.log("Start");
setTimeout(function () {
    console.log("Call back executed"); // This gets queued to be executed by event loop
}, 0);
console.log("End");
// Although timeout is 0 but "Call back executed" is logged after "End" due to event loop.
// Task 150: Difference b/w asynchronous callbacks and synchronous execution
// Synchronous Execution
console.log("Before synchronous operation");
for (var index = 0; index < 1e9; index++) { }
console.log("After Synchronous operation");
// Asynchronous operation
console.log("Before asynchronous operation");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation");
