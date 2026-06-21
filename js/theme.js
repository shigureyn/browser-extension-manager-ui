const THEME_STORAGE_KEY = "extensions-theme";

export function setupTheme() {
  const themeToggleButton = document.querySelector(".theme-toggle");
  const themeToggleIcon = document.querySelector(".theme-toggle__icon");

  if (!themeToggleButton) {
    return;
  }

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "light";

  applyTheme(savedTheme, themeToggleButton, themeToggleIcon);

  themeToggleButton.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark"
      ? "light"
      : "dark";

    applyTheme(nextTheme, themeToggleButton, themeToggleIcon);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
}

function applyTheme(theme, themeToggleButton, themeToggleIcon) {
  const isDarkTheme = theme === "dark";

  if (isDarkTheme) {
    document.body.dataset.theme = "dark";
    themeToggleButton.setAttribute("aria-label", "Switch to light theme");

    if (themeToggleIcon) {
      themeToggleIcon.src = "images/icon-sun.svg";
    }

    return;
  }

  document.body.removeAttribute("data-theme");
  themeToggleButton.setAttribute("aria-label", "Switch to dark theme");

  if (themeToggleIcon) {
    themeToggleIcon.src = "images/icon-moon.svg";
  }
}