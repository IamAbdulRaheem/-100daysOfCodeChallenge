    /********************
     * TYPE ANNOTATIONS *
     ********************/ 

    let myNumberExOne:number= 42;
    let myStringExOne:string= "Hello, TypeScript";
    console.log("My number is: ", myNumberExOne);
    console.log("My string is: ", myStringExOne);


// Another way to write this code is as follows

    let myNumberExTwo:number;
    let myStringExTwo:string;

    myNumberExTwo= 42;
    myStringExTwo= "Hello, TypeScript";
    console.log("My number is: ", myNumberExTwo);
    console.log("My string is: ", myStringExTwo);



    /******************************
     * DYNAMIC TYPE DETERMINATION *
     ******************************/ 

    let greeting= "Hello, World!";
    console.log(greeting);




    /************
     * ANY TYPE *
     ************/ 

    let myVariable:any= 42;
    myVariable= "Hello, TypeScript";
    console.log(myVariable);
