// script-images.js

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
    "huu_upuzi_ndio_kazi_vector_logo",
    "mtu_bladifkin_vector_logo",
    "urban_matatu_vector_logo",
    "matatu_galore_nissan_vector_design_logo",
    "mtwana_culture_mat_vector_design_logo",
    "heart_line_music_vector",
    "ulimi_tongue_lick_rolling_stone_vector",
    "BY-HIS-GRACE-VECTOR-LOGO",
    "TSV-LOGO",
    "a soldier-in-the-army-of-God-vector",
    "big-foot-logo-vector",
    "blessed-hands-vector-logo",
    "don't touch my car-vector- logo",
    "jesus-in-our-hearts-vector-logo",
    "jesus-in-our-vector-logo",
    "panda stoning-log-vector",
    "pray&listen-vector-logo",
    "rest-in-peace-vector-logo",
    "heart_line_faith_hope_love_vector",
    "Che_Guevara", 
    "slay-queen-logo-vector",
    "all_wheel_drive",
    "no_frogs_allowed_vector_logo",
    "no_fear_vector_logo",
    "baby_on_board_3_vector_logo",
    "ngumi_mbwegze_siku_zote_vector_logo",
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
    "BABY_ON_BOARD3",
    "arabic_quote_vector",
    "lady_on_glass",
    "BABY_ON_BOARD4",
    "BABY_ON_BOARD5",
    "80_kph_vector_design1",
    "80_kph_vector_design2",
    "80_psv_vector_design1",
    "80_kph_vector_design3",
    "80_psv_vector_design4",
    "80_psv_vector_design5",
    "80_kph_vector_design6",
    "80_kph_vector_design7",
    "lady-on-glass-kaskie-vibaya-na-huko-vector-logo",
    "80_psv_vector_design7", 
    "by_his_grace",
    "parental_adivsory_vector_logo",
    "puma_vector_logo",
    "made_in_kanairo_barcode_vector_logo",
    "classic_hiphop_vector_logo"
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

// Import pagination script (ensure the script is in your HTML file)
const script = document.createElement("script");
script.src = "script-pagination.js";
document.head.appendChild(script);
