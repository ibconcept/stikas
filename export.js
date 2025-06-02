document.addEventListener("DOMContentLoaded", async () => {
    const gallery = document.getElementById("dribbble-gallery");

    try {
        const response = await fetch("export.json");
        const data = await response.json();

        if (!data.shots) {
            throw new Error("Invalid JSON structure: 'shots' array not found");
        }

        data.shots.forEach(shot => {
            let link = document.createElement("a");
            link.href = shot.html_url;
            link.target = "_blank";

            let img = document.createElement("img");
            img.src = shot.images.normal || shot.images.hidpi || shot.images.one_x;
            img.alt = shot.title;

            link.appendChild(img);
            gallery.appendChild(link);

            // Add Share button
            let shareBtn = document.createElement("button");
            shareBtn.textContent = "Share";
            shareBtn.style.display = "block";
            shareBtn.style.margin = "5px auto 20px auto";
            shareBtn.onclick = async () => {
                if (navigator.share) {
                    try {
                        await navigator.share({
                            title: shot.title,
                            text: shot.title,
                            url: shot.html_url
                        });
                    } catch (err) {
                        console.error('Share failed:', err);
                    }
                } else {
                    try {
                        await navigator.clipboard.writeText(shot.html_url);
                        alert('Share link has been copied please');
                    } catch (err) {
                        alert('Could not copy link. Please copy it manually: ' + shot.html_url);
                        console.error('Copy failed:', err);
                    }
                }
            };
            gallery.appendChild(shareBtn);
        });

    } catch (error) {
        console.error("Error loading Dribbble images:", error);
    }
});
