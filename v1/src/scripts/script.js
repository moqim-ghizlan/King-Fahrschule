document.getElementById("year").textContent =
    new Date().getFullYear();

function scrollSlider(direction) {
    const slider = document.getElementById("vehicleSlider");
    const amount = 350;
    if (!slider) return;
    if (direction === "left") {
        slider.scrollBy({ left: -amount, behavior: "smooth" });
    } else {
        slider.scrollBy({ left: amount, behavior: "smooth" });
    }
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.dataset.anim === "left") {
                    entry.target.classList.add("animate-slide-left");
                } else if (entry.target.dataset.anim === "right") {
                    entry.target.classList.add("animate-slide-right");
                } else {
                    entry.target.classList.add("animate-fade-up");
                }
                entry.target.classList.remove("opacity-0");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document
    .querySelectorAll(".opacity-0")
    .forEach((el) => observer.observe(el));

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.onclick = () => {
    menu.classList.toggle("hidden");
};

let index = 0;

function updateSlider() {
    const slider = document.getElementById("heroSlider");
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide").length;
    index = (index + 1) % slides;
    updateSlider();
}

function prevSlide() {
    const slides = document.querySelectorAll(".slide").length;
    index = (index - 1 + slides) % slides;
    updateSlider();
}

// Auto slide
setInterval(nextSlide, 4000);

// ── Car 1 auto image slider ──────────────────────────────────────────────────
(function () {
    const car1Images = [
        "src/images/cars/WhatsApp Image 2026-05-25 at 09.21.50 (4).jpeg",
        "src/images/cars/WhatsApp Image 2026-05-25 at 09.21.50.jpeg",
    ];
    const car1ImageElement = document.getElementById("car1AutoImage");
    if (!car1ImageElement) return;

    let currentCar1Image = 0;
    let isAnimating = false;

    setInterval(() => {
        if (isAnimating) return;
        isAnimating = true;

        currentCar1Image = (currentCar1Image + 1) % car1Images.length;
        car1ImageElement.classList.remove("opacity-100");
        car1ImageElement.classList.add("opacity-0");

        setTimeout(() => {
            car1ImageElement.src = car1Images[currentCar1Image];
            car1ImageElement.classList.remove("opacity-0");
            car1ImageElement.classList.add("opacity-100");
            isAnimating = false;
        }, 350);
    }, 5000);
})();

// ── Pricing tabs ─────────────────────────────────────────────────────────────
(function () {
    const buttons = document.querySelectorAll("[data-pricing-tab]");
    const panelB = document.getElementById("pricingPanelB");
    const panelBE = document.getElementById("pricingPanelBE");

    if (!buttons.length || !panelB || !panelBE) return;

    function setTab(tabName) {
        const isB = tabName === "klasse-b";

        panelB.classList.toggle("hidden", !isB);
        panelBE.classList.toggle("hidden", isB);

        buttons.forEach((button) => {
            const isActive = button.dataset.pricingTab === tabName;
            button.classList.toggle("border-yellow-500", isActive);
            button.classList.toggle("bg-yellow-600/20", isActive);
            button.classList.toggle("text-yellow-400", isActive);

            button.classList.toggle("border-slate-600", !isActive);
            button.classList.toggle("bg-slate-900/70", !isActive);
            button.classList.toggle("text-gray-300", !isActive);
        });
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            setTab(button.dataset.pricingTab);
        });
    });

    setTab("klasse-b");
})();

// ── Promo modal ──────────────────────────────────────────────────────────────
function closePromoModal() {
    const modal = document.getElementById("promoModal");
    const box = document.getElementById("promoModalBox");
    if (!modal) return;
    modal.classList.remove("modal-open");
    modal.classList.add("modal-close");
    box.classList.remove("modal-box-open");
    box.classList.add("modal-box-close");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("modal-close");
        box.classList.remove("modal-box-close");
    }, 280);
}

function openPromoModal() {
    const modal = document.getElementById("promoModal");
    const box = document.getElementById("promoModalBox");
    if (!modal) return;
    modal.style.display = "flex";
    modal.classList.remove("modal-close");
    modal.classList.add("modal-open");
    box.classList.remove("modal-box-close");
    box.classList.add("modal-box-open");
}

(function () {
    // Deadline: March 7, 2026 end of day
    const PROMO_DEADLINE = new Date("2026-03-08T00:00:00");
    const promoIds = ["promoModal", "announcementBanner", "angebot"];

    const isExpired = new Date() >= PROMO_DEADLINE;

    if (isExpired) {
        promoIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.style.display = "none";
        });
        document.querySelectorAll("a[href='#angebot']").forEach((el) => {
            el.style.display = "none";
        });
    } else {
        window.addEventListener("load", () => {
            setTimeout(() => openPromoModal(), 1000);
        });
    }
})();
// -- Cookie Banner ------------------------------------------------------------
(function () {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');

    if (!banner || !acceptBtn || !declineBtn) return;

    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieConsent) {
        setTimeout(() => {
            banner.classList.remove('translate-y-full');
        }, 2000);
    }

    acceptBtn.onclick = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.classList.add('translate-y-full');
    };

    declineBtn.onclick = () => {
        localStorage.setItem('cookieConsent', 'declined');
        banner.classList.add('translate-y-full');
    };
})();
