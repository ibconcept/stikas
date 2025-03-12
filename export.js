document.addEventListener("DOMContentLoaded", async () => {
    const gallery = document.getElementById("dribbble-gallery");

    try {
        const response = await fetch("export.json"); // Ensure file name matches
        const data = await response.json();

        if (!data.shots) {
            throw new Error("Invalid JSON structure: 'shots' array not found");
        }

        data.shots.forEach(shot => {
            let link = document.createElement("a");
            link.href = shot.html_url;
            link.target = "_blank";

            let img = document.createElement("img");
            img.src = shot.images.normal || shot.images.hidpi || shot.images.one_x; // Use available image
            img.alt = shot.title;

            link.appendChild(img);
            gallery.appendChild(link);
        });

    } catch (error) {
        console.error("Error loading Dribbble images:", error);
    }
});
