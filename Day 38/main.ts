// Task 112: Create Map to store different values

const countries= new Map<string, string>();
countries.set("Pakistan","Islamabad");
countries.set("Japan", "Tokyo");
countries.set("India", "Delhi");
console.log(countries);


// Task 113: check if Map contains key or not

function logCapitalOfCanada(countries:Map<string,string>) {
    if (countries.has("Canada")) {
        console.log(`The Capital of Canada is ${countries.get("Canada")}`)
    }
    else{
        console.log("Canada is not in the list.");
    }
}
logCapitalOfCanada(countries);



// Task 114: Iterating over a Map

const student=  new Map<string,number>();
student.set("Abdul Raheem", 1);
student.set("Abdul Sami",2);
student.set("Abdul Rehman",3);
student.forEach((id, name)=>{
    console.log(`Name: ${name} , ID: ${id}`)
});