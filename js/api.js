const DATA_URL = new URL("../data.json", import.meta.url);

export async function loadExtensions() {
  const response = await fetch(DATA_URL);

  if (!response.ok) {
    throw new Error("Failed to load extensions data.");
  }

  const data = await response.json();

  return data.map((extension, index) => {
    return {
      ...extension,
      id: createExtensionId(extension.name, index),
    };
  });
}

  function createExtensionId(name, index) {
  return `${name.toLowerCase().replaceAll(" ", "-")}-${index}`;
}