## 🔑 What is the use of the keyof keyword in TypeScript?
#### Ans: keyof is a keyword in TypeScript which is used to extract the key type from an object type.
## 📋 Example:
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;

## 📝 Result:
"name" | "age" | "email"


---



## 🔑  Provide an example of using union and intersection types in TypeScript.

### 🔗 Union Types

#### Union types allow a variable to hold more than one type. A variable can be one type or another, but not both at the same time.

## 📋 Example:
let value: string | number;

value = "Hello, TypeScript!"; 
value = 100;                  
value = true;    

### 🔗  intersection  Types

#### Intersection types allow you to combine multiple types into one. A value of an intersection type will have all the properties and methods of the types that are being combined.

## 📋 Example:
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const person: PersonWithAddress = {
  name: "Hablu Miya",
  age: 30,
  street: "123 Main St",
  city: "New York",
};








