// Typing Effect
const text = "Biotechnology Student | Genome Explorer | Future Innovator";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Skill hover info
const cards = document.querySelectorAll(".card");
const info = document.getElementById("skill-info");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        info.innerText = card.getAttribute("data-info");
    });
});

// Joke generator
function showJoke() {
    const jokes = [
        "Why did DNA break up? Too many mutations.",
        "I told a joke about RNA... but it didn’t translate.",
        "Biology is the only science where multiplication = division 😄"
    ];
    document.getElementById("joke").innerText =
        jokes[Math.floor(Math.random() * jokes.length)];
}
