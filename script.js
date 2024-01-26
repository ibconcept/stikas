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
    "adonai_impossible_is_nothing",  
    "all_wheel_drive",
    "subaru",
    "Jesus_is_my_king",
    "eagles_philadelphia",
    "akademics_vector_logo",
    "eagle_vector_logo",
    "sosodef_vector_logo",
    "scout_wasp_vector_logo",
    "wolf_vector_logo",
    "afc_leopard_vector_logo",
    "sacramento_kings_vector_logo",
    "dice_vector_logo",
    "chicago_bulls_vector_logo",
    "warriors_vector_logo",
    "sk_vector_logo",
    "3_dice_logo",
    "76ers_seven_sixers_logo",
    "kings_court_vector_logo",
    "bob_marley_wailers_vector_logo",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "by_his_grace",
    "parental_adivsory_vector_logo",
    "puma_vector_logo",
    "classic_hiphop_vector_logo",
   




    
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
