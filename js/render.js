export function renderExtensions(extensionsList, extensions) {
  if (extensions.length === 0) {
    renderEmptyMessage(extensionsList);
    return;
  }

  extensionsList.innerHTML = extensions
    .map(createExtensionCardTemplate)
    .join("");
}

export function renderEmptyMessage(extensionsList) {
  extensionsList.innerHTML = `
    <li class="extension-card">
      <div class="extension-card__content">
        <h2 class="extension-card__title">No extensions found</h2>
        <p class="extension-card__description">
          There are no extensions for this filter.
        </p>
      </div>
    </li>
  `;
}

export function renderErrorMessage(extensionsList) {
  extensionsList.innerHTML = `
    <li class="extension-card">
      <div class="extension-card__content">
        <h2 class="extension-card__title">Something went wrong</h2>
        <p class="extension-card__description">
          Extensions data could not be loaded.
        </p>
      </div>
    </li>
  `;
}

function createExtensionCardTemplate(extension) {
  const toggleLabel = extension.isActive
    ? `Deactivate ${extension.name}`
    : `Activate ${extension.name}`;

  return `
    <li class="extension-card" data-extension-id="${escapeAttribute(extension.id)}">
      <div class="extension-card__body">
        <img
          class="extension-card__logo"
          src="${escapeAttribute(extension.logo)}"
          alt=""
          aria-hidden="true"
        >

        <div class="extension-card__content">
          <h2 class="extension-card__title">
            ${escapeHTML(extension.name)}
          </h2>

          <p class="extension-card__description">
            ${escapeHTML(extension.description)}
          </p>
        </div>
      </div>

      <div class="extension-card__actions">
        <button
          class="extension-card__remove"
          type="button"
          data-action="remove"
          aria-label="Remove ${escapeAttribute(extension.name)}"
        >
          Remove
        </button>

        <button
          class="extension-card__toggle"
          type="button"
          data-action="toggle"
          aria-label="${escapeAttribute(toggleLabel)}"
          aria-pressed="${extension.isActive}"
        ></button>
      </div>
    </li>
  `;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHTML(value)
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
