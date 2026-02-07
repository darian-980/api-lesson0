import { API_KEY } from "./keys.js";

function fetchImage(searchTerm = "minecraft") {
    let img = document.getElementById("img_main");
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}=${searchTerm}`)
        .then(response => {
            if (!response.ok) { //checks for bad server responses (even if the response is successful) 
                throw new Error(`HTTP error, status: ${response.status}`);
            }
            return response.json(); //parses it to json so that it can be used in the next .then
        })
        .then(response => {
            console.log(response.data.images.original.url);
            img.src = response.data.images.original.url;
        })
        .catch(error => { //any errors that happen during the .then are caught by the .catch
            console.error("Error fetching a gif from the source:", error);
        });
};

function searchValue() {
    const searchBoxValue = document.getElementById("searchBox")?.value;
    if (searchBoxValue && searchBoxValue.replace(/\s/g, "") !== "") {
        fetchImage(searchBoxValue);
    }
    else {
        fetchImage();
    }
}

const container = document.getElementById("container");

const fetchnewImage = document.getElementById("fetchImage");
fetchnewImage.addEventListener('click', () => {
    searchValue();
    console.log("fetchImage button pressed");
});

/// IIFE run on startup
(() => {
    fetchImage();
})();