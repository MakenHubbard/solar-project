
const firstRequest = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeCodeAfterFileLoad);
    myRequest.addEventListener("error", executeThisIfXHRFails);
    myRequest.open("GET", "planets.json");
    myRequest.send();
}

firstRequest();

function executeCodeAfterFileLoad() {
    const data = JSON.parse(this.responseText);
    buildDomString(data.planets);
    addImageEventListener();
    addClickEventListener();
}

function executeThisIfXHRFails() {
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
    printToDom(domString, "main-cards");
}

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
}

const searchBar = () => {
     const userInput = document.getElementById('searchy');
     const planetName = e.target.parentNode.children[0].innerHTML
    let thisRequest = new XMLHttpRequest();
    thisRequest.addEventListener("load", successFunction);
    thisRequest.open("GET", 'planets.json' );
    thisRequest.send();
    console.log(successFunction);
    function successFunction () {
        const searchArray = JSON.parse(this.responseText).planets; 
        console.log(searchArray);
        for ( let i=0; i<searchArray.length; i++) {
            if (userInput.value === planetName){
                userInput.value.push(searchArray);
                // console.log(searchArray);
            } 
        }
    }
}

const clickButtListener = () => {
   const thearch = document.getElementById('searchButt');
   console.log(thearch);
   thearch.addEventListener('click', );
   console.log();
}

const bigCardBuilder = (planet) => {
    let strang = '';
        strang = `<div class="big-card">
                    <button id="close-out">X</button>
                    <img class="hide images" src="${planet.imageUrl}">
                    <h2>${planet.name}</h2>
                    <p>${planet.description}</p>
                    <ul>
                        <li>${planet.isGasPlanet}</li>
                        <li>${planet.numberOfMoons}</li>
                        <li>${planet.nameOfLargestMoon}</li>
                    </ul>
                  </div>`
    printToDom(strang, "main-cards");
    closeOutListener();
}

const closeOutListener = () => {
   const ex = document.getElementById("close-out");
   ex.addEventListener('click', clicky);
}

const clicky = () => {
    firstRequest();
}

const addClickEventListener = () => {
    let planetPics = document.getElementsByClassName('images');
   // console.log(planetPics);
    for (i = 0; i < planetPics.length; i++) {
        planetPics[i].addEventListener('click', showBigCard)
    }
};

const showBigCard = (e) => {
    const planetName = e.target.parentNode.children[0].innerHTML
    let thisRequest = new XMLHttpRequest();
    thisRequest.addEventListener("load", successFunction);
    thisRequest.open("GET", 'planets.json' );
    thisRequest.send();
    function successFunction () {
        const data = JSON.parse(this.responseText).planets;
        for ( let i=0; i<data.length; i++) {
            if (data[i].name === planetName){
                bigCardBuilder(data[i]);
            } 
        }
    }
}


const addImageEventListener = () => {
    const imageHover = document.getElementsByClassName('cards');
    for (let i = 0; i < imageHover.length; i++) {
        imageHover[i].addEventListener('mouseenter', showImage);
        imageHover[i].addEventListener('mouseleave', hideImage);
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