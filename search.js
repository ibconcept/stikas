document.getElementById("searchInput").addEventListener("input", function() {
    const searchQuery = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const cardContainer = document.getElementById('cardContainer');

    // Loop through each card and hide/show based on the search query
    cards.forEach(card => {
        const caption = card.querySelector('figcaption').textContent.toLowerCase();
        
        // Show the card if the caption matches the search query
        if (caption.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
