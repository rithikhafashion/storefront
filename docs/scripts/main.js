// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const productCards = document.querySelectorAll('.product-card');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // --- FILTER BUTTONS ---
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.textContent.toLowerCase();

            productCards.forEach(card => {
                const title = card.querySelector('.product-title').textContent.toLowerCase();
                card.style.display = (filterValue === 'all' || title.includes(filterValue)) ? 'block' : 'none';
            });
        });
    });

    // --- MOBILE MENU TOGGLE ---
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }

    // --- SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
                }
            }
            navMenu.classList.remove('show');
        });
    });
});

// --- IMAGE MODAL FUNCTIONS (must be global) ---
function showImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = src;
}

function hideImage() {
    document.getElementById("imageModal").style.display = "none";
}
