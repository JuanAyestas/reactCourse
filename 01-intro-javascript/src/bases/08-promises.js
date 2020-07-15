import { getHeroByID } from "./07-export-example";

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const hero = getHeroByID(2);
//         resolve(hero);
//         // reject("Couldn't find the hero.");
//     }, 2000);
// });

// // promise.then is when it's done
// // promise.catch is when it failed
// // promise.finally after whatever method happened

// promise
//     .then((hero) => {
//         console.log("Hero: ", hero);
//     })
//     .catch((err) => console.warn(err));

const getHeroByIDAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroByID(id);
            // console.log(hero);
            if (hero) {
                resolve(hero);
            } else {
                reject("Couldn't find the hero.");
            }
        }, 2000);
    });
};

getHeroByIDAsync(1)
    // .then((hero) => console.log("Hero:", hero))
    .then(console.log)
    // .catch((error) => console.warn(error));
    .catch(console.warn);