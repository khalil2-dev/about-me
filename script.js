
document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  const themeBtn = document.getElementById("themeBtn");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      themeBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }

  // Share website
  const shareBtn = document.getElementById("shareBtn");

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const url = window.location.href;

      try {
        await navigator.clipboard.writeText(url);
        shareBtn.textContent = "✓ Link copied!";

        setTimeout(() => {
          shareBtn.textContent = "Share";
        }, 2000);
      } catch (error) {
        alert("Portfolio link: " + url);
      }
    });
  }

  // Portfolio link
  const portfolioLink = document.getElementById("portfolioLink");

  if (portfolioLink) {
    portfolioLink.addEventListener("click", () => {
      alert("Welcome to my portfolio!");
    });
  }

  // Automatic copyright year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

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

      themeBtn.textContent = isDarkMode ? "☀️" : "🌙";
      themeBtn.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
      );
    });
  }

  // =========================
  // Share Portfolio
  // =========================
  const shareBtn = document.getElementById("shareBtn");

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const portfolioUrl = window.location.href;

      try {
        if (navigator.share) {
          await navigator.share({
            title: "My Portfolio",
            url: portfolioUrl
          });
        } else {
          await navigator.clipboard.writeText(portfolioUrl);

          const oldText = shareBtn.textContent;
          shareBtn.textContent = "✓ Link copied!";

          setTimeout(() => {
            shareBtn.textContent = oldText;
          }, 2000);
        }
      } catch (error) {
        console.log("Sharing cancelled or unavailable:", error);
      }
    });
  }

  // =========================
  // Portfolio Link
  // =========================
  const portfolioLink = document.getElementById("portfolioLink");

  if (portfolioLink) {
    portfolioLink.addEventListener("click", (event) => {
      // Keep the normal link behavior
      console.log("Portfolio link clicked");
    });
  }

  // =========================
  // Automatic Copyright Year
  // =========================
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // =========================
  // Smooth Scroll
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});
