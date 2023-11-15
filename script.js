const cardContainer = document.getElementById("cardContainer");
const imageFilenames = [
    "1", "2", "3", "4",
    "5", "6", "7", "8",
    "9", "10", "11", "12",
    "13", "14", "15", "16",
    "17", "18", "19", "20",
    "21", "22", "23", "24",
    "25", "26", "27", "28",
    "29", "30", "31", "32",
    "33", "34", "35", "36",
    "37", "38", "39", "40",
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
    const imagePath = `images/${imageFilename}.svg`; 
    const image = document.createElement("img");
    image.src = imagePath;

    const caption = document.createElement("figcaption");
    caption.textContent = imageFilename;

    card.appendChild(image);

    card.appendChild(caption);

    cardContainer.appendChild(card);
}
