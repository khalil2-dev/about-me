
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // =========================
  // Theme Toggle
  // =========================
  const themeBtn = document.getElementById("themeBtn");

  if (themeBtn) {
    const storedTheme = localStorage.getItem("theme");
    const startInLightMode =
      storedTheme === "light" ||
      (!storedTheme && window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches);

    document.body.classList.toggle("light", startInLightMode);
    themeBtn.textContent = startInLightMode ? "☾" : "☀";
    themeBtn.setAttribute(
      "aria-label",
      startInLightMode ? "Switch to dark mode" : "Switch to light mode"
    );

    themeBtn.addEventListener("click", () => {
      const isLightMode = document.body.classList.toggle("light");
      localStorage.setItem("theme", isLightMode ? "light" : "dark");

      themeBtn.textContent = isLightMode ? "☾" : "☀";
      themeBtn.setAttribute(
        "aria-label",
        isLightMode ? "Switch to dark mode" : "Switch to light mode"
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
      const oldText = shareBtn.textContent;

      try {
        if (navigator.share) {
          await navigator.share({
            title: "My Portfolio",
            url: portfolioUrl
          });
        } else {
          if (!navigator.clipboard) {
            throw new Error("Clipboard API unavailable");
          }

          await navigator.clipboard.writeText(portfolioUrl);
          shareBtn.textContent = "✓ Link copied!";

          setTimeout(() => {
            shareBtn.textContent = oldText;
          }, 2000);
        }
      } catch (error) {
        console.log("Sharing cancelled or unavailable:", error);
        if (error.name !== "AbortError") {
          window.prompt("Copy this page link:", portfolioUrl);
        }
      }
    });
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
