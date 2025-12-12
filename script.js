// Toggle Menu di HP
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu kalau link diklik
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- FITUR LIGHTBOX GAMBAR (BARU) ---

// Ambil elemen modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Ambil semua gambar di dalam kartu proyek
const projectImages = document.querySelectorAll('.card-image img');

projectImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block"; // Munculkan modal
        modalImg.src = this.src;       // Ambil sumber gambar yang diklik
        captionText.innerHTML = this.alt; // Ambil teks alt sebagai keterangan
    });
});

// Tutup modal kalau tombol X diklik
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

// Tutup modal kalau area hitam di luar gambar diklik
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}