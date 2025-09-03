// Global values

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

  item.addEventListener("pointenter", () => {
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
