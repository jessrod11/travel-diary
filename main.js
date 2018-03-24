console.log('Stix');
const myFaves = [
    {
        location: "Jamaica",
        image: "img/jamaica.jpg",
        description: "Jamaica's food and amazing scenary is why I've added it to my list of faves!"
    },
    {
        location: "New Orleans",
        image: "img/nola.jpg",
        description: "New Orleans is rich with history and has the best food!"
    },
    {
        location: "Dallas, Texas",
        image: "img/dallas.jpg",
        description: "I literally go here every year to attend my favorite artist's birthday concert and visit family!"
    },
    {
        location: "Greece",
        image: "img/greece.jpg",
        description: "I have the Kardashians to thank for my interest in Greece. The rich colors are breathtaking. Let's see if my budget meets my expectation."
    },
    {
        location: "Italy",
        image: "img/italy.jpg",
        description: "My favorite food is Italian. It's only right that I go to Italy and have authentic italian food!"
    },
    {
        location: "Alaska",
        image: "img/alaska.jpg",
        description: "One of my bucket list items is to see the Northern Lights. I would love to go to Alaska to have this experience!" 
    }

];
const printToDom = (domString, divId) => {
    const thingToPrint = document.getElementById(divId);
    thingToPrint.innerHTML += domString;
};

const buildDomString = (faveArray) => {
    let domString = '';
    faveArray.forEach((favorite) => {
    domString += `<div class="card-holder">`;
    domString +=    `<h2>${favorite.location}</h2>`;
    domString +=    `<img src="${favorite.image}">`;
    domString +=    `<p>${favorite.description}</p>`;
    domString +=    `<textarea id="text-field" class= "text-box"></textarea>`;
    domString +=    `<button id= "get-button" class= "card-button">Submit Entry</button>`;
    domString += `</div>`;
    });
    printToDom(domString, "card-container");
};

buildDomString(myFaves);


const grabButtons = document.getElementsByClassName('card-button');
    for(let i=0; i< grabButtons.length; i++){
    grabButtons[i].addEventListener('click', (e) => {
        if (e.target.className === 'card-button'){
            
            };
        });
    };

    const submitEntryDomString = () => {
        const grabText = document.getElementsByClassName('text-box');
        for(let j=0; j< grabText.length; j++){
            grabText[j].addEventListener('keypress', (e)=>{
                let textValue = e.target.value;
                return textValue;
            });
        };
    };