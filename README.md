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


