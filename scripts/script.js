// Global values

const destinationBtn = document.querySelectorAll(".dest-nav-btn");
const planetImg = document.getElementById("planet-img");
const title = document.getElementById("planet-title");
const description = document.getElementById("planet-description");
const distance = document.getElementById("planet-distance");
const travel = document.getElementById("planet-travel");

// Get JSON Data

let planetData = {};

fetch("data.json")
  .then(Response => Response.json())
  .then(data => {
    planetData = data.destinations; 
  })
  .catch(error => console.error("Error loading JSON:", error));


// Destination Code

// Destination Button

destinationBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    destinationBtn.forEach(b => b.classList.remove("dest-nav-btn-active"));
    btn.classList.add("dest-nav-btn-active");

    const planet = btn.textContent.trim();

    const info = planetData.find(p => p.name.toLowerCase() === planet.toLowerCase());
    if (info) {
     title.textContent = info.name.toUpperCase();
     description.textContent = info.description
     distance.textContent = info.distance.toUpperCase();
     travel.textContent = info.travel.toUpperCase();
     planetImg.src = info.images.png;  
     planetImg.alt = info.name; 
    }
  })
})


// hover sounds - screens large than 1100px

function hoverSound() {
  const hoverNoise = new Audio("sounds/hover-sound.mp3");
  hoverNoise.play();
}

if (window.innerWidth > 1100) {
  const hoverLis = document.getElementsByClassName("hover-sound");

  for (let li of hoverLis) {
    li.addEventListener("mouseenter", hoverSound);
  }
}

document.querySelectorAll(".nav-item").forEach((item) => {
  let played = false; // flag to track if it's been triggered already

  item.addEventListener("pointerenter", () => {
    if (!played) {
      // Your animation/effect here
      console.log(item.textContent + " hovered!");

      // Example: add a class that runs a CSS animation
      item.classList.add("hovered-once");

      played = true; // mark as played
    }
  });
});



console.log("connected");
