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
    "24_gospel_vector_image",
    "4x4_off_road_logo_image",
    "adonai_gospel_logo_images",
    "bad_girl_logo_images",
    "christ_is_alive_vector_image",
    "fear_having_faith-in_the_enenmy_vector_image",
    "focus_jesus_gospel_logo_image",
    "grow_in_the_lord_vector_image",
    "high_hope_house_logo_image",
    "his_grace_is_enough_logo_image",
    "his_word_is_everblazing",
    "how_I_FIGHT_battles_gospel_vector_image",
    "jesus_is_my_king_gospel_logo_image",
    "jesus_wept_logo_images",
    "kneel_before_God_logo_image",
    "pray_until_someyhings_happens_logo_images",
    "rock_of_age_logo_image",
    "serving_christ_logo_image",
    "soldiers_of_God_vector_images",
    "the_good_sheferd_gospel_logo_image",
    "the_power_is_the_name",
    "the_power_is_the_name_gospel_logo_image",
    "the_way_the_truth_gospel_logo_image",
    "keep_silent", 
    "huu_upuzi_ndio_kazi_vector_logo",
    "mtu_bladifkin_vector_logo",
    "urban_matatu_vector_logo",
    "matatu_galore_nissan_vector_design_logo",
    "mtwana_culture_mat_vector_design_logo",
    "heart_line_music_vector",
    "ulimi_tongue_lick_rolling_stone_vector",
    "BY-HIS-GRACE-VECTOR-LOGO",
    "ONE_LOVE_VECTOR_IMAGE",
    "prayer-warrior-gospel-logo",
    "Premier_League_Vector_Logo",
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
    "classic_hiphop_vector_logo",
    "b_bleesed_gospel_logo_design",
    "california_logo_image",
    "cross_on_flame_vector_design",
    "decorated_binding_lines_logo_design",
    "drive_it_like_you_stole_it_logo_design",
    "gospel's_clear_than_clarity_gospel_vector_design",
    "his_mercies_are_sufficient_gospel_logo_design",
    "its_your_prayer_gospel_logo_design",
    "lets_all_get_a_bong",
    "new_anguka_nayo_logo_design",
    "nganja_head_logo_design",
    "nganya_infinity_logo_design",
    "only_one_king_vector_image",
    "shoot_on_sight_logo_design",
    "slay_logo_design"












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
