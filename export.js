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

            // Button container
            let btnContainer = document.createElement("div");
            btnContainer.style.display = "flex";
            btnContainer.style.justifyContent = "center";
            btnContainer.style.gap = "10px";
            btnContainer.style.marginBottom = "20px";

            // Share button with Material icon
            let shareBtn = document.createElement("button");
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
                if (navigator.share && isMobile) {
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
                        alert('Link copied! You can now share it.');
                    } catch (err) {
                        // Fallback: show prompt for manual copy
                        window.prompt('Could not copy automatically. Please copy this link:', shot.html_url);
                        console.error('Copy failed:', err);
                    }
                }
            };

            // Like button with Material icon
            let likeBtn = document.createElement("button");
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
            gallery.appendChild(btnContainer);
        });

    } catch (error) {
        console.error("Error loading Dribbble images:", error);
    }
});
