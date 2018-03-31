const startApp = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load",executeCodeAfterFileLoad);
    myRequest.addEventListener("error",executeThisIfXHRFails);
    myRequest.open("GET","planets.json");
    myRequest.send();
}

startApp();

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
}

const buildDomString = (planetArray) => {
    let domString = '';
    planetArray.forEach((planet) => {
        domString += `<div class= "cards">
                        <h2>${planet.name}</h2>
                        <img class="hide" src="${planet.imageUrl}">
                      </div>`;
        
    })
    printToDom(domString,"main-cards");
}

const buildSearchBar = () => {

}

function executeThisIfXHRFails () {
    console.log("error");
}   

function executeCodeAfterFileLoad () {
    const data = JSON.parse(this.responseText);
    buildDomString(data.planets);
    addImageEventListener();
}


const addImageEventListener = () => {
    const imageHover = document.getElementsByClassName('cards');
    for (let i=0; i<imageHover.length; i++) {
        imageHover[i].addEventListener('mouseenter',showImage);
        imageHover[i].addEventListener('mouseleave',hideImage);
    }   
}

const showImage = (e) => {
    const displayImage = e.target.children[1];
        displayImage.classList.remove('hide');
    const displayName = e.target.children[0];
        displayName.classList.add('hide');
}

const hideImage = (e) => {
    const displayImage = e.target.children[1];
    displayImage.classList.add('hide');
const displayName = e.target.children[0];
    displayName.classList.remove('hide');
}