// script-images.js

const cardContainer = document.getElementById("cardContainer");
const imageFilenames = [
    "ford_ranger2", 
    "xplode_alpine", 
    "saved_by_grace",
    "cross_fight_battle", 
    "hoonigan",  
    "TRD_fire",
    "24_gospel_vector_image",
    "4x4_off_road_logo_image",
    "adonai_gospel_logo_images",
    "christ_is_alive_vector_image",
    "focus_jesus_gospel_logo_image",
    "grow_in_the_lord_vector_image",
    "high_hope_house_logo_image",
    "his_grace_is_enough_logo_image",
    "his_word_is_everblazing",
    "how_I_FIGHT_battles_gospel_vector_image",
    "jesus_is_my_king_gospel_logo_image",
    "jesus_wept_logo_images",
    "kneel_before_God_logo_image",
    "serving_christ_logo_image",
    "the_good_sheferd_gospel_logo_image",
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
    "TSV-LOGO",
    "a soldier-in-the-army-of-God-vector",
    "big-foot-logo-vector",
    "blessed-hands-vector-logo",
    "don't touch my car-vector- logo",
    "jesus-in-our-hearts-vector-logo",
    "jesus-in-our-vector-logo",
    "panda stoning-log-vector",
    "heart_line_faith_hope_love_vector",
    "Che_Guevara", 
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
    "80_psv_vector_design7", 
    "by_his_grace",
    "parental_adivsory_vector_logo",
    "puma_vector_logo",
    "made_in_kanairo_barcode_vector_logo",
    "classic_hiphop_vector_logo",
    "b_bleesed_gospel_logo_design",
    "california_logo_image",
    "drive_it_like_you_stole_it_logo_design",
    "gospel's_clear_than_clarity_gospel_vector_design",
    "its_your_prayer_gospel_logo_design",
    "new_anguka_nayo_logo_design",
    "nganja_head_logo_design",
    "nganya_infinity_logo_design",
    "only_one_king_vector_image" 






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
    image.alt = imageFilename;

    const caption = document.createElement("figcaption");
    caption.textContent = imageFilename;

    // Button container
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.justifyContent = "center";
    btnContainer.style.gap = "10px";
    btnContainer.style.marginTop = "8px";

    // Share button (Material icon)
    const shareBtn = document.createElement("button");
    shareBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';
    shareBtn.title = "Share";
    shareBtn.style.background = "none";
    shareBtn.style.border = "none";
    shareBtn.style.cursor = "pointer";
    shareBtn.style.padding = "6px";
    shareBtn.style.borderRadius = "50%";
    shareBtn.style.transition = "background 0.2s";
    shareBtn.onmouseover = () => shareBtn.style.background = "#f0f0f0";
    shareBtn.onmouseout = () => shareBtn.style.background = "none";
    shareBtn.onclick = async () => {
        // Use Web Share API only on mobile, clipboard on desktop
        const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
        const shareUrl = window.location.origin + '/' + imagePath;
        if (navigator.share && isMobile) {
            try {
                await navigator.share({
                    title: imageFilename,
                    text: imageFilename,
                    url: shareUrl
                });
            } catch (err) {
                console.error('Share failed:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(shareUrl);
                alert('Link copied! You can now share it.');
            } catch (err) {
                window.prompt('Could not copy automatically. Please copy this link:', shareUrl);
                console.error('Copy failed:', err);
            }
        }
    };

    // Like button (Material icon)
    const likeBtn = document.createElement("button");
    likeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
    likeBtn.title = "Like";
    likeBtn.style.background = "none";
    likeBtn.style.border = "none";
    likeBtn.style.cursor = "pointer";
    likeBtn.style.padding = "6px";
    likeBtn.style.borderRadius = "50%";
    likeBtn.style.transition = "background 0.2s";
    likeBtn.onmouseover = () => likeBtn.style.background = "#f0f0f0";
    likeBtn.onmouseout = () => likeBtn.style.background = "none";
    likeBtn.onclick = () => {
        likeBtn.classList.toggle("liked");
        if (likeBtn.classList.contains("liked")) {
            likeBtn.querySelector('svg').style.stroke = "#e53935";
            likeBtn.querySelector('svg').style.fill = "#e53935";
        } else {
            likeBtn.querySelector('svg').style.stroke = "currentColor";
            likeBtn.querySelector('svg').style.fill = "none";
        }
    };

    btnContainer.appendChild(shareBtn);
    btnContainer.appendChild(likeBtn);

    card.appendChild(image);
    card.appendChild(caption);
    card.appendChild(btnContainer);
    cardContainer.appendChild(card);
}

// Import pagination script (ensure the script is in your HTML file)
const script = document.createElement("script");
script.src = "script-pagination.js";
document.head.appendChild(script);
