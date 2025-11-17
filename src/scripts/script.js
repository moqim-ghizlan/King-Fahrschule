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

// Auto slide (optionnel)
setInterval(nextSlide, 4000);