import { loadExtensions } from "./api.js";
import {
  renderExtensions,
  renderErrorMessage,
} from "./render.js";
import {
  getFilteredExtensions,
  getFilterValue,
  updateFilterButtons,
} from "./filters.js";
import { setupTheme } from "./theme.js";

const extensionsList = document.querySelector(".extensions-list");
const filterButtons = document.querySelectorAll(".extensions-filter__button");

let extensions = [];
let currentFilter = "all";

init();

async function init() {
  if (!extensionsList) {
    return;
  }

  setupTheme();
  setupFilterButtons();
  setupExtensionsActions();

  try {
    extensions = await loadExtensions();
    renderCurrentExtensions();
  } catch (error) {
    console.error(error);
    renderErrorMessage(extensionsList);
  }
}

function renderCurrentExtensions() {
  const filteredExtensions = getFilteredExtensions(extensions, currentFilter);

  renderExtensions(extensionsList, filteredExtensions);
}

function setupFilterButtons() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = getFilterValue(button);

      updateFilterButtons(filterButtons, currentFilter);
      renderCurrentExtensions();
    });
  });
}

function setupExtensionsActions() {
  extensionsList.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");

    if (!actionButton) {
      return;
    }

    const card = actionButton.closest(".extension-card");

    if (!card) {
      return;
    }

    const extensionId = card.dataset.extensionId;
    const action = actionButton.dataset.action;

    if (action === "remove") {
      removeExtension(extensionId);
    }

    if (action === "toggle") {
      toggleExtension(extensionId);
    }

    renderCurrentExtensions();
  });
}

function removeExtension(extensionId) {
  extensions = extensions.filter((extension) => {
    return extension.id !== extensionId;
  });
}

function toggleExtension(extensionId) {
  extensions = extensions.map((extension) => {
    if (extension.id !== extensionId) {
      return extension;
    }

    return {
      ...extension,
      isActive: !extension.isActive,
    };
  });
}