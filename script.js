const baseURL = 'https://api.giphy.com/v1/gifs/search';
const randomURL = 'https://api.giphy.com/v1/gifs/random';
const randomStickerURL = 'https://api.giphy.com/v1/stickers/random';
const apiKey = 'jGkvhmeGrWFh4XDMnBzj5sjxbasRgVbo';

const displayFetch = document.getElementById('display-fetch');
const displayFetch2 = document.getElementById('display-fetch2');
const displayInfo = document.getElementById('display-Info');
const displayInfo2 = document.getElementById('display-Info2');

const fetchBtn = document.getElementById('button-fetch');
fetchBtn.addEventListener('click', btnClick);

function getGiphy() {
    const url = randomURL + '?api_key=' + apiKey + '&tag=' + 'kawaii';
    const stickUrl = randomStickerURL + '?api_key=' + apiKey + '&tag=' + 'kawaii'; 
    
    Promise.all([
        fetch(url),
        fetch(stickUrl)
    ]) .then (function (result) {
        return Promise.all(result.map(function (result){
            return result.json();
        }));
    }) .then(function (json) {      
            displayGiphy(json);
    }); 
    // .catch(function(error) {
    //     console.log(error);
    // });
}
getGiphy();

function displayGiphy(giphy) {
    // console.log(giphy);

     //clear previous
    displayFetch.innerText = '';
    displayFetch2.innerText = '';
    displayInfo.innerText = '';
    displayInfo2.innerText = '';    
        
    let giphyTitle = document.createElement('h2');
    giphyTitle.innerText = giphy[0].data.title; 
    let giphyTitle2 = document.createElement('h2');
    giphyTitle2.innerText = giphy[1].data.title; 
        
    
    let fetchImg = giphy[0].data.images.fixed_height.url;    
    let img = document.createElement('img');
    img.setAttribute('src', fetchImg);
    
    let fetchImg2 = giphy[1].data.images.fixed_height.url;    
    let img2 = document.createElement('img');
    img2.setAttribute('src', fetchImg2);
    
    let giphyLink = document.createElement('a');
    giphyLink.href = giphy[0].data.bitly_gif_url;
    giphyLink.target = '_blank';
    giphyLink.textContent = 'Favorite';
    
    let giphyLink2 = document.createElement('a');
    giphyLink2.href = giphy[1].data.bitly_gif_url;
    giphyLink2.target = '_blank';
    giphyLink2.textContent = 'Favorite';
    
    displayFetch.appendChild(img);
    displayFetch2.appendChild(img2);
    displayInfo.appendChild(giphyTitle);
    displayInfo2.appendChild(giphyTitle2);
    displayInfo.appendChild(giphyLink);
    displayInfo2.appendChild(giphyLink2);
    
}
function btnClick() {
    getGiphy();
}
