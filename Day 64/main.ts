    /*********************************
     * TYPE ANNOTATIONS WITH OBJECTS *
     *********************************/ 

    let personExOne:{
        name:string;
        age:number;
        jobTitle?: string;
        adress:{
            street:string;
            city: string;
        }
    }

    personExOne={
        name: "Abdul Raheem",
        age: 21,
        jobTitle: "Developer",
        adress:{
            street: "123 main st",
            city: "Karachi"
        }
    }


    // And There is also another method

    let personExTwo:{
        name:string;
        age:number;
        jobTitle?: string;
        adress:{
            street:string;
            city: string;
        }
    }={
        name: "Abdul Raheem",
        age: 21,
        jobTitle: "Developer",
        adress:{
            street: "123 main st",
            city: "Karachi"
        }
    }

    console.log(personExOne);
    console.log(personExTwo);