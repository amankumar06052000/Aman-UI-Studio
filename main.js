// ================= TAILWIND CONFIG =================
tailwind.config = {
    darkMode: 'class'
};

// ================= DARK MODE =================
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');

    localStorage.setItem(
        'theme',
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
}

// PAGE LOAD PAR THEME CHECK
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}


// ================= DOM LOADED =================
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    const msg = document.getElementById("successMsg");

    msg.classList.remove("hidden");

    setTimeout(() => {
        msg.classList.add("hidden");
    }, 3000);

    this.reset();

    // ===== SCROLL TO TOP =====
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.remove("opacity-0", "translate-y-20", "pointer-events-none");
                scrollBtn.classList.add("opacity-100", "translate-y-0");
            } else {
                scrollBtn.classList.add("opacity-0", "translate-y-20", "pointer-events-none");
                scrollBtn.classList.remove("opacity-100", "translate-y-0");
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
