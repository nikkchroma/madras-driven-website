console.log("Madras Driven script loaded");

/* FORCE REMOVE LOADER */

function removeLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.remove(); // completely removes it
    }, 500);
  }
}

/* Run immediately */
document.addEventListener("DOMContentLoaded", removeLoader);

/* Backup (if above fails) */
window.addEventListener("load", removeLoader);

/* Emergency fallback */
setTimeout(removeLoader, 2000);
