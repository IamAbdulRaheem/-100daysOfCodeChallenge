    /***********************************
     * TYPE ANNOTATIONS WITH FUNCTIONS *
     ***********************************/ 

    // Function to calculate the area of rectangle
    function calculateRectangleArea(length:number, width:number):number {
        return length*width;
    }    
    const area= calculateRectangleArea(5,3);
    console.log("The area of Rectangle is: ", area);


    /***********************************
     * OPTIONAL AND DEFAULT PARAMETERS *
     ***********************************/ 

    function greetOptional(name:string, age?:number) {
        if(age!==undefined){
            console.log(`Hello ${name}, You are ${age} years old.`)
        }
        else{
            console.log(`Hello ${name}`);
        }
    }
    greetOptional("Abdul Raheem");  // output: Hello Abdul Raheem
    greetOptional("Abdul Raheem", 21); // output: Hello Abdul Raheem, You are 21 years old.


    // Default Parameters
    function greetDefault(name:string, age:number=21) {
        console.log(`Hello ${name}, You are ${age} years old.`)
    }
    greetDefault("Abdul Raheem");  // output: Hello Abdul Raheem, You are 21 years old.
    greetDefault("Abdul Raheem",30);  // output: Hello Abdul Raheem, You are 30 years old.



    /****************************
     * FUNCTION REST PARAMETERS *
     ****************************/ 


    // Function with a rest parameters
    function addAll(...nums:number[]):number {
        let result= 0;
        for(let i=0; i<nums.length; i++){
            result+= nums[i];
        }
        return result;
    }
    // Calling the function with various numbers
    console.log(addAll(10,20,30,40,100,10.5,+true));  // output: 211.5



    /******************
     * ARROW FUNCTION *
     ******************/ 

    const addWithArrow= (num1:number, num2:number):number=> num1+num2;
    console.log(addWithArrow(10,20));   // output: 30



    /**********************
     * ANONYMOUS FUNCTION *
     **********************/ 

    const add= function(num1:number, num2:number):number{
        return num1+num2;
    }
    console.log(add(10,20));   // output: 30


    /******************
     * VOID AND NEVER *
     ******************/ 

    function greet(name:string):void {
        console.log(`Hello ${name}`);
    }
    greet("Abdul Raheem")

    function noReturnValue():void{
        // This function never return a value(implicity returns undefined)
    }
    noReturnValue();


    // never
    function throwError(message:string):never {
        throw new Error(message);
    }
    throwError("Something went Wrong!");

    function infiniteLoop():never {
        while (true) {
            // This function never exit (infinite Loop)
        }
    }