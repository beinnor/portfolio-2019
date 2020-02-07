const navButton = document.querySelector(".nav-button");
const overlay = document.querySelector(".overlay");

navButton.addEventListener("click", toggleMenuOverlay);

let showOverlay = false;

function toggleMenuOverlay() {
  if (!showOverlay) {
    overlay.classList.add("show");
    navButton.firstChild.classList.replace("fa-bars", "fa-times");
    navButton.classList.add("close");

    // Set menu state
    showOverlay = true;
  } else {
    overlay.classList.remove("show");
    navButton.firstChild.classList.replace("fa-times", "fa-bars");
    navButton.classList.remove("close");

    // Set menu state
    showOverlay = false;
  }
}
