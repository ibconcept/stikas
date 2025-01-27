const itemsPerPage = 16; // Number of images per page
let currentPage = 1;

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.getElementById("pagination");
    
    paginationContainer.innerHTML = ''; // Clear existing pagination

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => changePage(i));
        paginationContainer.appendChild(pageButton);
    }
}

function changePage(page) {
    currentPage = page;
    updateImageDisplay();
}

function updateImageDisplay() {
    const cards = document.querySelectorAll('.card');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    cards.forEach((card, index) => {
        // Only display cards that are within the current page range
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function initializePagination() {
    const totalItems = document.querySelectorAll('.card').length;
    renderPagination(totalItems);
    updateImageDisplay();
}

document.addEventListener('DOMContentLoaded', initializePagination);
