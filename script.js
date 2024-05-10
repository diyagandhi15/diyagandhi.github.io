function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const greetingText = "Hello, I'm ";
const roleText = "Aspiring Software Engineer";
let greetingIndex = 0;
let roleIndex = 0;

function typeGreeting() {
    const greetingElement = document.getElementById("greeting");
    if (greetingIndex < greetingText.length) {
        greetingElement.innerHTML += greetingText.charAt(greetingIndex);
        greetingIndex++;
        setTimeout(typeGreeting, 50); // Adjust typing speed here
    } else {
        setTimeout(typeRole, 1000); // Add a delay before typing the role
    }
}

function typeRole() {
    const roleElement = document.getElementById("role");
    if (roleIndex < roleText.length) {
        roleElement.innerHTML += roleText.charAt(roleIndex);
        roleIndex++;
        setTimeout(typeRole, 50); // Adjust typing speed here
    }
}

typeGreeting();


