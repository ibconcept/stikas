const cardContainer = document.getElementById("cardContainer");
const imageFilenames = [
    "1", "2", "3", "4",
    "5", "6", "7", "8",
    "9", "10",  
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
