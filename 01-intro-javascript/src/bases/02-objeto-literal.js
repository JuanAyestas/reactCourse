// Objects and how to copy the structure of another object

const person = {
    name: "Kuro",
    lastName: "Cato",
    age: 20,
    address: {
        city: "Danli",
        zip: 13201,
    },
};

console.log({ person });

const person1 = {...person };
person1.name = "Cato";
person1.lastName = "Kuro";

console.log({ person });

console.log({ person1 });