
  tailwind.config = { darkMode: 'class' }

// DARK MODE TOGGLE
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');

    localStorage.setItem(
        'theme',
        document.documentElement.classList.contains('dark')
            ? 'dark'
            : 'light'
    );
}

// PAGE LOAD PAR THEME CHECK
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}

// SUCCESS MESSAGE
function showSuccess() {
    setTimeout(() => {
        const msg = document.getElementById('successMsg');
        if (msg) {
            msg.classList.remove('hidden');
        }
    }, 500);
}

// MOBILE MENU
document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.onclick = () => {
            mobileMenu.classList.toggle('hidden');
        };
    }

    // SCROLL TO TOP BUTTON
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.remove(
                    "opacity-0",
                    "translate-y-20",
                    "pointer-events-none"
                );
                scrollBtn.classList.add("opacity-100", "translate-y-0");
            } else {
                scrollBtn.classList.add(
                    "opacity-0",
                    "translate-y-20",
                    "pointer-events-none"
                );
                scrollBtn.classList.remove("opacity-100", "translate-y-0");
            }
        });

        scrollBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    }

});
