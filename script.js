// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent = new Date().getFullYear();


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formMessage.style.color = "#f87171";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.style.color = "#86efac";
    formMessage.textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();
});


// =========================
// SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(
    ".project-card, .skill-card, .about-card, .education-card"
).forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});