// Manual type
// import { heroes } from "./data/heroes";
//using the IMP snippet
// import { heroes } from "./data/heroes";
// const { heroes, owners } = require("../data/heroes");
const { heroes } = require("../data/heroes");

// console.log(heroes);
// console.log(owners);

// Find
const getHeroByID = (id) => heroes.find((hero) => hero.id === id);

// console.log(getHeroByID(2));

// Filter
const getHeroesByOwner = (owner) =>
    heroes.filter((hero) => hero.owner === owner);

// console.log(getHeroesByOwner("DC"));

export { getHeroByID, getHeroesByOwner };