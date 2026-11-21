
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // =========================
  // Theme Toggle
  // =========================

  const themeBtn = document.getElementById("themeBtn");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const isDarkMode =
        document.body.classList.contains("dark-mode");

      themeBtn.textContent = isDarkMode ? "☀️" : "☾";
    });
  }

  // =========================
  // Share Page
  // =========================

  const shareBtn = document.getElementById("shareBtn");

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const pageUrl = window.location.href;

      try {
        if (navigator.share) {
          await navigator.share({
            title: "Khalil Lassoued",
            text: "Check out my page!",
            url: pageUrl
          });
        } else {
          await navigator.clipboard.writeText(pageUrl);
          alert("Page link copied!");
        }
      } catch (error) {
        console.log("Share cancelled or unavailable.");
      }
    });
  }

});
