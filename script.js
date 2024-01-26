const cardContainer = document.getElementById("cardContainer");
const imageFilenames = [
    "ford_ranger", 
    "ford_ranger2", 
    "xplode_alpine", 
    "saved_by_grace",
    "cross_fight_battle", 
    "hoonigan",  
    "TRD_fire",
    "keep_silent", 
    "Che_Guevara",  




    
    // Add more filenames here












    
];

function getRandomImageFilename() {
    const randomIndex = Math.floor(Math.random() * imageFilenames.length);
    return imageFilenames[randomIndex];
}

const numberOfCards = imageFilenames.length;

for (let i = 0; i < numberOfCards; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const imageFilename = getRandomImageFilename();
    const imagePath = `images/${imageFilename}.SVG`; 
    const image = document.createElement("img");
    image.src = imagePath;

    const caption = document.createElement("figcaption");
    caption.textContent = imageFilename;

    card.appendChild(image);

    card.appendChild(caption);

    cardContainer.appendChild(card);
}
