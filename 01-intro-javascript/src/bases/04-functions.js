// Normal Functions, arrow functions

// Longer using Function word
const salute = function(name) {
    return `Hello, ${name}.`;
};
// Longer
const salute1 = (name) => {
    return `Hello, ${name}, nice meeting you.`;
};
//  Shorter
const salute2 = (name) => `Hello, ${name} Cato.`;

const salute3 = () => `Hello, world.`;

// Longer
const getUser = () => {
    return {
        id: 1,
        username: "KuroCato",
    };
};
// Shorter
const getUser1 = () => ({
    id: 1,
    username: "KuroCato",
});

// Homework *check*
// Arrow function *check*
// Return implicit object *check*

const getActiveUser = (id, name) => ({
    id: id,
    username: name,
});

console.log(salute("Kuro"));
console.log(salute1("Kuro"));
console.log(salute2("Kuro"));
console.log(salute3());
console.log(getUser());
console.log(getUser1());
console.log(getActiveUser(1, "Kuro"));