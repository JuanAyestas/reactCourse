// const getImgPromise = () =>
//     new Promise((resolve, reject) => resolve("https://"));

// getImgPromise().then(console.log);

// const getSite = async() => {
// return "https://www.gamebitcouncil.site";

// };

// getSite().then(console.log);

const getGif = async() => {
    try {
        const apiKey = "6q918Pud4b4Si3GY3k7eCScjIAGACmn9";
        const answer = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await answer.json();

        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
};

getGif();