const baseURL = 'https://api.giphy.com/v1/gifs/search';
const randomURL = 'https://api.giphy.com/v1/gifs/random';
const randomStickerURL = 'https://api.giphy.com/v1/stickers/random';
const apiKey = 'jGkvhmeGrWFh4XDMnBzj5sjxbasRgVbo';

const fetchBtn = document.getElementById('button-fetch');
    fetchBtn.addEventListener('click', btnClick);

function getGiphy() {
    const url = randomURL + '?api_key=' + apiKey + '&tag=' + 'kawaii';
    // const url = `${randomURL}?api_key=${apiKey}`;
    // const url = `${randomStickerURL}?api_key=${apiKey}`;

    fetch(url)
    .then(function(result) {
        return result.json();
    }) .then(function(json) {        
        displayGiphy(json);            
    });        
}
getGiphy();

function displayGiphy(giphy) {
    console.log(giphy);

    let displayFetch = document.getElementById('display-fetch');
    displayFetch.innerText = ''; //clear previous
        
    let giphyTitle = document.createElement('h2');
    giphyTitle.innerText = giphy.data.title; 
    
    // let username = document.createElement('h3');
    // username.innerText = 'Creator: ' + giphy.data.username;
    // if (!username.length) {
    //     console.log('No creator name found!');
    // } 
    let giphyLink = document.createElement('a');
    giphyLink.innerText = giphy.data.bitly_gif_url;

    let fetchImg = giphy.data.images.fixed_height.url;    
    let img = document.createElement('img');
    img.setAttribute('src', fetchImg);    
        
    displayFetch.appendChild(img);
    displayFetch.appendChild(giphyTitle);
    // displayFetch.appendChild(username);

    
}
function btnClick() {
    getGiphy();
}
