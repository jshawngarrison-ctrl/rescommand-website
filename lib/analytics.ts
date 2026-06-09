/**
 * Lightweight analytics event helper. Safe to call anywhere — no-ops on the
 * server and when gtag isn't loaded (e.g. GA not configured).
 */
type GtagFn = (command: string, action: string, params?: Record<string, unknown>) => void

declare global {
  interface Window {
    gtag?: GtagFn
  }
}

export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', action, params)
}
