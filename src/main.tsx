import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Defensive guard: avoid NotSupportedError when a custom element is defined twice (e.g., wcm-button)
if (typeof window !== 'undefined' && 'customElements' in window) {
  const registry = window.customElements as CustomElementRegistry & { __definePatched?: boolean }
  if (!registry.__definePatched) {
    const originalDefine = registry.define.bind(registry)
    registry.define = ((name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions) => {
      // If the element name is already registered, silently skip redefining it
      if (registry.get(name)) {
        return
      }
      try {
        return originalDefine(name, constructor, options as any)
      } catch (err) {
        // As a final fallback, ignore duplicate-definition errors
        if (err instanceof DOMException && err.name === 'NotSupportedError') {
          return
        }
        throw err
      }
    }) as typeof registry.define
    registry.__definePatched = true
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
