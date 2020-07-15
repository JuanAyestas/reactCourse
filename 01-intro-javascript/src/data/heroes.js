// How to do a default export
// export default []

export const heroes = [{
        id: 1,
        name: "Batman",
        owner: "DC",
    },
    {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
    },
    {
        id: 3,
        name: "Superman",
        owner: "DC",
    },
    {
        id: 4,
        name: "Flash",
        owner: "DC",
    },
    {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
    },
];

// export default heroes;

export const owners = ["DC", "Marvel"];
// Export more than one object at once
// export { heroes, owners };

// Export one as default
// export { heroes as default, owners };