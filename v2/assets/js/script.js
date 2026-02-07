// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Testimonials Slider
    const track = document.getElementById("testimonialsTrack");
    const prevBtn = document.getElementById("sliderPrev");
    const nextBtn = document.getElementById("sliderNext");
    const dotsContainer = document.getElementById("sliderDots");

    if (track && prevBtn && nextBtn) {
        const slides = track.querySelectorAll(".testimonial-slide");
        let currentIndex = 0;
        let itemsPerView = window.innerWidth > 768 ? 2 : 1;
        let maxIndex = Math.ceil(slides.length / itemsPerView) - 1;

        // Reset on resize
        window.addEventListener('resize', () => {
            itemsPerView = window.innerWidth > 768 ? 2 : 1;
            updateDots();
            updateSlider();
        });

        // Create dots
        function createDots() {
            dotsContainer.innerHTML = '';
            const totalDots = Math.ceil(slides.length - itemsPerView + 1);

            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement("div");
                dot.classList.add("slider-dot");
                if (i === 0) dot.classList.add("active");
                dot.addEventListener("click", () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }
        createDots();

        const dots = () => dotsContainer.querySelectorAll(".slider-dot");

        function updateSlider() {
            // Adjust max scroll
            // translation is based on item width: 100% / itemsPerView
            const movePercentage = 100 / itemsPerView;
            track.style.transform = `translateX(-${currentIndex * movePercentage}%)`;

            // Update dots
            const currentDots = dots();
            currentDots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndex);
            });
        }

        function updateDots() {
            createDots(); // Re-create dots on resize
            const currentDots = dots();
            if (currentIndex >= currentDots.length) {
                currentIndex = currentDots.length - 1;
            }
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        function nextSlide() {
            const max = slides.length - itemsPerView;
            if (currentIndex < max) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back
            }
            updateSlider();
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slides.length - itemsPerView; // Loop to end
            }
            updateSlider();
        }

        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);

        // Auto-slide every 5 seconds
        let autoSlideInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        track.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
        track.addEventListener("mouseleave", () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });
    }

    // Scroll Progress Bar
    window.addEventListener("scroll", () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    });

    // Reveal sections on scroll
    const sections = document.querySelectorAll("section");
    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Initial check

    // Sticky navbar with shrink effect
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        lastScrollTop = scrollTop;
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Form submission
    function handleSubmit(event) {
        event.preventDefault();
        alert("Merci pour votre message ! Nous vous contacterons bientôt.");
        event.target.reset();
    }

    // Make handleSubmit available globally
    window.handleSubmit = handleSubmit;

    // Parallax effect on hero
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector(".hero-content");
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - scrolled / 600;
        }
    });

    // Theme Toggle
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem("theme") || "dark";
    if (currentTheme === "light") {
        body.classList.add("light-mode");
        themeIcon.textContent = "🌞";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            themeIcon.textContent = "🌞";
            localStorage.setItem("theme", "light");
        } else {
            themeIcon.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

    // Back to Top Button
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");

                // Close all items
                faqItems.forEach((i) => i.classList.remove("active"));

                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add("active");
                }
            });
        }
    });

    // Animated Counter
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    };

    // Trigger counter animation when stats section is visible
    const statItems = document.querySelectorAll(".stat-item");
    let statsAnimated = false;

    const checkStats = () => {
        if (statsAnimated) return;

        const statsSection = document.querySelector(".stats");
        if (statsSection) {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                statsAnimated = true;
                statItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("visible");
                        const number = item.querySelector(".stat-number");
                        if (number) {
                            const target = parseInt(number.getAttribute("data-target"));
                            animateCounter(number, target);
                        }
                    }, index * 150);
                });
            }
        }
    };

    window.addEventListener("scroll", checkStats);
    checkStats();
}); // End of DOMContentLoaded
