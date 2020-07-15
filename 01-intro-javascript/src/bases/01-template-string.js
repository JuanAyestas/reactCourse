// Template String with `

const name = "Kuro";
const lastName = "Cato";

const fullName = `
${name} 
${lastName}
${1 + 1}
`;

console.log(fullName);

function getSalute(name) {
    return "Hello, " + name;
}

console.log(`This is some text ${getSalute("Kuro")}`);