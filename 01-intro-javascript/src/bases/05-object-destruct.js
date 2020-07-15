// Destructuring assignment

const person = {
    name: "Kuro",
    age: 20 + " years old",
    username: "KuroCato",
    password: "randomhash",
    codeName: "Juan",
};

const { name, age, username, password } = person;
console.log(name);
console.log(age);
console.log(username);
console.log(password);
// Let's you rename the variable, similar to Python's Import as <placeholder>
const { name: name1 } = person;
console.log(name1);

// Returns the whole object
const returnUser = (user) => {
    console.log(user);
};

returnUser(person);

// Returns the values
const returnUser2 = (user) => {
    const { name, age, username, password } = user;
    console.log(name, age, username, password);
};

returnUser2(person);

// Returns just the needed and specified values, and you can add new properties and defaults
const returnUser3 = ({
    name = "Fulano",
    age = 25,
    username = "Fulano_de_Tal",
    password = "other random hash",
    range = "Some range",
}) => {
    console.log(name, age, username, password, range);
};

returnUser3(person);

// To just choose pieces of that object
const useContext = ({ name, age, username, password, range, codeName }) => {
    return {
        codename: codeName,
        edad: age,
        latitude: {
            lat: 123.1231,
            lng: 112.2323,
        },
    };
};

const {
    codename,
    edad,
    latitude: { lat, lng },
} = useContext(person);
console.log("They're known as " + codename, edad);
console.log("The lat is " + lat, lng);

// const getContext = ({ codename, age }) => {
//     return {
//         codename,
//         age,
//     };
// };
// const info = getContext(context);
// console.log(info);