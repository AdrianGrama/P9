const textToType = "Hi! I'm Adrian and Welcome to My Portfolio!";
const developerText = "A FRONT-END WEB DEVELOPER";
const journeyText = "Explore my journey and projects as a web developer.";
const typingSpeed = 100;

let index1 = 0;

function typeText() {
  if (index1 < textToType.length) {
    document.getElementById("dynamicText").textContent += textToType.charAt(index1);
    index1++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(showDeveloperText, 1000);
  }
}

function showDeveloperText() {
  const developerParagraph = document.getElementById("developerText");
  developerParagraph.textContent = developerText;
  developerParagraph.classList.add("visible");

  setTimeout(() => {
    developerParagraph.classList.add("shine");
    setTimeout(() => {
      developerParagraph.classList.remove("shine");
    }, 1000);
  }, 0);

  setTimeout(showJourneyText, 1000);
}

function showJourneyText() {
  const journeyParagraph = document.getElementById("journeyText");
  journeyParagraph.textContent = journeyText;
  journeyParagraph.classList.add("visible");

  setTimeout(() => {
    journeyParagraph.classList.add("shine");
    setTimeout(() => {
      journeyParagraph.classList.remove("shine");
    }, 1000);
  }, 0);
}

function createStars(numStars) {
  const body = document.body;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    body.appendChild(star);
  }
}

const aboutButton = document.getElementById("aboutButton");
const projectsButton = document.getElementById("projectsButton");
const contactButton = document.getElementById("contactButton");
const aboutParagraph = document.getElementById("aboutParagraph");
const projectsSection = document.getElementById("projectsSection");
const contactSection = document.querySelector(".contact");

aboutParagraph.style.display = "none";
projectsSection.style.display = "none";
contactSection.style.display = "none";

aboutButton.addEventListener("click", function () {
  aboutParagraph.style.display = aboutParagraph.style.display === "none" ? "block" : "none";
  projectsSection.style.display = "none";
  contactSection.style.display = "none";
});

projectsButton.addEventListener("click", function () {
  aboutParagraph.style.display = "none";
  projectsSection.style.display = "block";
  contactSection.style.display = "none";
});

contactButton.addEventListener("click", function () {
  aboutParagraph.style.display = "none";
  projectsSection.style.display = "none";
  contactSection.style.display = contactSection.style.display === "none" ? "block" : "none";
});

window.onload = function() {
  createStars(100);
  typeText();
};
