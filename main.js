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
                      </div>`;
        
    })
    printToDom(domString,"main-cards");
}

function executeThisIfXHRFails () {
    console.log("error");
}

function executeCodeAfterFileLoad () {
    const data = JSON.parse(this.responseText);
    buildDomString(data.planets);
}