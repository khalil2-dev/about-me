
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
