// // // Task 58: Average Score calculator

// // // let score: number[]=[50,56,35,20,25,96,77,4,51,110];
// // // let averageScore= score.reduce((score,number)=> score+number,0)/ score.length
// // // console.log("The average score of the player is:", averageScore);

// // // We will do the same task by using function

// // function averageScore(...score:number[]):number {
// //     let total= score.reduce((num,sum)=> num+sum,0);
// //     return total/score.length;
// // }
// // console.log("The average score is:",averageScore(50,56,35,20,25,96,77,4,51,110));


// // // Task 59: Add a special Number

// // function addNumber(valueToAdd:number):(number)=>number {
// //     return function(number:number):number {
// //         return number+valueToAdd
// //     }
// // }
// // let addFive= addNumber(5);
// // console.log(addFive(10));



// // // Task 60: Self Running User Profile

// // let userProfile= (function(){
// //     let name= "Abdul Raheem";
// //     let age = 21;
// //     return{
// //         displayInfo:function(){
// //             console.log(`name: ${name}, age: ${age}`);
// //         }
// //     }
// // })();
// // userProfile.displayInfo();


// // Task 58: Calculate Average Score
// function averageScore(...score:number[]):number {
//     let total= score.reduce((num,sum)=> num+sum,0);
//     return total/ score.length;
// }
// console.log("The Average Score is:",averageScore(50,56,35,20,25,96,77,4,51,110));

// // Task 59: Add a Special Number
// function addNumber(valueToAdd:number):(number)=>number {
//     return function(number:number):number{
//         return number+ valueToAdd;
//     }
// }
// let addFive= addNumber(5);
// console.log(addFive(10));



// Task 60: Self Running User Profile

let userProfile= (function(){
    let name= "Abdul Raheem";
    let age = 21;
    return{
        displayInfo: function(){
            console.log(`name: ${name}, age: ${age}`);
        }
    }
})();
userProfile.displayInfo();