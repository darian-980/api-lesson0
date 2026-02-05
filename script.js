import {API_KEY} from "./keys.js";

function fetchImage(searchTerm = "minecraft") {
    let img = document.getElementById("img_main");
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}=${searchTerm}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response.data.images.original.url);
            img.src = response.data.images.original.url;
        });
};

function searchValue(){
    const searchBoxValue = document.getElementById("searchBox")?.value;
    if (searchBoxValue && searchBoxValue.replace(/\s/g, "") !== "") {
        fetchImage(searchBoxValue);
    }
    else{
        fetchImage();
    }
}

const container = document.getElementById("container");

const fetchnewImage = document.getElementById("fetchImage");
fetchnewImage.textContent = "fetch image";
fetchnewImage.addEventListener('click', () => {
    searchValue();
    console.log("fetchImage button pressed");
});

container.appendChild(fetchnewImage);

/// run on startup
fetchImage();


