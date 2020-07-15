const characters = ["Goku", "Vegeta", "Trunks"];
// FN F2 plus
const [p1] = characters;
console.log(p1);

const [, p2] = characters;
console.log(p2);

const [, , p3] = characters;
console.log(p3);

const returnArray = () => {
    return ["ABC", 123];
};

const [words, numbers] = returnArray();
console.log(words, numbers);

// Homework
// 1st position will be called name
// 2nd will be called setName

const useState = (name) => {
    return [
        name,
        () => {
            console.log("Hello, " + name);
        },
    ];
};

const [name, setName] = useState("Juan");
console.log(name);
setName();