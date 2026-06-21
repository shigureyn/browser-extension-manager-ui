const DATA_URL = "../data.json";

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