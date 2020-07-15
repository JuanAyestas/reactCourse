const apiKey = "6q918Pud4b4Si3GY3k7eCScjIAGACmn9";

const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
    .then((answer) => answer.json())
    // console.log(answer);
    .then(({ data }) => {
        // console.log(data.images.original.url);
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);