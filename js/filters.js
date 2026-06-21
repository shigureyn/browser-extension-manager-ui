export function getFilteredExtensions(extensions, currentFilter) {
  if (currentFilter === "active") {
    return extensions.filter((extension) => extension.isActive);
  }

  if (currentFilter === "inactive") {
    return extensions.filter((extension) => !extension.isActive);
  }

  return extensions;
}

export function updateFilterButtons(filterButtons, currentFilter) {
  filterButtons.forEach((button) => {
    const isActiveButton = getFilterValue(button) === currentFilter;

    button.classList.toggle(
      "extensions-filter__button--active",
      isActiveButton
    );

    button.setAttribute("aria-pressed", String(isActiveButton));
  });
}

export function getFilterValue(button) {
  return button.dataset.filter || button.textContent.trim().toLowerCase();
}