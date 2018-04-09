let searchBar = document.getElementById('searchy')

const firstRequest = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load",executeCodeAfterFileLoad);
    myRequest.addEventListener("error",executeThisIfXHRFails);
    myRequest.open("GET","planets.json");
    myRequest.send();
}

const secondRequest = () => {
    let thisRequest = new XMLHttpRequest();
    thisRequest.addEventListener("load", successFunction);
    thisRequest.open("GET",);
    thisRequest.send();
    function successFunction () {
        const 
    }
}

firstRequest();

function executeCodeAfterFileLoad () {
    const data = JSON.parse(this.responseText);
    buildDomString(data.planets);
    addImageEventListener();
    addClickEventListener();
}

function executeThisIfXHRFails () {
    console.log("error");
}  

const buildDomString = (planetArray) => {
    let domString = '';
    planetArray.forEach((planet) => {
        domString += `<div class= "cards">
                        <h2>${planet.name}</h2>
                        <img class="hide images" src="${planet.imageUrl}">
                      </div>`;
        
    })
    printToDom(domString,"main-cards");
}

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
}

// const searchBar = () => {
//     const userInput = document.getElementById('searchy');

// }

const printBigToDom = (strang,divId) => {
    document.getElementById(divId).innerHTML = strang;
}

const bigCardBuilder = (planObject) => {
    let strang = '';
    planObject.forEach((planet) => {
        strang = `<div class="big-card">
                    <img class="hide images" src="${planet.name}</h2>"
                    <h2>${planet.name}</h2>
                    <p>${description}</p>
                    <ul>
                        <li>${isGasPlanet}</li>
                        <li>${numberOfMoons}</li>
                        <li>${nameOfLargestMoons}</li>
                    </ul>
                  </div>`
    })
    printBigToDom(strang);
}

 

const addClickEventListener = () => {
    let planetPics = document.getElementsByClassName('images');
    console.log(planetPics);
    for (i=0; i<planetPics.length; i++){
        planetPics[i].addEventListener('click',showBigCard)
    }
    bigCardBuilder();
};



//frenchButt.addEventListener('click', (e) => {
//const userInput = inputSpot.value.toLowerCase().split(' ');
//let domOutput = '';
//userInput.forEach(word => {


 const showBigCard = (e) => {
     const displayInfo = e.target.classList
     console.log(e);
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