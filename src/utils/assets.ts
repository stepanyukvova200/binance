// Утиліта для правильних шляхів до зображень
// Автоматично додає базовий шлях для GitHub Pages

declare const __BASE_PATH__: string;

const getAssetPath = (path: string): string => {
  // Використовуємо базовий шлях з конфігурації Vite
  const basePath = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/';
  return `${basePath}${path.startsWith('/') ? path.slice(1) : path}`;
};

export { getAssetPath };
