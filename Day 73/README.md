**Day-73 of 100-Days-Of-Code Challenge**

**Day-73 Task:**

Learn about TypeScript type assertions by using the following guide and coding along with the examples provided in it:

**Type Assertions in TypeScript**
<hr style= "border: 5px solid black; border-radius:5px;">

**Type Assertions**
---
Type assertions in TypeScript are a way to explicitly inform the TypeScript compiler about the expected type of a value, even when the compiler cannot determine it with certainty. They are useful when you, as a developer, have more knowledge about the data types than TypeScript can infer, especially in scenarios where you're working with non-TypeScript code or dynamically retrieved data.

Here's an explanation of the provided example:
```typescript
let data: any = 1000;

// Type assertion to treat "data" as a string
console.log((data as string).repeat(3));
```
Explanation:

1.We then have a variable **data** of type **any**, which allows it to hold values of any type. We attempt to perform a type assertion **(data as string)** to treat data as a string. In this case, we're telling TypeScript to trust that **data** is a string, even though it's initially assigned a numeric value.

2.Finally, we use the **repeat** method on **(data as string)** to repeat the string three times and log the result. Note that this is an example of using type assertion to handle dynamic data when the type is uncertain, but it should be used with caution to ensure that the data matches the asserted type at runtime.